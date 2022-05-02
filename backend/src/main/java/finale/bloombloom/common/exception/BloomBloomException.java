package finale.bloombloom.common.exception;

import org.springframework.http.HttpStatus;

public abstract class BloomBloomException extends RuntimeException {
    public BloomBloomException() {
    }

    public BloomBloomException(String message) {
        super(message);
    }

    public abstract HttpStatus status();
}
