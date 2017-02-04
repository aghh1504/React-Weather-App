import React, {Component} from 'react'

export default class WeatherForm extends Component {

  onSubmitForm = (e) => {
    e.preventDefault();
    const location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (

      <form onSubmit={this.onSubmitForm}>
        <input type='text' ref="location"/>
          <button>Get Weather</button>
        </form>
    )
  }
}
