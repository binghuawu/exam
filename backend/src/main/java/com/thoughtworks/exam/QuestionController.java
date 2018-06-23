package com.thoughtworks.exam;

import com.google.common.collect.Lists;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuestionController {

    @GetMapping(value = "api/fetchQuestions", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Question> fetchQuestions() {
        return Lists.newArrayList();
    }

}
