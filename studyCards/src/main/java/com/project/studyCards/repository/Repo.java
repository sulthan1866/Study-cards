package com.project.studyCards.repository;

import com.project.studyCards.model.Cards;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Repo extends JpaRepository<Cards,Integer> {

	List<Cards> findByGenre(String genere);

	Cards findByIdAndGenre(int id, String genre);
}
