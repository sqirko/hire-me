import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { getChildren } from './apis/requests';
import ChildCard from "./components/childCard"
import './App.css';

// Main component that contains a gorup of ChildCard copmponents
class App extends Component {
	state = {
		children: null
	};

	async fetchChildren() {
		try {
			const response = await getChildren();
			if(response.ok){
				const data = await response.json();
				this.setState({
					children: data.children
				});
			} else {
				window.alert("Something went wrong...Try again!");
			}	
		} catch (err) {
			console.log(err);
			window.alert("Something went wrong...Try again!");
		}
	}

	componentDidMount() {
		this.fetchChildren();
	}

	render() {
		const { children } = this.state;
		if (children) {
			return (
				<div className="center">
					<h1>List of children</h1>
					<Card.Group>
						{children.map((child, i) =>
							<ChildCard key={i} childID={child.childId} image={child.image.large}
								fullName={child.name.fullName} birthdate={child.birthday} checkedIn={child.checkedIn}/>
						)}
					</Card.Group>
				</div>
			)
		} else {
			return (<h1>Loading ...</h1>)
		}
	}
}

export default App;
