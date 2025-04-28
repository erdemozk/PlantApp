# PlantApp - Case Study 🪴

![React Native](https://img.shields.io/badge/React%20Native-0.79.1-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-blue?logo=typescript) ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.7.0-764ABC?logo=redux) ![React Navigation](https://img.shields.io/badge/React%20Navigation-7.x-blue)

This repository contains the source code for PlantApp, a React Native mobile application developed as a case study.

## ✨ Features

*   **Onboarding Flow:**
    *   **Get Started Screen:** Initial welcome screen.
    *   **Multi-Step Onboarding:** Introduces core features (Identify, Care Guides) with visual aids and pagination.
    *   **Paywall Screen:** Presents premium subscription options with feature highlights.
*   **Main Application (Tab-Based Navigation):**
    *   **Home Screen:** Displays dynamic content including greetings, search, premium promotion banner, "Get Started" questions (fetched from API), and categorized content (fetched from API).
    *   **Diagnose Screen:** (Placeholder) Intended for plant disease diagnosis features.
    *   **Scan Screen:** (Placeholder UI, but functional navigation) Central action button to initiate plant scanning/identification.
    *   **My Garden Screen:** (Placeholder) Intended for users to manage their collection of plants.
    *   **Profile Screen:** (Placeholder) Intended for user account settings and information.
*   **State Management:** Utilizes Redux Toolkit for managing application state, including asynchronous data fetching for categories and questions.
*   **API Integration:** Fetches data (categories, questions) from a dummy backend API using Axios.
*   **Custom UI Components:** Includes reusable custom elements (`Button`, `Icon`, `GradientText`, `UnderlinedText`) and components (`PaginationDots`, `ScanBottomButton`, `QuestionCard`, `CategoryCard`).
*   **Styling:** Uses React Native `StyleSheet` with utility functions for responsive scaling (`smartScale`, `verticalScale`).
*   **Navigation:** Implements stack navigation for the onboarding flow and bottom tab navigation for the main app using React Navigation. Features a custom central tab button.
*   **Persistence:** Uses AsyncStorage to track onboarding completion status.

## 📸 Screenshots / GIFs

| Get Started                 | Onboarding 1                | Onboarding 2                |
| :--------------------------: | :--------------------------: | :--------------------------: |
| ![Get Started Screen](readmeAssets/getStarted.png) | ![Onboarding Screen 1](readmeAssets/onboarding1.png) | ![Onboarding Screen 2](readmeAssets/onboarding2.png) |

| Paywall                     | Home Screen                 | In App GIF              |
| :--------------------------: | :--------------------------: | :--------------------------: |
| ![Paywall Screen](readmeAssets/paywall.png) | ![Home Screen](readmeAssets/home.png) | ![In App](readmeAssets/in-app.gif) |

## 🛠️ Tech Stack

*   **Core:** React Native 0.79.1, React 19, TypeScript
*   **Navigation:** React Navigation (Native Stack, Bottom Tabs)
*   **State Management:** Redux Toolkit, React-Redux
*   **API Client:** Axios
*   **UI Components:**
    *   React Native Vector Icons (IcoMoon)
    *   React Native Linear Gradient
    *   React Native SVG
    *   React Native Masked View
    *   React Native Safe Area Context
    *   React Native Gesture Handler
*   **Persistence:** Async Storage

## 📂 Project Structure

The project is organized with a clear separation of concerns. Key directories and configuration files are listed below:

| Path / File                | Description                                                              |
| :------------------------- | :----------------------------------------------------------------------- |
| **Root Level**             |                                                                          |
| `android/`                 | Native project files for the Android platform.                           |
| `ios/`                     | Native project files for the iOS platform.                               |
| `src/`                     | Contains the core application source code (see details below).           |
| `App.tsx`                  | Root React component, sets up Redux, Navigation, and SafeArea providers. |
| `index.js`                 | Native entry point registered with React Native.                         |
| `package.json`             | Defines Node.js dependencies, scripts, and project metadata.             |
| `babel.config.js`          | Babel compiler configuration, including path aliases (`module-resolver`).  |
| `tsconfig.json`            | TypeScript compiler configuration, also defining path aliases.           |
| `react-native.config.js`   | React Native specific configurations, like linking assets (fonts).         |
| **`src/` Directory**       | **Core Application Code**                                                |
| `assets/`                  | Static files: fonts, images, `icomoon.json` for icons.                   |
| `components/`              | Reusable composite UI components (e.g., `CategoryCard`, `PaginationDots`). |
| `elements/`                | Atomic, reusable UI building blocks (e.g., `Button`, `Icon`).            |
| `navigation/`              | React Navigation setup (Stack Navigators, Bottom Tab Navigator).         |
| `pageContainers/`          | Custom Hooks encapsulating screen logic and state management.            |
| `pages/`                   | Components representing individual application screens/views.            |
| `store/`                   | Redux Toolkit global state: store config, slices, async thunks.        |
| `utils/`                   | Common utility functions (e.g., responsive scaling).                     |
| `appSettings.ts`           | Centralized constants (AsyncStorage keys, font names, API info).         |
| `request.ts`               | Configured Axios instance for making API calls.                          |

**Note:** Path aliases are configured in `babel.config.js` and `tsconfig.json` for cleaner import statements (e.g., `import { Button } from 'elements';`).

## 🚀 Getting Started

### Prerequisites

*   Node.js (>= 18) and npm/Yarn
*   Ruby and Bundler (for Cocoapods)
*   React Native development environment set up (Xcode for iOS, Android Studio for Android). Follow the official [React Native Environment Setup guide](https://reactnative.dev/docs/environment-setup) (choose "React Native CLI Quickstart").

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/erdemozk/PlantAppCase.git
    cd PlantAppCase
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Install iOS Pods:**
    ```bash
    cd ios
    pod install
    cd ..
    ```

### Running the App

*   **To run on iOS:**
    ```bash
    npm run ios
    # or
    yarn ios
    ```
    (Requires macOS and Xcode)

*   **To run on Android:**
    ```bash
    npm run android
    # or
    yarn android
    ```
    (Requires Android Studio and an emulator or connected device)

*   **Start Metro Bundler (if needed separately):**
    ```bash
    npm start
    # or
    yarn start
    ```
