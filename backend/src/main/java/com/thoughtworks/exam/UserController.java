package com.thoughtworks.exam;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(value = "*")
public class UserController {
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

    private static Map<String, BigDecimal> userScores = new HashMap<String, BigDecimal>() {{
        put("0001", new BigDecimal(100));
    }};


    @PostMapping(value = "api/submit", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public UserScore submit(@RequestBody UserSubmitAnswer userSubmitAnswer) {
        UserScore userScore = new UserScore();
        userScore.setUserId(userSubmitAnswer.getUserId());
        return userScore;

    }

    @GetMapping(value = "api/queryAll", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<UserScore> queryAll() {
        return Lists.newArrayList();
    }

    @GetMapping(value = "api/query/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public UserScore queryAll(@PathVariable String id) {
        UserScore userScore = new UserScore();
        userScore.setUserId(id);
        return userScore;
    }
}
