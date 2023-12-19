import { Search } from 'lucide-react';
import { Header, Input, InputBox } from './index.styled';
import { useState } from 'react';

const Home = () => {
  const [focused, setFocused] = useState(false);

  return (
    <Header>
      <InputBox
        htmlFor="search"
        onClick={() => setFocused(true)}
        focused={focused}
      >
        <Search color={focused ? '#27aae1' : '#a8b8c0'} />
        <Input id="search" onBlur={() => setFocused(false)} />
      </InputBox>
    </Header>
  );
};

export default Home;
