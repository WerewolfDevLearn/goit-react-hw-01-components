import FriendListItemStyle from "./FriendListItem.module.css";

interface FriendListItemProp {
  avatar: string;
  name: string;
  isOnline: boolean;
}

export default function FriendListItem({ avatar, name, isOnline }: FriendListItemProp): JSX.Element {
  const finalStyle = isOnline ? FriendListItemStyle.onLine : FriendListItemStyle.offLine;

  return (
    <li className={FriendListItemStyle.item}>
      <span className={finalStyle}></span>
      <img className={FriendListItemStyle.avatar} src={avatar} alt={name} width='48' />
      <p className={FriendListItemStyle.name}>{name}</p>
    </li>
  );
}
