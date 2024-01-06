class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (arguments.length < 2) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else if (this.alarmCollection.find((clock) => clock.id === id)) {
      return console.warn("Уже присутствует звонок на это же время");
    }
    return this.alarmCollection.push({ callback, time, canCall: true });
  }

  removeClock(time) {
    this.alarmCollection.find((i) => i.time === time).splice(i, 1);
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

    start() {
        if (intervalId) {
            return;
      }
  }
}
