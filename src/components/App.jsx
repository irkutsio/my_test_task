import { NavLink, Route, Routes } from 'react-router-dom';
import { TweetCardList } from './TweetCardList/TweetCardList';
import { HomePage } from './Home/Home';
import styled from 'styled-components';

export const App = () => {
  return (
    <div>
      <nav style={{marginBottom:32}}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetCardList />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

const StyledLink = styled(NavLink)`
  color: black;
  font-size: 32px;
  margin-right: 18px;
  

  &.active {
    color: #5cd3a8;
  }
`;
