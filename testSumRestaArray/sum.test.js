//aquí se hace la prueba de testing con el métiido expect
//primero se imporata la función
const sum = require('./sum');

/*test('suma bien los números 3+2?', () => {
  if(suma(3,2) === 5) {
    console.log("correcto, suma 5");
} else { 
  console.log("debería ser 5");
  throw Error;

}
}
)
*/


describe("cuánto suma ", () =>{

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});


test('adds 1 + 2 not equal 5', () => {
  expect(sum(1, 2)).not.toBe(5);
});
})

test("multipplicar 2*2", () =>{
 const valor = 2*2;
 expect(valor).toBeGreaterThan(2.5);
 expect(valor).toBeGreaterThanOrEqual(4);
} )