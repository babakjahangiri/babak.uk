import React, { useState, createContext } from "react";
export const ToggleBurgerContext = createContext();

export const ToggleBurgerProvider = (props) => {
  const [burgerStatus,setBurgerStatus] = useState(false);
return (
<ToggleBurgerContext.Provider value={[burgerStatus,setBurgerStatus]}>
{props.children}
</ToggleBurgerContext.Provider>
)};