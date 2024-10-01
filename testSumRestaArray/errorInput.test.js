const probandoInput = require("./errorInput");

test("input es valido con blabla?", () => {
    expect( () => {
        probandoInput("blablablablebliblibloblu")
    }).toThrow()
})

test("input es valido con numero?", () => {
    expect( () => {
        probandoInput(9-2);
    }).toThrow()
})