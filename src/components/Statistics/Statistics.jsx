import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsWrapper, StatItem } from './Statistics.styles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrapper>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive Feedback: {positivePercentage}%</StatItem>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;