const capsLock = require("./capLock")


test('Should capslock give name', () => {
    expect(capsLock('sham')).toEqual({name:'sham'})
})