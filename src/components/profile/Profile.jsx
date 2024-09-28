import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.cardContainer}>
      <div>
        <div className={css.circleContainer}>
          <img className={css.circleImg} src={image} alt="User avatar" />
        </div>
        <p className={css.name}>{name}</p>
        <p className={css.data}>@{tag}</p>
        <p className={css.data}>{location}</p>
      </div>

      <ul className={css.socLinksGroup}>
        <li className={css.socLink}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.socLink}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.socLink}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
