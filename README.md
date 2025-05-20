# Pizza Shop - Web

##### React + TypeScript + Vite

This project is a restaurant dashboard designed for merchants who own a restaurant within a food delivery platform — similar to iFood. Built from scratch using React (without frameworks) and Tailwind CSS, the dashboard allows restaurant owners to:

- Register their restaurant, log in via email-based authentication (Magic Link), and log out.
- Monitor restaurant performance through charts and metrics (daily/monthly orders).
- View detailed information about each order.
- Update order statuses (e.g., preparing, delivering).
- Cancel orders when permitted.
- Filter orders by status, customer name, or order ID.
- Experience pagination, loading states, empty states, and skeleton screens across all lists.
- Switch between light and dark themes.

![My Project Screenshot](/src/assets/website-screenshot.png)

---

## Technologies Used

- **Vite** – Fast build tool and development environment for modern web apps.
- **shadcn/ui** – Accessible, pre-styled UI components built with Tailwind CSS.
- **Tailwind CSS** – Utility-first CSS framework for rapidly building custom UIs.
- **React Router DOM** – Declarative routing for React apps.
- **React Hook Form** – Performant and scalable form state management.
- **@hookform/resolvers** – Schema validation resolver support for forms.
- **Zod** – Type-safe schema validation library.
- **Sonner** – Toast notification library for React.
- **Recharts** – Composable chart library built with React components.
- **Axios** – HTTP client for making API requests.
- **Docker** – Containerization tool used to run the API locally.
- **Vitest** – Unit testing framework tailored for Vite projects.
- **Testing Library** – Tools for testing user interactions and accessibility.
- **happy-dom** – Lightweight DOM simulation for testing.
- **Mock Service Worker (MSW)** – Mocking layer for simulating API requests in tests.
- **Playwright** – End-to-end testing framework for modern applications.

---

## Project Information

This project was developed as part of a module from the **Rocketseat React course**, with the goal of practicing key front-end concepts like component architecture, state and form management, API integration, and testing — all within a real-world dashboard scenario.

---

## Project Structure

This project is divided into two separate folders:

- **`pizzashop-web/`** – The front-end application built during the Rocketseat React course.
- **`pizzashop-api/`** – The back-end API provided by Rocketseat. This was cloned from the official repository and is required to support the front-end features (e.g., login, orders, metrics).

> 🔗 [pizzashop-api GitHub Repository](https://github.com/martahil/pizzashop-api)
