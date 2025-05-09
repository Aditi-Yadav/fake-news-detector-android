package com.fakenewsdetection.backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/detect")
public class DetectionController {

  @PostMapping("/text")
  public Map<String, Double> analyzeText(@RequestBody Map<String, String> payload) {
    String headline = payload.get("headline");
    String body = payload.get("body");

    double truthfulnessPercentage = Math.random() * 100; // Simulate a score
    return Map.of("truthfulnessPercentage", truthfulnessPercentage);
  }
}
