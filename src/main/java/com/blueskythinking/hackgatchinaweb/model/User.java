package com.blueskythinking.hackgatchinaweb.model;

import com.blueskythinking.hackgatchinaweb.model.enums.Interest;
import com.github.fabiomaffioletti.firebase.document.FirebaseDocument;
import com.github.fabiomaffioletti.firebase.document.FirebaseId;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@ToString
@FirebaseDocument("/users")
public class User {
    @FirebaseId
    private String id;
    private String email;
    private String firstName;
    private String lastName;
    private Date dateOfBirth;
    private List<Interest> interests;
    private String about;
}
