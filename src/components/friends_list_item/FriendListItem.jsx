import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(status ? css.online : css.offline)}>
        {status ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
