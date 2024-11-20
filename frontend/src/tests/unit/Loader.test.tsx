import { render, screen } from '@testing-library/react';
import Loader from '@/shared/Loader/Loader';

describe('Loader component', () => {
    test('Компонент рендерится', () => {
        render(<Loader />);
        const loaderContainer = screen.getByRole('presentation', { hidden: true });
        expect(loaderContainer).toBeInTheDocument();
    });
});
