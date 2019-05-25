package com.blueskythinking.hackgatchinaweb.repository;

import com.blueskythinking.hackgatchinaweb.model.Event;
import com.github.fabiomaffioletti.firebase.repository.DefaultFirebaseRealtimeDatabaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public class EventRepository extends DefaultFirebaseRealtimeDatabaseRepository<Event, String> {
}