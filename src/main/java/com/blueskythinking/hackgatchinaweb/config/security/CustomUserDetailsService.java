package com.blueskythinking.hackgatchinaweb.config.security;

import com.blueskythinking.hackgatchinaweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


@Component
@Qualifier("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findAll().stream().filter(u -> u.getEmail().equalsIgnoreCase(username))
                .findFirst().orElseThrow(() -> new UsernameNotFoundException("Username: " + username + " not found"));
    }
}