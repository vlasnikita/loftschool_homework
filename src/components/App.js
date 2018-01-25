import React, { Component } from 'react'
import NewsPost from './NewsPost'

export default class App extends Component {
	state = {
		newsInput: '',
		news: []
	}

	handleChange = ({target: { value }}) => {
		this.setState({ newsInput: value })
	}

	handleNewPost = () => {
		this.setState (({ newsInput, news }) => ({
			newsInput: '',
			news: [...news, {text: newsInput} ]
		}))
	}

	render() {

		const { newsInput, news } = this.state
		return(
			<div className="App">
				<input 
					onChange={this.handleChange} 
					value={newsInput}
				/>
				<button onClick={this.handleNewPost} >Добавить</button>
				{news.map(post => 
					<NewsPost 
						key={post.text} 
						text={post.text}
					/>
				)}
			</div>
		)
	}
}