package com.example.joblinkexpress.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.joblinkexpress.model.Job;
import com.example.joblinkexpress.service.JobService;

@RestController
@CrossOrigin
@RequestMapping("/job")
public class JobController {

    @Autowired
    JobService service;

    @PostMapping("/postjob")
    public String postJob(@RequestBody Job job) {
        service.addJob(job);
        return "job added";
    }

    @GetMapping("/getjobs")
    public List<Job> GetJobs() {
        return service.getAllJobs();
    }

    @GetMapping("/getjobById/{id}")
    public Optional<Job> GetJobsById(@PathVariable Long id){
        return service.getJobsById(id);
    }

    @PutMapping("/editjob/{id}")
    public boolean editJob(@RequestBody Job request , @PathVariable String title){
        return service.editjob(request,title);
    }

    @DeleteMapping("deletejobById/{id}")
    public String deleteJobsById(@PathVariable Long id){
       return service.deletejobById(id); 
         
    }
}
