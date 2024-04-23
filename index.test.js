const {suma, fromDollarToYen, fromEuroToDollar, fromYanToPound} = require('./index');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('test 1 dollar to Yen', () => {
    expect(fromDollarToYen(1)).toBe(154.83);
  });

  test('test 1 euro to dollar', () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
  });

  test('test 1 Yen to dollar', () => {
    expect(fromYanToPound(1)).toBe(0.0053);
  });