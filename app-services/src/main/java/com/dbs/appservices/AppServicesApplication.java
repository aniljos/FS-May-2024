package com.dbs.appservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class AppServicesApplication {

    public static void main(String[] args) {
            SpringApplication.run(AppServicesApplication.class, args);
    }

}
