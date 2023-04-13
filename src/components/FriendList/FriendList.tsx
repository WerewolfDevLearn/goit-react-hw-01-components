import FriendListItem from "./FriendListItem/FriendListItem";
import FriendListStyle from "./FriendList.module.css";

interface Friend {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

interface FriendListProps {
  friends: Friend[];
}

export default function FriendList({ friends }: FriendListProps): JSX.Element {
  return (
    <ul className={FriendListStyle.friendList}>
      {friends.map(friend => (
        <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />
      ))}
    </ul>
  );
}
