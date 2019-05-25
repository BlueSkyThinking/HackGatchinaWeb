package com.blueskythinking.hackgatchinaweb;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.annotation.PostConstruct;
import java.io.IOException;

@EnableWebMvc
@SpringBootApplication
public class HackGatchinaWebApplication {

    @Value("classpath:config/serviceAccountKey.json")
    private Resource serviceAccountKey;

    @PostConstruct
    public void initFirebaseApp() throws IOException {
        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccountKey.getInputStream()))
                .setDatabaseUrl("https://gatchino-4491c.firebaseio.com")
                .build();

        FirebaseApp.initializeApp(options);
    }

    public static void main(String[] args) {
        SpringApplication.run(HackGatchinaWebApplication.class, args);
    }

}
