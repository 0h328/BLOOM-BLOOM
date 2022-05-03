package finale.bloombloom.api.service;


import finale.bloombloom.api.request.OrderBouquetRequest;
import finale.bloombloom.api.response.OrderListResponse;
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
    public Order createOrder(OrderBouquetRequest orderBouquetRequest,String userId) {
        Optional <Bouquet> bouquet = bouquetRepository.findByBouquetSeq(orderBouquetRequest.getBouquetSeq());
        Optional <Store> store = storeRepository.findById(orderBouquetRequest.getStoreSeq());
        Optional <User> user = userRepository.findByUserId(userId);
        Order order = Order.builder()
                .bouquet(bouquet.isPresent()?bouquet.get():null)
                .user(user.isPresent()?user.get():null)
                .store(store.isPresent()?store.get():null)
                .orderDesc(orderBouquetRequest.getOrderDesc())
                .build();
        return orderRepository.save(order);
    }


}
