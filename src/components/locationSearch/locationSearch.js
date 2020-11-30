import React, { Component } from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import moment from 'moment'
import Swal from 'sweetalert2'


const mapStateToProps = reduxState => ({
  reduxState
});

class locationSearch extends Component {

  state = {
    search: "",
    hasSearched: false,
    metricToggle: false,
    testerr:''

  };




  goHome = () => {
    // sends the user to home page when banner is clicked
    window.location.reload();

}
 
  handleChange = event => {
    this.setState({
      ...this.state,
      search: event.target.value
    });
  };


  handleToggle = () => {
    // toggles between metric views
    this.setState({
      ...this.state,
      metricToggle: !this.state.metricToggle
    });

  }


  toggleCheck = () => {
    // appends correct button based on metric views
    if(this.state.metricToggle) {

      return <button onClick={this.handleToggle}>C</button>;
    } else {
      return <button onClick={this.handleToggle}>F</button>;

    }
  }



 


  handleSubmit = event => {
    // checks if input is valid then send a request to redux
    console.log(this);
    event.preventDefault();
    let newInput= this.state.search.trim().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    if(newInput === "" ||newInput === null){
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'please enter in a city!',
      })
  } else {
    this.props.dispatch({ type: "GET_LOCO", payload: newInput });
    this.state.hasSearched = true;
    }
  };




// conditionally rendering based on if user has searched for a city & unit displayed 
render() {
  // checks if the user has searched for a city and if the toggle button is pressed
if (this.state.hasSearched===true&&this.state.metricToggle===false) {
  //  hold the day of the week in a var with moment.js
var tomDate =  moment(this.props.reduxState.searchReducer.forecast.forecastday[0].date).format('dddd');
var dayAfter =  moment(this.props.reduxState.searchReducer.forecast.forecastday[1].date).format('dddd');
var twoDaysLater = moment(this.props.reduxState.searchReducer.forecast.forecastday[2].date).format('dddd');
    return (
      <>
    
<h1 onClick={this.goHome} class="title"><img src={require('./hslogo.png')} />Weather </h1>
<div className="search">
<header><h4>Search for a city!</h4></header>
<br></br>
<br></br>
{this.toggleCheck()}
  <input variant="dark" value={this.state.search} onChange={this.handleChange} />
  <Button  variant="dark" onClick={this.handleSubmit}> Search</Button></div>

<br></br>
<br></br>
  <h2 class="title"> {this.props.reduxState.searchReducer.location.name}</h2><h2 class="title"> {this.props.reduxState.searchReducer.location.region}</h2>
<br></br>

<Table variant="dark" size="sm">
<tbody>
  <tr>
    <th>Today</th>
    <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.current.condition.icon}/> </th>
    <th>{this.props.reduxState.searchReducer.current.condition.text}</th>
    <th><span>Current temp</span> {this.props.reduxState.searchReducer.current.temp_f}<span>°F</span></th>
    <th><span>Feels Like</span> {this.props.reduxState.searchReducer.current.feelslike_f}<span>°F</span></th>

  </tr>
  <tr>
    <th>{tomDate}</th>
    <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[0].day.condition.icon}/> </th>
    <th>{this.props.reduxState.searchReducer.forecast.forecastday[0].day.condition.text}</th>
    <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[0].day.maxtemp_f}<span>°F</span></th>
     <th><span>Min temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[0].day.mintemp_f}<span>°F</span></th>

  </tr>
  <tr>
    <th>{dayAfter}</th>
    <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[1].day.condition.icon}/> </th>
    <th>{this.props.reduxState.searchReducer.forecast.forecastday[1].day.condition.text}</th>
    <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[1].day.maxtemp_f}<span>°F</span></th>
    <th><span>Min temp</span>  {this.props.reduxState.searchReducer.forecast.forecastday[1].day.mintemp_f}<span>°F</span></th>

  </tr>
  <tr>
    <th>{twoDaysLater}</th>
    <th><Card.Img variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[2].day.condition.icon}/> </th>
    <th>{this.props.reduxState.searchReducer.forecast.forecastday[2].day.condition.text}</th>
    <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[2].day.maxtemp_f}<span>°F</span></th>
    <th><span>Min temp</span>  {this.props.reduxState.searchReducer.forecast.forecastday[2].day.mintemp_f}<span>°F</span></th>


  </tr>
