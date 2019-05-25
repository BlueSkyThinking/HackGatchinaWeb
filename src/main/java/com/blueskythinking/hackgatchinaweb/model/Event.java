package com.blueskythinking.hackgatchinaweb.model;

import com.blueskythinking.hackgatchinaweb.model.enums.EventSection;
import com.github.fabiomaffioletti.firebase.document.FirebaseDocument;
import com.github.fabiomaffioletti.firebase.document.FirebaseId;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@FirebaseDocument("/events")
@AllArgsConstructor
public class Event {
    @FirebaseId
    private String id;
    private String name;
    private String descriptions;
    private EventSection eventSection;
    private double price;
    private List<User> participants;
    private User owner;
    private Date time;
    private String imgUrl;
}
