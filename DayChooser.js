import React from "react";

class DayChooser extends React.Component {
    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.props.preventSubmit}>
                    <input type="date" onChange={this.props.getSpecificPeriodData}/>
                </form>
            </React.Fragment>
        )
    }
}

export default DayChooser;