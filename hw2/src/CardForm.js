import React, { Component, Fragment } from 'react'
import './CardForm.css'

export default class CardForm extends Component {
    constructor(props){
        super(props)
    }

    handleChangeForm = (e) => {
        const { name, value } = e.target
        this.props.onChangeForm(name, value)
    }

    componentWillUnmount(){

    }

    render() {
        const { cardNumber, onChangeForm, onChangeTimeOver } = this.props

        return(
            <Fragment>
                <h1>Card information</h1>
                <div className="card-form">
                    <input 
                        name="cardNumber" 
                        onChange={this.handleChangeForm}
                    />
                </div>
            </Fragment>
        )
    }
}