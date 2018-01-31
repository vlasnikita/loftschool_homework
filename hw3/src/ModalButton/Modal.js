import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

export default class Modal extends Component {

    getBody = () => (
        <div className="modal">
            <div className="modal__fog">
                <div className="modal__body">
                    <h1>Модальное окно!</h1>
                    {this.props.children}
                </div>
            </div>
        </div>
    )

    render(){
        return ReactDOM.createPortal(this.getBody(), document.querySelector('#portal'))
    }
} 