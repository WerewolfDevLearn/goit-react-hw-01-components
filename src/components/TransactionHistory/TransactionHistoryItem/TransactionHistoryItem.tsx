import TransHistoryItemStyle from "./TransactionHistoryItem.module.css";

interface ITransHistoryItemProps {
  type: string;
  amount: string;
  currency: string;
}

export default function TransactionHistoryItem({ type, amount, currency }: ITransHistoryItemProps): JSX.Element {
  return (
    <tr className={TransHistoryItemStyle.roll}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
