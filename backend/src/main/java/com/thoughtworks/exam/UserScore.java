package com.thoughtworks.exam;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class UserScore {
    private String userId;

    private BigDecimal score;
}
