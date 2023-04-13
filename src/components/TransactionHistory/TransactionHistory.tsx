import TransactionHistoryItem from "./TransactionHistoryItem/TransactionHistoryItem";
import TransactionStyle from "./Transactions.module.css";
interface ITransaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

interface ITransHistory {
  items: ITransaction[];
}

export default function TransactionHistory({ items }: ITransHistory): JSX.Element {
  return (
    <table className={TransactionStyle.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionHistoryItem type={item.type} amount={item.amount} currency={item.currency} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
