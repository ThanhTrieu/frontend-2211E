import { getDataWeatherByCity } from './services/api-v3.mjs';

// const weather = getDataWeatherByCity('Tokyo');
// weather.next().value.then(result => {
//     console.log(result.data)
// })
//console.log(weather.next());
const getData = async (city) => {
    const data = await getDataWeatherByCity(city);
    console.log(data.next());
}
// function* getDataV2(city){
//     const data = yield getDataWeatherByCity(city);
//     return data;
//     //console.log(data)
// }
getData('Tokyo');