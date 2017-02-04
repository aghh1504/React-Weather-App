const LookerText = React.createClass({
  getDefaultProps() {
    return {
      searchValue: 'Present',
      text: 'This is what I fucking need'
    }
  },
  render() {
    return (
      <div>
        <h1>I m looking for {this.props.searchValue} </h1>
        <p>{this.props.text}</p>
      </div>
    )
  }
})

const Searcher = React.createClass({
  OnClick(e) {
    e.preventDefault();
    const updates = {};
    const searchValue = this.refs.searchValue.value;
    const text = this.refs.text.value;
    if(searchValue.length > 0) {
      this.refs.searchValue.value = '';
      updates.searchValue = searchValue;
    }
    if(text.length > 0) {
      this.refs.text.value = '';
      updates.text = text;
    }
    this.props.onChangeData(updates);
    console.log(updates);
  },
  render() {
    return (
        <form onSubmit={this.OnClick}>
          <div><input type='text' ref='searchValue'/></div>
          <div><textarea ref='text'/></div>
          <div><button>Submit</button></div>
        </form>
    )
  }
})
const Looker = React.createClass({
  getInitialState() {
    return {
      searchValue: this.props.searchValue,
      text: this.props.text
    }
  },
  handleData(updates){
    this.setState(updates)
  },
  render() {
    return (
      <div>
      <LookerText searchValue={this.state.searchValue} text={this.state.text}/>
      <Searcher onChangeData={this.handleData}/>
      </div>
    )
  }
})

const searchValue = 'Holidays';
const text = 'Have a great holidays'
ReactDOM.render(
  <Looker searchValue={searchValue} text={text}/>,
  document.getElementById("app")
);
