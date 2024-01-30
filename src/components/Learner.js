import Score from "./Score";
import Button from "./Button"

function Learner({learner, learners, setLearners}) {
    console.log(learner)
    const{name,bio,scores}=learner;

    const handleDelete =(e) => {
        //TODO implement delete
    const results= learners.filter(l => l.name !==l.name);
    console.log(results);
    setLearners(results);
        
    }
    return(
        //return (display) the name, Bio section and Scores of the learners
        //Scores section return All scores and dates for each learner
        <main>
            <>
             <p>
             <b>Name:</b>{name}
             <Button onClick ={handleDelete}>DELETE</Button>
             </p>
            </>
            
            <>
            <p>
            <b>Bio:</b>{bio}

            </p>
            </>
            <>
            <p>
            <b>Scores:</b> {scores.map((score,i)=>(
                <Score score ={score} key={score.id} />
            

            ))}
            </p>
            </>
        </main>
    );

}

export default Learner;

