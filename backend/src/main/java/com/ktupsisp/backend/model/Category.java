package com.ktupsisp.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Category {

  @Id
  int id;
  String name;
}
