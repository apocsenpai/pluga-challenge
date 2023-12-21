import { usePagination } from '@/app/hooks';
import { AppContext } from '@/app/providers/appProvider';
import { CircleButton, Icon } from '@/components/atoms';
import { IndexList } from '@/components/molecules';
import { createPageIndexList } from '@/utils/helpers';

import { useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Pagination } from './index.styled';

export const Footer = () => {
  const { baseAppList } = useContext(AppContext);

  const { currentPage, advancePage, backPage, goToPage } = usePagination(1);


  const indexList = baseAppList && createPageIndexList(baseAppList?.length);

  return (
    indexList && (
      <Pagination>
        <CircleButton onClick={backPage} background={'#ffffff'}>
          <Icon
            icon={ChevronLeft}
            size={16}
            color={'#0ea7ff'}
            strokeWidth={3}
          />
        </CircleButton>
        <IndexList
          goToPage={goToPage}
          currentPage={currentPage}
          indexList={indexList}
        />
        <CircleButton
          onClick={() => advancePage(indexList.length)}
          background={'#ffffff'}
        >
          <Icon
            icon={ChevronRight}
            size={16}
            color={'#0ea7ff'}
            strokeWidth={3}
          />
        </CircleButton>
      </Pagination>
    )
  );
};
