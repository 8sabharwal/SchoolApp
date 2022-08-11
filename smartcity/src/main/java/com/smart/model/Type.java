package com.smart.model;

import javax.persistence.*;
import javax.swing.*;
import java.util.*;

@Entity
@Table(name = "Type")
public class Type {
    @Id
    private long utId;
    private String type;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "type")
    private Set<UserType> userTypes = new HashSet<>();

    public Type() {
    }

    public Set<UserType> getUserTypes() {
        return userTypes;
    }

    public void setUserTypes(Set<UserType> userTypes) {
        this.userTypes = userTypes;
    }

    public Type(long utId, String type) {
        this.utId = utId;
        this.type = type;
    }

    public long getUtId() {
        return utId;
    }

    public void setUtId(long utId) {
        this.utId = utId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
