package com.dbs.appservices.controller;

import com.dbs.appservices.entity.AccountEntity;
import com.dbs.appservices.repository.AccountRepository;
import com.dbs.appservices.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountService service;

    @GetMapping
    public List<AccountEntity> fetchAll(){
        return service.fetchAllAccounts();
    }

    @PostMapping
    public ResponseEntity<Void> save(AccountEntity account){
        try {

            AccountEntity savedAccount = service.saveAccount(account);
            return ResponseEntity.created(new URI("/accounts/" + savedAccount.getId())).build();
        }
        catch (Exception ex){
            ex.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/{name}")
    public ResponseEntity<AccountEntity> fetchAccountName(@PathVariable String name){
        try {

            AccountEntity entity = service.fetchAccountByName(name);
            if(entity != null){
                return ResponseEntity.ok(entity);
            }
            else{
                return ResponseEntity.badRequest().build();
            }
        }
        catch (Exception ex){
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/transfer/{from}/{to}/{amount}")
    public ResponseEntity<String> transferMoney(@PathVariable long from, @PathVariable long to, @PathVariable double amount){

        try {
            service.transfer(from, to, amount);
            return  ResponseEntity.ok("Transfer Complete");
        }
        catch (Exception ex){
            ex.printStackTrace();
            return  ResponseEntity.badRequest().body("Transfer Failed");
        }
    }
}
