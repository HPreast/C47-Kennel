import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
import { editAnimal, getAnimalById } from "../../modules/AnimalManager"
import "./AnimalForm.css"

 
export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState({ name:"", breed: ""});
    const [isLoading, setIsLoading] = useState(false);

    const { animalId } = useParams();
    const history = useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = { ...animal };
        stateToChange[event.target.id] = event.target.value;
        setAnimal(stateToChange);
    };
    const updateExistingAnimal = (event) => {
        event.preventDefault()
        setIsLoading(true);

        //This is an edit so we need the ID
        const editedAnimal = {
            id: animalId,
            name: animal.name,
            breed: animal.breed
        };
       editAnimal(editedAnimal)
            .then(() => history.push("/animals")
            )
    };
    useEffect(() => {
        console.log("useEffect triggered")
        getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal);
                setIsLoading(false);
            });
    }, []);
    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={animal.name}
                        />
                        <label htmlFor="name">Animal Name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="breed"
                            value={animal.breed}
                        />
                        <label htmlFor="breed">Animal Breed</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingAnimal}
                            className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}