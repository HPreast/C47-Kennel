import React, { useEffect, useState } from "react";
import { AnimalCard } from "./AnimalCard"
import { getAllAnimals, deleteAnimal } from "../../modules/AnimalManager";
import { useHistory } from "react-router";

export const AnimalList = () => {
  const history = useHistory();
  //initial state is an empty array
  const [animals, setAnimals] = useState([]);
  
  const getAnimals = () => {
    //do something later
    //after the data comes back from API, we use the setAnimals function to update the state
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI);
    });
  };
  //Implement deleteAnimal
  const handleDeleteAnimal = (id) => {
    deleteAnimal(id)
    .then(() => getAllAnimals().then(setAnimals));
  };
//Got the animals from the API on components first render
  useEffect(() => {
      getAnimals();
  }, []);
//finally use .map() to "loop over" the animals array to show a list of animal cards
    return (
      <>
        <section className="section-content">
          <button type="button" className="btn"
          onClick={() => {history.push("/animals/create")}}>
            Admit Animal
          </button>
        </section> 
        <div className="container-cards">
            {animals.map(animal => 
            <AnimalCard 
            key={animal.id} 
            animal={animal} 
            handleDeleteAnimal={handleDeleteAnimal} />
            )}
        </div>
      </>
    );
};
