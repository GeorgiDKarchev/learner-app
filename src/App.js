import {useState} from 'react';
import {learnerData} from './data/learnerData';
// import useState

import './App.css';

 function App() {
  // create a new state passing the learnerData
const [learners, setLearners] = useState(learnerData);
const handleShowLearner = () => {
};
 
return (
  <main>
      
      <>
        <h1>Learners list</h1>
          {learners.map((learner, index) => (
              <ul>
                  <li>name: {learner.name}</li>
                  <li>bio: {learner.bio}</li>
                  <li>scores: 
                    
                    {learner.scores[1].date}
                    
                    {learner.scores[1].score}
 
                  
                  </li>
              </ul>
           
          ))}
        
        <button onClick={handleShowLearner()}>Next</button>
      </>
  </main>
);
};




export default App;
