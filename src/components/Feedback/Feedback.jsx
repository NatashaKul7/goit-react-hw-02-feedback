import React, { Component } from 'react';

import Statistics from 'components/Statistics/Statistics';
import NoFeedback from 'components/NoFeedback/NoFeedback';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  addNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  addBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
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
    return (
      <div>
        <button type="button" onClick={this.addGood}>
          Good
        </button>
        <button type="button" onClick={this.addNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.addBad}>
          Bad
        </button>

        {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
        <NoFeedback/>
        )}
      </div>
    );
  }
}

export default Feedback;
