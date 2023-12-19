import { ChevronRight, Search } from 'lucide-react';
import {
  Card,
  CardList,
  Container,
  Content,
  ImageWrapper,
  Input,
  InputBox,
  Overlay,
} from './index.styled';
import { useState } from 'react';

const Home = () => {
  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <Content>
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
        <CardList>
          <Card>
            <ImageWrapper></ImageWrapper>
            <span>Name</span>
            <Overlay>
              <p>
                EXPLORAR
                <span>
                  <ChevronRight size={20} color={'#0ea7ff'} strokeWidth={3} />
                </span>
              </p>
            </Overlay>
          </Card>
        </CardList>
      </Content>
    </Container>
  );
};

export default Home;
