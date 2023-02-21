
import {Component} from "react";
import { FeedbackOptions } from "./feedback/feedback";

export class App extends Component {
      state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };


  onLeaveFeedback = (evt) => {
    const option = evt.target.name;
        this.setState((state) => ({
          [option]: state[option] + 1,
        }))
    }
        

    countTotalFeedback = () => {
        const {good, neutral, bad } = this.state;
        const sum = good + neutral + bad;
        return sum
    }
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const sum = this.countTotalFeedback();
        const goodFeedback = (good * 100) / sum;
        return Math.round(goodFeedback)
    }
    
  render() {
    const options = Object.keys(this.state);
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const percent = this.countPositiveFeedbackPercentage();

        return (<div>           
            <div>
                <h2>Please leave feedback</h2>
                <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}>{options}</FeedbackOptions>
            </div>

            <div>
                <h2>Statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {percent}%</p>
            </div>
        </div>)
    }
};
