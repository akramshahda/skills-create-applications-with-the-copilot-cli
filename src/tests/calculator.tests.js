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
});
