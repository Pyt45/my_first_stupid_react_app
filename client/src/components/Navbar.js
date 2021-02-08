import React from 'react';
import Style from '../styles/navbar.css';
import HomeIcon from '@material-ui/icons/Home';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


const Navbar = () => {
	return (
		<div className={Style.wrapper}>
			<nav>
				<label htmlFor="">
					<HomeIcon />
				</label>
				<label htmlFor="">
					<ChatBubbleOutlineIcon />
				</label>
				<label htmlFor="">
					<FavoriteBorderOutlinedIcon />
				</label>
				<label htmlFor="">
					<MailOutlineIcon />
				</label>
				<label htmlFor="">
					<PersonOutlineIcon />
				</label>
			</nav>
		</div>
	)
}

export default Navbar;