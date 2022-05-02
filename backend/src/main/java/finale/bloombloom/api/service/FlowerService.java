package finale.bloombloom.api.service;

import finale.bloombloom.api.response.*;
import finale.bloombloom.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlowerService {
    private final BouquetRepository bouquetRepository;
    private final MainFlowerRepository mainFlowerRepository;
    private final SubFlowerRepository subFlowerRepository;
    private final DecoRepository decoRepository;
    private final WrapRepository wrapRepository;

    public List<MainFlowerResponse> findAllMainFlower() {
        return mainFlowerRepository.findAll().stream()
                .map(MainFlowerResponse::from)
                .collect(Collectors.toList());
    }

    public List<SubFlowerResponse> findAllSubFlower() {
        return subFlowerRepository.findAll().stream()
                .map(SubFlowerResponse::from)
                .collect(Collectors.toList());
    }

    public List<WrapResponse> findAllWrap() {
        return wrapRepository.findAll().stream()
                .map(WrapResponse::from)
                .collect(Collectors.toList());
    }

    public List<DecoResponse> findAllDeco() {
        return decoRepository.findAll().stream()
                .map(DecoResponse::from)
                .collect(Collectors.toList());
    }

    public List<BouquetResponse> findBouquet(Long userSeq) {
        return bouquetRepository.findAllByUserUserSeq(userSeq).stream()
                .map(BouquetResponse::from)
                .collect(Collectors.toList());
    }
}
