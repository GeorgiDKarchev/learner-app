//import State Hook
import {useState} from 'react';
//import whole learner data  from  - src/data/learnerDte
import {learnerData} from './data/learnerData';
import Learner from "./components/Learner"

import './App.css';

 function App() {
  // create a new state passing the learnerData
const [learners, setLearners] = useState(learnerData);
const handleShowLearner = () => {
};
 
return (
  <div>
      <h1>Learners List</h1>
{/* Map over learners to display them one by one */}
      <ul>
        {learners.map((learner,i) => (
          <Learner learner={learner} key={learner.id} />
        ))}
      </ul>

    </div>
  );
}




export default App;