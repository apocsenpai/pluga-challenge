import { Search } from "lucide-react";
import { Input, InputBox } from "./index.styled";
import { useState } from "react";

const Header = () => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <header>
      <InputBox
        htmlFor="search"
        onClick={() => setFocused(true)}
        focused={focused}
      >
        <Search color={focused ? '#0ea7ff' : '#a8b8c0'} />
        <Input
          placeholder="BUSCAR FERRAMENTA"
          id="search"
          onBlur={() => setFocused(false)}
          focused={focused}
        />
      </InputBox>
    </header>
  );
};

export default Header;
