import { fireEvent, render } from '@testing-library/react';

import { Input } from '..';

const PLACEHOLDER_MOCK = 'PLACEHOLDER_MOCK';
const PLACEHOLDER_COLOR_ACTIVE = '#0ea7ff';

describe('<Input>', () => {
  it('should render a Input that is not focused', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={PLACEHOLDER_MOCK} $focused={false} />,
    );

    const inputElement = getByPlaceholderText(PLACEHOLDER_MOCK);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', PLACEHOLDER_MOCK);
  });
});
