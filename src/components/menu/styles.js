import styled from 'styled-components';

const StyledNav = styled.nav`
	width: 100%;
	height: 3rem;
	background-color: black;
	align-items: center;
	margin-bottom: 4rem;
	position: relative;
`;

const StyledUl = styled.ul`
	height: 100%;
	display: flex;
	justify-content: space-between;
	list-style: none;
	padding-left: 6rem;
	padding-right: 6rem;
	align-items: center;
`;

const StyledDiv = styled.div`
	transform: translateX(${({ open }) => (open ? '200%' : '0')});
	transition: transform 0.3s;
	position: absolute;
	top: 4rem;
	right: 4rem;
	background-color: black;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	gap: 2rem;
	@media screen and (min-width: 1040px) {
		transform: translate(0);
		display: flex;
		position: static;
		padding: 0;
		flex-direction: row;
		gap: 2rem;
	}
`;

const StyledMenuOpener = styled.li`
	text-transform: uppercase;
	font-family: sans-serif;
	color: white;
	cursor: pointer;
	@media screen and (min-width: 1040px) {
		display: none;
	}
`;

export { StyledNav, StyledUl, StyledDiv, StyledMenuOpener };
