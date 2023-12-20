import { Search } from 'lucide-react';
import { Input, InputBox } from './index.styled';
import { useDebounce, useFocus } from '@/app/hooks';
import { useSearch } from '@/app/hooks/useSearch';

const Header = () => {
  const { focused, turnFocusOff, turnFocusOn } = useFocus();
  const { handleSearchBarChange } = useSearch();
  const delayedSearchBarChange = useDebounce(handleSearchBarChange);

  return (
    <header>
      <InputBox htmlFor="search" onClick={turnFocusOn} focused={focused}>
        <Search color={focused ? '#0ea7ff' : '#a8b8c0'} />
        <Input
          placeholder="BUSCAR FERRAMENTA"
          id="search"
          onBlur={turnFocusOff}
          onChange={delayedSearchBarChange}
          focused={focused}
        />
      </InputBox>
    </header>
  );
};

export default Header;
