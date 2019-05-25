package com.blueskythinking.hackgatchinaweb.model.enums;

public enum Interest {
    Walking("Прогулки"),
    Running("Бег");

    private String value;

    Interest(String value) {
        this.value = value;
    }

    public static Interest resolveByValue(String value) {
        for (Interest r : values()) {
            if (r.getValue().equals(value)) {
                return r;
            }
        }
        return null;
    }

    public String getValue() {
        return value;
    }
}
