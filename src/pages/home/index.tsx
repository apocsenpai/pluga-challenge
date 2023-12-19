import Header from '@/components/Header';
import CardList from '@/components/CardList';
import {
  Container,
  Content,
} from './index.styled';

const Home = () => {
  return (
    <Container>
      <Content>
        <Header/>
        <CardList/>
      </Content>
    </Container>
  );
};

export default Home;
