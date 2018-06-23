package com.thoughtworks.exam;

import lombok.Data;

import java.util.List;

@Data
public class UserSubmitAnswer {
    private String userId;

    private List<UserAnswer> choices;
}
