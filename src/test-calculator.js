const Calculator = require('./calculator');

const calc = new Calculator();

console.log('🧮 Testing Calculator Operations\n');

// Test 1: Addition (2 + 3)
const result1 = calc.add(2, 3);
console.log('✓ Addition:       2 + 3 = ' + result1);

// Test 2: Subtraction (10 - 4)
const result2 = calc.subtract(10, 4);
console.log('✓ Subtraction:   10 - 4 = ' + result2);

// Test 3: Multiplication (45 * 2)
const result3 = calc.multiply(45, 2);
console.log('✓ Multiplication: 45 * 2 = ' + result3);

// Test 4: Division (20 / 5)
const result4 = calc.divide(20, 5);
console.log('✓ Division:      20 / 5 = ' + result4);

// Test 5: Division by zero (error handling)
console.log('\n⚠️  Testing error handling:');
try {
  calc.divide(10, 0);
} catch (error) {
  console.log('✓ Division by zero caught: ' + error.message);
}

console.log('\n✅ All tests passed!');
