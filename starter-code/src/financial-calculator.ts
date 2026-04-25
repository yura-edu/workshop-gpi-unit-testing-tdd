/**
 * Financial Calculator
 *
 * Apply TDD for each function below:
 *   1. Write the test first (Red — test fails)
 *   2. Implement the minimum code to pass (Green)
 *   3. Refactor while keeping tests green (Refactor)
 *   4. Commit: git commit -m "feat: implement <functionName> with TDD"
 */

/**
 * Calculates compound interest.
 * @param principal - The initial amount
 * @param rate - Interest rate as a decimal (e.g. 0.05 for 5%)
 * @param periods - Number of compounding periods
 * @returns principal × (1 + rate)^periods, rounded to 2 decimal places
 */
export function calculateCompoundInterest(
  principal: number,
  rate: number,
  periods: number,
): number {
  throw new Error('not implemented')
}

/**
 * Applies a percentage discount to an amount.
 * @param amount - The original amount
 * @param discountPercent - Discount percentage (must be in range [0, 100])
 * @returns amount × (1 - discountPercent/100), rounded to 2 decimal places
 * @throws Error if discountPercent is negative or greater than 100
 */
export function applyDiscount(amount: number, discountPercent: number): number {
  throw new Error('not implemented')
}

/**
 * Calculates tax on an amount.
 * @param amount - The base amount
 * @param taxRate - Tax rate as a decimal (e.g. 0.19 for 19%)
 * @returns amount × taxRate, rounded to 2 decimal places
 */
export function calculateTax(amount: number, taxRate: number): number {
  throw new Error('not implemented')
}

/**
 * Splits a total into equal parts.
 * If the total is not evenly divisible, the last part absorbs the remaining cents.
 * @param total - The total amount to split
 * @param parts - Number of parts (must be > 0)
 * @returns Array of `parts` numbers that sum exactly to total
 * @throws Error if parts is 0 or negative
 */
export function splitAmount(total: number, parts: number): number[] {
  throw new Error('not implemented')
}

/**
 * Converts an amount from one currency to another.
 * @param amount - The amount to convert (must be positive)
 * @param rate - The exchange rate (must be positive)
 * @returns amount × rate, rounded to 2 decimal places
 * @throws Error if amount or rate is not positive
 */
export function convertCurrency(amount: number, rate: number): number {
  throw new Error('not implemented')
}
