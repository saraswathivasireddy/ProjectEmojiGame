// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isPlayingGame} = props
  let scoreElement = ''
  if (isPlayingGame === true) {
    scoreElement = (
      <div className="logo-container">
        <p className="nav-para">Score: {score}</p>
        <p className="nav-para">Top Score: {topScore}</p>
      </div>
    )
  }
  return (
    <nav className="nav-bg-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {scoreElement}
    </nav>
  )
}

export default NavBar
