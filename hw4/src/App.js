import React, { Component, Fragment } from 'react'
import { Link, Route, Redirect, Switch, NavLink } from 'react-router-dom'
import './App.css'
import {addListener, removeListener, isAuthorized} from './AuthorizeApi'

import Auth from './Auth'
import Private from './Private'
import Public from './Public'
import Home from './Home'

class App extends Component {
  state = {
    isAuthorized
  }

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({isAuthorized});
  }

  renderNavbar = () => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/auth">Войти</NavLink></li>
          <li><NavLink to="/private">Секретная страница</NavLink></li>
          <li><NavLink to="/public">Публичная страница</NavLink></li>
          <li><NavLink to="/">Главная</NavLink></li>
        </ul>
      </nav>
    )
  }

  render() {

    const { isAuthorized } = this.state

    return (
      <Fragment>
        {this.renderNavbar()}
        <Switch>
          {!isAuthorized && <Route path="/auth" component={Auth} />}
          {isAuthorized && <Route path="/private" component={Private} />}
          <Route path="/public" component={Public} />
          <Route path="/" exact component={Home} />

          {isAuthorized && <Redirect from="/auth" to="/" />}
          {!isAuthorized && <Redirect from="/private" to="/auth" />}
          {!isAuthorized && <Redirect from="*" to="/" />}
        </Switch>
      </Fragment>
    )
  }
}

export default App
