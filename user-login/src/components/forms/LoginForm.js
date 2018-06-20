import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    // A generic on change event handler for updating
    // all state values
    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
              .submit(this.state.data)
              .catch(err =>
                this.setState({ errors: err.response.data.errors })
              );
          }
    }

    // Validate data on submit event
    validate = (data) => {
        // A new constant for passing errors
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email address";
        if (!data.password) errors.password = "Password can't be blank";
        return errors;
    }

    render() {
        const { data, errors } = this.state;

        return (
            <Form onSubmit={this.onSubmit}>
                { (errors.global !== undefined) && errors.global && (
                    <Message negative>
                        <Message.Header>Something went wrong</Message.Header>
                        <p>{errors.global}</p>
                    </Message>
                )}
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange} />
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Make it secure"
                        value={data.password}
                        onChange={this.onChange} />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;