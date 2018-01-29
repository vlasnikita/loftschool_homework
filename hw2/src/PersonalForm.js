import React, { Component, Fragment } from 'react'
import './PersonalForm.css'

export default class PersonalForm extends Component {
    handleChangeForm = (e) => {
        const { name, value } = e.target
        this.props.onChangeForm(name, value)
    }

    render() {
        const { firstName, lastName, email } = this.props

        return(
            <Fragment>
                <h1>Personal information</h1>
                <div className="personal-form">
                    <input 
                        name="firstName" 
                        onChange={this.handleChangeForm}
                    />
                    <input 
                        name="lastName" 
                        onChange={this.handleChangeForm}
                    />
                    <input 
                        name="email" 
                        onChange={this.handleChangeForm}
                    />
                </div>
            </Fragment>
        )
    }
}