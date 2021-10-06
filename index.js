// const startTime = new Date('Jul 17, 2019');
// const currentTime = Date.now();
// console.log(startTime - currentTime);
// console.log(currentTime - startTime);

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ onTick }) {
    this.onTick = onTick;
  }
  start() {
    const startTime = new Date('Jul 17, 2019');

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

      // const findTime = deltaTime - (2 * 0 + 1) * 1000;

      // console.log(findTime);
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);

      console.log(`${days}:${hours}:${mins}:${secs}`);
      this.onTick({ days, hours, mins, secs });
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
  onTick: updateClockface,
});

function updateClockface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}:`;
  refs.hours.textContent = `${hours}:`;
  refs.mins.textContent = `${mins}:`;
  refs.secs.textContent = `${secs}`;
}

timer.start.bind(timer);

// const timer = {
//   start() {
//     const startTime = new Date('Jul 17, 2019');

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;

//       // const findTime = deltaTime - (2 * 0 + 1) * 1000;

//       // console.log(findTime);
//       const { days, hours, mins, secs } = getTimeComponents(deltaTime);

//       console.log(`${days}:${hours}:${mins}:${secs}`);
//       updateClockface({ days, hours, mins, secs });
//     }, 1000);
//   },
// };

// timer.start();

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { days, hours, mins, secs };
// }
