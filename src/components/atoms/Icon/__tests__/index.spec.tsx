import { render } from '@testing-library/react';

import { Icon } from '..';
import { Airplay } from 'lucide-react';

const TEST_ID = "ICON"


describe('<Icon>', () => {
  it('should render a Icon', () => {
    const { getByTestId } = render(<Icon data-testid={TEST_ID} icon={Airplay}/>);

    const iconElement = getByTestId(TEST_ID);

    expect(iconElement).toBeInTheDocument();
  });
});
