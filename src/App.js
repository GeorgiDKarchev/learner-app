import {useState} from 'react';
import {learnerData} from './data/learnerData';
// import useState

import './App.css';

 function App() {
  // create a new state passing the learnerData
  //  const [learner,setLearners] = useState(learnerData)
  const [learners, setLearners] = useState(learnerData);
const handleShowLearner = () => {
  
};
 

return (
  <main>
      <>
          {learners.map((learner, index) => (
              <li>
                  <span>name: {learner.name}</span>
                  <span>bio: {learner.bio}</span>
                  <span>scores: {learner.scores[1].score}</span>
              </li>
          ))}
        <button onClick={handleShowLearner()}>Next</button>

      </>
  </main>
);
};
export default App;
