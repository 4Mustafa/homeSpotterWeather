const fetch = require("node-fetch");

function checkRoute(city) {

 
let url =`http://api.weatherapi.com/v1/current.json?key=6ea0943cfa91489588303237202511&q=${city}`
fetch(url).then(response => response.json())
.then((json) => {
  if (json) {
    return true
} else return false});

}






// function checkCity(city) {
//   this.props.dispatch({ type: "GET_LOCO", payload: city });
//     if (this.props.reduxState.searchReducer.location.name===city) {
//         return city
//     } else return false
// }




// function checkDate() {
//   this.props.dispatch({ type: "GET_LOCO", payload: 'ny' });
// var tomCheck = moment().add(1,'days').format('dddd')
// var dayAfterCheck= moment().add(2,'days').format('dddd')
// var twoDaysLaterCheck= moment().add(3,'days').format('dddd')

// var tomDate =  moment(this.props.reduxState.searchReducer.forecast.forecastday[0].date).format('dddd');
// var dayAfter =  moment(this.props.reduxState.searchReducer.forecast.forecastday[1].date).format('dddd');
// var twoDaysLater = moment(this.props.reduxState.searchReducer.forecast.forecastday[2].date).format('dddd');

//     if (tomDate===tomCheck&&dayAfter===dayAfterCheck&&twoDaysLater===twoDaysLaterCheck) {
//         return `${tomDate,dayAfter,twoDaysLater}`
//     } else return false
// }




module.exports = {
 checkRoute,
//  checkCity,
//  checkDate
}
