//import State Hook
import {useState} from 'react';
//import whole learner data  from  - src/data/learnerDte
import {learnerData} from './data/learnerData';
import Learner from "./components/Learner"
import CreateLearnerForm from "./components/CreateLearnerForm"
import './App.css';

 function App() {
  // create a new state passing the learnerData
const [learners, setLearners] = useState(learnerData);
const handleShowLearner = () => {
};
 
return (
  <div>
      <h1>Learners List</h1>
      <CreateLearnerForm setLearner={setLearners} learners={learners}/>

{/* Map over learners to display them one by one */}
      <ul>
        {learners.map((learner,i) => (
          <Learner learner={learner} key={learner.id} 
          learners = {learners}
          setLearners ={setLearners}
          />
        ))}
      </ul>

    </div>
  );
}




export default App;