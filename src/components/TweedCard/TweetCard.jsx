export const TweedCard = ({
  followersQuantity,
  tweetsQuantity,
  userName,
  userImg,
}) => {
  return <div>
    <img src={userImg} alt={userName} />
    <p>{tweetsQuantity} tweets</p>
    <p>{followersQuantity} followers</p>
    <button type="button">Follow</button>
  </div>;
};
