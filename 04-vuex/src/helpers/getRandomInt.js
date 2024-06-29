export function getRandomInt() {
    return new Promise((resolve) => {
        const randInt = Math.floor(Math.random() * 20 + 1);
        setTimeout(() => {
            resolve(randInt);
        }, 2000);
    });
}
