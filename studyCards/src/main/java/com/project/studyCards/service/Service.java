package com.project.studyCards.service;

import com.project.studyCards.model.Cards;
import com.project.studyCards.repository.Repo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
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
		
		Cards card= repo.findById(id).orElse(null);
		String[] op = card.getOptions();
		List<String> opList = new ArrayList<>(Arrays.asList(op));
		Collections.shuffle(opList);
		card.setOptions((String[])opList.toArray());

		return card;
	}


	public Cards addCard(Cards card) {
		// TODO Auto-generated method stub
		card.setCorrectOption(card.getCorrectOption().charAt(0)-'A');
		return repo.save(card);
	}
}
