package com.thoughtworks.exam;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(value = "*")
public class UserController {
    private static Map<String, String> answers = new HashMap<String, String>() {{
        put("001", "D");
        put("002", "D");
        put("003", "A");
        put("004", "C");
        put("005", "B");
        put("006", "D");
        put("007", "D");
        put("008", "A");
        put("009", "C");
        put("010", "D");
    }};


    private static List<UserScore> userScoreList = new ArrayList<>();

    @CrossOrigin(value = "*")
    @PostMapping(value = "api/submit", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public UserScore submit(@RequestBody UserSubmitAnswer userSubmitAnswer) {
        List<UserAnswer> userAnswers = userSubmitAnswer.getChoices();
        int score = 0;
        for (UserAnswer userAnswer: userAnswers) {
            if (userAnswer == null || answers.get(userAnswer.getId()) == null) {
                continue;
            }
            if (answers.get(userAnswer.getId()).equals(userAnswer.getAnswer().toUpperCase())) {
                score += 10;
            }
        }
        UserScore userScore = new UserScore();
        userScore.setUserId(userSubmitAnswer.getUserId());
        userScore.setScore(new BigDecimal(score));
        userScoreList.add(userScore);
        return userScore;

    }

    @GetMapping(value = "api/queryAll", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<UserScore> queryAll() {
        return userScoreList;
    }

    @GetMapping(value = "api/query/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public UserScore query(@PathVariable String id) {
        UserScore userScore = new UserScore();
        for (int i = 0; i < userScoreList.size(); i++) {
            userScore = userScoreList.get(i);
            if (userScore != null && userScore.getUserId().equals(id)) {
                return userScore;
            }
        }
        userScore.setUserId(id);
        return userScore;
    }
}
