package com.example.joblinkexpress.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.joblinkexpress.model.Job;
import java.util.Optional;


public interface JobRepo extends JpaRepository<Job, Long> {
     
        Optional<Job>  findByTitle(String title);
}
