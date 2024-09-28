import FriendListItem from '../friends_list_item/FriendListItem';
import css from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
