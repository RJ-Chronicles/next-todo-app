const capsLock = require("./capLock")


test('Should capslock give name', () => {
    expect(capsLock('neeraja')).toEqual({name:'NEERAJA'})
})