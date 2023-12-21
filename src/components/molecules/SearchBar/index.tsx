import { useDebounce, useFocus, useSearch } from "@/app/hooks";
import { Icon, Input } from "@/components/atoms";

import { Search } from "lucide-react";
import { InputBox } from "./index.styled";


export const SearchBar = () => {
  const { focused, turnFocusOff, turnFocusOn } = useFocus();
  const { handleSearchBarChange } = useSearch();
  const delayedSearchBarChange = useDebounce({
    fn: handleSearchBarChange,
    delay: 1000,
  });

  return (
    <InputBox htmlFor="search" onClick={turnFocusOn} $focused={focused}>
      <Icon icon={Search} color={focused ? '#0ea7ff' : '#a8b8c0'} />
      <Input
        placeholder="BUSCAR FERRAMENTA"
        id="search"
        onBlur={turnFocusOff}
        onChange={delayedSearchBarChange}
        $focused={focused}
      />
    </InputBox>
  );
};
