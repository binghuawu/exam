package com.thoughtworks.exam;

import com.google.common.collect.Maps;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(value = "*")
public class UserQuestionController {
    private Map<String, String> answers = new HashMap<String, String>() {{
        put("1", "D");
        put("2", "D");
        put("3", "A");
        put("4", "C");
        put("5", "B");
        put("6", "D");
        put("7", "D");
        put("8", "A");
        put("9", "C");
        put("10", "D");
    }};


    @PostMapping(value = "api/submit", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public UserScore submit(@RequestBody UserSubmitAnswer userSubmitAnswer) {
        UserScore userScore = new UserScore();
        userScore.setUserId(userSubmitAnswer.getUserId());
        return userScore;

    }
}
