package finale.bloombloom.api.service;

import finale.bloombloom.api.request.OrderBouquetRequest;
import finale.bloombloom.api.response.OrderListResponse;
import finale.bloombloom.db.entity.Order;

import java.util.List;

public interface OrderService {
    List<OrderListResponse> findOrderById(String userId);
    Order createOrder(OrderBouquetRequest orderBouquetRequest,String userId);
}
