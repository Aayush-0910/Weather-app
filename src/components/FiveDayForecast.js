import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import getWeatherData from '../utils/getWeatherData';

const FiveDayForecast = ({ daily }) => {
  return (
    <div className="mt-5">
      <h2>5-Day Forecast</h2>
      <Row>
        {daily.time.map((date, index) => (
          <Col key={date}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                </Card.Title>
                <img
                  src={getWeatherData(daily.weathercode[index]).icon.day}
                  alt="Weather Icon"
                  width={64}
                />
                <p>
                  {Math.round(daily.temperature_2m_max[index])}° /
                  {Math.round(daily.temperature_2m_min[index])}°
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FiveDayForecast;