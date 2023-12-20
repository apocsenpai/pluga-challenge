import { AppContext } from '@/app/providers/appProvider';
import { createPageIndexList } from '@/utils/helpers';

import { useContext } from 'react';

import { List } from './index.styled';
import { CircleButton } from '@/components/atoms';

export const IndexList = () => {
  const { baseAppList } = useContext(AppContext);

  return (
    baseAppList && (
      <List>
        {createPageIndexList(baseAppList?.length).map((item) => (
          <li key={item}>
            <CircleButton hasHover>{item}</CircleButton>
          </li>
        ))}
      </List>
    )
  );
};
