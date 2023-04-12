import ProfileStatistic from "./ProfileStatistic";
export default function Profile({ user }) {
  const { name, tag, avatar, stats, location } = user;
  return (
    <div className='profile'>
      <div className='description'>
        <img src={avatar} alt='User avatar' className='avatar' />
        <p className='name'>{name}</p>
        <p className='tag'>{tag}</p>
        <p className='location'>{location}</p>
      </div>
      <ProfileStatistic stats={stats} />
    </div>
  );
}
