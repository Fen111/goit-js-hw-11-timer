import refs from './refs.js';

const { days, hours, mins, secs } = refs;

class CountdownTimer {
  constructor({ targetDate, onTick }) {
    this.targetDate = targetDate;
    this.intervalId = null;
    this.deltaTime = 0;
    this.onTick = onTick;
  }

  start() {
    this.intervalId = setInterval(() => {
      let currentDate = Date.now();
      this.deltaTime = this.targetDate - currentDate;
      const time = this.getTimeComponents(this.deltaTime);

      this.onTick(time);
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
  targetDate: new Date('jan 01, 2022'),
  onTick: updateClockface,
});

timer.start();

function updateClockface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}
