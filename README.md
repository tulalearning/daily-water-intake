# Homework Day-21: Daily Water Intake Calculation 🫗

This is a React component that calculates the recommended daily water intake based on weight and allows the user to switch between light and dark theme.

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
{: .note}
