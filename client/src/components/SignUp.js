import React from 'react';
import Styles from '../styles/signup.css';

const SignUp = () => {
	return (
		<div className={Styles.container}>
			{/* <div className={Styles.title_login}>
				Login Form
			</div> */}
			<form action="#">
				<div className={Styles.field}>
					<input type="text" required />
					<label>Email Address</label>
				</div>
				<div className={Styles.field}>
					<input type="password" required />
					<label>Password</label>
				</div>
				<div className={Styles.content}>
					<div className={Styles.checkbox}>
						<input type="checkbox" className={Styles.remember_me}/>
						<label htmlFor="remember-me">Remember me</label>
						<div className={Styles.pass_link}>
							<a href="#">Forgot password?</a>
						</div>
					</div>
				</div>
				<div className={Styles.field}>
					<input type="submit" value="Login"/>
				</div>
				<div className={Styles.signup_link}>
					Not a member? <a href="#">Signup now</a>
				</div>
			</form>
 		 </div>
	)
};

export default SignUp;