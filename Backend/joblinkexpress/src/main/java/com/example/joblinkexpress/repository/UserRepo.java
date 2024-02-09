package com.example.joblinkexpress.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.joblinkexpress.model.Users;

public interface UserRepo extends JpaRepository<Users , Long>{

}
