import { css, styled } from 'styled-components';

const StyledComponent = () => {
  return (
    <Title>
      StyledComponent
      <Button $primary>123</Button>
    </Title>
  );
};
export default StyledComponent;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;
    `}
`;
