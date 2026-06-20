package com.smarthire.smarthire_backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smarthire.smarthire_backend.entity.User;
import com.smarthire.smarthire_backend.repository.UserRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    // REGISTER
    @PostMapping("/register")
    public String register(@RequestBody User user) {

        Optional<User> existingUser =
                userRepository.findByEmail(user.getEmail());

        if(existingUser.isPresent()) {
            return "Email already exists";
        }

        userRepository.save(user);

        return "Registration Successful";
    }

    // LOGIN
    @PostMapping("/login")
    public String login(@RequestBody User user) {

        Optional<User> existingUser =
                userRepository.findByEmail(user.getEmail());

        if(existingUser.isPresent()
                && existingUser.get().getPassword()
                .equals(user.getPassword())) {

            return "Login Successful";
        }

        return "Invalid Email or Password";
    }
}