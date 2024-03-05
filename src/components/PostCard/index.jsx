/* eslint-disable react/react-in-jsx-scope */
import P from 'prop-types';
import "./styles.css";

// eslint-disable-next-line react/prop-types
export const PostCard = ({ cover,title, body, id}) => (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div className='post'>
        <img src={cover} alt={title} />
        <div className='post-content'>
          <h2>{title}{id}</h2>
          <p>{body}</p>
        </div>
      </div>
    );

    PostCard.propTypes = {
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }
