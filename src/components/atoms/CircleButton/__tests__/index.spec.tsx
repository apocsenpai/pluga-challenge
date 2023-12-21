import { fireEvent, render } from '@testing-library/react';

import { CircleButton } from '..';

export const TEXT_MOCK = 'Text';
export const DEFAULT_BACKGROUND = '#ffffff';
export const DEFAULT_COLOR = '#0ea7ff';
export const ACTIVE_BACKGROUND = '#0ea7ff';
export const ACTIVE_COLOR = '#ffffff';

describe('<CircleButton>', () => {
  it('should render default circle button without hover effect', () => {
    const { getByText } = render(<CircleButton>{TEXT_MOCK}</CircleButton>);

    const buttonElement = getByText(TEXT_MOCK);

    fireEvent.mouseEnter(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle(`
      background-color: ${DEFAULT_BACKGROUND};
      color: ${DEFAULT_COLOR};
    `);
  });

  it('should render circle button with hover effect', () => {
    const { getByText } = render(
      <CircleButton $hasHover>{TEXT_MOCK}</CircleButton>,
    );

    const buttonElement = getByText(TEXT_MOCK);

    fireEvent.mouseEnter(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle(`
      background-color: ${ACTIVE_BACKGROUND};
      color: ${ACTIVE_COLOR};
    `);
  });

  it('should render circle button with active properties', () => {
    const { getByText } = render(
      <CircleButton $active>{TEXT_MOCK}</CircleButton>,
    );

    const buttonElement = getByText(TEXT_MOCK);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle(`
      background-color: ${ACTIVE_BACKGROUND};
      color: ${ACTIVE_COLOR};
    `);
  });
});
