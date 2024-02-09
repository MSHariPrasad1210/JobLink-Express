package com.example.joblinkexpress.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.joblinkexpress.model.Resume;
import com.example.joblinkexpress.repository.ResumeRepo;

@Service
public class ResumeService {
     
    @Autowired 
    ResumeRepo repo;

    public String postresume(Resume resume){
        repo.save(resume);
        return "resume added";
    }

    public List<Resume> getresume(){
        return repo.findAll();
    }

    public String deleteresume(Long id){
        repo.deleteById(id);
        return "resume deleted";
    }


}
