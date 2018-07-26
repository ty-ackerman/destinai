import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Search from "./Search";
import DayChooser from "./DayChooser";
import MonthChooser from "./MonthChooser";
import YearChooser from "./YearChooser";
import AllClients from "./AllClients";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      filteredClients: [],
      period: "",
      date: "",
      visa: {
        workVisa: 0,
        expressEntry: 0,
        visitorVisa: 0,
        studyVisa: 0,
        familySponsorship:0
      }
    };
    this.getClients = this.getClients.bind(this);
    this.getSpecificPeriod = this.getSpecificPeriod.bind(this)
    this.getVisa = this.getVisa.bind(this)
    this.getSpecificPeriodData = this.getSpecificPeriodData.bind(this)
    this.filterClients = this.filterClients.bind(this)
  }

  getClients(e) {
    //This function will perform a GET request to the API to access data
    e.preventDefault();
    let v = e.target.value;
    axios({
      url: "https://randomapi.com/api/aa95c1c5886c4b3a0c92c08669170298"
    }).then(res => {
      this.setState({
        clients: res.data.results["0"].clients
      }, () => {
        if (v === "all") {
          this.setState({
            period: v
          }, () => this.getVisa())
          
        }
      });
    });
  }

  getSpecificPeriod(e) {
    //This function will grab the time period that the client wishes to display information for. This will be used in later functions
    let period = e.target.value
    this.setState({
      period
    }, () => console.log(this.state.period))
  }

  getVisa() {
    let workVisa = 0;
    let expressEntry = 0;
    let visitorVisa = 0;
    let studyVisa = 0;
    let familySponsorship = 0;
    if (this.state.period !== "all") {
      for (let i in this.state.filteredClients) {
        if (this.state.filteredClients[i].visa === "Work Visa"){
          workVisa+=1
        } else if (this.state.filteredClients[i].visa === "Express Entry"){
          expressEntry +=1
        } else if (this.state.filteredClients[i].visa === "Study Visa"){
          studyVisa += 1
        } else if (this.state.filteredClients[i].visa === "Visitor Visa"){
          visitorVisa +=1
        } else if (this.state.filteredClients[i].visa === "Family Sponsorship"){
          familySponsorship +=1
        }
      }
    } else {
      for (let i in this.state.clients) {
        if (this.state.clients[i].visa === "Work Visa"){
          workVisa+=1
        } else if (this.state.clients[i].visa === "Express Entry"){
          expressEntry +=1
        } else if (this.state.clients[i].visa === "Study Visa"){
          studyVisa += 1
        } else if (this.state.clients[i].visa === "Visitor Visa"){
          visitorVisa +=1
        } else if (this.state.clients[i].visa === "Family Sponsorship"){
          familySponsorship +=1
        }
      }
    }
    this.setState({
      visa: {
        workVisa,
        expressEntry,
        visitorVisa,
        studyVisa,
        familySponsorship
      } 
    }, () => {
      console.log(this.state.visa)
    })
  }

  periodDetailRender() {
    //This function will allow the user to specify the day/month/year that they want to view data from
    if (this.state.period === "daily") {
      return <DayChooser getSpecificPeriodData={this.getSpecificPeriodData} preventSubmit={this.preventSubmit}/>
    } else if (this.state.period === "monthly") {
      return <MonthChooser getSpecificPeriodData={this.getSpecificPeriodData} preventSubmit={this.preventSubmit}/>
    } else if (this.state.period === "yearly") {
      return <YearChooser getSpecificPeriodData = {this.getSpecificPeriodData} preventSubmit={this.preventSubmit}/>
    } else if (this.state.period === "all") {
      return <AllClients getSpecificPeriod ={this.getSpecificPeriodData} clients={this.state.clients} getVisa={this.getVisa} visa={this.state.visa}/>
    }
  }

  filterClients() {
    let filteredClients = []
    for (let i in this.state.clients) {
      if (this.state.period === "daily" && this.state.clients[i].date.slice(0,10) === this.state.date) {
        filteredClients.push(this.state.clients[i])
      } else if (this.state.period === "monthly" && this.state.clients[i].date.slice(0,7) === this.state.date) {
        filteredClients.push(this.state.clients[i])
      } else if (this.state.period === "yearly" && this.state.clients[i].date.slice(0,4) === this.state.date) {
        filteredClients.push(this.state.clients[i])
      }
    }
    this.setState({
      filteredClients,
      date: ""
    }, () => this.getVisa())
  }

  getSpecificPeriodData(e) {
    let date = e.target.value;
    this.setState({
      date
    }, () => this.filterClients())
  }

  preventSubmit(e) {
    e.preventDefault();
  }







  render() {
    return (
      <React.Fragment>
        <Search getClients={this.getClients} clients={this.state.clients} getSpecificPeriod = {this.getSpecificPeriod} period={ this.state.period} getVisa={this.getVisa} visa={this.state.visa}/>
        {this.periodDetailRender()}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
