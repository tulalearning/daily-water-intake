# Homework Day-21: Daily Water Intake Calculation 🫗

This is a React Project (using `Vite`) that calculates the recommended daily water intake based on weight and allows the user to switch between light and dark theme.

## **Usage**

To use this component, you can import it into your React application and render it as follows:

```tsx
import DailyWaterIntake from "./pages/DailyWaterIntake";

function App() {
  return <DailyWaterIntake />;
}

export default App;
```

## Props

- None

## State

The component uses the following states:

- `weight (number)`: Represents the weight value entered by the user.
- `dailyWaterIntake (number)`: Stores the calculated daily water intake value.
- `theme (string)`: Stores the current theme selected by the user.

## Methods

The component defines the following methods:

- `onChangeWeight`: Handles the change event for the weight input field. It updates the weight state based on the user input.
- `onClick`: Calculates the daily water intake based on the weight entered by the user and updates the dailyWaterIntake state.
- `onReset`: Resets the weight and daily water intake states to their initial values and clears the weight input field.
- `handleThemeChange`: Handles the change event for the theme select input. It updates the theme state based on the user selection.

## useEffect

The component uses the useEffect hook to apply the selected theme to the root element of the document whenever the theme state changes. It adds or removes the CSS classes `light-theme` and `dark-theme` from the root element based on the selected theme.

**Note:** see more detail in `index.css` file.

#

## **Installation Guide**

1. Open a terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. git clone `https://github.com/tulalearning/daily-water-intake.git`
4. Once the cloning process is complete, navigate into the project directory:

```Shell
cd daily-water-intake
```

5. Install the project dependencies by running the following command

```Shell
npm install
```

6. After the installation is complete, you can start the development server with the following command

```Shell
npm run dev
```

7. You should now see the application running in your web browser. You can interact with the DailyWaterIntake component and test its functionality. Enjoy :blush:
