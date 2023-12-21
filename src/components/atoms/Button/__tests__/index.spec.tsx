import { render } from '@testing-library/react';

import { Button } from '..';
import { BACKGROUND, DEFAULT_BACKGROUND, TEXT_MOCK } from './mocks';

describe('<Button>', () => {
  it('should render button', () => {
    const { getByText } = render(<Button>{TEXT_MOCK}</Button>);

    expect(getByText(TEXT_MOCK)).toBeDefined();
  });

  it('should render with default background', () => {
    const { getByText } = render(<Button>{TEXT_MOCK}</Button>);

    expect(getByText(TEXT_MOCK)).toHaveStyle(`
      background-color: ${DEFAULT_BACKGROUND}
    `);
  });

  it('should render with background passed by props', () => {
    const { getByText } = render(
      <Button background={BACKGROUND}>{TEXT_MOCK}</Button>,
    );

    expect(getByText(TEXT_MOCK)).toHaveStyle(`
      background-color: ${BACKGROUND}
    `);
  });
});
