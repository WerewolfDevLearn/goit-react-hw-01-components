import StatisticItem from "./StatisticItem";
import StatisticsStyles from "./Statistics.module.css";

interface IStat {
  id: string;
  label: string;
  percentage: number;
}

interface IData {
  title?: string;
  stats: IStat[];
}

export default function Statistics({ title, stats }: IData) {
  return (
    <section className={StatisticsStyles.statistics}>
      {title && <h2 className={StatisticsStyles.title}>{title}</h2>}
      <ul className={StatisticsStyles.statList}>
        {stats.map(stat => (
          <StatisticItem label={stat.label} percentage={stat.percentage} key={stat.id} />
        ))}
      </ul>
    </section>
  );
}
