# Matslumparen

Matslumparen is a web application designed to reduce everyday decision fatigue around cooking by answering the recurring question: "What should I eat today?"

Instead of browsing overwhelming recipe databases, Matslumparen works exclusively with the user’s own recipe collection. It generates a single, tailored meal suggestion based on contextual factors such as seasonality and current weather conditions.

The project was developed as a degree project at **Medieinstitutet**.

[Link to Live Demo](https://agneswilson.github.io/Matslumparen/)

![Gif demo](src/assets/demoGif.gif)

---

## Concept & Purpose

Matslumparen is built on two core principles:

1. **Personal recipe ownership** – The application does not provide recipes of its own. Instead, users collect, manage, and reuse their own recipes in one centralized place.

2. **Simplifying decision making** – By generating a recipe based on contextual factors like the current season and weather, the application maximizes the chances of suggesting something the user actually wants to eat.

The goal is not inspiration through abundance, but **clarity through reduction**: one suggestion at a time, based on what the user already likes.

---

## Core Features

- **Landing / Home** – Concept introduction and login entry points.
- **Recipe Randomization (Slumparen)** – Generates a single recipe suggestion from the user’s collection, filtered by current season and weather conditions.
- **Seasonality and Weather-Based Structure** – Recipes are categorized using user-defined labels rather than fixed, external logic. This reinforces the "user-first" approach; the user decides when a recipe is appropriate.
- **Weather Integration** – Current weather data is fetched from an external API and mapped into simplified states (e.g., temperature thresholds or conditions like rainy, sunny, or cloudy).
- **Recipe Management** – Interface for viewing the entire collection and individual details. Users can filter the collection based on weather conditions and seasons.
- **Mock Authentication** – A hard-coded user account simulates the logged-in experience and personalized data flow.

---

## Tech Stack

- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **UI Framework:** Material UI (MUI)
- **Linting & Formatting:** ESLint, Prettier
- **Deployment:** GitHub Pages via GitHub Actions

---

## Getting Started & Development

To run this project locally and maintain code quality, follow these steps:

### 1. Installation & Setup

```bash
# Clone the repository
git clone https://github.com/AgnesWilson/Matslumparen.git

# Install dependencies
pnpm install

# Start development server
pnpm dev

```

### 2. Code Quality Tools

The project uses **ESLint**, **Prettier**, and **TypeScript** to ensure consistency:

- **Linting:** `pnpm lint` (Check for code errors)
- **Type Checking:** `pnpm typecheck` (Verify TypeScript logic)
- **Formatting:**
  - `npx prettier . --check` (Check if files follow the style guide)
  - `npx prettier . --write` (Automatically fix formatting issues)

---

## Demo Information

### Login Credentials

To explore the personalized features, use the following mock account (also found via the **(i)** tooltip in the UI):

| Role      | Username | Password |
| :-------- | :------- | :------- |
| Mock User | Johannes | Jojo     |

### Weather Data Toggle

The app can use stable dummy data for development purposes. To toggle this:

1. Open `src/services/weatherService.ts`.
2. Locate: `const USE_DUMMY_DATA = false;`
3. Change to `true` to enable dummy data (or `false` for live data).

---

## Design Goals

- **Reduce cognitive load** rather than provide endless inspiration.
- **Build entirely** on the user’s own recipes.
- **Provide one clear suggestion** at a time.
- **Personalized seasonality:** Make weather appropriateness a user-defined concept.
- **Maintain shallow navigation:** Keep the structure simple and predictable.
- **Low-effort interactions:** Support quick decision-making.

---

## Accessibility

- **Semantic HTML:** Structure optimized for screen reader support.
- **Keyboard Navigation:** Full support for all core functionality.
- **Focus Management:** Logical focus order and clearly visible focus states.
- **Consistent UI:** Predictable navigation across all views.
- **Color Contrast:** Tested to ensure high readability and accessibility.

---

## Testing

The project utilized **iterative user testing** across three primary stages:

- **Wireframe testing:** Validating the core concept and navigational clarity.
- **Functional prototype testing:** Identifying and resolving usability issues in the early build.
- **Final prototype testing:** Ensuring a cohesive flow and an intuitive experience.

---

## Limitations & Future Improvements

### Current Limitations

- **Static Data:** Recipes and user profiles are currently hard-coded.
- **Fixed Location:** Weather fetching is currently limited to Stockholm.

### Future Roadmap

- **Backend Integration:** Database support for user accounts and full CRUD functionality.
- **Dynamic Weather:** Location-based weather fetching via GPS or manual search.
- **Smart Recipe Input:** Importing recipes via URLs, image uploads, or manual input.

---

## Project Links

- **Live Demo:** [https://agneswilson.github.io/Matslumparen/](https://agneswilson.github.io/Matslumparen/)
- **Wireframes (Figma):** [Link to Figma Design](https://www.figma.com/design/dLATPW2Ci0ceR6BicNtzLu/Slutprojekt-planeringsapp?node-id=1-2&p=f)

- **Full project report (PDF):** [Project report (PDF)](docs/MatslumparenReport.pdf)

---

## Author

Agnes Wilson

Degree Project – Fed24D

Medieinstitutet
