package com.dbs.appservices.repository;


import com.dbs.appservices.entity.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Long> {

    //CRUD and pagination methods are auto-generated
}
