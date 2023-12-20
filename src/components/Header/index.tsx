import { Search } from 'lucide-react';
import { Input, InputBox } from './index.styled';
import { useFocus } from '@/app/hooks';

const Header = () => {
  const { focused, turnFocusOff, turnFocusOn } = useFocus();

  return (
    <header>
      <InputBox htmlFor="search" onClick={turnFocusOn} focused={focused}>
        <Search color={focused ? '#0ea7ff' : '#a8b8c0'} />
        <Input
          placeholder="BUSCAR FERRAMENTA"
          id="search"
          onBlur={turnFocusOff}
          focused={focused}
        />
      </InputBox>
    </header>
  );
};

export default Header;
