import {Component} from 'react'
import './index.css'
import EmojiItem from '../EmojiItem/index'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  feedbackRes = () => {
    this.setState(prev => ({isFeedbackGiven: !prev.isFeedbackGiven}))
  }

  render() {
    const {isFeedbackGiven} = this.state

    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="feedback-container">
          {!isFeedbackGiven && (
            <div className="feedback-card">
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <div className="emogi-container">
                {emojis.map(each => (
                  <EmojiItem
                    emogiDetails={each}
                    key={each.id}
                    feedbackRes={this.feedbackRes}
                  />
                ))}
              </div>
            </div>
          )}
          {isFeedbackGiven && (
            <div className="feedback-submit-container">
              <img className="heart-img" src={loveEmojiUrl} alt="love emoji" />
              <h1 className="thankyou">Thank You</h1>
              <p className="promise">
                We will you use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
