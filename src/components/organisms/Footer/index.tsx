import { CircleButton, Icon } from '@/components/atoms';
import { IndexList } from '@/components/molecules';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Pagination } from './index.styled';

export const Footer = () => {
  return (
    <Pagination>
      <CircleButton background={'#ffffff'}>
        <Icon icon={ChevronLeft} size={16} color={'#0ea7ff'} strokeWidth={3} />
      </CircleButton>
      <IndexList />
      <CircleButton background={'#ffffff'}>
        <Icon icon={ChevronRight} size={16} color={'#0ea7ff'} strokeWidth={3} />
      </CircleButton>
    </Pagination>
  );
};
