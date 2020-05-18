package com.ktupsisp.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ktupsisp.backend.model.Picture.PictureId;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@IdClass(PictureId.class)
public class Picture {

  @Id
  @ManyToOne
  @JoinColumn(name = "item_id")
  @JsonIgnore
  private Item item;

  @Id
  private String url;

  @Data
  @NoArgsConstructor
  static class PictureId implements Serializable {

    private Item item;
    private String url;
  }
}
