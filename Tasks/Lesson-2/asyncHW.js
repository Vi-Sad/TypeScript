"use strict";
const yourAddress = 'https://jsonplaceholder.typicode.com/comments/';
const yourRepeat = 3;
const yourTime = 2000;
const taskPromiseFunc = async (address, repeat, time) => {
    try {
        let random = Math.random() * 2;
        console.log(random);
        const response = await fetch(random >= 1 ? address : 'fdsdff');
        // const limitLength = data.length / 2
        // const randomIndex = Math.round(Math.random() * data.length)
        if (response.ok) {
            return await response.json();
        }
        else {
            throw Error('Error!');
        }
        // console.log(`The acceptable range is from ${limitLength} to ${data.length}!`)
    }
    catch (e) {
        if (repeat > 1) {
            await new Promise(resolve => setTimeout(resolve, time));
            return taskPromiseFunc(address, repeat - 1, time);
        }
        else {
            throw e;
        }
    }
    // const interval = setInterval(() => {
    //     taskPromiseFunc(address, 0, time).then(console.log).catch(console.warn)
    // }, time)
    // if (randomIndex > limitLength) {
    //
    // } else {
    // }
    // const response = await fetch(address)
    // const data = await response.json()
    // const stop = time * repeat
    // const limitLength = data.length / 2
    // const randomIndex = Math.round(Math.random() * data.length)
    // let condition = false
    // while (repeat > 0) {
    //
    //
    //     console.log(`The acceptable range is from ${limitLength} to ${data.length}!`)
    //
    //     repeat -= 1
    //
    //     if (randomIndex > limitLength) {
    //         condition = false
    //         reject(`${randomIndex} - Invalid`)
    //     } else {
    //         condition = true
    //         resolve(`${randomIndex} - Valid`)
    //     }
    //     taskPromiseFunc(address, 0, time).then(console.log).catch(console.warn)
    //     if (condition === false) {
    //         taskPromiseFunc(address, 0, time).then(console.log).catch(console.warn)
    //     } else {
    //         break
    //     }
    // }
};
taskPromiseFunc(yourAddress, yourRepeat, yourTime).then(console.log).catch(console.warn);
