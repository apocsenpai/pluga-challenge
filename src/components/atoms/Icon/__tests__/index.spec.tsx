import { fireEvent, render } from '@testing-library/react';

import { Icon } from '..';
import { Airplay } from 'lucide-react';

const TEST_ID = "ICON"


describe('<Icon>', () => {
  it('should render a Icon', () => {
    const { getByTestId } = render(<Icon data-testid={TEST_ID} icon={Airplay}/>);

    const buttonElement = getByTestId(TEST_ID);

    expect(buttonElement).toBeInTheDocument();
  });
});
