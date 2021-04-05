import React, { useEffect, useState } from "react";
import { AnimalCard } from "./AnimalCard"
import { getAllAnimals, deleteAnimal } from "../../modules/AnimalManager";

export const AnimalList = () => {
  //Implement deleteAnimal
  const handleDeleteAnimal = (id) => {
    delete(id)
    .then(() => getAllAnimals().then(setAnimals));
  };

  //initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
      //do something later
      //after the data comes back from API, we use the setAnimals function to update the state
      return getAllAnimals().then(animalsFromAPI => {
        setAnimals(animalsFromAPI);
    });
  };
//Got the animals from the API on components first render
  useEffect(() => {
      getAnimals();
  }, []);
//finally use .map() to "loop over" the animals array to show a list of animal cards
    return (
        <div className="container-cards">
            {animals.map(animal => 
            <AnimalCard 
            key={animal.id} 
            animal={animal} 
            handleDeleteAnimal={handleDeleteAnimal} />
            )}
        </div>
    );
};
