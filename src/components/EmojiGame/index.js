/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {emojisClickedList: [], isPlayingGame: true, topScore: 0}

  onClickedEmoji = id => {
    const {emojisList} = this.props
    const {emojisClickedList} = this.state
    console.log(emojisClickedList)
    const selectedEmoji = emojisClickedList.filter(
      eachList => eachList.id === id,
    )

    if (selectedEmoji.length === 0) {
      const newEmoji = emojisList.filter(
        eachEmojiList => eachEmojiList.id === id,
      )
      if (emojisClickedList.length === 11) {
        this.setState(prevState => ({
          emojisClickedList: [...prevState.emojisClickedList, newEmoji[0]],
          isPlayingGame: false,
        }))
      } else {
        this.setState(prevState => ({
          emojisClickedList: [...prevState.emojisClickedList, newEmoji[0]],
        }))
      }
    } else {
      this.setState({isPlayingGame: false})
    }
  }

  playAgain = score => {
    this.setState(prevState => {
      if (prevState.topScore < score) {
        return {topScore: score, isPlayingGame: true, emojisClickedList: []}
      }
      return {isPlayingGame: true, emojisClickedList: []}
    })
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const {isPlayingGame, topScore, emojisClickedList} = this.state

    let activeElement
    if (isPlayingGame === true) {
      activeElement = (
        <ul className="emoji-list-container">
          {shuffledEmojisList().map(eachEmoji => (
            <EmojiCard
              eachEmoji={eachEmoji}
              onClickedEmoji={this.onClickedEmoji}
              key={eachEmoji.id}
            />
          ))}
        </ul>
      )
    } else {
      activeElement = (
        <WinOrLoseCard
          score={emojisClickedList.length}
          playAgain={this.playAgain}
        />
      )
    }

    return (
      <div className="bg-container">
        <NavBar
          score={emojisClickedList.length}
          topScore={topScore}
          isPlayingGame={isPlayingGame}
        />
        <div>{activeElement}</div>
      </div>
    )
  }
}

export default EmojiGame
