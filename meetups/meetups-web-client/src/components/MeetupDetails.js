import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MeetupDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }

    componentWillMount() {
        this.getMeetup();
    }

    getMeetup() {
        let meetupId = this.props.match.params.id;
        if(meetupId === undefined) {
            this.props.history.push('/');
            return;
        }
        console.log('meetup id: ' + meetupId);
        axios.get(`http://localhost:3001/api/Meetups/${meetupId}`)
            .then(res => {
                console.log('result: ' + res.data);
                this.setState({ item: res.data });
            })
            .catch(err => {
                console.log(err);
                this.props.history.push('/');
            });
    }

    render() {
        return (
            <div>
                <h1>{this.state.item.name}</h1>
                <ul className="collection">
                    <li className="collection-item"><b>City:</b> {this.state.item.city}</li>
                    <li className="collection-item"><b>Address:</b> {this.state.item.address}</li>
                </ul>
                <Link className="btn grey" to="/">Back</Link>
                <Link className="btn" to={`/meetups/edit/${this.state.item.id}`}>Edit</Link>
                <button className="btn">Delete</button>
            </div>
        );
    }
}

export default MeetupDetails;