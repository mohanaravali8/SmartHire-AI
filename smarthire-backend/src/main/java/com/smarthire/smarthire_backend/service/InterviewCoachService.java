package com.smarthire.smarthire_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.smarthire.smarthire_backend.dto.InterviewResponse;

@Service
public class InterviewCoachService {

    public InterviewResponse generateQuestions(String technology) {

        List<String> questions = new ArrayList<>();

        if (technology == null || technology.trim().isEmpty()) {
            questions.add("Please select a technology.");
            return new InterviewResponse(questions);
        }

        technology = technology.trim().toLowerCase();

        switch (technology) {

            case "java":

                questions.add("What is JVM?");
                questions.add("Difference between JDK, JRE and JVM?");
                questions.add("Explain OOP concepts.");
                questions.add("What is Exception Handling?");
                questions.add("Explain Multithreading.");
                questions.add("What is Collection Framework?");
                questions.add("Difference between ArrayList and LinkedList?");
                questions.add("What is HashMap?");
                questions.add("Difference between == and equals()?");
                questions.add("Explain Garbage Collection.");

                break;

            case "python":

                questions.add("What are Python Lists?");
                questions.add("Difference between List and Tuple?");
                questions.add("What is Dictionary?");
                questions.add("Explain Lambda Function.");
                questions.add("What are Decorators?");
                questions.add("What are Generators?");
                questions.add("Difference between Deep Copy and Shallow Copy?");
                questions.add("Explain Exception Handling.");
                questions.add("What is PEP8?");
                questions.add("Explain *args and **kwargs.");

                break;

            case "react":

                questions.add("What is React?");
                questions.add("Explain JSX.");
                questions.add("What is Virtual DOM?");
                questions.add("Difference between Props and State?");
                questions.add("What are Hooks?");
                questions.add("Explain useState().");
                questions.add("Explain useEffect().");
                questions.add("What is Context API?");
                questions.add("Difference between Functional and Class Components?");
                questions.add("What is React Router?");

                break;

            case "spring boot":

                questions.add("What is Spring Boot?");
                questions.add("Explain Dependency Injection.");
                questions.add("What is IOC?");
                questions.add("What is Spring MVC?");
                questions.add("What is REST API?");
                questions.add("Difference between @Component and @Service?");
                questions.add("Explain Spring Data JPA.");
                questions.add("What is Hibernate?");
                questions.add("Explain Spring Security.");
                questions.add("What is Bean?");

                break;

            case "mysql":

                questions.add("What is Primary Key?");
                questions.add("Difference between DELETE, DROP and TRUNCATE?");
                questions.add("Explain Normalization.");
                questions.add("What is Foreign Key?");
                questions.add("Explain INNER JOIN.");
                questions.add("Difference between WHERE and HAVING?");
                questions.add("Explain GROUP BY.");
                questions.add("What are Indexes?");
                questions.add("Difference between CHAR and VARCHAR?");
                questions.add("What is SQL Injection?");

                break;

            default:

                questions.add("Tell me about yourself.");
                questions.add("Why should we hire you?");
                questions.add("Explain your final year project.");
                questions.add("What are your strengths?");
                questions.add("Where do you see yourself in 5 years?");

        }

        return new InterviewResponse(questions);

    }

}