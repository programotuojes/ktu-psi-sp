package com.ktupsisp.backend.service;

import com.ktupsisp.backend.dto.CategoryItemDto;
import com.ktupsisp.backend.exception.NotFoundException;
import com.ktupsisp.backend.model.Item;
import com.ktupsisp.backend.repository.ItemRepository;
import com.ktupsisp.backend.repository.PictureRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

  private final ItemRepository itemRepository;
  private final PictureRepository pictureRepository;

  public ItemService(ItemRepository itemRepository, PictureRepository pictureRepository) {
    this.itemRepository = itemRepository;
    this.pictureRepository = pictureRepository;
  }

  public List<CategoryItemDto> getItemsInCategory(int categoryId) {
    List<Item> items;
    List<CategoryItemDto> itemsDto = new ArrayList<>();

    if (categoryId == 1) {
      items = itemRepository.getNewestItems();
    } else {
      items = itemRepository.getItemsByCategoryId(categoryId);
    }

    for (Item i : items) {
      String imageUrl = pictureRepository.getFirstUrl(i.getId());
      itemsDto.add(CategoryItemDto.itemToCategoryItemDto(i, imageUrl));
    }

    return itemsDto;
  }

  public Item getItem(long id) {
    return itemRepository.getItemById(id)
        .orElseThrow(() -> new NotFoundException("Prekė su id " + id + " nerasta."));
  }
}
