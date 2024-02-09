package com.example.joblinkexpress.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.joblinkexpress.model.AppliedJob;
import com.example.joblinkexpress.repository.AppliedJobRepo;


@Service
public class AppliedJobService {
    @Autowired
    AppliedJobRepo repo;

    public String applyjob(AppliedJob job) {
        repo.save(job);
        return "Jobs applied";
    }

    public List<AppliedJob> getappliedjob() {
        return repo.findAll();
    }

    public String deleteappliedjob(Long appliedJobId) {
        repo.deleteById(appliedJobId);
        return "Job deleted";
    }

}
