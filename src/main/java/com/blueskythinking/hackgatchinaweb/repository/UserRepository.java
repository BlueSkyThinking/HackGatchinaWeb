package com.blueskythinking.hackgatchinaweb.repository;

import com.blueskythinking.hackgatchinaweb.model.User;
import com.github.fabiomaffioletti.firebase.repository.DefaultFirebaseRealtimeDatabaseRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(path = "users", itemResourceRel = "user")
public class UserRepository extends DefaultFirebaseRealtimeDatabaseRepository<User, String> {
}