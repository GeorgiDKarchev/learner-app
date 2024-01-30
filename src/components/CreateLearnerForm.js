import { useState } from "react";
import Button from "./Button";

function CreateLearnerForm({ setLearners, learners }) {
    
    const [newLearner, setNewLearner] = useState({
    name: "",
    bio: "",
    scores: [],
  });

// handle the changes on the input
  const handleChange = (e) => {
    setNewLearner({
      ...newLearner,
      [e.target.name]: e.target.value,
    });
  };

  //be call on the form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newLearner);

    // add new learner to the learner array
    setLearners([newLearner, ...learners]);

    //reset the local new learner object
    setNewLearner({
      name: "",
      bio: "",
      scores: [],
    });
  };

  return (
    <div className ="newForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="newName">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={newLearner.name}
          onChange={handleChange}
        />

        <label htmlFor="bio" className="newBio">Bio: </label>
        <textarea
          name="bio"
          id="bio"
          value={newLearner.bio}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="score" className="newScore">Score: </label>
        <textarea
          name="score"
          id="score"
          value={newLearner.score}
          onChange={handleChange}
        ></textarea>
        
        <Button type="submit">Create new Learner</Button>

      </form>
    </div>
  );
}

export default CreateLearnerForm;