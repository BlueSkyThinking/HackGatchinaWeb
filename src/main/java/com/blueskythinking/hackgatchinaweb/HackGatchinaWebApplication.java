package com.blueskythinking.hackgatchinaweb;

import com.blueskythinking.hackgatchinaweb.model.User;
import com.blueskythinking.hackgatchinaweb.repository.UserRepository;
import com.github.fabiomaffioletti.firebase.EnableFirebaseRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.List;

import static com.blueskythinking.hackgatchinaweb.model.enums.Interest.Running;
import static com.blueskythinking.hackgatchinaweb.model.enums.Interest.Walking;

@EnableWebMvc
@SpringBootApplication
@EnableFirebaseRepositories
public class HackGatchinaWebApplication {

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void initFirebaseApp() {
        //createTempUsr();
    }

    public void createTempUsr() {
        User u = new User();
        u.setEmail("test@mail.ru");
        u.setFirstName("Иван");
        u.setLastName("Иванов");
        u.setDateOfBirth(new Date());
        u.setAbout("I'm very interesting person");
        u.setInterests(List.of(Walking, Running));
        u.setId(u.getEmail().replaceAll("\\.", "%"));
        userRepository.set(u);
    }

    public static void main(String[] args) {
        SpringApplication.run(HackGatchinaWebApplication.class, args);
    }

}
