package com.blueskythinking.hackgatchinaweb.repository;

import com.blueskythinking.hackgatchinaweb.model.Event;
import com.github.fabiomaffioletti.firebase.repository.DefaultFirebaseRealtimeDatabaseRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(path = "events", collectionResourceRel = "events", itemResourceRel = "event")
public class EventRepository extends DefaultFirebaseRealtimeDatabaseRepository<Event, String> {
}