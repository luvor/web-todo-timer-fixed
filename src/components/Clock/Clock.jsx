import React, { useState } from "react";
import s from "./Clock.module.css";

const Clock = () => {
  const [value, setValue] = useState();

  const deg = 6;
  let hr = React.createRef();
  let mn = React.createRef();
  let sc = React.createRef();

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  });

  return (
    <div className={s.clockComponent}>
      <div class="light">
        <span></span>
      </div>

      <div class="clock">
        <div class="hour">
          <div class="hr" ref={hr}></div>
        </div>
        <div class="min">
          <div class="mn" ref={mn}></div>
        </div>
        <div class="sec"></div>
        <div class="sc" ref={sc}></div>
      </div>
    </div>
  );
};

export default Clock;
