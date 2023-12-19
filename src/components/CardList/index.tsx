import appService from '@/services/app';

import { ChevronRight } from 'lucide-react';
import { CardList as List, Card, ImageWrapper, Overlay } from './index.styled';
import { useQuery } from 'react-query';


const CardList = () => {
  const { data: appList , isLoading } = useQuery({
    queryKey: ['card-list'],
    queryFn: appService.getAll,
  });

  return (
    <List>
      {!appList ? (
        <>Loading..</>
      ) : (
        appList.map(({ app_id, name, icon }) => (
          <Card key={app_id}>
            <ImageWrapper>
              <img src={icon} alt={`${name} application`} />
            </ImageWrapper>
            <span>{name}</span>
            <Overlay>
              <p>
                EXPLORAR
                <span>
                  <ChevronRight size={20} color={'#0ea7ff'} strokeWidth={3} />
                </span>
              </p>
            </Overlay>
          </Card>
        ))
      )}
    </List>
  );
};

export default CardList;
