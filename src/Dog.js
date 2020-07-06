import React from "react";
import { useParams, Redirect } from "react-router-dom";

function Dog({ dogs }) {
  const { name } = useParams();

  let currentDog
  for (let dog of dogs) {
    if (dog.name === name) {
      currentDog = dog;
    }
  }
  if (!currentDog){
    return <Redirect to="/dogs"/>
  }

  return (
    <div>
      <h2>{currentDog.name}</h2>
      <h4>Age: {currentDog.age}</h4>
      <img src={currentDog.src} alt={currentDog.name}></img>
      <ul>
        Facts about {currentDog.name}:
        {currentDog.facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dog;

 // const [currentDog, setCurrentDog] = useState({facts:[]});

  // useEffect(
  //   function setDog() {
  //     for (let dog of dogs) {
  //       if (dog.name === name) {
  //         setCurrentDog(dog);
  //       }
  //     }
  //   },
  //   [dogs, name]
  // );
