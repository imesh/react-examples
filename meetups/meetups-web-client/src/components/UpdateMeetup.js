import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UpdateMeetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            city: '',
            address: ''
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
                this.setState({ id: res.data.id,
                                name: res.data.name,
                                city: res.data.city,
                                address: res.data.address });
            })
            .catch(err => {
                console.log(err);
                this.props.history.push('/');
            });
    }

    updateMeetup(meetup) {
        axios.request({
            method: 'patch',
            url: `http://localhost:3001/api/meetups/${this.state.id}`,
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
            id: this.state.id.value,
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        this.updateMeetup(meetup);
    }

    render() {
        return (
            <div>
                <h1>Update Meetup</h1>
                <p>Provid following information to update the Meetup:</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" defaultValue={this.state.name} />
                        <label className="active" htmlFor="name" >Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" defaultValue={this.state.city} />
                        <label htmlFor="city" >City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" defaultValue={this.state.address} />
                        <label htmlFor="address" >Address</label>
                    </div>
                    <Link className="btn grey" to="/">Back</Link>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        );
    }
}

export default UpdateMeetup;