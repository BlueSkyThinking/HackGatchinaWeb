package com.blueskythinking.hackgatchinaweb.model;

import com.blueskythinking.hackgatchinaweb.model.enums.Interest;
import com.github.fabiomaffioletti.firebase.document.FirebaseDocument;
import com.github.fabiomaffioletti.firebase.document.FirebaseId;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@ToString
@FirebaseDocument("/users")
public class User implements UserDetails {
    @FirebaseId
    private String id;
    private String email;
    private String firstName;
    private String lastName;
    private Date dateOfBirth;
    private List<Interest> interests;
    private String about;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.emptyList();
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
