import { Button }  from ".";
const { render, screen } = require("@testing-library/react")

describe('<Button/>', () =>{
    it('shoud render the button with the text "load more"', () =>{
        render(<Button text ="load more" />);
        expect.assertions(1);

        const button = screen.getByRole( 'button', { name: /load more/i});
        expect(button).toHaveAttribute('class', 'button');
    });
})