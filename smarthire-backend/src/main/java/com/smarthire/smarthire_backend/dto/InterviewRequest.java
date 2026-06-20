// package com.smarthire.smarthire_backend.dto;

// import java.util.List;

// public class InterviewResponse {

//     private List<String> questions;

//     public InterviewResponse(List<String> questions) {
//         this.questions = questions;
//     }

//     public List<String> getQuestions() {
//         return questions;
//     }
// }
package com.smarthire.smarthire_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InterviewRequest {
    private String technology;
}