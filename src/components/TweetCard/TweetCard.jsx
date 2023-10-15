import { TweetImage } from 'components/TweetBackgroundImg/TweetBackgroundImg';
import { Tweet, Avatar, Logo } from './TweetCard.styled';
import logoImg from '../../images/Logo.png';
import { useEffect, useState } from 'react';

const FOLLOWERS_KEY = 'followers';

export const TweetCard = ({
  followersQuantity,
  tweetsQuantity,
  userName,
  userImg,
}) => {
  const [count, setCount] = useState(0);
  const [followers, setFollowers] = useState(()=>{
    const value = localStorage.getItem(FOLLOWERS_KEY)
    // console.log(value)
    return JSON.parse(value)
  });

  useEffect(() => {
    localStorage.setItem(FOLLOWERS_KEY, followersQuantity);
  }, [followersQuantity]);

  const handleToggleFollowers = () => {
    if (!count) {
      setCount(1);
      setFollowers(prev => prev + 1);
    }
    if (count) {
      setCount(0);
      setFollowers(prev => prev - 1);
    }
  };

  return (
    <Tweet>
      <Logo src={logoImg} alt="logo" />
      <TweetImage />
      <div></div>
      <Avatar src={userImg} alt={userName} />
      <p>{tweetsQuantity} TWEETS</p>
      <p>{followers} FOLLOWERS</p>
      <button
        type="button"
        onClick={handleToggleFollowers}
        style={
          count
            ? { backgroundColor: '#5CD3A8' }
            : { backgroundColor: '#ebd8ff' }
        }
      >
        {count ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </Tweet>
  );
};
