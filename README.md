# PokeDex

Welcome to PokeDex, a web application that allows users to explore and discover information about Pokemon. This project is built using React and Redux Toolkit.

## Features

- **Infinite Scroll:** Dynamically load more Pokemon as the user scrolls through the page. 
    > **Note**: Currently set fetch limit is 100. If required, changes can be made by replacing the following in `shouldFetchMore()` function in `Home.jsx`
    ```js

    return isNearBottom && pokemonListlength < YOUR_NUMBER;
    ```

- **Search Functionality:** Easily search for Pokemon by name or ID.
- **Type Filtering:** Filter Pokemon by their types.
- **Responsive Design:** The application is designed to work seamlessly on various devices.
- **Stunning UI Cards:** Custom-designed Pokemon cards for a visually appealing experience.
- **Dynamic Colors:** Cards are dynamically colored based on the Pokemon type (e.g., green for grass types, orange for fire types).
- **Stats Graph with Chart.js:** Utilizes Chart.js to dynamically fetch and display Pokemon stats with color-coded bars.
  - Each bar in the graph is colored based on the stat value (e.g., red for speed if it's 50 or less).

## State Management Options

This project provides two components for state management:

- **Home.jsx:** Uses React state hooks for simple state management.
- **Home2.jsx:** Uses Redux Toolkit for more advanced state management.

Choose your preferred component in `src/App.jsx`. Replace `<Home/>` with `<Home2/>` or vice versa and make necessary imports.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PrathamRohra/pokedex.git
   ```
2. Open the directory in terminal
    ```bash
    cd path/to/pokedex
    ```
3. Install dependencies
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage
- Explore the world of Pokemon by scrolling through the list.
- Use the search bar to find specific Pokemon by name or ID.
- Filter Pokemon by type using the provided options.
- Click on a Pokemon card to view its stats.