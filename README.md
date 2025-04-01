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

To ensure more variety and prevent repeated values too frequently, this generator uses a **pseudo-unique sampling method** based on the following steps:

1. **Initialize the candidate pool**:  
   Create an array containing all integers in the range `[start, end]`.

2. **Random sampling without replacement**:  
   Randomly select one value from the pool and remove it. Repeat until the desired count (`num`) is reached.

3. **Pool refill if exhausted**:  
   If the pool runs out of values before reaching `num`, refill it with the full range again.

This approach increases randomness while minimizing duplication.

---

### Generation Code Snippet (TSX)

```tsx
const regenerate = () => {
  const parsedNum = parseInt(num);
  const parsedStart = parseInt(start);
  const parsedEnd = parseInt(end);
  if (
    isNaN(parsedNum) || isNaN(parsedStart) || isNaN(parsedEnd) ||
    parsedEnd < parsedStart || parsedNum <= 0
  ) return;

  let candidates: number[] = [];
  const result: number[] = [];

  while (result.length < parsedNum) {
    if (candidates.length === 0) {
      candidates = Array.from({ length: parsedEnd - parsedStart + 1 }, (_, i) => parsedStart + i);
    }

    const idx = Math.floor(Math.random() * candidates.length);
    const selected = candidates[idx];
    result.push(selected);
    candidates.splice(idx, 1);
  }

  setNumbers(result);
};
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev