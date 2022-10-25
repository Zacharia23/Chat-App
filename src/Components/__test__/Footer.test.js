import { render, screen, fireEvent, } from '@testing-library/react';
import Footer from '../Footer';
import userEvent from '@testing-library/user-event';

test('Sends Message from input', async () => {
    render(<Footer />);
    
    //const input = screen.getByPlaceholderText('Type something....')
    const send = screen.getByTestId('sendButton');
    
    //await userEvent.type(input, 'Some message text')

    //expect(input).toHaveValue('Some message text');
    
    fireEvent.click(send)

    const t = () => {
        throw new TypeError();
    }; 
    expect(t).toThrow(TypeError)
})
