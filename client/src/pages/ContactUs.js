import React, { Component } from "react";
import API from "../utils/API"
import { Redirect } from 'react-router'

class ContactUs extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        redirect: false,
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.name && !this.state.email && !this.state.message) {
            alert("Fill out your name, email and your message please!");
        }
        if (this.state.name && this.state.email && this.state.message) {
            console.log("message: " + this.state.message);
            API.saveContact({
                name: this.state.name,
                email: this.state.email,
                message: this.state.massage
            })
                .then(() => { this.setState({ redirect: true }); console.log("submitted."); })
                .catch(err => console.log(err));
        }
    };

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/Home" />;
        }
        return (
            <div className="container">
                <h1 className="text-center" style={{ fontFamily: "Indie Flower, cursive" }}>Contact Us: </h1>
                <form className="form-group">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <label htmlFor="name"> Name:</label>
                        <input
                            value={this.state.name}
                            name="name"
                            onChange={this.handleInputChange}
                            type="text"
                            className="form-control"
                            required="required"
                            placeholder="John Smith"
                        />
                        <label htmlFor="email"> Email:</label>
                        <input
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="email"
                            className="form-control"
                            required="required"
                            placeholder="example@company.com"
                        />
                        <label htmlFor="message"> Message:</label>
                        <textarea
                            value={this.state.message}
                            name="message"
                            onChange={this.handleInputChange}
                            type="text"
                            className="form-control"
                            required="required"
                            placeholder="Your message:"
                            rows="10"
                        />
                        <br />
                        <div className="text-center">
                            <button className="btn btn-info btn-lg text-center"
                                onClick={this.handleFormSubmit}>Submit</button>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </form>
            </div>
        )
    }
}
export default ContactUs;