import { TweetCard } from 'components/TweetCard/TweetCard';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from 'services';
import styled from 'styled-components';
import { List } from './TweedCardList.styled';

export const TweetCardList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const navigate = useNavigate();
  const limits = 3;

  useEffect(() => {
    const usersData = async (limits, page) => {
      setIsLoading(true);
      try {
        const data = await fetchUsers(limits, page);
        setUsers(prev => [...prev, ...data]);
        setIsShowBtn(true);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    usersData(limits, page);
  }, [limits, page]);

  const handleLoadingMore = e => {
    setPage(prev => prev + 1);
  };

  const handleGoBack = () => {
    navigate('/');
  };
  return (
    <div>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <div>
          <button
            type="button"
            style={{
              borderColor: 'transparent',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              marginBottom: 32,
            }}
            onClick={handleGoBack}
          >
            ⬅ go back
          </button>
          <List>
            {users.map(({ avatar, user, tweets, followers, id }) => (
              <TweetCard
                key={id}
                userImg={avatar}
                userName={user}
                tweetsQuantity={tweets}
                followersQuantity={followers}
                id={id}
              />
            ))}
          </List>
          <div>
            {isShowBtn && (
              <Btn
                type="button"
                onClick={handleLoadingMore}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                LOADING MORE
              </Btn>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Btn = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 10px;
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: #373737;
  border-color: transparent;
  border-radius: 10px;
  box-shadow: 0px 3.44px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;

  &:active {
    background-color: #5cd3a8;
  }
`;
