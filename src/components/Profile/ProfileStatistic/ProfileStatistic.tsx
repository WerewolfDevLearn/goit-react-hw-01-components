import ProfileStatisticItem from "./PorfileStatisticItem/PorfileStatisticItem";
import ProfileStyle from "../Profile.module.css";
import arrOfObjects from "../../../utils/objectToArr";

interface IStats {
  followers: number;
  views: number;
  likes: number;
}
interface ProfileProps {
  stats: IStats;
}

export default function ProfileStatistic({ stats }: ProfileProps) {
  const arrOfStats = arrOfObjects(stats);
  return (
    <ul className={ProfileStyle.stats}>
      {arrOfStats.map(stat => (
        <ProfileStatisticItem label={stat.label} number={stat.number} key={stat.id} />
      ))}
    </ul>
  );
}
