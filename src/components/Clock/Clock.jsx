import React, { useState } from "react";
import s from "./Clock.module.css";
const Clock = (props) => {
  const [opt, setOpt] = useState();
  const [disabled, setDisabled] = useState(false);
  const [interval, setIntervalItem] = useState();
  const clockCycle = (dayTime) => {
    console.log("inClockCycle", dayTime);
    if(!dayTime) return;
    if(dayTime === "00:00:00") return;

    let hr = parseInt(dayTime.split(":")[0]);
    let mn = parseInt(dayTime.split(":")[1]);
    let sc = parseInt(dayTime.split(":")[2]);

    setIntervalItem(setInterval(() => {
      if (hr > 0) {
        console.log("inIf", hr, mn, sc);
        if (mn === -1) {
          mn = 59;
          hr--;
        }
        if (sc === 60) {
          mn++;
          sc = 0;
        }
        if (sc === 0) {
          mn--;
          sc = 59;
        } else {
          sc--;
        }
        if (mn === -1) {
          hr--;
          mn = 59;
        }
        let time = hr + ":" + mn + ":" + sc;
        if (!disabled) {
          props.setTime(time);
        }
      }
    }, 1000))
  };

  const toggleForm = () => {
    interval && clearInterval(interval);
    setDisabled(disabled);
    props.setTime("00:00:00");
  };
  // const resetTime = (timerId) => {
  //   props.setTime("00:00:00");
  //   setDisabled(true);
  //   clearInterval(timerId);
  // }
  const setTimeFromOpt = () => {
    interval && clearInterval(interval);
    props.setTime("00:00:00");

    console.log("inFromOpt");
    let dayTime;
    switch (opt) {
      case "1 Day":
        dayTime = "23:59:00";
        props.setTime(dayTime);
        break;
      case "2 Day":
        dayTime = "47:59:00";
        props.setTime(dayTime);
        break;
      case "3 Day":
        dayTime = "71:59:00";
        props.setTime(dayTime);
        break;
      case "4 Day":
        dayTime = "95:59:00";
        props.setTime(dayTime);
        break;
      case "5 Day":
        dayTime = "119:59:00";
        props.setTime(dayTime);
        break;
      case "6 Day":
        dayTime = "143:59:00";
        props.setTime(dayTime);
        break;
      case "7 Day":
        dayTime = "168:59:00";
        props.setTime(dayTime);
        break;
    }
    clockCycle(dayTime);
  };

  return (
    <div className={s.clockComponent}>
      <div className={s.circle}>
        <div className={s.time}>{props.time}</div>
      </div>
      <form className={`${s.form} ${disabled ? `${s.hide}` : ""}`} action="#">
        <select onChange={(e) => setOpt(e.target.value)}>
          <option value="1 Day">1 Day</option>
          <option value="2 Day">2 Day</option>
          <option value="3 Day">3 Day</option>
          <option value="4 Day">4 Day</option>
          <option value="5 Day">5 Day</option>
          <option value="6 Day">6 Day</option>
          <option value="7 Day">7 Day</option>
        </select>
        <button onClick={setTimeFromOpt}>Go!</button>
      </form>
      <button onClick={toggleForm}>reset</button>
    </div>
  );
};

export default Clock;