</tbody>
</Table>
      </>
    );
  } 
  // if the toggle is pressed and the user has searched for a city this view is rendered
  else if (this.state.metricToggle===true&&this.state.hasSearched===true ) {

var tomDate =  moment(this.props.reduxState.searchReducer.forecast.forecastday[0].date).format('dddd');
var dayAfter =  moment(this.props.reduxState.searchReducer.forecast.forecastday[1].date).format('dddd');
var twoDaysLater = moment(this.props.reduxState.searchReducer.forecast.forecastday[2].date).format('dddd');

    return (
      <>
      <h1 onClick={this.goHome} class="title"><img src={require('./hslogo.png')} />Weather </h1>
      <div className="search">
      <header><h4>Search for a city!</h4></header>
      <br></br>
      <br></br>
      {this.toggleCheck()}
        <input variant="dark" value={this.state.search} onChange={this.handleChange} />
        <Button  variant="dark" onClick={this.handleSubmit}> Search</Button></div>
      
      <br></br>
      <br></br>
        <h2 class="title"> {this.props.reduxState.searchReducer.location.name}</h2><h2 class="title"> {this.props.reduxState.searchReducer.location.region}</h2>
      <br></br>
      
      <Table variant="dark" size="sm">
      <tbody>
        <tr>
          <th>Today</th>
          <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.current.condition.icon}/> </th>
          <th>{this.props.reduxState.searchReducer.current.condition.text}</th>
          <th><span>Current temp</span> {this.props.reduxState.searchReducer.current.temp_c}<span>°C</span></th>
          <th><span>Feels Like</span> {this.props.reduxState.searchReducer.current.feelslike_c}<span>°C</span></th>
      
        </tr>
        <tr>
          <th>{tomDate}</th>
          <th><Card.Img variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[0].day.condition.icon}/> </th>
          <th>{this.props.reduxState.searchReducer.forecast.forecastday[0].day.condition.text}</th>
          <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[0].day.maxtemp_c}<span>°C</span></th>
          <th><span>Min temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[0].day.mintemp_c}<span>°C</span></th>
      
        </tr>
        <tr>
          <th>{dayAfter}</th>
          <th><Card.Img variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[1].day.condition.icon}/> </th>
          <th>{this.props.reduxState.searchReducer.forecast.forecastday[1].day.condition.text}</th>
          <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[1].day.maxtemp_c}<span>°C</span></th>
          <th><span>Min temp</span>  {this.props.reduxState.searchReducer.forecast.forecastday[1].day.mintemp_c}<span>°C</span></th>
      
        </tr>
        <tr>
          <th>{twoDaysLater}</th>
          <th><Card.Img variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[2].day.condition.icon}/> </th>
          <th>{this.props.reduxState.searchReducer.forecast.forecastday[2].day.condition.text}</th>
          <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[2].day.maxtemp_c}<span>°C</span></th>
          <th><span>Min temp</span>  {this.props.reduxState.searchReducer.forecast.forecastday[2].day.mintemp_c}<span>°C</span></th>
      
      
        </tr>
      </tbody>
      </Table>
       </>
  );
}

  else {
    return (
      // this is the basic view that pops up when a user has not yet searched for a city (home page)
      <>
        <h1 class="title"><img src={require('./hslogo.png')} />Weather </h1>
      <div className="search">
<header><h4 class="title">Search for a city!</h4></header>

<br></br>
         <input variant="dark" value={this.state.search} onChange={this.handleChange} />
  <Button variant="dark" onClick={this.handleSubmit}> Search</Button></div>
      </>
    );
  }
}
}



export default (connect(mapStateToProps)(locationSearch));

