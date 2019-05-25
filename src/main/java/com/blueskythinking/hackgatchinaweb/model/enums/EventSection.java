package com.blueskythinking.hackgatchinaweb.model.enums;

public enum EventSection {
    Guide("Экскурсии"),
    Running("Бег");

    private String value;

    EventSection(String value) {
        this.value = value;
    }

    public static EventSection resolveByValue(String value) {
        for (EventSection r : values()) {
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
