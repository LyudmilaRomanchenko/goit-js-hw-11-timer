const refs = {
    getDays: document.querySelector('span[data-value="days"]'),
    getHours: document.querySelector('span[data-value="hours"]'),
    getMins: document.querySelector('span[data-value="mins"]'),
    getSecs: document.querySelector('span[data-value="secs"]'),
}
console.log(refs);


// Плагин для таймера
class CountdownTimer {
    constructor({selector, targetDate}) {
            this.selector = selector;
            this.targetDate = targetDate;
            this.timeLeft();
    }
    
    // Показывает две цифры
    pad(value) {
        return String(value).padStart(2, '0')
    }

    // Получаем компоненты времени (дни, часы, минуты, секунды)
     getTimerComponents(time) {
    
        //  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
        //  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
        //  */
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

        /*
        * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
        * остатка % и делим его на количество миллисекунд в одном часе
        * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
        */
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

        /*
        * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
        * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
        */
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

        /*
        * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
        * миллисекунд в одной секунде (1000)
        */
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days, hours, mins, secs}
    }

    // Отображаем дату на странице
    showData({days, hours, mins, secs}) {
        refs.getDays.textContent = days;
        refs.getHours.textContent = hours;
        refs.getMins.textContent = mins;
        refs.getSecs.textContent = secs;
    }

    timeLeft() {
        console.log(this.selector);

        const startTime = this.targetDate.getTime();
        console.log(startTime);
        setInterval(() => {
            const curentTime = Date.now();
            const deltaTime = startTime - curentTime;
            const {days, hours, mins, secs} = this.getTimerComponents(deltaTime);
            // console.log(`${days}:${hours}:${mins}:${secs}`);
            this.showData({days, hours, mins, secs});
        }, 1000);
    }
}

// Вызов экземпляра класса
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 31, 2022'),
});

console.log(timer);











