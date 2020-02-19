package com.ktupsisp.backend.contoller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

  @GetMapping("/")
  public String getHealth() {
    return "Application is working";
  }
}
