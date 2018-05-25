const rootUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
const apiUrl = '&appid=7c34a6e85cfbe197f88c1bda569f0368';

export const WeatherApi = (query="seattle") => {
    return fetch(`${rootUrl}${query}&units=imperial&type=like${apiUrl}`)
        .then(res => res.json())
};