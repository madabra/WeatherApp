import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "0d5289f09add634b5bfc2e743babf50c"

 class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined

  }

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    
    
    

  if(city){
    const api_url = await 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: sunset_date,
      error: ""
    });
  }
  }
   render(){
     return (
       <div> 
         <Info />
         <Form weatherMethod={this.gettingWeather} />
         <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.errors}
         />
       </div>
     );
   }
 }

 export default App;