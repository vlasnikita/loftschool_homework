import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { request } from '../../actions/search'
import './Search.css'

class Search extends Component {
  
  state={
    value: ''
  }

  handleValueChange = ({target: {value} }) => {
    this.setState({ value })
  }

  handleSearchClick = () => {

    const { value } = this.state
    const { dispatchRequest } = this.props

    dispatchRequest(value)

    this.setState({
      value: ''
    })
  }

  renderShows = shows => shows.map(show => (
    <div key={show.id} className="t-preview">
      <div className="Search__title">
        <Link className="t-link" to={`/shows/${show.id}`}>
          <h3>{show.name}</h3>
        </Link>    
        {show.image && show.image.medium &&
          <img 
            src={show.image.medium}
            alt={show.name}
          />}
      </div>
      <div dangerouslySetInnerHTML={{__html: show.summary}} />
    </div>
  ))

  render() {

    const { value } = this.state
    const { isFetching, error, result } = this.props.search

    if(isFetching) return <p>Загрузка...</p>
    if(error) return <p>{error}</p>

    return (
      <div className="Search">
        <div className="Search__form">
          <input
            placeholder='Название сериала'
            value={value}
            onChange={this.handleValueChange}
          />
          <button onClick={this.handleSearchClick}>
          Найти
          </button>
        </div>
        <div className="t-search-result">
          {!!result.length && this.renderShows(result)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ search }) => ({ search }) 

const mapDispatchToProps = dispatch => ({
  dispatchRequest: value => dispatch(request(value)) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
