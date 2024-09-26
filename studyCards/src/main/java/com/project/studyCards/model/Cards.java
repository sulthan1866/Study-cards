package com.project.studyCards.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cards {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String qtype;
    private String question;
    @Column(columnDefinition="TEXT")
    private String answer;
    
    private String[] options;
    private String correctOption;
    
    public int getId() {
    	return id;
    }
    
    public String getQtype() {
    	return this.qtype;
    }
    
    public String getQuestion(){
    	return this.question;
    }
    
    public String getAnswer() {
    	return this.answer;
    }
    
    public String[] getOptions() {
    	return this.options;
    }
    
    public String getCorrectOption() {
    	return this.correctOption;
    }
    
    public void setOption(int index) {
    	this.correctOption  = this.options[index];
    	
    }
    public void setOptions(String[] options) {
    	this.options  = options;
    	
    }
    

}
