package finale.bloombloom.api.service;

import finale.bloombloom.api.request.PresentBouquetSaveRequest;
import finale.bloombloom.api.response.PresentBouquetResponse;
import finale.bloombloom.api.response.UuidResponse;

public interface PresentService {
    UuidResponse savePresentBouquet(Long userSeq, PresentBouquetSaveRequest request);

    PresentBouquetResponse findPresentBouquet(String uuid);
}
