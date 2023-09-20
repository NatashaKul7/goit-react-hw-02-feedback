import React, { Component } from 'react';

import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/NoFeedback/Notification';
import Button from 'components/Buttons/Buttons';


import { Container } from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    onButtonClick = index => {
    this.setState(prevState => ({ [index]: prevState[index] + 1 }));
    };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    const good = this.state.good;
    const total = this.countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    const percentage = (good / total) * 100;
    return Math.round(percentage);
  }

  render() {
    const states = this.state
    const totalCount = this.countTotalFeedback();
    const options = Object.keys(this.state);

    return (
      <Container>
        <h1> Please leave feedback</h1>
        <Button options={options} onLeaveFeedback={this.onButtonClick} />

        {totalCount > 0 ? (
          <Statistics
            good={states.good}
            neutral={states.neutral}
            bad={states.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
            <Notification/>
        )}
      </Container>
    );
  }
}

export default Feedback;
