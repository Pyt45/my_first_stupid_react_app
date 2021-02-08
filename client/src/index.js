import React from 'react';
import ReactDOM from 'react-dom';
// import SignIn from './components/SignIn';
// import Navbar from './components/Navbar';
// import SignUp from './components/SignUp';
// import Navbar from './components/Navbar';
import Header from './components/header';
const App = () => {
	return (
		<Header />
		// <Navbar />
		// <div>
		// 	<Navbar />
		// 	{/* <SignUp /> */}
		// </div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));