package com.project.studyCards.controller;

import com.project.studyCards.model.Cards;
import com.project.studyCards.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
public class Controller {
    @Autowired
    Service service;

    @GetMapping("/{genre}/cards")
    public ResponseEntity<List<Cards>> getCards(@PathVariable String genre){
        List<Cards> cardsList=service.getCards(genre);

        if(cardsList==null)return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        return new ResponseEntity<>(cardsList, HttpStatus.OK);
    }
    
    @GetMapping("/{genre}/picker-cards")
    public ResponseEntity<List<Cards>> getShuffledCards(@PathVariable String genre){
    	List<Cards> cards = service.getShuffledCards(genre);
    	if(cards==null)return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    	
    	return new ResponseEntity<>(cards,HttpStatus.OK);
    }
    
    @GetMapping("/{genre}/cards/{id}")
    public ResponseEntity<Cards> getCardById(@PathVariable int id,@PathVariable String genre){
    	Cards card = service.getCardById(id,genre);
    	if(card==null)return new ResponseEntity<>( HttpStatus.NOT_FOUND);
    	
    	return new ResponseEntity<>(card,HttpStatus.OK);
    }
    
    @PostMapping("/cards/add")
    public ResponseEntity<Cards> addCard(@RequestBody Cards card){
    	Cards saved=(Cards) service.addCard(card);
    	return new ResponseEntity<>(saved,HttpStatus.ACCEPTED);
    }
}
