import {
    render,
    screen,
    fireEvent,
    waitFor,
    prettyDOM,
} from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    test('renders initial count as 0', () => {
        const { container } = render(<App />);
        expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
        console.log(prettyDOM(container));
    });

    test('increments count after 1 second when button is clicked', async () => {
        render(<App />);
        const button = screen.getByTestId('start');
        fireEvent.click(button);
        await waitFor(
            () => {
                expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
            },
            { timeout: 1100 }
        );
    });
});
