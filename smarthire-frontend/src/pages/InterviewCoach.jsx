import { useState } from "react";
import axios from "axios";
import "./InterviewCoach.css";

function InterviewCoach() {

    const [technology, setTechnology] = useState("");
    const [questions, setQuestions] = useState([]);

    const generateQuestions = async () => {

        try{

            const response = await axios.post(
                "http://localhost:8000/interview/questions",
                { technology }
            );

            setQuestions(response.data.questions);

        // eslint-disable-next-line no-unused-vars
        }catch(error){

            alert("Something went wrong!");

        }

    }

    return(

        <div className="interview-page">

            <div className="card">

                <h1>🎯 SmartHire AI Interview Coach</h1>

                <p>
                    Practice interview questions based on your selected technology.
                </p>

                <select
                    value={technology}
                    onChange={(e)=>setTechnology(e.target.value)}
                >

                    <option value="">Choose Technology</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>React</option>
                    <option>Spring Boot</option>
                    <option>MySQL</option>

                </select>

                <button onClick={generateQuestions}>
                    🚀 Generate Questions
                </button>

            </div>

            {
                questions.length>0 &&

                <div className="questions">

                    <h2>📚 Interview Questions</h2>

                    {
                        questions.map((q,index)=>(

                            <div className="question-card" key={index}>

                                <h3>Question {index+1}</h3>

                                <p>{q}</p>

                            </div>

                        ))
                    }

                </div>

            }

        </div>

    )

}

export default InterviewCoach;