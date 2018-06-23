package com.thoughtworks.exam;

import lombok.Data;

@Data
public class UserAnswer {
    private String id;
    private String answer;

    public UserAnswer() {
    }

    public UserAnswer(String id, String answer) {
        this.id = id;
        this.answer = answer;
    }
}
