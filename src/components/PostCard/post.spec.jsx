import {PostCard} from '.'
import { PostCardPropsMock } from './mock';
import {render, screen } from '@testing-library/react'

const props = PostCardPropsMock;

describe ('<PostCard />', () => {
it ('should render PostCard correctly', () => {
// eslint-disable-next-line no-undef
render(<PostCard {...props} />);

expect(screen.getByRole('img', {name: /Title 1/i} )).toHaveAttribute('src', 'img/img.png');

expect(screen.getByRole('heading', {name: 'Title 11'})).toBeInTheDocument();
expect(screen.getByText('body 1')).toBeInTheDocument();
});

it('should match snapshot',  () => {
   const { container } = render(<PostCard {...props} />);
   expect(container.firstChild).toMatchSnapshot();
    
});

});
