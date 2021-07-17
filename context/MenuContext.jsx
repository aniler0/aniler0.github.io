import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuToggleProvider = (props) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <MenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};
