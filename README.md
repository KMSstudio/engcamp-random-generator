# Random Number Generator – SNU Freshman Engineering Camp

This project is a simple **random number generation tool** developed for the **Seoul National University Freshman Engineering Camp**.

It is built using **Next.js** with **TypeScript (TSX)** and provides an interactive interface for generating and customizing random numbers.

---

## Tech Stack

- **Next.js**
- **TypeScript (TSX)**
- Raw CSS (not using Tailwind or CSS-in-JS)
- App Router structure

---

## Pages

| Route         | Description                                 |
|---------------|---------------------------------------------|
| `/`           | Main page – A simple link to `/generate`    |
| `/generate`   | Random number generator page with sliders   |

---

## Features

- Generates random numbers between a default or user-defined range
- Users can configure:
  - The number of random values (1–30)
  - The range (start–end, within 1–100)
- Regenerate numbers using the **Regenerate** button
- Clean layout with a rotating label and background image

---

## Random Number Generation Logic

To ensure greater variety and reduce frequent duplication, this logic uses a **pseudo-unique sampling method** based on the following steps:

1. **Candidate Pool Initialization**:  
  Create an array containing all integers in the range `[start, end]` **excluding all random values generated so far since the page was loaded**.  
  For example, if `start = 1`, `end = 5`, and previously generated numbers were `4`, `8`, and `10`, then the candidate pool will be `[1, 2, 3, 5]`.  
  If the candidate pool is empty, **display `[-1]` on the screen**.

2. **Random Sampling Without Replacement**:  
  Randomly select values from the candidate pool without replacement. Remove the selected value from the pool. Repeat until the desired count (`num`) is reached.

3. **Pool Refill If Exhausted**:  
  If the candidate pool is exhausted before reaching `num`, refill the pool with the full `[start, end]` range and continue sampling.

This method increases randomness while minimizing duplication.

---

### Generation Code Snippet (TSX)

```tsx
const regenerate = () => {
  const parsedNum = parseInt(num);
  const parsedStart = parseInt(start);
  const parsedEnd = parseInt(end);
  if ( isNaN(parsedNum) || isNaN(parsedStart) || isNaN(parsedEnd) || parsedEnd < parsedStart || parsedNum <= 0 ) return;

  let candidates: number[] = [];
  const result: number[] = [];

  while (result.length < parsedNum) {
    // If length of candidate is 0, refill it.
    if (candidates.length === 0) { 
      let basePool = Array.from({ length: parsedEnd - parsedStart + 1 }, (_, i) => parsedStart + i);
      candidates = basePool.filter(n => !totalRandom.includes(n));
    }
    if (candidates.length === 0) { setNumbers([-1]); return; }

    // Pick random index
    const idx = Math.floor(Math.random() * candidates.length);
    const selected = candidates[idx];
    result.push(selected);
    // Remove selected item from candidate pool
    candidates.splice(idx, 1);
  }

  setNumbers(result);
  setTotalRandom(prev => [...prev, ...result]);
};
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev