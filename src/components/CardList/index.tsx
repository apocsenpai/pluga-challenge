import { ChevronRight } from 'lucide-react';
import { CardList as List, Card, ImageWrapper, Overlay } from './index.styled';
import { useQuery } from 'react-query';

import appService from '@/services/app';

const CardList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['card-list'],
    queryFn: appService.getAll,
  });

  console.log(isLoading)

  return (
    <List>
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
    </List>
  );
};

export default CardList;
