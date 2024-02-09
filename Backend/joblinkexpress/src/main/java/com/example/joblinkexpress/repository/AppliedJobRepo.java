package com.example.joblinkexpress.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.joblinkexpress.model.AppliedJob;

public interface AppliedJobRepo extends JpaRepository<AppliedJob, Long> {

}
