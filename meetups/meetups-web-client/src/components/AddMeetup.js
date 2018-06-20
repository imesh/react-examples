import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddMeetup extends Component {

    addMeetup(meetup) {
        axios.request({
            method: 'post',
            url: 'http://localhost:3001/api/meetups',
            data: meetup
        }).then(res => {
            this.props.history.push('/');
        }).catch(err => {
            console.log(err);
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const meetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        this.addMeetup(meetup);
    }

    render() {
        return (
            <div>
                <h1>Add Meetup</h1>
                <p>Provid following information to add a Meetup:</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name" >Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" />
                        <label htmlFor="city" >City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" />
                        <label htmlFor="address" >Address</label>
                    </div>
                    <Link className="btn grey" to="/">Back</Link>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        );
    }
}

export default AddMeetup;