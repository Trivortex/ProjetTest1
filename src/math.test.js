const Util = require('./math');
test('Test factoriel de 0 => 1', () => {
    expect(Util.factorial(0)).toBe(1);
});

test('Test factoriel de 2 => 2', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3 => 6', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3000', () => {
    expect(()=> {Util.factorial(3000)}).toThrow();
});

test('Test factoriel -10', () => {
    expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
});


describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});

describe('sumPrime', function () {
  test('Test sumPrime 6 = 10', () => {
    expect(Util.sumPrime(6)).toBe(10)
  });

  test('Test sumPrime 8 = 17', () => {
    expect(Util.sumPrime(8)).toBe(17)
  });

  test('Test sumPrime < 2 => throw exception', () => {
      expect(() => { Util.sumPrime(1) }).toThrow('Unable to compute sumPrime for n < 2');
  });

  test.each([
      [2, 2],
      [5, 10],
      [17, 58],
      [18, 58],
      [53, 381],
      [55, 381],
  ])(
      'isPrime %i equals to %i',
      (n, expected) => {
          expect(Util.sumPrime(n)).toBe(expected);
      }
  );
});

describe('fizzBuzz', function () {
  test('Test fizzBuzz 15 = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]', () => {
    expect(Util.fizzBuzz(15)).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"])
  });

  test('Test fizzBuzz 1 is Array', () => {
    expect(Array.isArray(Util.fizzBuzz(1))).toBe(true)
  });

  test('Test fizzBuzz < 1 => throw exception', () => {
      expect(() => { Util.fizzBuzz(0) }).toThrow('Unable to compute fizzBuzz for n < 1');
  });
});

describe('cipher', function () {
  test('Test "Test Unitaire" "Uftu Vojubjsf"', () => {
    expect(Util.cipher("Test Unitaire")).toEqual("Uftu Vojubjsf")
  });

  test('Test AaZz BbAa',() => {
    expect(Util.cipher("AaZz")).toEqual("BbAa")
  })

  test('Test empty phrase',() => {
    expect(Util.cipher("")).toEqual("")
  })

  test('Test special char',() => {
    expect(Util.cipher("éè,!")).toEqual("éè,!")
  })
});
