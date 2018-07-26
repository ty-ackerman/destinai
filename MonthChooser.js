import React from "react";

class MonthChooser extends React.Component {
    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.props.preventSubmit}>
                    <input type="month" onChange={this.props.getSpecificPeriodData} placeholder="YYYY-MM"/>
                </form>
            </React.Fragment>
        )
    }
}

export default MonthChooser;