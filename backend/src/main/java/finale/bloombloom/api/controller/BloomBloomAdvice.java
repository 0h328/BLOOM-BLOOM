package finale.bloombloom.api.controller;

import finale.bloombloom.common.exception.BloomBloomException;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class BloomBloomAdvice {

    private final String ERROR_LOG = "[ERROR] %s : %s";
    private final Logger logger = LoggerFactory.getLogger(BloomBloomAdvice.class);

    @ExceptionHandler
    public ResponseEntity<ExceptionDto> bloombloomException(BloomBloomException exception) {
        logger.error(String.format(ERROR_LOG, exception.getClass().getSimpleName(), exception.getMessage()));
        return ResponseEntity.status(exception.status()).body(new ExceptionDto(exception.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionDto> validException(MethodArgumentNotValidException exception) {
        logger.error(String.format(ERROR_LOG, exception.getClass().getSimpleName(), exception.getMessage()));
        return ResponseEntity.badRequest().body(new ExceptionDto(exception.getMessage()));
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    static class ExceptionDto {
        private String message;
    }
}
