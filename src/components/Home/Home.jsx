import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePage = () => {
  return (
    <div>
      <Description>Wellcome to App!</Description>
      <Description>
        Please, check your <Link to="tweets">tweets</Link>{' '}
      </Description>
    </div>
  );
};

const Description = styled.p`
  font-family: 'Montserrat';
  font-size: 20px;
  line-height: 24px;
  color: #7d5ca1;
  margin-bottom: 8px;
`;
