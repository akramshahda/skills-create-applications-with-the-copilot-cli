const Calculator = require('../calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('Addition', () => {
    it('should add two positive numbers', () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(calc.add(-5, -3)).toBe(-8);
    });

    it('should add positive and negative numbers', () => {
      expect(calc.add(10, -4)).toBe(6);
    });

    it('should add zero', () => {
      expect(calc.add(0, 5)).toBe(5);
      expect(calc.add(5, 0)).toBe(5);
    });

    it('should add decimal numbers', () => {
      expect(calc.add(2.5, 3.5)).toBe(6);
    });

    it('should handle large numbers', () => {
      expect(calc.add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two positive numbers', () => {
      expect(calc.subtract(10, 4)).toBe(6);
    });

    it('should subtract resulting in negative', () => {
      expect(calc.subtract(5, 10)).toBe(-5);
    });

    it('should subtract negative numbers', () => {
      expect(calc.subtract(-5, -3)).toBe(-2);
    });

    it('should subtract zero', () => {
      expect(calc.subtract(5, 0)).toBe(5);
      expect(calc.subtract(0, 5)).toBe(-5);
    });

    it('should subtract decimal numbers', () => {
      expect(calc.subtract(10.5, 4.2)).toBe(6.3);
    });

    it('should subtract from itself to get zero', () => {
      expect(calc.subtract(7, 7)).toBe(0);
    });
  });

  describe('Multiplication', () => {
    it('should multiply two positive numbers', () => {
      expect(calc.multiply(45, 2)).toBe(90);
    });

    it('should multiply by zero', () => {
      expect(calc.multiply(5, 0)).toBe(0);
      expect(calc.multiply(0, 5)).toBe(0);
    });

    it('should multiply negative numbers', () => {
      expect(calc.multiply(-5, -3)).toBe(15);
    });

    it('should multiply positive and negative numbers', () => {
      expect(calc.multiply(5, -3)).toBe(-15);
      expect(calc.multiply(-5, 3)).toBe(-15);
    });

    it('should multiply by one', () => {
      expect(calc.multiply(7, 1)).toBe(7);
    });

    it('should multiply decimal numbers', () => {
      expect(calc.multiply(2.5, 4)).toBe(10);
    });

    it('should multiply large numbers', () => {
      expect(calc.multiply(1000, 2000)).toBe(2000000);
    });
  });

  describe('Division', () => {
    it('should divide two positive numbers', () => {
      expect(calc.divide(20, 5)).toBe(4);
    });

    it('should divide resulting in decimal', () => {
      expect(calc.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    it('should divide negative numbers', () => {
      expect(calc.divide(-10, -5)).toBe(2);
    });

    it('should divide positive and negative numbers', () => {
      expect(calc.divide(10, -5)).toBe(-2);
      expect(calc.divide(-10, 5)).toBe(-2);
    });

    it('should divide by one', () => {
      expect(calc.divide(7, 1)).toBe(7);
    });

    it('should divide decimal numbers', () => {
      expect(calc.divide(10, 2.5)).toBe(4);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calc.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    it('should throw error when dividing zero by zero', () => {
      expect(() => calc.divide(0, 0)).toThrow('Cannot divide by zero');
    });

    it('should handle division of zero', () => {
      expect(calc.divide(0, 5)).toBe(0);
    });
  });

  describe('Clear and Get Result', () => {
    it('should clear the calculator', () => {
      calc.add(5, 3);
      expect(calc.getResult()).toBe(8);
      calc.clear();
      expect(calc.getResult()).toBe(0);
    });

    it('should get result after addition', () => {
      calc.add(2, 3);
      expect(calc.getResult()).toBe(5);
    });

    it('should get result after subtraction', () => {
      calc.subtract(10, 4);
      expect(calc.getResult()).toBe(6);
    });

    it('should get result after multiplication', () => {
      calc.multiply(45, 2);
      expect(calc.getResult()).toBe(90);
    });

    it('should get result after division', () => {
      calc.divide(20, 5);
      expect(calc.getResult()).toBe(4);
    });

    it('should track the most recent operation result', () => {
      calc.add(2, 3);
      expect(calc.getResult()).toBe(5);
      calc.multiply(2, 2);
      expect(calc.getResult()).toBe(4);
    });
  });

  describe('Example Operations from Image', () => {
    it('should calculate 2 + 3 = 5', () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    it('should calculate 10 - 4 = 6', () => {
      expect(calc.subtract(10, 4)).toBe(6);
    });

    it('should calculate 45 * 2 = 90', () => {
      expect(calc.multiply(45, 2)).toBe(90);
    });

    it('should calculate 20 / 5 = 4', () => {
      expect(calc.divide(20, 5)).toBe(4);
    });
  });

  describe('Edge Cases', () => {
    it('should handle very small decimal numbers', () => {
      expect(calc.add(0.0001, 0.0002)).toBeCloseTo(0.0003, 4);
    });

    it('should handle operations with Infinity', () => {
      const result = calc.divide(1, 0.0000001);
      expect(result).toBeGreaterThan(1000000);
    });

    it('should maintain precision with multiple operations', () => {
      calc.add(0.1, 0.2);
      const result = calc.getResult();
      expect(result).toBeCloseTo(0.3, 5);
    });
  });

  describe('Modulo', () => {
    it('should calculate modulo of two positive numbers', () => {
      expect(calc.modulo(5, 2)).toBe(1);
    });

    it('should calculate modulo with exact divisor', () => {
      expect(calc.modulo(10, 5)).toBe(0);
    });

    it('should calculate modulo with negative dividend', () => {
      expect(calc.modulo(-5, 2)).toBe(-1);
    });

    it('should calculate modulo with negative divisor', () => {
      expect(calc.modulo(5, -2)).toBe(1);
    });

    it('should calculate modulo with both negative numbers', () => {
      expect(calc.modulo(-5, -2)).toBe(-1);
    });

    it('should calculate modulo with decimal numbers', () => {
      expect(calc.modulo(5.5, 2)).toBeCloseTo(1.5, 5);
    });

    it('should throw error when modulo by zero', () => {
      expect(() => calc.modulo(10, 0)).toThrow('Cannot perform modulo by zero');
    });

    it('should handle modulo of zero', () => {
      expect(calc.modulo(0, 5)).toBe(0);
    });

    it('should calculate modulo with large numbers', () => {
      expect(calc.modulo(1000000, 3)).toBe(1);
    });
  });

  describe('Power (Exponentiation)', () => {
    it('should calculate power of two positive numbers', () => {
      expect(calc.power(2, 3)).toBe(8);
    });

    it('should calculate power with exponent of zero', () => {
      expect(calc.power(5, 0)).toBe(1);
    });

    it('should calculate power with exponent of one', () => {
      expect(calc.power(5, 1)).toBe(5);
    });

    it('should calculate power with negative exponent', () => {
      expect(calc.power(2, -2)).toBe(0.25);
    });

    it('should calculate power with negative base', () => {
      expect(calc.power(-2, 3)).toBe(-8);
    });

    it('should calculate power with negative base and even exponent', () => {
      expect(calc.power(-2, 2)).toBe(4);
    });

    it('should calculate power with decimal base', () => {
      expect(calc.power(2.5, 2)).toBe(6.25);
    });

    it('should calculate power with decimal exponent', () => {
      expect(calc.power(4, 0.5)).toBe(2);
    });

    it('should calculate power with large exponent', () => {
      expect(calc.power(2, 10)).toBe(1024);
    });

    it('should calculate power of zero base', () => {
      expect(calc.power(0, 5)).toBe(0);
    });

    it('should calculate power with both numbers as one', () => {
      expect(calc.power(1, 100)).toBe(1);
    });
  });

  describe('Square Root', () => {
    it('should calculate square root of perfect square', () => {
      expect(calc.squareRoot(16)).toBe(4);
    });

    it('should calculate square root of non-perfect square', () => {
      expect(calc.squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    it('should calculate square root of zero', () => {
      expect(calc.squareRoot(0)).toBe(0);
    });

    it('should calculate square root of one', () => {
      expect(calc.squareRoot(1)).toBe(1);
    });

    it('should calculate square root of decimal number', () => {
      expect(calc.squareRoot(2.25)).toBe(1.5);
    });

    it('should calculate square root of very small number', () => {
      expect(calc.squareRoot(0.0001)).toBe(0.01);
    });

    it('should calculate square root of large number', () => {
      expect(calc.squareRoot(10000)).toBe(100);
    });

    it('should throw error when square root of negative number', () => {
      expect(() => calc.squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    it('should throw error when square root of negative one', () => {
      expect(() => calc.squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    });

    it('should throw error when square root of very small negative number', () => {
      expect(() => calc.squareRoot(-0.0001)).toThrow('Cannot calculate square root of a negative number');
    });
  });

  describe('Example Operations from Extended Image', () => {
    it('should calculate 5 % 2 = 1', () => {
      expect(calc.modulo(5, 2)).toBe(1);
    });

    it('should calculate 2 ^ 3 = 8', () => {
      expect(calc.power(2, 3)).toBe(8);
    });

    it('should calculate √16 = 4', () => {
      expect(calc.squareRoot(16)).toBe(4);
    });
  });

  describe('Result Tracking with Advanced Operations', () => {
    it('should track result after modulo', () => {
      calc.modulo(10, 3);
      expect(calc.getResult()).toBe(1);
    });

    it('should track result after power', () => {
      calc.power(3, 2);
      expect(calc.getResult()).toBe(9);
    });

    it('should track result after square root', () => {
      calc.squareRoot(25);
      expect(calc.getResult()).toBe(5);
    });

    it('should update result when chaining operations', () => {
      calc.add(2, 3);
      expect(calc.getResult()).toBe(5);
      calc.power(calc.getResult(), 2);
      expect(calc.getResult()).toBe(25);
    });

    it('should clear result after advanced operations', () => {
      calc.modulo(10, 3);
      calc.clear();
      expect(calc.getResult()).toBe(0);
    });
  });
});
