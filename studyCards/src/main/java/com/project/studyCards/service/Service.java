package com.project.studyCards.service;

import com.project.studyCards.model.Cards;
import com.project.studyCards.repository.Repo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@org.springframework.stereotype.Service
public class Service {
    @Autowired
    Repo repo;

   

    public List<Cards> getCards(String genre) {
       return repo.findByGenre(genre);
    }

    public List<Cards> getShuffledCards(String genere) {

		List<Cards> cards= this.getCards(genere);
		Collections.shuffle(cards,new Random());
		return cards;
	}

	public Cards getCardById(int id,String genre) {

		List<Cards> cards= repo.findByGenre(genre);
		Cards card = cards.get(id-1);
		String[] op = card.getOptions();
		List<String> opList =Arrays.asList(op);
		Collections.shuffle(opList);
		for(int i=0;i<4;i++)
			op[i]=opList.get(i);

		card.setOptions(op);

		return card;
	}


	public Cards addCard(Cards card) {
		int index = card.getCorrectOption().charAt(0) - 'A';
		card.setOption(index);
		return repo.save(card);
	}
}
