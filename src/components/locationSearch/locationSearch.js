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
    metricToggle: false
  };


  goHome = () => {
    window.location.reload();
    console.log('in history push')

}
 
  handleChange = event => {
    this.setState({
      ...this.state,
      search: event.target.value
    });
  };


  handleToggle = () => {
    this.setState({
      ...this.state,
      metricToggle: !this.state.metricToggle
    });

  }


  toggleCheck = () => {
    if(this.state.metricToggle) {
      console.log(this.state.metricToggle);

      return <button onClick={this.handleToggle}>C</button>;

    } else {
      console.log(this.state.metricToggle);
      return <button onClick={this.handleToggle}>F</button>;

    }
}




  handleSubmit = event => {
    console.log(this);
    event.preventDefault();
    console.log(this.state.search);
    if(this.state.search.trim() === "" || this.state.search.trim === null){
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'please enter in a city!',
      })
  } else {
    this.props.dispatch({ type: "GET_LOCO", payload: this.state.search });
    this.state.hasSearched = true;
    }
  };



render() {
if (this.state.hasSearched===true&&this.state.metricToggle===false) {
console.log('reduxstateee is',this.props.reduxState.searchReducer);
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
  <h1 class="title"> {this.props.reduxState.searchReducer.location.name}</h1><h1 class="title"> {this.props.reduxState.searchReducer.location.region}</h1>
<br></br>

<Table variant="dark" size="sm">
<tbody>
  <tr>
    <th>Today</th>
    <th>    <Card.Img  variant="dark" src={this.props.reduxState.searchReducer.current.condition.icon}/> </th>
    <th>    {this.props.reduxState.searchReducer.current.condition.text}</th>
    <th>  <span>Current temp</span> {this.props.reduxState.searchReducer.current.temp_f}<span>°</span></th>
    <th>  <span>Feels Like</span> {this.props.reduxState.searchReducer.current.feelslike_f}<span>°</span></th>

  </tr>
  <tr>
    <th> {tomDate}</th>
    <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[0].day.condition.icon}/> </th>
    <th>{this.props.reduxState.searchReducer.forecast.forecastday[0].day.condition.text}</th>
    <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[0].day.maxtemp_f}<span>°</span></th>
     <th><span>Min temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[0].day.mintemp_f}<span>°</span></th>

  </tr>
  <tr>
    <th> {dayAfter}</th>
    <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[1].day.condition.icon}/> </th>
    <th>{this.props.reduxState.searchReducer.forecast.forecastday[1].day.condition.text}</th>
    <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[1].day.maxtemp_f}<span>°</span></th>
    <th><span>Min temp</span>  {this.props.reduxState.searchReducer.forecast.forecastday[1].day.mintemp_f}<span>°</span></th>

  </tr>
  <tr>
    <th> {twoDaysLater}</th>
    <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[2].day.condition.icon}/> </th>
    <th>{this.props.reduxState.searchReducer.forecast.forecastday[2].day.condition.text}</th>
    <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[2].day.maxtemp_f}<span>°</span></th>
    <th><span>Min temp</span>  {this.props.reduxState.searchReducer.forecast.forecastday[2].day.mintemp_f}<span>°</span></th>


  </tr>
</tbody>
</Table>
      </>
    );
  } 
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
        <h1 class="title"> {this.props.reduxState.searchReducer.location.name}</h1><h1 class="title"> {this.props.reduxState.searchReducer.location.region}</h1>
      <br></br>
      
      <Table variant="dark" size="sm">
      <tbody>
        <tr>
          <th>Today</th>
          <th>    <Card.Img  variant="dark" src={this.props.reduxState.searchReducer.current.condition.icon}/> </th>
          <th>    {this.props.reduxState.searchReducer.current.condition.text}</th>
          <th>  <span>Current temp</span> {this.props.reduxState.searchReducer.current.temp_c}<span>°</span></th>
          <th>  <span>Feels Like</span> {this.props.reduxState.searchReducer.current.feelslike_c}<span>°</span></th>
      
        </tr>
        <tr>
          <th> {tomDate}</th>
          <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[0].day.condition.icon}/> </th>
          <th>{this.props.reduxState.searchReducer.forecast.forecastday[0].day.condition.text}</th>
          <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[0].day.maxtemp_c}<span>°</span></th>
           <th><span>Min temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[0].day.mintemp_c}<span>°</span></th>
      
        </tr>
        <tr>
          <th> {dayAfter}</th>
          <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[1].day.condition.icon}/> </th>
          <th>{this.props.reduxState.searchReducer.forecast.forecastday[1].day.condition.text}</th>
          <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[1].day.maxtemp_c}<span>°</span></th>
          <th><span>Min temp</span>  {this.props.reduxState.searchReducer.forecast.forecastday[1].day.mintemp_c}<span>°</span></th>
      
        </tr>
        <tr>
          <th> {twoDaysLater}</th>
          <th><Card.Img  variant="dark" src={this.props.reduxState.searchReducer.forecast.forecastday[2].day.condition.icon}/> </th>
          <th>{this.props.reduxState.searchReducer.forecast.forecastday[2].day.condition.text}</th>
          <th><span>Max temp</span> {this.props.reduxState.searchReducer.forecast.forecastday[2].day.maxtemp_c}<span>°</span></th>
          <th><span>Min temp</span>  {this.props.reduxState.searchReducer.forecast.forecastday[2].day.mintemp_c}<span>°</span></th>
      
      
        </tr>
      </tbody>
      </Table>
            </>
  );
}

  else {
    return (
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

