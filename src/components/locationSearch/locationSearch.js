import React, { Component } from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import moment from 'moment'







const mapStateToProps = reduxState => ({
  reduxState
});




class locationSearch extends Component {

  state = {
    search: "",
    hasSearched: false
  };
 
  handleChange = event => {
    this.setState({
      ...this.state,
      search: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this);
    event.preventDefault();
    console.log(this.state.search);
    this.props.dispatch({ type: "GET_LOCO", payload: this.state.search });
    this.state.hasSearched = true;
  };


 render() {
    if (this.state.hasSearched) {
      console.log('reduxstateee is',this.props.reduxState.searchReducer.forecast.forecastday[0].day.maxtemp_f);
         var tomDate =  moment(this.props.reduxState.searchReducer.forecast.forecastday[0].date).format('dddd');
var dayAfter =  moment(this.props.reduxState.searchReducer.forecast.forecastday[1].date).format('dddd');
var twoDaysLater =   moment(this.props.reduxState.searchReducer.forecast.forecastday[2].date).format('dddd');

      return (
        <>
        <div className="search">
            <header><h2>Search for a City!</h2></header>
           <input variant="dark" value={this.state.search} onChange={this.handleChange} />
              <Button  variant="dark" color="primary" onClick={this.handleSubmit}> Search</Button></div>
 <br></br>
 <br></br>
<Table variant="dark">
  <thead>
    <tr>
      <th>Today</th>
      <th>    <Card.Img  variant="dark" src={this.props.reduxState.searchReducer.current.condition.icon}/> </th>
      <th>    {this.props.reduxState.searchReducer.current.condition.text}</th>
      <th>  <span>Current temp</span> {this.props.reduxState.searchReducer.current.temp_f}<span>°</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th> {tomDate}</th>
      <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[0].day.condition.icon}/> </th>
      <td>{this.props.reduxState.searchReducer.forecast.forecastday[0].day.condition.text}</td>
      <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[0].day.maxtemp_f}<span>°</span></th>
       <th><span>Min temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[0].day.mintemp_f}<span>°</span></th>

    </tr>
    <tr>
      <th> {dayAfter}</th>
      <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[1].day.condition.icon}/> </th>
      <td>{this.props.reduxState.searchReducer.forecast.forecastday[1].day.condition.text}</td>
      <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[1].day.maxtemp_f}<span>°</span></th>
      <th><span>Min temp</span>  {this.props.reduxState.searchReducer.forecast.forecastday[1].day.mintemp_f}<span>°</span></th>

    </tr>
    <tr>
      <th> {twoDaysLater}</th>
      <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[2].day.condition.icon}/> </th>
      <td>{this.props.reduxState.searchReducer.forecast.forecastday[2].day.condition.text}</td>
      <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[2].day.maxtemp_f}<span>°</span></th>
      <th><span>Min temp</span>  {this.props.reduxState.searchReducer.forecast.forecastday[2].day.mintemp_f}<span>°</span></th>


    </tr>
  </tbody>
</Table>
        
        </>
      );
    } else {
      return (
        <>
        <div className="search">
 <header><h2>Search for a city!!!!</h2></header>
           <input variant="dark" value={this.state.search} onChange={this.handleChange} />
    <Button variant="dark" color="primary" onClick={this.handleSubmit}> Search</Button></div>
        </>
      );
    }
  }
}



export default (connect(mapStateToProps)(locationSearch));

