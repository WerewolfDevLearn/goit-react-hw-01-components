import StatisticsStyles from "./Statistics.module.css";
import colorGenerator from "../../utils/colorGenerator";

interface IProp {
  label: string;
  percentage: number;
}

export default function StatisticItem({ label, percentage }: IProp): JSX.Element {
  return (
    <li className={StatisticsStyles.item} style={{ backgroundColor: colorGenerator() }}>
      <span className={StatisticsStyles.label}>{label}</span>
      <span className={StatisticsStyles.percentage}>{percentage}%</span>
    </li>
  );
}
