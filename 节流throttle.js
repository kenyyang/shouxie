function thorttle(fn, interval) {

    let lastTime = 0

    return function () {
        const nowTime = Date.now()
        const remainTime = interval - (nowTime - lastTime)

        if (remainTime <= 0) {
            fn()
            lastTime = nowTime
        }
    }
}
/************************************* */
function throttle(fn, delay) {

    let lastTime = 0;

    return function (...args) {
        let nowTime = Date.now();
        let remainTime = delay - (nowTime - lastTime);
        if (remainTime <= 0) {
            fn.apply(this, args);
            lastTime = nowTime;
        }
    }
}
