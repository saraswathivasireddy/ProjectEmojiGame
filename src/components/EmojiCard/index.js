// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickedEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji
  const emojiClicked = () => onClickedEmoji(id)

  return (
    <li className="each-emoji-list">
      <button onClick={emojiClicked} className="emoji-button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
