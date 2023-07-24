package org.factoriaf5.zootopia.controllers;

import java.util.List;

import org.factoriaf5.zootopia.repositories.UserRepository;
import org.factoriaf5.zootopia.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @Autowired
    UserRepository repository;
    public HomeController(UserRepository repo){
        this.repository = repo;
    }
    @GetMapping(path = "/usersfsd")
    public List<User> index(){
        List<User> users = repository.findAll();
        return users;
    }
}
