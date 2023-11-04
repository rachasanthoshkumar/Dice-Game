import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay"
function App() {
  
  const [isGameStarted,setIsGameStarted] = useState(false)

  const toggleGame = ()=>{
    setIsGameStarted(prev=>!prev)
  }

  return (
    <>
     {isGameStarted?<GamePlay isGameStarted={isGameStarted} setIsGameStarted={setIsGameStarted}/>:<StartGame toggle={toggleGame}/>}
    </>
  )
}

export default App


