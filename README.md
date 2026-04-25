# Unit Testing con TDD

> **Tipo:** TESTING · **Duración estimada:** 180 min · **Nivel:** Intermedio · **Prerequisito:** Git Workflow Básico

## Objetivo

Aplicar el ciclo Red-Green-Refactor de TDD para desarrollar una calculadora financiera con cobertura ≥ 85%, complejidad ciclomática ≤ 8, y commits que representen ciclos TDD completos.

## Contexto

El Test-Driven Development invierte el orden natural: primero el test (Red), luego el código mínimo que lo hace pasar (Green), luego refactorizar manteniendo los tests en verde (Refactor). Este ciclo te obliga a pensar en la interfaz antes de la implementación.

El repositorio incluye las firmas de 5 funciones financieras sin implementar. Tu tarea: escribir primero los tests, luego implementar, y que cada commit capture un ciclo TDD completo.

## Instrucciones

### 1. Prepara tu entorno

```bash
git clone <url-de-tu-repositorio>
cd workshop-gpi-unit-testing-tdd
npm install
npm test
# Verás: 5 suites, 0 tests — aún no hay tests escritos
```

### 2. Crea tu rama de trabajo

```bash
git checkout -b feat/financial-calculator-tdd
```

### 3. Aplica el ciclo TDD para cada función

Repite este ciclo para cada una de las 5 funciones en `src/financial-calculator.ts`:

**Red** — Escribe los tests primero en `tests/financial-calculator.test.ts`:
```bash
npm test   # los tests deben fallar (función no implementada)
```

**Green** — Implementa el mínimo código necesario:
```bash
npm test   # los tests deben pasar
```

**Refactor** — Mejora claridad o eficiencia sin cambiar comportamiento:
```bash
npm test   # los tests siguen pasando
```

**Commit** — Captura el ciclo completo:
```bash
git add .
git commit -m "feat: implement calculateCompoundInterest with TDD"
```

### 4. Verifica cobertura y calidad

```bash
npm run test:coverage   # cobertura debe ser ≥ 85%
npm run lint            # debe mostrar 0 errores
```

### 5. Abre el Pull Request

1. `git push origin feat/financial-calculator-tdd`
2. Abre un PR hacia `main`
3. Verifica que el pipeline de GitHub Actions pase (pestaña **Checks**)

## Funciones a implementar

| Función | Descripción |
|---|---|
| `calculateCompoundInterest(principal, rate, periods)` | principal × (1 + rate)^periods, redondeo a 2 decimales |
| `applyDiscount(amount, discountPercent)` | amount × (1 - discountPercent/100); error si fuera de [0, 100] |
| `calculateTax(amount, taxRate)` | amount × taxRate, redondeo a 2 decimales |
| `splitAmount(total, parts)` | divide en `parts` partes; la última absorbe los centavos restantes |
| `convertCurrency(amount, rate)` | amount × rate; error si alguno no es positivo |

**Casos borde a cubrir en tus tests:** montos negativos, tasas negativas, parts = 0, discountPercent > 100, redondeo a 2 decimales.

## Criterios de evaluación

| Métrica | Peso | Umbral |
|---|---|---|
| Cobertura de tests | 35% | ≥ 85% en líneas y ramas |
| Tasa de tests pasando | 25% | 100% de los tests pasan |
| Complejidad ciclomática | 15% | CC ≤ 8 en todas las funciones |
| Calidad de commits | 15% | ≥ 70% siguen Conventional Commits (mín. 6 commits) |
| Violaciones de lint | 10% | 0 errores de ESLint |

## Recursos

- [Jest — Getting Started](https://jestjs.io/docs/getting-started)
- [TDD by Example — Kent Beck](https://www.oreilly.com/library/view/test-driven-development/0321146530/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Cyclomatic Complexity explained](https://www.ibm.com/docs/en/raa/6.1?topic=metrics-cyclomatic-complexity)
