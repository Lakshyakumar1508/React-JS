import './App.css';
import Hello from './components/Hello';
import Card from './components/Card';
import Button from './components/Button/Button';

function App() {
  // Use an array to store card data
  const users = [
    {
      user: "Lakshya",
      age: 21,
      img: "https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      user: "Kush",
      age: 22,
      img: "https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      user: "Shubham",
      age: 20,
      img: "https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <>
      <Hello />
      <div className="card-container">
        {users.map((u, index) => (
          <Card key={index} user={u.user} age={u.age} img={u.img} />
        ))}
      </div>
      <Button/>
      <o className="bg-amber-300 ">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam natus porro voluptatibus error necessitatibus, omnis, maiores, temporibus ut itaque nam blanditiis qui placeat doloremque earum amet dolorem magni voluptates.</o>
    </>
  );
}

export default App;
