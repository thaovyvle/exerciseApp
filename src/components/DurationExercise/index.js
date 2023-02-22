import { useState } from "react";

export default function DurationExercise({exercises}) {
    let screen
    let current
    let [curEx, setEx] = useState(1)
    let [reps, changeReps] = useState(0)
    
    if (curEx === 2) {
      current = exercises.e2;
    } else if (curEx === 4) {
      current = exercises.e4;
    }

    screen = <>
      <h1>{current}</h1>
      <p>Timer:</p>
      <button onClick={() => setScreen(MENU_STATE)}>Return Home</button>
    </>
    return (
        {screen}
    );
}