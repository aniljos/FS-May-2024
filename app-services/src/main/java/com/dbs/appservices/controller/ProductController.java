package com.dbs.appservices.controller;


import com.dbs.appservices.entity.ProductEntity;
import com.dbs.appservices.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
//@CrossOrigin(origins = {}, methods = {})
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @GetMapping
    public List<ProductEntity> fetchAll(){

        return repository.findAll();
    }

    @PostMapping
    public ResponseEntity<Void> Save(@RequestBody ProductEntity product){

        try {

            ProductEntity savedEntity =  repository.save(product);
            return ResponseEntity.ok().build();
        }
        catch (Exception ex){
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id){

        try {
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        catch(Exception ex){
            return ResponseEntity.internalServerError().build();
        }
    }
}
