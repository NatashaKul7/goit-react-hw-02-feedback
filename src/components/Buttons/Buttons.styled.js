import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 14px;

  button {
    cursor: pointer;

    font-size: 20px;
    padding: 8px 16px;

    border-radius: 18px;
    background-color: #adff2f;
    color: #000000;

    text-transform: capitalize;
  }
  button:hover,
  button:focus {
    scale: 1.1;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.19) 0px 10px 20px;
  }
`;
