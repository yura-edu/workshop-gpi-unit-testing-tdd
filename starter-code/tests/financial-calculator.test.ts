import {
  calculateCompoundInterest,
  applyDiscount,
  calculateTax,
  splitAmount,
  convertCurrency,
} from '../src/financial-calculator'

describe('calculateCompoundInterest', () => {
  // TODO: write your tests following TDD (Red → Green → Refactor)
  //
  // Example scenarios to cover:
  //   - Basic compound interest calculation
  //   - Rate = 0 (returns principal unchanged)
  //   - Periods = 0 (returns principal)
  //   - Negative rate or principal
  //   - Result rounded to 2 decimal places
})

describe('applyDiscount', () => {
  // TODO: write your tests
  //
  // Scenarios to cover:
  //   - Typical discount (e.g. 20% off 100 = 80)
  //   - 0% discount (amount unchanged)
  //   - 100% discount (returns 0)
  //   - discountPercent > 100 → throws Error
  //   - discountPercent < 0 → throws Error
})

describe('calculateTax', () => {
  // TODO: write your tests
  //
  // Scenarios to cover:
  //   - Typical tax (e.g. 19% of 200 = 38)
  //   - taxRate = 0 (returns 0)
  //   - Negative amount
  //   - Result rounded to 2 decimal places
})

describe('splitAmount', () => {
  // TODO: write your tests
  //
  // Scenarios to cover:
  //   - Evenly divisible (e.g. 100 / 4 = [25, 25, 25, 25])
  //   - Not evenly divisible — last part absorbs remainder (e.g. 10 / 3 = [3.33, 3.33, 3.34])
  //   - parts = 1 (returns [total])
  //   - parts = 0 → throws Error
  //   - parts < 0 → throws Error
})

describe('convertCurrency', () => {
  // TODO: write your tests
  //
  // Scenarios to cover:
  //   - Typical conversion (e.g. 100 USD × 0.92 = 92 EUR)
  //   - Result rounded to 2 decimal places
  //   - amount = 0 → throws Error (must be positive)
  //   - rate = 0 → throws Error (must be positive)
  //   - Negative amount or rate → throws Error
})
