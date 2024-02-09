package com.example.joblinkexpress.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblinkexpress.model.Users;
import com.example.joblinkexpress.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/")
public class UserController {
    
    @Autowired
    UserService service;

    @PostMapping("/addusers")
    public String addUsers(@RequestBody Users user){
        return service.addUser(user);
    }

    @GetMapping("/getAllUsers")
    public List<Users> getAllUsers(){
        return service.getAllUser();
    }

    @GetMapping("/getuserById/{id}")
    public Optional<Users> getUserById(@PathVariable Long userId){
        return service.getUserById(userId);
    }

    @DeleteMapping("/deleteuserById/{id}")
    public String deleteuserById(@PathVariable Long id){
        return service.deleteuserById(id);
    }
}
