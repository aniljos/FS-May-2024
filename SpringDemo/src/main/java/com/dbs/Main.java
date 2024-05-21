package com.dbs;

import com.dbs.beans.Hello;
import com.dbs.beans.HelloImpl;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        //System.out.println("Hello world!");

        //Create a spring container.
        AnnotationConfigApplicationContext context
                            = new AnnotationConfigApplicationContext(AppConfig.class);
        //Get a handle to the Hello component
        Hello hello = context.getBean(Hello.class); // container services are available
        System.out.println("Type of hello: " + hello.getClass().getName());
        //HelloImpl hello = new HelloImpl();  // not managed by the container
        System.out.println("hello sayHello: " + hello.sayHello("Spring"));


    }
}