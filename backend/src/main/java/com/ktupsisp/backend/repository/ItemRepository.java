package com.ktupsisp.backend.repository;

import com.ktupsisp.backend.model.Item;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long> {

  List<Item> getItemsByCategoryId(int categoryId);

  @Query(value = "SELECT * FROM item ORDER BY id DESC LIMIT 10", nativeQuery = true)
  List<Item> getNewestItems();
}
