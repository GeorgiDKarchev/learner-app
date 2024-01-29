import Score from "./Score";

function Learner({learner}) {
    console.log(learner)
    return(
        //return (display) the name, Bio section and Scores of the learners
        //Scores section return All scores and dates for each learner
        <main>
            <>
             <p>
             <b>Name:</b>{learner.name}
             </p>
            </>
            
            <>
            <p>
            <b>Bio:</b>{learner.bio}

            </p>
            </>
            <>
            <p>
            <b>Scores:</b> {learner.scores.map((score)=>(
                <Score score ={score} />
            

            ))}
            </p>
            </>
        </main>
    );

}

export default Learner;

