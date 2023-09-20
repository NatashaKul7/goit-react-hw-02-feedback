import { ButtonsWrapper } from "./Buttons.styled";

const Button = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsWrapper>
    
       {options.map(option => (
        <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </ButtonsWrapper>
  );
};

export default Button;