import React, {Component} from 'react'
import './Switcher.css'

export default class Switcher extends Component {

    state = {
        selectedChild: 0
    }

    handleChangeChild = (e) => {
        const selectedChild = +e.target.getAttribute('data-id')
        this.setState({ selectedChild })
    }

    renderNavBar = (children) => (
        <nav>
            <ul className="component-list">
                {children.map((child, i) => 
                    <li 
                        key={i}
                        className="component-list__name"
                        data-id={i}
                        onClick={this.handleChangeChild}
                    >
                    {child.type.displayName ? child.type.displayName : child.type.name}
                    </li>
                )}
            </ul>
        </nav>
    )

    render(){
        const { selectedChild } = this.state
        const { children } = this.props 
console.log(children)
        return (
            <div className="switcher">
                {this.renderNavBar(children)}
                <hr />
                {React.Children.map(children, (child, i) => 
                    i === selectedChild && 
                    <div className="component-wrapper">{child}</div>
                )}
            </div>
        )
    }
} 