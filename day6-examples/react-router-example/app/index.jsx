import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const Home = () => {
	return <div>This is HOme</div>
}

const About = () => {
	return <div>This is the home</div>
}

class App extends React.Component {
	render() {
		return <Router>
			<div>
				<Link to='/about'>About</Link>
				<div>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
				</div>
			</Router>
	}
}

ReactDOM.render(<App />, document.getElementById('app'))