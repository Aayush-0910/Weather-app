import getPosition from "./getPosition";
import fetchData from "./fetchData";

const weatherLoader = async () => {
  const position = await getPosition();
  const { latitude, longitude } = position.coords;

  const response = await fetch(
    `https://eu1.locationiq.com/v1/reverse?key=pk.c900545b9932c55be279d9c4a34436eb&lat=${latitude}&lon=${longitude}&format=json`
  );

  const data = await fetchData(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,snow_depth,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windspeed_10m_min&current_weather=true&timezone=auto&forecast_days=5`
  );

  const location = await response.json();

  return { data, location };
};

export default weatherLoader;
