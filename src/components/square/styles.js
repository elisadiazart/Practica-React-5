import styled from 'styled-components';

const StyledSquare = styled.div`
	width: 200px;
	height: 200px;
	background-color: ${({ backgroundColor }) => backgroundColor};
	margin-top: 4rem;
`;

export { StyledSquare };
