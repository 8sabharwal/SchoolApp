package com.smart.model;

import javax.persistence.*;

@Entity
public class UserType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long usertypeId;

    //user
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;
    @ManyToOne
    private Type type;

    public UserType() {
    }

    public long getUsertypeId() {
        return usertypeId;
    }

    public void setUsertypeId(long usertypeId) {
        this.usertypeId = usertypeId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }
}
