import './App.css';
import {useState} from 'react';
import Timer from './Timer'
// Images
import pushUpsImg from './images/pushUps.jpg'
import squatsImg from './images/squats.jpg'
import sitUpsImg from './images/sitUps.jpg'
import runningImg from './images/running.jpg'
import swimmingImg from './images/swimming.jpg'

let exercises = {
  "e1": "Push Ups",
  "e2": "Running",
  "e3": "Squats",
  "e4": "Swimming",
  "e5": "Sit Ups"
}

const MENU_STATE = 0
const EX_REP_STATE = 1
const EX_TIME_STATE = 2
const EX_WEIGHT_STATE = 3

function App() {
  let screen 
  let [curEx, setEx] = useState(1)
  let [curScreen, setScreen] = useState(MENU_STATE)
  let [reps, changeReps] = useState(0)
  
  // Screen for Menu of Exercises
  if(curScreen === MENU_STATE) {
    screen = <>
      <h1>Go Do Something!</h1>
      <p>Select an Exercise:</p>
      <button onClick={() => {setScreen(EX_REP_STATE); setEx(1); changeReps(0)}}>{exercises.e1}</button>
      <button onClick={() => {setScreen(EX_TIME_STATE); setEx(2)}}>{exercises.e2}</button>
      <button onClick={() => {setScreen(EX_WEIGHT_STATE); setEx(3); changeReps(0)}}>{exercises.e3}</button>
      <button onClick={() => {setScreen(EX_TIME_STATE); setEx(4)}}>{exercises.e4}</button>
      <button onClick={() => {setScreen(EX_REP_STATE); setEx(5); changeReps(0)}}>{exercises.e5}</button>
    </>

  // Screen for Rep Exercises
  } else if (curScreen === EX_REP_STATE) {
    let current
    let currentImg 
    if (curEx === 1) {
      current = exercises.e1;
      currentImg = pushUpsImg
    } else if (curEx === 5) {
      current = exercises.e5;
      currentImg = sitUpsImg
    }

    screen = <>
      <h1>{current}</h1>
      <img src={currentImg} className="exerciseImg" alt=""/>
      <p style={{fontSize: "4em", margin: "0px"}}>{reps}</p>
      <button onClick={() => {changeReps(reps + 1)}}>Complete Rep</button>
      <button onClick={() => {changeReps(0)}}>Reset</button>
      <button onClick={() => setScreen(MENU_STATE)}>Return Home</button>
      <br></br>
      <br></br>
    </>
  // Screen for Exercises with Weights
  } else if (curScreen === EX_WEIGHT_STATE) {
    let current = exercises.e3
    let currentImg = squatsImg

    screen = <>
      <h1>{current}</h1>
      <img src={currentImg} className="exerciseImg" alt=""/>
      <p style={{fontSize: "3em", margin: "0px", padding: "0px"}}>{reps}</p>
      <p style={{margin: "5px"}}>Weights in lbs: <input type="number" id="weightAmount" min="0" max="500"></input></p>
      <button onClick={() => {changeReps(reps + 1)}}>Complete Rep</button>
      <button onClick={() => {changeReps(0)}}>Reset</button><button onClick={() => setScreen(MENU_STATE)}>Return Home</button>
      <br></br>
      <br></br>
      <br></br>
    </>
  
  // Screen for Time exercises
  } else if (curScreen === EX_TIME_STATE) {
    let current
    let currentImg
    if (curEx === 2) {
      current = exercises.e2;
      currentImg = runningImg
    } else if (curEx === 4) {
      current = exercises.e4;
      currentImg = swimmingImg
    }

    screen = <>
      <h1>{current}</h1>
      <img src={currentImg} className="exerciseImg" alt="" />
      <Timer/>
      <button onClick={() => setScreen(MENU_STATE)}>Return Home</button>
    </>
  }

  return (
    <div className="App">
      <header className="App-header">
        {screen}
      </header>
    </div>
  );
}

export default App;

