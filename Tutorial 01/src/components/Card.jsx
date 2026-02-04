import '../styles/Card.css'
const Card = ({ img, user, age }) => {
  return (
    <div className="card">
      <img src={img} alt={`${user}'s profile`} />
      <h1>
        {user}, {age}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
