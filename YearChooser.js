import React from "react";

class YearChooser extends React.Component {
    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.props.preventSubmit}>
                    <input type="radio" name="year" id="2017" value="2017" onClick={this.props.getSpecificPeriodData}/>
                    <label htmlFor="2017">2017</label>
                    <input type="radio" name="year" value="2018" id="2018" onClick={this.props.getSpecificPeriodData}/>
                    <label htmlFor="2018">2018</label>
                </form>
            </React.Fragment>
        )
    }
}

export default YearChooser;