import { CircleButton } from '@/components/atoms';

import { List } from './index.styled';

export interface IIndexList {
  currentPage: number;
  goToPage: (index: number) => void;
  indexList: number[];
}

export const IndexList = ({ currentPage, goToPage, indexList }: IIndexList) => {

  return (
    <List>
      {indexList.map((item) => (
        <li key={item}>
          <CircleButton
            onClick={() => goToPage(item)}
            $active={currentPage === item}
            $hasHover
          >
            {item}
          </CircleButton>
        </li>
      ))}
    </List>
  );
};
