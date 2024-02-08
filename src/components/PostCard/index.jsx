import "./styles.css";

export const PostCard = ({ cover,title, body, id}) => (
      <div className='post'>
        <img src={cover} alt={title} />
        <div className='post-content'>
          <h2>{title}{id}</h2>
          <p>{body}</p>
        </div>
      </div>
    );