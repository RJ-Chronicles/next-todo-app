const fetchPromisedData = require("./fetch-promised-data")

test('Should promise resolve', () => {
    return fetchPromisedData()
    .then(data => expect(data).toBe('Hello'))
})


    test('TEst Async function ', async() => {
        const data = await fetchPromisedData();
        expect(data).toBe('Hello')
    })