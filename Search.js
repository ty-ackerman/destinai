import React from "react";
// import PieChart from "react-minimal-pie-chart";

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form action="" onSubmit={this.props.getClients}>
          <button type="submit" value="daily" onClick={this.props.getSpecificPeriod}>Daily</button>
          <button type="submit" value="monthly" onClick={this.props.getSpecificPeriod}>Monthly</button>
          <button type="submit" value="yearly" onClick={this.props.getSpecificPeriod}>Yearly</button>
          <button type="submit" value="all" onClick={this.props.getClients}>All</button>
        </form>
        {/* <PieChart
          data={[
            { value: this.props.visa.workVisa, color: '#E38627' },
            { value: this.props.visa.expressEntry, color: '#C13C37' },
            { value: this.props.visa.visitorVisa, color: '#6A2135' },
            { value: 1000, color: '#ed0722' }
          ]}
        /> */}
      </React.Fragment>
    );
  }
}
export default Search;
