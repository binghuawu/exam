package com.thoughtworks.exam;


import lombok.Data;

import java.math.BigDecimal;

@Data
public class Question {
    private String userId;

    private BigDecimal score;
}
