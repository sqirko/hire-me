import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import birthdateFormatter from '../utils/dateTimeFormatter';
import { checkIn, checkOut } from '../apis/requests';
import './childCard.css';

class ChildCard extends Component {
	state = {
		checkedIn: this.props.checkedIn
	};

	async checkIn() {
		try {
			const response = await checkIn(this.props.childID);
			if (response.ok) {
				this.setState({
					checkedIn: true
				});
				window.alert(this.props.fullName + " was checked in successfully!");
			} else {
				window.alert("Something went wrong and checkin was not successful. Try again!");
			}
		} catch (err) {
			console.log(err);
			window.alert("Something went wrong and checkin was not successful. Try again!");
		}
	}

	async checkOut() {
		try {
			const response = await checkOut(this.props.childID);
			if (response.ok) {
				this.setState({
					checkedIn: false
				});
				window.alert(this.props.fullName + " was checked out successfully!");
			} else {
				window.alert("Something went wrong and checkout was not successful. Try again!");
			}
		} catch (err) {
			console.log(err);
			window.alert("Something went wrong and checkout was not successful. Try again!");
		}
	}

	render() {
		let status;
		if (this.state.checkedIn) {
			status = <Card.Meta>Status: <span className="checkedIn">Checked in</span></Card.Meta>
		} else {
			status = <Card.Meta>Status: <span className="checkedOut">Checked out</span></Card.Meta>
		}

		return (
			<Card>
				<Image src={this.props.image} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{this.props.fullName}</Card.Header>
					<Card.Meta>
						<span className='date'>{birthdateFormatter(this.props.birthdate)}</span>
					</Card.Meta>
					{status}
				</Card.Content>
				<Card.Content extra>
					<Button inverted color='green' onClick={this.checkIn.bind(this)} disabled={this.state.checkedIn}>
						Checkin
				</Button>
					<Button inverted color='red' onClick={this.checkOut.bind(this)} disabled={!this.state.checkedIn}>
						Checkout
				</Button>
				</Card.Content>
			</Card>
		);
	}
}

export default ChildCard;