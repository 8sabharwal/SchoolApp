package com.smart.repo;

import com.smart.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Type, Long> {

}
