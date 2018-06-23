package com.thoughtworks.exam;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.CoreMatchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserQuestionControllerTest {
    @Autowired
    private MockMvc mvc;

    @Test
    public void should_return_user_score_when_submit_answer_by_user() throws Exception {
        UserSubmitAnswer userSubmitAnswer = new UserSubmitAnswer();
        userSubmitAnswer.setUserId("0001");
        ObjectMapper objectMapper = new ObjectMapper();

        mvc.perform(post("/api/submit").contentType(APPLICATION_JSON_VALUE)
                .content(objectMapper.writeValueAsString(userSubmitAnswer)))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON_VALUE))
                .andExpect(jsonPath("userId", CoreMatchers.is("0001")));
    }
}
