package com.ktupsisp.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ktupsisp.backend.model.ItemDetail.ItemDetailId;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "item_detail")
@IdClass(ItemDetailId.class)
@NoArgsConstructor
public class ItemDetail {

  @Id
  @ManyToOne
  @JoinColumn(name = "item_id")
  @JsonIgnore
  private Item item;

  @Id
  private String size;

  private int quantity;

  @Data
  @NoArgsConstructor
  static class ItemDetailId implements Serializable {

    private Item item;
    private String size;
  }
}
