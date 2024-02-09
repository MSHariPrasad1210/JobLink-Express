package com.example.joblinkexpress.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.joblinkexpress.model.Job;
import com.example.joblinkexpress.repository.JobRepo;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class JobService {
    @Autowired
    JobRepo repo;

    public String addJob(Job job) {
        repo.save(job);
        return "Job Added";
    }
    public List<Job> getAllJobs() {
        return repo.findAll();
    }
    public Optional<Job> getJobsById(Long id){
        return repo.findById(id);
    }
    public String deletejobById(Long id){
        repo.deleteById(id);
        return "job deleted";
    }

    public boolean editjob(Job request,String title){
        Job job = repo.findByTitle(title).get();

        if(job != null){

            if(request.getJobId() != null){
                job.setJobId(request.getJobId());
            }
            if(request.getTitle() != null){
                job.setTitle(request.getTitle());
            }
            if(request.getDescription() != null){
                job.setDescription(request.getDescription());
            }
            if(request.getEmail() != null){
                job.setEmail(request.getEmail());
            }
            if(request.getUserName() != null){
                job.setUserName(request.getUserName());
            }
            if(request.getSpecialisms() != null){
                job.setSpecialisms(request.getSpecialisms());
            }
            if(request.getIndustry() != null){
                job.setIndustry(request.getIndustry());
            }
            if(request.getJobType() != null){
                job.setJobType(request.getJobType());
            }
            if(request.getCarrierlevel() != null){
                job.setCarrierlevel(request.getCarrierlevel());
            }
            if(request.getQualification() != null){
                job.setQualification(request.getQualification());
            }

            job.setExperience(request.getExperience());

            if(request.getExpectedsalary() != null){
                job.setExpectedsalary(request.getExpectedsalary());
            }
            if(request.getGender() != null){
                job.setGender(request.getGender());
            }
            if(request.getApplicationDeadline() != null){
                job.setApplicationDeadline(request.getApplicationDeadline());
            }
            if(request.getCity() != null){
                job.setCity(request.getCity());
            }
            if(request.getCountry() != null){
                job.setCountry(request.getCountry());
            }
            if(request.getFullAddress() != null){
                job.setFullAddress(request.getFullAddress());
            }

            repo.saveAndFlush(job);  
            return true;         
        }

        return false;
    }
}
