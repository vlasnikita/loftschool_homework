import React, { Component } from 'react'
import classNames from 'classnames'
import './Step.css'

export default class Step extends Component {

    handleClick = () => {
        const { isClickable, number, onClick } = this.props
        isClickable && onClick(number)
    }

    render() {
        const { number, isClickable, isSelected, children } = this.props
        const className = classNames({
            'step': true,
            'step-clickable': isClickable,
            'step-selected': isSelected
        })

        return(
            <div 
                className={className}
                onClick={this.handleClick}
            >
                <p className="step__number">{number}</p>
                <p className="step__title">{children}</p>
            </div>
        )
    }
}