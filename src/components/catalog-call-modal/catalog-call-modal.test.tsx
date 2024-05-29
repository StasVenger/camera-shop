import { render, screen } from '@testing-library/react';
import CatalogCallModal from './catalog-call-modal';
import { makeFakeCamera, makeFakeStore } from '@utils/mocks';
import { withHistory, withStore } from '@utils/mock-component';

describe('Component: Call modal', () => {
  it('should render the component', () => {
    const camera = makeFakeCamera();
    const callModalTestId = 'call-modal';
    const preparedComponent = withHistory(<CatalogCallModal isActive camera={camera} onCloseClick={() => callModalTestId}/>);
    const { withStoreComponent } = withStore(preparedComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByTestId(callModalTestId)).toBeInTheDocument();
  });
});
