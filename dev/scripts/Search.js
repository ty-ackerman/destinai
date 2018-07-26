import React from "react";

class Search extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <form action="" onSubmit={this.props.getClients}>
          <button type="submit">Daily</button>
        </form>
        {console.log(this.props.clients)}
      </React.Fragment>
    );
  }
}
export default Search;
