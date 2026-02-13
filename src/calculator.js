/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
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
}

module.exports = Calculator;
