package com.example.joblinkexpress.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.joblinkexpress.model.ResumeJpg;

public interface ResumeJpgRepo extends JpaRepository<ResumeJpg, Long> {

    Optional<ResumeJpg> findByName(String fileName);

    Optional<ResumeJpg> findByEmail(String email);
}
