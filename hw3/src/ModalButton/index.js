import React, { Component, Fragment } from 'react'
import Modal from './Modal'
import './ModalButton.css'

export default class ModalButton extends Component {

    state = {
        isModalShow: false
    }

    hideModal = () => this.setState({ isModalShow: false })

    showModal = () => this.setState({ isModalShow: true })

    render(){
        return (
            <Fragment>
                <button onClick={this.showModal}>Show modal!</button>
                {
                    this.state.isModalShow && 
                    <Modal>
                        <button onClick={this.hideModal}>
                        Close
                        </button>
                    </Modal>
                }
            </Fragment>
        )
    }
}
