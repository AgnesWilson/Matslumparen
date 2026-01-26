# Matslumparen

Matslumparen is a web application designed to reduce everyday decision fatigue around cooking by answering the recurring question: "What should I eat today?"

Instead of browsing overwhelming recipe databases, Matslumparen works exclusively with the user’s own recipe collection. It generates a single, tailored meal suggestion based on contextual factors such as seasonality and current weather conditions.

The project was developed as a degree project at **Medieinstitutet**.

[Link to Live Demo](https://agneswilson.github.io/Matslumparen/)

---

## Concept & Purpose

Matslumparen is built on two core principles:

1. **Personal recipe ownership** The application does not provide recipes of its own. Instead, users collect, manage, and reuse their own recipes in one centralized place.

2. **Simplifying decision making** by generating a recipe based on contextual factors like the current season and weather, the application maximizes the chances of suggesting something the user actually wants to eat.

The goal is not inspiration through abundance, but **clarity through reduction**: one suggestion at a time, based on what the user already likes.

---

## Core Features

- **Landing / Home**
  Concept introduction and login entry points.

- **Recipe Randomization (Slumparen)** Generates a single recipe suggestion from the user’s collection, filtered by current season and weather conditions.

- **Seasonality and Weather-Based Structure** Recipes are categorized using user-defined labels rather than fixed, external logic. This reinforces the "user-first" approach; one user might feel that pizza is only suitable for summer, while another feels the opposite. By allowing the user to define these parameters, the app maximizes user satisfaction.

- **Weather Integration** Current weather data is fetched from an external API and mapped into simplified states (e.g., temperature thresholds or conditions like rainy, sunny, or cloudy).

- **Recipe Management** The interface supports viewing the entire collection and individual recipe details. In this prototype, a set of recipes is provided to demonstrate the logic. The user can, when viewing the entire recipe collection, filter recipes based on weather conditions and seasons.

- **Mock Authentication** A hard-coded user account simulates the logged-in experience and personalized data flow.

---

## Tech Stack

- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **UI Framework:** Material UI (MUI)
- **Linting & Formatting:** ESLint, Prettier
- **Deployment:** GitHub Pages via GitHub Actions

---

---

## Getting Started & Development

To run this project locally and maintain code quality, follow these steps:

### 1. Installation & Setup

```bash
# Clone the repository
git clone [https://github.com/agneswilson/Matslumparen.git](https://github.com/agneswilson/Matslumparen.git)

# Install dependencies
pnpm install

# Start development server
pnpm dev

```

### 2. Code Quality Tools

The project uses **ESLint**, **Prettier**, and **TypeScript** to ensure consistency and code quality:

- **Linting:**
  - `pnpm lint` (Check for code errors)
- **Type Checking:**
  - `pnpm typecheck` (Verify TypeScript logic)
- **Formatting:**
  - `npx prettier . --check` (Check if files follow the style guide)
  - `npx prettier . --write` (Automatically fix formatting issues)

---

## Demo Information

### Login Credentials

To explore the personalized features in the prototype, use the following mock account:
(This information is also shown in the UI under the (i) - symbol tooltip.)

- **Username:** `Johannes`
- **Password:** `Jojo`

### Weather Data Toggle

The application can use stable dummy data for development purpuses. To enable dummy data instead of live fetching:

1. Open `src/services/weatherService.ts`.
2. Locate the line: `const USE_DUMMY_DATA = false;`
3. Change the value to: `true`.

## Design Goals

The project was guided by the following design goals:

- Reduce cognitive load rather than provide endless inspiration.
- Build entirely on the user’s own recipes.
- Provide one clear suggestion at a time.
- Make seasonality and weather appropriateness for a recipe a personal, user-defined concept.
- Keep navigation shallow and predictable.
- Support quick, low-effort interactions.

---

## Accessibility

Accessibility has been a priority from the initial design phase:

- **Semantic HTML** structure for screen reader support.
- **Full keyboard navigation** for all core functionality.
- **Logical focus order** and clearly visible focus states.
- **Consistent navigation** across all views.
- **Color contrast testing** to ensure readability without relying solely on color cues.

---

## Testing

The project utilized **iterative user testing** across three primary stages to ensure a user-centric final product:

- **Wireframe testing:** Validating the core concept and navigational clarity.
- **Functional prototype testing:** Identifying and resolving usability issues in the early build.
- **Final prototype testing:** Ensuring a cohesive flow and an intuitive overall experience.

---

## Limitations & Future Improvements

### Current Limitations

- **Static Data:** Recipes and user profiles are currently hard-coded.
- **Fixed Location:** Weather fetching is currently limited to Stockholm.

### Future Roadmap

- **Backend Integration:** Implementing a full database to support user accounts and complete CRUD (Create, Read, Update, Delete) functionality for recipes and users.
- **Dynamic Weather:** Location-based weather fetching via GPS or manual search.
- **Recipe Input:** Adding methods for recipe import via URLs, image uploads, or manual user input.

---

## Project Links

- **Live Demo:** [https://agneswilson.github.io/Matslumparen/](https://agneswilson.github.io/Matslumparen/)
- **Wireframes (Figma):** [Link to Figma Design](https://www.figma.com/design/dLATPW2Ci0ceR6BicNtzLu/Slutprojekt-planeringsapp?node-id=1-2&p=f)

---

## Author

Agnes Wilson
Degree Project – Fed24D
Medieinstitutet
