class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (arguments.length != 2 || time === null || callback === null) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else if (this.alarmCollection.find((clock) => clock === clock)) {
      console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({ callback, time, canCall: true });
  }

  removeClock(time) {
    let index = this.alarmCollection.filter((item) => item.time === time);
    if (index) {
      this.alarmCollection.splice(index, 1);
    }
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((item) => {
          if (item.time === this.getCurrentFormattedTime() && item.canCall) {
            item.canCall = false;
            item.callback();
          }
        });
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => {
      item.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
