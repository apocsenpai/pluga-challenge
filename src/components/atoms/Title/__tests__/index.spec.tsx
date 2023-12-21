import { render } from '@testing-library/react';

import { Title } from '..';

const TEXT_MOCK = 'MOCK';
const TITLE_DEFAULT_COLOR = '#6e6e6e';
const TITLE_MOCK_COLOR = '#020202';
const MIN_SIZE_DEFAULT = '0.75rem';
const MAX_SIZE_DEFAULT = '2.5rem';
const MIN_SIZE_MOCK = '10rem';
const MAX_SIZE_MOCK = '20rem';

describe('<Title>', () => {
  it('should render a Title', () => {
    const { getByText } = render(<Title>{TEXT_MOCK}</Title>);

    const titleElement = getByText(TEXT_MOCK);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle(`
        color: ${TITLE_DEFAULT_COLOR};
        font-size: clamp(
            ${MIN_SIZE_DEFAULT},
            0.9953rem + 1.2539vw,
            ${MAX_SIZE_DEFAULT}
          );
    `);
  });

  it('should render a colored Title when color was passed', () => {
    const { getByText } = render(
      <Title $color={TITLE_MOCK_COLOR}>{TEXT_MOCK}</Title>,
    );

    const titleElement = getByText(TEXT_MOCK);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle(`
        color: ${TITLE_MOCK_COLOR};
        font-size: clamp(
            ${MIN_SIZE_DEFAULT},
            0.9953rem + 1.2539vw,
            ${MAX_SIZE_DEFAULT}
          );
    `);
  });
  it('should render a Title with especific font-size', () => {
    const { getByText } = render(
      <Title $maxSize={MAX_SIZE_MOCK} $minSize={MIN_SIZE_MOCK}>
        {TEXT_MOCK}
      </Title>,
    );

    const titleElement = getByText(TEXT_MOCK);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle(`
        color: ${TITLE_DEFAULT_COLOR};
        font-size: clamp(
            ${MIN_SIZE_MOCK},
            0.9953rem + 1.2539vw,
            ${MAX_SIZE_MOCK}
          );
    `);
  });
});
