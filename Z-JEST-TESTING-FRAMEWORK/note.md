# Introduction
    install npm install -D jest
    change "test": "jest" script
    run : npm run test

# First Unit test case:
    - test filename should ends with .test.js

    test('', ()=> {
        expect(sum(4, 9)).toBe(13)
                         .not.toBe(40)
    })

# How to test Objects
    - 
    test('Should return name is caps-lock', ()=> {
        expect(capsLockName('sham')).toEqual({name:'SHAM'})
    })

# How to test String
    complete match
    partial match
    no match

    test('Should validate string input', ()=> {
        expect(stringFunction('input')).toMatch('input')
        .toMatch(/npu/)
        .not.toMatch('hi')
    })

# Test callback function
    test('Should return employee records', (done)=> {
        function callback (data) {
            try {
                expect(data).toMatch('hello');
                done();
            } catch(err) {
                done()
            }
        }
        fetchRecords(callback)
        
    })

# Test Promise in jest
    test('Should promise resolve', () => {
    return fetchPromisedData()
    .then(data => expect(data).toBe('Hello'))
})

# TEst Async Await promise
    test('TEst Async function ', async() => {
        const data = await fetchAsyncData();
        expect(data).toBe('hello')
    })

# Run BEfore Each Test
    the function should run before each test case so that it will get initial value

    beforeEach(()=> {
        console.warn('inital data is here')
    })

    test('test Before Each call', ()=> {
        
    })

