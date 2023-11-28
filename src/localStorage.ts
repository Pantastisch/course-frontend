export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState);
    return parsedState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
