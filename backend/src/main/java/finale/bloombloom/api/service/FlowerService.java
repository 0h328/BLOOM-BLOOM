package finale.bloombloom.api.service;

import finale.bloombloom.api.response.DecoResponse;
import finale.bloombloom.api.response.MainFlowerResponse;
import finale.bloombloom.api.response.SubFlowerResponse;
import finale.bloombloom.api.response.WrapResponse;
import finale.bloombloom.db.repository.DecoRepository;
import finale.bloombloom.db.repository.MainFlowerRepository;
import finale.bloombloom.db.repository.SubFlowerRepository;
import finale.bloombloom.db.repository.WrapRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlowerService {
    private final MainFlowerRepository mainFlowerRepository;
    private final SubFlowerRepository subFlowerRepository;
    private final DecoRepository decoRepository;
    private final WrapRepository wrapRepository;

    public List<MainFlowerResponse> readMainFlower() {
        return mainFlowerRepository.findAll().stream()
                .map(MainFlowerResponse::from)
                .collect(Collectors.toList());
    }

    public List<SubFlowerResponse> readSubFlower() {
        return subFlowerRepository.findAll().stream()
                .map(SubFlowerResponse::from)
                .collect(Collectors.toList());
    }

    public List<WrapResponse> readWrap() {
        return wrapRepository.findAll().stream()
                .map(WrapResponse::from)
                .collect(Collectors.toList());
    }

    public List<DecoResponse> readDeco() {
        return decoRepository.findAll().stream()
                .map(DecoResponse::from)
                .collect(Collectors.toList());
    }
}
