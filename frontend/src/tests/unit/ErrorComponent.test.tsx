import { render, screen } from '@testing-library/react';
import ErrorComponent from '@/shared/ErrorComponent/ErrorComponent';

describe('ErrorComponent', () => {
    it('если есть сообщение об ошибке, то оно отображается', () => {
        const errorMessage = 'Ошибка загрузки данных';
        render(<ErrorComponent error={errorMessage} />);
        
        const errorElement = screen.getByText(errorMessage);
        expect(errorElement).toBeInTheDocument();
    });

    it('если error пуст, то ничего не отображается', () => {
        const { container } = render(<ErrorComponent error="" />);
        expect(container.firstChild).toBeEmptyDOMElement();
    });
});
