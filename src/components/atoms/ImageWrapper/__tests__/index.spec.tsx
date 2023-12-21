import { render } from '@testing-library/react';

import { ImageWrapper } from '..';

const TEXT_MOCK = 'MOCK';
const WRAPPER_WIDTH = '10rem';
const WRAPPER_HEIGHT = '5rem';
const MOCK_LINK =
  'https://i.pinimg.com/564x/a1/3f/68/a13f68a7d9c9d6a576bc335af6a60cc9.jpg';

const MOCK_ALT = 'Texto';

describe('<ImageWrapper>', () => {
  it('should render a ImageWrapper', () => {
    const { getByText } = render(
      <ImageWrapper width={WRAPPER_WIDTH} height={WRAPPER_HEIGHT}>
        {TEXT_MOCK}
      </ImageWrapper>,
    );

    const element = getByText(TEXT_MOCK);

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle(`
      width: ${WRAPPER_WIDTH};
      height: ${WRAPPER_HEIGHT};
    `);
  });

  it('should render a ImageWrapper with an image', () => {
    const { getByAltText } = render(
      <ImageWrapper width={WRAPPER_WIDTH} height={WRAPPER_HEIGHT}>
        <img src={MOCK_LINK} alt={MOCK_ALT} />
      </ImageWrapper>,
    );

    const element = getByAltText(MOCK_ALT);

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('src', MOCK_LINK);
  });
});
