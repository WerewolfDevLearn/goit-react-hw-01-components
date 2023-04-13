import ProfileStatistic from "./ProfileStatistic/ProfileStatistic";
import ProfileStyle from "./Profile.module.css";
interface IStats {
  followers: number;
  views: number;
  likes: number;
}
interface IUser {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: IStats;
}

interface ProfileProps {
  user: IUser;
}

export default function Profile({ user }: ProfileProps) {
  const { username, tag, avatar, stats, location } = user;
  return (
    <div className={ProfileStyle.profile}>
      <div className={ProfileStyle.description}>
        <img src={avatar} alt='User avatar' className={ProfileStyle.avatar} />
        <p className={ProfileStyle.name}>{username}</p>
        <p className={ProfileStyle.tag}>@{tag}</p>
        <p className={ProfileStyle.location}>{location}</p>
      </div>
      <ProfileStatistic stats={stats} />
    </div>
  );
}
