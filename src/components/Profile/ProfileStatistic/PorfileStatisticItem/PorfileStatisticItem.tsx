import ProfileStyle from "../../Profile.module.css";
export default function ProfileStatisticItem({ label, number }) {
  return (
    <li>
      <span className={ProfileStyle.label}>{label}</span>
      <span className={ProfileStyle.quantity}>{number}</span>
    </li>
  );
}
