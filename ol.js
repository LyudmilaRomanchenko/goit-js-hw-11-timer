//////////////////////// Variant2 /////////////////////
 ////// запуск таймера кнопками старт и стоп//////////////////////////

class countdownTimer {
  constructor({selector, targetDate}) {
    this.watchId = null;
  //  this.selector = selector;
    this.targetDate = targetDate;
    this.startWatch();
   // this.targetDate = new Date('Jul 17, 2023');
    //this.startBtn = document.querySelector("#start");
    //this.stopBtn = document.querySelector("#stop");
    this.secondText = document.querySelector(`${selector} [data-value="seconds"]`);
    this.minuteText = document.querySelector(`${selector} [data-value="minutes"]`);
    this.hourText = document.querySelector(`${selector} [data-value="hours"]`);
    this.dayText = document.querySelector(`${selector} [data-value="days"]`);

  //  this.action = this.action.bind(this);
  //  this.startWatch = this.startWatch.bind(this);
  //  this.stopWatch = this.stopWatch.bind(this);
  }


  startWatch() {
    const startTime = this.targetDate.getTime();
    this.watchId = setInterval(() => {
      const presentTime = Date.now();
      const timeCount = startTime - presentTime;
      const {days, hours, minutes, seconds} = this.action(timeCount);
      this.timerScreen({days, hours, minutes, seconds});
    }, 1000);
  }

  action(time) {
  //  const time = this.targetDate - new Date();
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return {days, hours, minutes, seconds}
  }

  timerScreen({days, hours, minutes, seconds}) {
    this.secondText.textContent = seconds < 10 ? `0${seconds}` : seconds;
    this.minuteText.textContent = minutes < 10 ? `0${minutes}` : minutes;
    this.hourText.textContent = hours < 10 ? `0${hours}` : hours;
    this.dayText.textContent = days < 10 ? `0${days}` : days;
  }

 /* stopWatch() {
    clearInterval(this.watchId);
  }*/

//  init() {
//    document.addEventListener("DOMContentLoaded", this.startWatch);
  // this.startBtn.addEventListener("click", this.startWatch);
  // this.stopBtn.addEventListener("click", this.stopWatch);
 // }
}

const watch = new countdownTimer({
  selector: '#countdown',
  targetDate: new Date('Jul 17, 2023'),
});

const watchTimer = new countdownTimer({
  selector: '#countdown-1',
  targetDate: new Date('Jul 19, 2022'),
});