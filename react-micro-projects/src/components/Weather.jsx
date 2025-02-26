import React from 'react'

const Weather = ({temprature}) => {
    let weatherForcast;
    if(temprature < 15) {
        weatherForcast = "It's cold outside";
    } else if(temprature >= 15 && temprature < 25) {
        weatherForcast = "It's nice outside";
    } else {
        weatherForcast = "It's hot outside";
    }

    return (<p>{weatherForcast}</p>);
  
}

export default Weather