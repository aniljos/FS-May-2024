package com.dbs.appservices.services;

import com.dbs.appservices.entity.AccountEntity;
import com.dbs.appservices.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public List<AccountEntity> fetchAllAccounts() {
        return accountRepository.findAll();
    }
    public Optional<AccountEntity> fetchAccountById(long id) {
        return accountRepository.findById(id);
    }
    public AccountEntity fetchAccountByName(String name) {
        return accountRepository.findByName(name);
    }
    public AccountEntity saveAccount(AccountEntity account) {
        return accountRepository.save(account);
    }

    public void deposit(long id, double amount) throws Exception {
        try {
           int rowsAffected =   accountRepository.deposit(id, amount);
           if (rowsAffected == 0) {
               throw new Exception("Deposit Failed");
           }
        }
        catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public void withdraw(long id, double amount) throws Exception {

        try {
            double currentBalance = accountRepository.getBalanceById(id);
            if(currentBalance > amount){
                int rowsAffected =   accountRepository.withdraw(id, amount);
                if(rowsAffected == 0) {
                    throw new Exception("Withdraw Failed");
                }
            }
            else{
                throw new Exception("Withdraw Failed: Insufficient funds");
            }
        }
        catch (Exception e) {

            throw new Exception(e.getMessage());
        }

    }


    public void transfer(long fromId, long toId, double amount) throws Exception {
        try {
            withdraw(fromId, amount);
            deposit(toId, amount);
        } catch (Exception ex) {
            throw new Exception("Transfer Failed: " + ex.getMessage());
        }
    }
}
