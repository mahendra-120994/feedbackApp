import './index.css'

const EmojiItem = props => {
  const {emogiDetails, feedbackRes} = props
  const {name, imageUrl} = emogiDetails

  const submitFeedback = () => {
    feedbackRes()
  }

  return (
    <li className="emogi-item">
      <img
        src={imageUrl}
        alt={name}
        className="emogi-img"
        onClick={submitFeedback}
      />
      <p className="emogi-name">{name}</p>
    </li>
  )
}
export default EmojiItem
