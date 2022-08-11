package com.smart.service.impl;

import com.smart.model.User;
import com.smart.model.UserType;
import com.smart.repo.RoleRepository;
import com.smart.repo.UserRepository;
import com.smart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;


    @Autowired
    private RoleRepository roleRepository;

    //creating users
    @Override
    public User createUser(User user, Set<UserType> userTypes) throws Exception {
        User local = this.userRepository.findByEmail(user.getEmail());
        if (local!=null){
            System.out.println("User is already there !!");
            throw new Exception("User already present !!");
        } else {
            //create user
            for (UserType ur : userTypes){
                roleRepository.save(ur.getType());
            }
            user.getUserTypes().addAll(userTypes);
            local = this.userRepository.save(user);
        }
        return local;
    }

    //getting user by email
    @Override
    public User getUser(String email) {
        return this.userRepository.findByEmail(email);
    }

    @Override
    public void deleteUser(Long id) {
        this.userRepository.deleteById(id);
    }

}
