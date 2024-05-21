package com.dbs.beans;

import org.springframework.stereotype.Component;

@Component
public class HelloImpl implements Hello {

    @Override
    public String sayHello(String msg){
        return "Hello " + msg;
    }

}
