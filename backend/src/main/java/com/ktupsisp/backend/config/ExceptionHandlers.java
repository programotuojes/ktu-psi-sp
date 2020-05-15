package com.ktupsisp.backend.config;

import com.ktupsisp.backend.exception.NotFoundException;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class ExceptionHandlers {

  @ResponseBody
  @ExceptionHandler(NotFoundException.class)
  public String handleNotFound(HttpServletResponse response, NotFoundException exception) {
    response.setStatus(HttpServletResponse.SC_NOT_FOUND);
    return exception.getMessage();
  }
}
