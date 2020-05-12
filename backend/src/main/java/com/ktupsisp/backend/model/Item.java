package com.ktupsisp.backend.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Item {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String title;
  private String description;
  private int price;

  @OneToOne
  @JoinColumn(name = "category_id")
  private Category category;

  @OneToMany(mappedBy = "item")
  private List<ItemDetail> itemDetails;

  @OneToMany(mappedBy = "item")
  private List<Picture> pictures;
}
