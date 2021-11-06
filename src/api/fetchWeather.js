import axios from "axios";

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_Key = '37bda96840c45f7c9287652117bd0b1d';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    });

    return data;
}