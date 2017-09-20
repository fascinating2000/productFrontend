import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  margin-left: 4px;
  margin-top: 15px;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default buttonStyles;
