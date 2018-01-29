import React, { Component } from 'react'
import PersonalForm from './PersonalForm'
import CardForm from './CardForm'
import Step from './Step'
import './App.css'

export default class App extends Component {

    state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      cardNumber: ''
    }

    handleTabClick = (step) => this.setState({ step })

    handleChangeForm = (name, value) => {
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }

    handleClickNextForm = () => {
        this.setState((prevState) => ({
            step: prevState.step + 1
        }))
    }

    handleChangeTimeOver = () => {

    }

    isFormCommitable = () => {
        const { step, firstName, lastName, email, cardNumber } = this.state

        switch(step){
            case 1:
            return firstName !== '' && lastName !== '' && email !== '' && email.includes('@')
            
            case 2:
            return cardNumber.length === 16

            default:
            return false
        }
    }

    renderSteps = () => {
        const { step } = this.state
        const stepTexts = [
            'Personal information',
            'Card information',
            'Finish'
        ]

        return Array.from(new Array(3)).map((_, i) => (
            <Step
                key={i}
                number={i+1}
                isClickable={step > i + 1}
                isSelected={step === i + 1}
                onClick={this.handleTabClick}
            >
            {stepTexts[i]}
            </Step>
        ))
    }

    renderForm = () => {
        const { step, firstName, lastName, email, cardNumber } = this.state

        switch(step){
            case 1:
            return (
                <PersonalForm 
                    firstName={firstName} 
                    lastName={lastName} 
                    email={email} 
                    onChangeForm={this.handleChangeForm} 
                />
            )
            
            case 2:
            return (
                <CardForm 
                    cardNumber={cardNumber} 
                    onChangeForm={this.handleChangeForm} 
                    onChangeTimeOver={this.handleChangeTimeOver} 
                />
            )

            case 3:
            return 'Поздравляем!'

            default:
            return null
        }
    }

    render() {
        return (
            <div className="container">
                <div className="tab-panel">
                    {this.renderSteps()}
                </div>
                <div className="form-content">
                {this.renderForm()}
                </div>
                <div className="button-panel">
                    <button 
                        className="button-next" 
                        onClick={this.handleClickNextForm}
                        disabled={this.isFormCommitable()}
                    >
                    Next
                    </button>
                </div>
            </div>
        )
    }
}