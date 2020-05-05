package com.ktupsisp.backend.model;

import com.ktupsisp.backend.model.Picture.PictureId;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
@IdClass(PictureId.class)
public class Picture {

  @Id
  private long itemId;
  @Id
  private String url;

  @Data
  @AllArgsConstructor
  static class PictureId implements Serializable {

    private long itemId;
    private String url;
  }
}
