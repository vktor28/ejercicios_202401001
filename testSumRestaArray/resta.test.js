const rest = require("./resta");


describe("cuánto da la resta de ", () =>{
test('resta 3 - 2 = 1', () => {
    expect(rest(3, 2)).toBe(1);
  });
  
  
  test('adds 1 - 2 not equal 5', () => {
    expect(rest(1, 2)).not.toBe(-1);
  });
})