const refs = {
    getDays: document.querySelector('span[data-value="days"]'),
    getHours: document.querySelector('span[data-value="hours"]'),
    getMins: document.querySelector('span[data-value="mins"]'),
    getSecs: document.querySelector('span[data-value="secs"]'),
}
console.log(refs);

const timer = {
    start() {
        const startTime = Date.now();
        console.log(startTime);

        setInterval(() => {
            const curentTime = Date.now();
            const deltaTime = curentTime - startTime;
            const {days, hours, mins, secs} = getTimerComponents(deltaTime);
            console.log(`${days}:${hours}:${mins}:${secs}`);
           //showData();
            refs.getDays.textContent = `0${days}`;
            refs.getHours.textContent = `0${hours}`;
            refs.getMins.textContent = `0${mins}`;
            refs.getSecs.textContent = `0${secs}`;
        }, 1000);
    }

};
// function showData() {
//     //console.log(refs.getSecs);
//     refs.getSecs.textContent = `0${secs}`;
    
// }

//timer.start();

function getTimerComponents(time) {
    
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return {days, hours, mins, secs}
}

// 

// const a = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
