package com.thoughtworks.exam;

import com.google.common.collect.Lists;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserStoreController {
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
