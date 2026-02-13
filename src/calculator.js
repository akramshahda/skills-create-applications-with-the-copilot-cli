/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (√)
 */

class Calculator {
  constructor() {
    this.result = 0;
  }

  /**
   * Add two numbers
   * @param {number} a - First operand
   * @param {number} b - Second operand
   * @returns {number} The sum
   */
  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  /**
   * Subtract two numbers
   * @param {number} a - First operand
   * @param {number} b - Second operand
   * @returns {number} The difference
   */
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  /**
   * Multiply two numbers
   * @param {number} a - First operand
   * @param {number} b - Second operand
   * @returns {number} The product
   */
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

  /**
   * Divide two numbers
   * @param {number} a - First operand
   * @param {number} b - Second operand (divisor)
   * @returns {number} The quotient
   * @throws {Error} If attempting to divide by zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result = a / b;
    return this.result;
  }

  /**
   * Clear the calculator result
   */
  clear() {
    this.result = 0;
  }

  /**
   * Get the current result
   * @returns {number} The current result
   */
  getResult() {
    return this.result;
  }

  /**
   * Calculate the modulo (remainder) of two numbers
   * @param {number} a - The dividend
   * @param {number} b - The divisor (modulus)
   * @returns {number} The remainder of a divided by b
   * @throws {Error} If attempting to modulo by zero
   */
  modulo(a, b) {
    if (b === 0) {
      throw new Error('Cannot perform modulo by zero');
    }
    this.result = a % b;
    return this.result;
  }

  /**
   * Calculate the power (exponentiation) of two numbers
   * @param {number} base - The base number
   * @param {number} exponent - The exponent
   * @returns {number} The result of base raised to the exponent
   */
  power(base, exponent) {
    this.result = Math.pow(base, exponent);
    return this.result;
  }

  /**
   * Calculate the square root of a number
   * @param {number} n - The number to find the square root of
   * @returns {number} The square root of n
   * @throws {Error} If attempting to find square root of a negative number
   */
  squareRoot(n) {
    if (n < 0) {
      throw new Error('Cannot calculate square root of a negative number');
    }
    this.result = Math.sqrt(n);
    return this.result;
  }
}

module.exports = Calculator;
