import { StyledButton } from './styles';

const Button = ({ buttonText, handleClick }) => {
	return <StyledButton onClick={handleClick}>{buttonText}</StyledButton>;
};

export default Button;
