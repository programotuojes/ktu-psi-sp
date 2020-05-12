package com.ktupsisp.backend.contoller;

import com.ktupsisp.backend.dto.CategoryItemDto;
import com.ktupsisp.backend.model.Item;
import com.ktupsisp.backend.service.ItemService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ItemController {

  private final ItemService itemService;

  public ItemController(ItemService itemService) {
    this.itemService = itemService;
  }

  @GetMapping("/products/category/{categoryId}")
  public List<CategoryItemDto> getItemsInCategory(@PathVariable int categoryId) {
    return itemService.getItemsInCategory(categoryId);
  }

  @GetMapping("/products/{id}")
  public Item getItem(@PathVariable long id) {
    return itemService.getItem(id);
  }
}
