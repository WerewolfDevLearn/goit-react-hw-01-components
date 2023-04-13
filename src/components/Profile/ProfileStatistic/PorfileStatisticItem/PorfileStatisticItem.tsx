import ProfileStyle from "../../Profile.module.css";
interface ProfileStatisticItemProps {
  label: string;
  number: number;
}

export default function ProfileStatisticItem({ label, number }: ProfileStatisticItemProps): JSX.Element {
  return (
    <li>
      <span className={ProfileStyle.label}>{label}</span>
      <span className={ProfileStyle.quantity}>{number}</span>
    </li>
  );
}
