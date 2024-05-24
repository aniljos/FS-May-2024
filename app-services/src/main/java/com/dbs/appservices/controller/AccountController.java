package com.dbs.appservices.controller;

import com.dbs.appservices.entity.AccountEntity;
import com.dbs.appservices.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountRepository repository;

    @GetMapping
    public List<AccountEntity> fetchAll(){
        return repository.findAll();
    }

    @PostMapping
    public ResponseEntity<Void> save(AccountEntity account){
        try {

            AccountEntity savedAccount = repository.save(account);
            return ResponseEntity.created(new URI("/accounts/" + savedAccount.getId())).build();
        }
        catch (Exception ex){
            ex.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }
}
