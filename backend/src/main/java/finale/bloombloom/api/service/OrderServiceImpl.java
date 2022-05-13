package finale.bloombloom.api.service;


import finale.bloombloom.api.request.OrderBouquetRequest;
import finale.bloombloom.api.request.StoreLocationRequest;
import finale.bloombloom.api.response.OrderDetailResponse;
import finale.bloombloom.api.response.OrderListResponse;
import finale.bloombloom.api.response.OrderResponse;
import finale.bloombloom.api.response.StoreLocationResponse;
import finale.bloombloom.common.exception.BloomBloomNotFoundException;
import finale.bloombloom.config.CoolSMSConfig;
import finale.bloombloom.db.entity.*;
import finale.bloombloom.db.repository.*;
import lombok.RequiredArgsConstructor;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final BouquetRepository bouquetRepository;
    private final StoreRepository storeRepository;
    private final UserRepository userRepository;
    private final FlowerInfoRepository flowerInfoRepository;
    private final EntityManager em;
    private final CoolSMSConfig coolSMSConfig;

    private static final String MESSAGE_SENDER = "01079007514";

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
     * 최근수정일자 : 2022.05.11 (문준호)
     * 수정내용 : 문자 발신 로직 추가
     */
    @Override
    @Transactional
    public Order createOrder(OrderBouquetRequest orderBouquetRequest, String userId) {
        Optional<Bouquet> bouquet = bouquetRepository.findByBouquetSeq(orderBouquetRequest.getBouquetSeq());
        Optional<Store> store = storeRepository.findById(orderBouquetRequest.getStoreSeq());
        Optional<User> user = userRepository.findByUserId(userId);

        if (bouquet.isEmpty() || store.isEmpty() || user.isEmpty())
            throw new BloomBloomNotFoundException("해당하는 정보를 찾을 수 없습니다.");

        String uuid = UUID.randomUUID().toString().replace("-", "");
        Order order = Order.builder()
                .bouquet(bouquet.get())
                .user(user.get())
                .store(store.get())
                .orderDesc(orderBouquetRequest.getOrderDesc())
                .orderUri(uuid)
                .build();

        sendMessage(uuid, store.get(), user.get());

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

        Bouquet bouquet = order.getBouquet();
        Store store = order.getStore();
        List<FlowerInfo> flowerInfos = flowerInfoRepository.findByBouquet_BouquetSeq(bouquet.getBouquetSeq());
        return OrderDetailResponse.from(bouquet, store, flowerInfos);
    }

    /**
     * 기능 : 주문 내역 상세조회 (업체)
     * 작성자 : 문준호
     */
    @Override
    public OrderResponse findOrderDetailByUUID(User user, String uuid) {
        Order order = orderRepository.findByOrderUri(uuid)
                .orElseThrow(() -> new BloomBloomNotFoundException("해당하는 정보를 찾을 수 없습니다."));

        Bouquet bouquet = order.getBouquet();
        List<FlowerInfo> flowerInfos = flowerInfoRepository.findByBouquet_BouquetSeq(bouquet.getBouquetSeq());
        return OrderResponse.from(user, bouquet, flowerInfos, order.getOrderDesc());
    }

    /**
     * 기능 : 근처 꽃집 조회
     * 작성자 : 김정혁
     */
    @Override
    public List<StoreLocationResponse> findStore(StoreLocationRequest storeLocationRequest) {
        double x1 = storeLocationRequest.getSwLat();
        double y1 = storeLocationRequest.getSwLng();
        double x2 = storeLocationRequest.getNeLat();
        double y2 = storeLocationRequest.getNeLng();

//      조회에 필요한 함수 안에 파라미터를 넣어야 했다.
//      이를 해결하기위해 직접 쿼리를 만듬
//      String format으로 직접 파라미터가 담긴 string을 만들고 sql에 붙여 쿼리를 작성

        Query query = em.createNativeQuery("" +
                "SELECT store_seq,store_name,store_contact,store_address,store_reg_num,ST_X(store_loc) as store_lat,ST_Y(store_loc) as store_lng,store_map_id,store_blog_id,store_instagram_id,store_image_link \n" +
                "FROM store as st \n" +
                "WHERE MBRContains(ST_LINESTRINGFROMTEXT(" + String.format("'LINESTRING(%f %f, %f %f)')", x1, y1, x2, y2) + ",st.store_loc)"
        );
        List<Object[]> list = query.getResultList();

        return list.stream().map(item -> new StoreLocationResponse(
                ((BigInteger) item[0]).longValue(),
                (String) item[1],
                (String) item[2],
                (String) item[3],
                (String) item[4],
                (Double) item[5],
                (Double) item[6],
                (String) item[7],
                (String) item[8],
                (String) item[9],
                (String) item[10]
        )).collect(Collectors.toList());
    }

    private void sendMessage(String uuid, Store store, User user) {
        String apiKey = coolSMSConfig.getApiKey();
        String apiSecret = coolSMSConfig.getApiSecret();

        Message message = new Message(apiKey, apiSecret);

        String messageSender = MESSAGE_SENDER;
        String messageReceiver = "01079007514";
        String url = "https://bloombloom.kro.kr/" + uuid;
        String messageContent = String.format("[BloomBloom] 주문 요청이 들어왔습니다. \n%s", url);

        HashMap<String, String> request = new HashMap<>();
        request.put("from", messageSender);
        request.put("to", messageReceiver);
        request.put("text", messageContent);

        try {
            JSONObject obj = (JSONObject) message.send(request);
            System.out.println(obj.toString());
        }
        catch (CoolsmsException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCode());
        }
    }

}
