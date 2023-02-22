import { useState } from "react";

export default function RepitionExercise({exercises}) {
    let screen
    let current
    let [curEx, setEx] = useState(1)
    let [reps, changeReps] = useState(0)

    if (curEx === 1) {
      current = exercises.e1;
    } else if (curEx === 3) {
      current = exercises.e3;
    } else if (curEx === 5) {
      current = exercises.e5;
    }

    screen = <>
      <h1>{current}</h1>
      <p>Reps: {reps}</p>
      <button onClick={() => {changeReps(reps + 1)}}>Complete Rep</button>
      <button onClick={() => {changeReps(0)}}>Reset</button>
      <button onClick={() => setScreen(MENU_STATE)}>Return Home</button>
    </>
    return (
        {screen}
    );
}