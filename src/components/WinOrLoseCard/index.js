// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props

  const onClickingPlayAgain = () => playAgain(score)

  const bestScoreElement = score === 12 ? 'Best Score' : 'Score'
  const loseorWon = score === 12 ? 'Won' : 'Lose'
  const loseorWonImgg =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="win-or-lose-bg-container">
      <div>
        <h1>You {loseorWon}</h1>
        <p className="score-label-para">{bestScoreElement}</p>
        <p>{score}/12</p>
        <button onClick={onClickingPlayAgain}>Play Again</button>
      </div>
      <img src={loseorWonImgg} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
