import axios from "axios";

export function* getDataWeatherByCity(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric&lang=vi`;
    const response = yield axios.get(url);
    return response;
}