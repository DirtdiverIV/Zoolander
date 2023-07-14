package org.factoriaf5.zootopia.repositories;

import org.factoriaf5.zootopia.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long>{
    
}
