package com.ktupsisp.backend.dto;

import com.ktupsisp.backend.model.Item;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CategoryItemDto {

  private long id;
  private String title;
  private int price;
  private String image;

  public static CategoryItemDto itemToCategoryItemDto(Item item, String imageUrl) {
    return new CategoryItemDto(item.getId(), item.getTitle(), item.getPrice(), imageUrl);
  }
}
