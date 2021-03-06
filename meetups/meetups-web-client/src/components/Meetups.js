import React, { Component } from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetups extends Component {
    constructor() {
        super();
        this.state = {
            meetups: []
        }
    }

    componentWillMount() {
        this.getMeetups();
    }

    getMeetups() {
        axios.get('http://localhost:3001/api/meetups')
            .then(res => {
                this.setState({ meetups: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const meetupItems = this.state.meetups.map((meetup, i) => {
            return (
                <MeetupItem key={meetup.id} item={meetup} />
            );
        })
        return(
            <div>
                <h1>Meetups Overview</h1>
                <p>Following meetups are found:</p>
                <ul className="collection">
                    {meetupItems}
                </ul>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large waves-effect waves-light teal" href="/meetups/add">
                        <i className="material-icons">add</i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Meetups;