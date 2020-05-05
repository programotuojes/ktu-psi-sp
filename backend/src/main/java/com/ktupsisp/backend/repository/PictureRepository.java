package com.ktupsisp.backend.repository;

import com.ktupsisp.backend.model.Picture;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureRepository extends CrudRepository<Picture, Long> {

  @Query(value = "SELECT url FROM picture WHERE item_id = ?1 LIMIT 1", nativeQuery = true)
  String getFirstUrl(long itemId);
}
