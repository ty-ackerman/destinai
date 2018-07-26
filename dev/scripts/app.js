import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clients: []
    };
    this.getClients = this.getClients.bind(this);
  }

  getClients(e) {
    e.preventDefault();
    axios({
      url: "https://randomapi.com/api/aa95c1c5886c4b3a0c92c08669170298"
    }).then(res => {
      this.setState({
        clients: res.data.results["0"].clients
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>Nothing</div>
        <Search getClients={this.getClients} clients={this.state.clients} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
