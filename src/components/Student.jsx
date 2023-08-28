import Score from "./Score";
import './student.css';

export default function Student({student}) {
  return (
    <div className='student'>
        <h1>{student.name}</h1>
        <p>{student.bio}</p>
        <h2>Student Scores</h2>
            <Score scores={student.scores} />
    </div>
  )
}
