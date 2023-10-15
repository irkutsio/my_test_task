import styled from 'styled-components';

export const Tweet = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 380px;
  height: 460px;
  margin-bottom: 40px;
  padding: 28px 0 36px 0;
  background: linear-gradient(to bottom right, #471ca9, #5736a3);
  border-radius: 20px;
  text-align: center;

  div {
    border-bottom: 9px solid #ebd8ff;
    margin-bottom: 62px;
  }

  p {
    font-family: 'Montserrat';
    font-size: 20px;
    line-height: 24px;
    color: #ebd8ff;
    margin-bottom: 16px;
  }
  button {
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
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: 178px;
  left: 150px;
  display: block;
  border-radius: 50%;
  width: 62px;
  border: 9px solid #ebd8ff;
`;

export const Logo = styled.img`
position: absolute;
top:20px;
left: 20px;
`