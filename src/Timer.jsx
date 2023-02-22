import { useState, useEffect, useCallback } from "react"

let[milli, secs, mins] = [0,0,0]
let int = null

export default function Timer() {
    let [timer, setTimer] = useState(0)
    let [curTime, setCurTime] = useState(0)
    let [running, setRunning] = useState(false)

    useEffect(() => {
        if(running) {
            let newTimer = setInterval(() => setCurTime(prev=>prev+1), 1000/30)
            setTimer(newTimer)
            return () => clearInterval(newTimer)
        }
        }, [running]
    )
    let click = useCallback(() => {
        if (running) {
            clearInterval(timer)
            setRunning(false)
            clearInterval(int)
        } else {
            setRunning(true)
            setCurTime(Date.now())
            let timer = setInterval(() => setCurTime(prev=>prev+1), 1000/30)
            setTimer(timer)
            int = setInterval(displayTimer, 10);
            [milli, secs, mins] = [0,0,0]
        }
    }, [running, timer])
    let m = mins < 10 ? "0" + mins : mins;
    let s = secs < 10 ? "0" + secs : secs;
    let ms = milli < 100 ? "0" + milli : milli;

    return (
        <>
        <p style={{fontSize: "3em", margin: "0px", padding: "0px"}}>{(running) ? `${m} : ${s} : ${ms/10}` : "00 : 00 : 00"} <br></br><button onClick={click}
        >{running ? "Reset" : "Start"}</button></p>
        </>
    );
}

function displayTimer() {
    milli += 10;
    if (milli === 1000) {
        milli = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
            if (mins === 60) {
                mins = 0;
            }
        }
    }
}