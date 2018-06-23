package com.thoughtworks.exam;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserQuestionController {

    @PostMapping(value = "api/submit", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public UserScore submit(@RequestBody UserSubmitAnswer userSubmitAnswer) {
        UserScore userScore = new UserScore();
        userScore.setUserId(userSubmitAnswer.getUserId());
        return userScore;

    }
}
