import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div style={{color: "LightSkyBlue"}}>
      <h3>Add more repos!</h3>
      Enter a github username: <input value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.search} style={{color: "LightSkyBlue"}}> Add Repos </button>
    </div>)
  }
}

export default Search;