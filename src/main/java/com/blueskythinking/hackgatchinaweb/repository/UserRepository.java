package com.blueskythinking.hackgatchinaweb.repository;

import com.blueskythinking.hackgatchinaweb.model.User;
import com.github.fabiomaffioletti.firebase.repository.DefaultFirebaseRealtimeDatabaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository extends DefaultFirebaseRealtimeDatabaseRepository<User, String> {
}