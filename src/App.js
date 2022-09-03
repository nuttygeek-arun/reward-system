import './App.css';

function App() {

  const getRewards = (amount) => {
    if (amount >=50 && amount < 100) {
      return amount-50;
    } 
    else if (amount >100){
      const calaulation = 2*(amount-100);
      return ( calaulation + 50);
    } else {
      return 0;
    }
  }

  const transactionList = [
    {
      amount: 120,
      date: new Date('07/01/2022'),
    },
    {
      amount: 78,
      date: new Date('08/07/2022'),
    },
    {
      amount: 500,
      date: new Date('07/17/2022'),
    },
    {
      amount: 145,
      date: new Date('08/19/2022'),
    },
    {
      amount: 9,
      date: new Date('09/2/2022'),
    },
    {
      amount: 190,
      date: new Date('09/2/2022'),
    },
    {
      amount: 678,
      date: new Date('09/2/2022'),
    },
    {
      amount: 1104,
      date: new Date('09/2/2022'),
    },
  ];

  const getRewardsSumForMonth = (month) => {
    const filteredTransactions = transactionList.filter((transaction) => transaction.date.getMonth() === new Date().getMonth()- month);
    return filteredTransactions.reduce((acc,key)=>key.rewardPoints+acc, 0);
  }


  transactionList.forEach((transaction) => {
    transaction['rewardPoints'] = getRewards(transaction.amount);
  });

  return (<>
  <table border="1" className='table'>
    <thead>
      <tr>
        <th>Amount</th>
        <th>Date</th>
        <th>Reward Points</th>
      </tr>
    </thead>
    <tbody>
      {transactionList.map((transaction, index) => (
        <tr key={index}>
          <td>${transaction.amount}</td>
          <td>{transaction.date.toDateString()}</td>
          <td>{transaction.rewardPoints}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <p>Reward Points in September: {getRewardsSumForMonth(0)}</p>
  <p>Reward Points in August: {getRewardsSumForMonth(1)}</p>
  <p>Reward Points in July: {getRewardsSumForMonth(2)}</p>
  <p>Total Reward Points : {transactionList.reduce((acc,key)=>key.rewardPoints+acc, 0)}</p>
    
  </>);
}

export default App;
