import { TweetImage } from 'components/TweetBackgroundImg/TweetBackgroundImg';
import { Tweet, Avatar, Logo } from './TweetCard.styled';
import logoImg from '../../images/Logo.png';
import { useEffect, useState } from 'react';

const FOLLOWERS_KEY_PREFIX = 'followers_';

export const TweetCard = ({
  followersQuantity,
  tweetsQuantity,
  id,
  userName,
  userImg,
}) => {
  const FOLLOWERS_KEY = `${FOLLOWERS_KEY_PREFIX}${id}`;
  const FOLLOWING_STATE_KEY = `${FOLLOWERS_KEY}_following`;

  const [following, setFollowing] = useState(() => {
    const savedValue = localStorage.getItem(FOLLOWING_STATE_KEY) === 'true';
    return savedValue;
  });
  const [followers, setFollowers] = useState(() => {
    const savedValue = localStorage.getItem(FOLLOWERS_KEY);
    return savedValue ? JSON.parse(savedValue) : followersQuantity;
  });

  useEffect(() => {
    localStorage.setItem(FOLLOWERS_KEY, followers);
    localStorage.setItem(FOLLOWING_STATE_KEY, following);
  }, [followers, FOLLOWERS_KEY, FOLLOWING_STATE_KEY, following]);

  const handleToggleFollowers = () => {
    if (!following) {
      setFollowing(true);
      setFollowers(prev => prev + 1);
    } else {
      setFollowing(false);
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
      <p>{followers.toLocaleString('en-US')} FOLLOWERS</p>
      <button
        type="button"
        onClick={handleToggleFollowers}
        style={
          following
            ? { backgroundColor: '#5CD3A8' }
            : { backgroundColor: '#ebd8ff' }
        }
      >
        {following ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </Tweet>
  );
};
