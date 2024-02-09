package com.example.joblinkexpress.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.joblinkexpress.model.Resume;

public interface ResumeRepo extends JpaRepository<Resume,Long>{
        
}
