import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {term: ''}

    onFormSubmit = (event) => {
        
        this.props.onSubmit(this.state.term)
        event.preventDefault();
    }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
                <label>Image Search</label>
                <input 
                    value={this.state.term}
                    onChange={ e => this.setState({term: e.target.value})}
                    type="text"/>
            </div>
        </form>
      </div>
    )
  }
}
