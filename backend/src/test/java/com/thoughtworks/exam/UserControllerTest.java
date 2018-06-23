package com.thoughtworks.exam;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import org.hamcrest.CoreMatchers;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {
    @Autowired
    private MockMvc mvc;

    @Test
    public void should_return_user_score_when_submit_answer_by_user() throws Exception {
        UserSubmitAnswer userSubmitAnswer = new UserSubmitAnswer();
        userSubmitAnswer.setUserId("0001");
        userSubmitAnswer.setChoices(Lists.newArrayList(new UserAnswer("001", "D"),
                new UserAnswer("002", "D")));
        ObjectMapper objectMapper = new ObjectMapper();

        mvc.perform(post("/api/submit").contentType(APPLICATION_JSON_VALUE)
                .content(objectMapper.writeValueAsString(userSubmitAnswer)))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON_VALUE))
                .andExpect(jsonPath("userId", CoreMatchers.is("0001")))
                .andExpect(jsonPath("score", CoreMatchers.is(20)));
    }

    @Test
    public void should_return_all_user_score() throws Exception {
        mvc.perform(get("/api/queryAll").contentType(APPLICATION_JSON_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON_VALUE))
                .andExpect(jsonPath("$", Matchers.notNullValue()));
    }

    @Test
    public void should_return_user_score_by_user_id() throws Exception {
        mvc.perform(get("/api/query/00001").contentType(APPLICATION_JSON_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON_VALUE))
                .andExpect(jsonPath("userId", CoreMatchers.is("00001")));
    }
}
