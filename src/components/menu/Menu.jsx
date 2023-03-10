import Li from '../li/Li';
import { StyledDiv, StyledMenuOpener, StyledNav, StyledUl } from './styles';
import { useState } from 'react';

const Menu = () => {
	const [open, setOpen] = useState(true);

	return (
		<StyledNav>
			<StyledUl>
				<Li text='hola' />
				<StyledMenuOpener onClick={() => setMenu(open, setOpen)}>
					Menu
				</StyledMenuOpener>
				<StyledDiv open={open}>
					<Li text='hola' />
					<Li text='hola' />
					<Li text='hola' />
				</StyledDiv>
			</StyledUl>
		</StyledNav>
	);
};

const setMenu = (open, setOpen) => {
	setOpen(!open);
};

export default Menu;
