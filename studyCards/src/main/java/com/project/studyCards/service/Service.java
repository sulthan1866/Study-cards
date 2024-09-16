package com.project.studyCards.service;

import com.project.studyCards.model.Cards;
import com.project.studyCards.repository.Repo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class Service {
    @Autowired
    Repo repo;


    public List<Cards> getCards() {
       return repo.findAll();
    }


	public Cards getCardById(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElse(null);
	}


	public Cards addCard(Cards card) {
		// TODO Auto-generated method stub
		return repo.save(card);
	}
}
