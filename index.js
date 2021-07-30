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

    timeLeft () {
        const startTime = this.targetDate.getTime();
        console.log(startTime);
        setInterval(() => {
            const curentTime = Date.now();
            const deltaTime = startTime - curentTime;
            const {days, hours, mins, secs} = getTimerComponents(deltaTime);
            // console.log(`${days}:${hours}:${mins}:${secs}`);
            showData({days, hours, mins, secs});
        }, 1000);
    }  
}

// Вызов экземпляра класса
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 31, 2021'),
});

console.log(timer);

// Отображаем дату на странице
function showData({days, hours, mins, secs}) {
    refs.getDays.textContent = days;
    refs.getHours.textContent = hours;
    refs.getMins.textContent = mins;
    refs.getSecs.textContent = secs;
};

// Показывает две цифры
function pad(value) {
    return String(value).padStart(2, '0')
};

// Получаем компоненты времени (дни, часы, минуты, секунды)
function getTimerComponents(time) {
    
    //  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
    //  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
    //  */
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    /*
    * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
    * остатка % и делим его на количество миллисекунд в одном часе
    * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
    */
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    /*
    * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
    * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
    */
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    /*
    * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
    * миллисекунд в одной секунде (1000)
    */
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs}
}





//=========================

// const timer = {
//     start() {
//         const startTime = Date.now();
//         console.log(startTime);

//         setInterval(() => {
//             const curentTime = Date.now();
//             const deltaTime = curentTime - startTime;
//             const {days, hours, mins, secs} = getTimerComponents(deltaTime);
           
//             console.log(`${days}:${hours}:${mins}:${secs}`);
//            showData({days, hours, mins, secs});
        

//         }, 1000);
//     }

// };