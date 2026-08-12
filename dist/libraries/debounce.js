/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-25 12:50:52
 * @Description:
 */
export default function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(null, args);
        }, timeout);
    };
}
