package com.example.joblinkexpress.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.joblinkexpress.model.Users;
import com.example.joblinkexpress.repository.UserRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
    
    @Autowired
    UserRepo repo;

    public String addUser(Users user){
        repo.save(user);
        return "user added";
    }

    public List<Users> getAllUser(){
        return repo.findAll();
    }
    public Optional<Users> getUserById(Long userId){
        return repo.findById(userId);
    }
    public String deleteuserById(Long userId){
         repo.deleteById(userId);
         return "user deleted";
    }
}
