package finale.bloombloom.api.service;


import finale.bloombloom.api.request.OrderBouquetRequest;
import finale.bloombloom.api.response.OrderDetailResponse;
import finale.bloombloom.api.response.OrderListResponse;
import finale.bloombloom.common.exception.BloomBloomNotFoundException;
import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.Order;
import finale.bloombloom.db.entity.Store;
import finale.bloombloom.db.entity.User;
import finale.bloombloom.db.repository.BouquetRepository;
import finale.bloombloom.db.repository.OrderRepository;
import finale.bloombloom.db.repository.StoreRepository;
import finale.bloombloom.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServieImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final BouquetRepository bouquetRepository;
    private final StoreRepository storeRepository;
    private final UserRepository userRepository;

    /**
     * 기능 : 주문내역 조회
     * 작성자 : 김정혁
     */
    @Override
    public List<OrderListResponse> findOrderById(String userId) {

        return orderRepository.findByUserUserId(userId).stream().map(order -> {
                    Store store = order.getStore();
                    Bouquet bouquet = order.getBouquet();
                    return OrderListResponse.builder()
                            .orderSeq(order.getOrderSeq())
                            .storeName(store.getStoreName())
                            .storeContact(store.getStoreContact())
                            .storeAddress(store.getStoreAddress())
                            .createdDate(order.getCreatedDate())
                            .bouquetImage(bouquet.getBouquetImage()).build();
                }
        ).collect(Collectors.toList());
    }

    /**
     * 기능 : 꽃다발 주문 의뢰
     * 작성자 : 김정혁
     */
    @Override
    @Transactional
    public Order createOrder(OrderBouquetRequest orderBouquetRequest, String userId) {
        Optional<Bouquet> bouquet = bouquetRepository.findByBouquetSeq(orderBouquetRequest.getBouquetSeq());
        Optional<Store> store = storeRepository.findById(orderBouquetRequest.getStoreSeq());
        Optional<User> user = userRepository.findByUserId(userId);

        if (bouquet.isEmpty() || store.isEmpty() || user.isEmpty())
            throw new BloomBloomNotFoundException("해당하는 정보를 찾을 수 없습니다.");

        Order order = Order.builder()
                .bouquet(bouquet.get())
                .user(user.get())
                .store(store.get())
                .orderDesc(orderBouquetRequest.getOrderDesc())
                .build();

        return orderRepository.save(order);
    }
    /**
     * 기능 : 주문 내역 상세조회
     * 작성자 : 김정혁
     */
    @Override
    public OrderDetailResponse findOrderDetail(Long orderSeq) {
        Order order = orderRepository.findById(orderSeq)
                .orElseThrow(() -> new BloomBloomNotFoundException("해당하는 정보를 찾을 수 없습니다."));

        return OrderDetailResponse.builder()
                .bouquet(order.getBouquet())
                .store(order.getStore())
                .orderDecs(order.getOrderDesc())
                .build();
    }


}
