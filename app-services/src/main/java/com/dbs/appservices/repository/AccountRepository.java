package com.dbs.appservices.repository;


import com.dbs.appservices.entity.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Long> {

    //CRUD and pagination methods are auto-generated

    //Custom methods
    AccountEntity findByName(String name);

    //Get Balance by the ID
    @Query("select a.balance from AccountEntity a where a.id = :id")
    double getBalanceById(@Param("id") long id);

    //Update the balance
    @Modifying
    @Query("update AccountEntity a set a.balance = a.balance + :amount where a.id=:id")
    int deposit(@Param("id") long id, @Param("amount") double amount);

    @Modifying
    @Query("update AccountEntity a set a.balance = a.balance - :amount where a.id=:id")
    int withdraw(@Param("id") long id, @Param("amount") double amount);



}
