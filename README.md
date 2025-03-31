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

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev