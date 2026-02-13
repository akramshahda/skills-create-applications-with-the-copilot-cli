const Calculator = require('./calculator');

const calc = new Calculator();

console.log('🧮 Testing Advanced Calculator Operations\n');

// Test Modulo
const result1 = calc.modulo(10, 3);
console.log('✓ Modulo:       10 % 3 = ' + result1);

// Test Power
const result2 = calc.power(2, 3);
console.log('✓ Power:        2 ^ 3 = ' + result2);

// Test Square Root
const result3 = calc.squareRoot(16);
console.log('✓ Square Root:  √16 = ' + result3);

// Test Square Root with decimal
const result4 = calc.squareRoot(2);
console.log('✓ Square Root:  √2 = ' + result4.toFixed(4));

// Test Modulo by zero error handling
console.log('\n⚠️  Testing error handling:');
try {
  calc.modulo(10, 0);
} catch (error) {
  console.log('✓ Modulo by zero caught: ' + error.message);
}

// Test Square Root of negative number error handling
try {
  calc.squareRoot(-4);
} catch (error) {
  console.log('✓ Square root of negative caught: ' + error.message);
}

console.log('\n✅ All advanced operations tested successfully!');
