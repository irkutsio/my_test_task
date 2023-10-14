import { TweetImage } from 'components/TweetBackgroundImg/TweetBackgroundImg';
import { Tweet, Avatar, Logo } from './TweetCard.styled';
import logoImg from '../../images/Logo.png'

export const TweetCard = ({
  followersQuantity,
  tweetsQuantity,
  userName,
  userImg,
}) => {
  return (
    <Tweet>
      <Logo src={logoImg} alt="logo"/>
      <TweetImage />
      <div></div>

      <Avatar src={userImg} alt={userName} />

      <p>{tweetsQuantity} TWEETS</p>
      <p>{followersQuantity} FOLLOWERS</p>
      <button type="button">Follow</button>
    </Tweet>
  );
};
