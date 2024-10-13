const yourAddress = 'https://jsonplaceholder.typicode.com/comments/'
const yourRepeat = 3
const yourTime = 2000

const taskPromiseFunc = async (address: string, repeat: number, time: number) => {
    try {
        const random = Math.random() * 2
        console.log(random)
        const response = await fetch(random >= 1 ? address : 'BadAddress404.com')

        if (response.ok) {
            console.log('Good!')
            return await response.json()
        } else {
            throw Error('Attempts have been exhausted')
        }

    } catch (e) {
        if (repeat > 1) {
            await new Promise(resolve => setTimeout(resolve, time))
            return taskPromiseFunc(address, repeat - 1, time)
        } else {
            throw e
        }
    }
}

taskPromiseFunc(yourAddress, yourRepeat, yourTime).then(console.log).catch(console.warn)
