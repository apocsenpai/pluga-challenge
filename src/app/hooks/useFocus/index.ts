import { useState } from "react";

export const useFocus = () => {
  const [focused, setFocused] = useState<boolean>(false);

  const turnFocusOn = () => setFocused(true);

  const turnFocusOff = () => setFocused(false);

  return {
    focused,
    turnFocusOn,
    turnFocusOff,
  };
};
