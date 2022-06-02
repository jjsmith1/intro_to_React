import "./ExpenseItem.css";

function ExpenseItem(props) {
    //  const expenseDate = new Date(2022, 5, 30);
    //  const expenseTitle = "Car Insurance";
    //  const expenseAmount = 294.87;
const month = props.date.toLocaleString("en-US,"{ month: 'long'});
const Day = props.date.toLocaleString("en-US,"{ day: '2-digit'});
const Year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div></div>
     <div>{month}</div>
     <div>{Year}</div>
      <div>{Day}</div>

      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
