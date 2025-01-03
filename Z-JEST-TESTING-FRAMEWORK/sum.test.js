const sum = require('./sum')

test('Should give addition of given parameters', ()=> {
    expect(sum(2,3)).toBe(5)
})