import userEvent from "@testing-library/user-event";
import { Button }  from ".";
const { render, screen, fireEvent } = require("@testing-library/react")

describe('<Button/>', () =>{
    it('shoud render the button with the text "load more"', () =>{
        render(<Button text ="load more" />);
        expect.assertions(1);

        const button = screen.getByRole( 'button', { name: /load more/i});
        expect(button).toBeInTheDocument('class', 'button');
    });

    it('should call function on button clicK', () =>{
        const fn = jest.fn();
        render(<Button text ="load more" onClick={fn} />);

        const button = screen.getByRole( 'button', { name: /load more/i});

        
        userEvent.click(button);       
        //fireEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled is true', () =>{
        render(<Button text ="load more" disabled={true} />);

        const button = screen.getByRole( 'button', { name: /load more/i});

        expect(button).toBeDisabled();
    });

    it('should be enabled when disabled is false', () => {
        render(<Button text ="load more" disabled={false} />);
        const button = screen.getByRole( 'button', { name: /load more/i});

        expect(button).toBeEnabled();
    });
})