import React, {Component} from 'react'
import {connect} from 'react-redux'
import { request } from '../../actions/shows'
import './ShowPage.css'

class ShowPage extends Component {

  componentDidMount() {
    const { show, match, dispatchRequest } = this.props
    if(!show.length) dispatchRequest(match.params.id) 
  }

  renderCast = cast => cast.map(({ person }) => (
    <div key={person.id} className="t-person">
      <p>{person.name}</p>
        {person.image && person.image.medium &&
          <img 
            src={person.image.medium}
            alt={person.name}
          />}
    </div>
  ))

  render() {
    const { isFetching, show, error, match, dispatchRequest } = this.props

    if(isFetching) return <p>Загрузка...</p>
    if(error) return <p>{error}</p>
 
    return (
      <div className="ShowPage">
        <p>{show.name}</p>
        {show.image && show.image.medium &&
          <img 
            src={show.image.medium}
            alt={show.name}
          />}
        <div dangerouslySetInnerHTML={{__html: show.summary}} />
        <div className="ShowPage__cast">
        {
          show._embedded && 
          show._embedded.cast && 
          !!show._embedded.cast.length &&
          this.renderCast(show._embedded.cast)
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({shows: { isFetching, show, error }}) => ({ 
  isFetching, 
  show, 
  error 
}) 

const mapDispatchToProps = dispatch => ({
  dispatchRequest: id => dispatch(request(id)) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
