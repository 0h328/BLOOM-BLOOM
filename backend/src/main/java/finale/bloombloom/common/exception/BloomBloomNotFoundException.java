package finale.bloombloom.common.exception;

import org.springframework.http.HttpStatus;

public class BloomBloomNotFoundException extends BloomBloomException {
    public BloomBloomNotFoundException() {
        super();
    }

    public BloomBloomNotFoundException(String message) {
        super(message);
    }

    @Override
    public HttpStatus status() {
        return HttpStatus.NOT_FOUND;
    }
}
