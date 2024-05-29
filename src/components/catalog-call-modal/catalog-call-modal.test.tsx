import { render, screen } from '@testing-library/react';
import CatalogCallModal from './catalog-call-modal';
import { makeFakeCamera } from '@utils/mocks';

describe('Component: Call modal', () => {
  it('should render the component', () => {
    const camera = makeFakeCamera();
    const callModalTestId = 'call-modal';

    render(<CatalogCallModal isActive camera={camera} onCloseClick={() => callModalTestId}/>);

    expect(screen.getByTestId(callModalTestId)).toBeInTheDocument();
  });
});
