package com.blueskythinking.hackgatchinaweb.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@RestController
public class AngularController {
    @GetMapping(value = {"/"})
    public ModelAndView angularLogin() {
        return new ModelAndView("index");
    }
}
