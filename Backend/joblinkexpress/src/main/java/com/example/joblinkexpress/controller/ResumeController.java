package com.example.joblinkexpress.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblinkexpress.model.Resume;
import com.example.joblinkexpress.service.ResumeService;

@RestController
@CrossOrigin
@RequestMapping("/")
public class ResumeController {

    @Autowired
    ResumeService service;

    @PostMapping("/postresume")
    public String postResume(@RequestBody Resume resume){
        return service.postresume(resume);
    }

    @GetMapping("/getresume")
    public List<Resume> getResume(){
        return service.getresume();
    }

    @DeleteMapping("/deleteresume/{id}")
    public String deleteResume(@RequestParam Long id){
        return service.deleteresume(id);
    }
    
}
