# Dev Stack

Dev Stack is a responsive React application for exploring popular web development technologies and building a personal technology stack. It follows the provided Assignment 5 design with a clean card layout, a sticky navigation bar, and an interactive stack sidebar.

## Live Site

[View Dev Stack on Cloudflare Pages](https://assignments5.pages.dev/)

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- CSS3
- JSON
- React Toastify

## Main Features

1. Browse 12 technologies loaded from a separate JSON file, with a loading state while the data is fetched.
2. Add technologies to a personal stack without duplicates, then remove one item or clear the full stack.
3. Receive toast messages for add, duplicate, remove, and remove-all actions on a responsive desktop, tablet, and mobile layout.

## Run Locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Cloudflare Pages Deployment

Use these build settings when connecting the GitHub repository to Cloudflare Pages:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank

For a direct upload, run `npm run build` locally and upload the generated `dist` folder instead of the project source folder.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like markup inside JavaScript. React uses it because it makes a component's structure easier to read and connect with its logic.

### 2. What is the difference between props and state?

Props are values a parent gives to a child component. State is data managed inside a component that can change and cause the interface to update.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in a functional component. I used it for the mobile menu, loaded technologies, loading and error values, and the selected stack items.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders. I used it to fetch the local JSON file once when the technology section first loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify which list item was added, removed, or changed. This lets React update the correct element efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In `StackPanel`, the empty message appears when no technologies are selected; otherwise, the selected item list appears.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child sends an event back by calling a function received through props, such as `TechnologyCard` calling `onAdd` when its button is clicked.

## Repository

[GitHub Repository](https://github.com/kamrullab/assignment-5)
