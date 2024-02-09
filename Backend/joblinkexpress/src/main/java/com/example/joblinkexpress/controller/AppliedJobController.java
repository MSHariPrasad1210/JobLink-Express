package com.example.joblinkexpress.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblinkexpress.model.AppliedJob;
import com.example.joblinkexpress.service.AppliedJobService;

@RestController
@CrossOrigin
public class AppliedJobController {

    @Autowired
    AppliedJobService service;

    @PostMapping("/applyjob")
    public String applyJob(@RequestBody AppliedJob job) {
        return service.applyjob(job);
    }

    @GetMapping("/getAppliedJob")
    public List<AppliedJob> getAppliedJob() {
        return service.getappliedjob();
    }

    @DeleteMapping("/deleteAppliedJob/{id}")
    public String deleteAppliedJob(Long appliedJobId) {
        return service.deleteappliedjob(appliedJobId);
    }

}
