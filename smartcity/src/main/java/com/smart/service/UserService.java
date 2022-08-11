package com.smart.service;

import com.smart.model.User;
import com.smart.model.UserType;
import org.springframework.stereotype.Service;

import java.util.Set;

public interface UserService {
    //creating user
    public User createUser(User user, Set<UserType> userTypes) throws Exception;
    //get user by email
    public User getUser(String email);
    //delete user by email
    public void deleteUser(Long id);
}
