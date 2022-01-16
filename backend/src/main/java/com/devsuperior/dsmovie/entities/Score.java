package com.devsuperior.dsmovie.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tb_score")
public class Score implements Serializable {

    @EmbeddedId
    ScorePK id = new ScorePK();
    Double value;

    public Score() {
    }

    public void setMovie(Movie movie) {
        id.setMovie(movie);
    }

    public void setUser(User user) {
        id.setUser(user);
    }

    public ScorePK getId() {
        return id;
    }

    public void setId(ScorePK id) {
        this.id = id;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }
}