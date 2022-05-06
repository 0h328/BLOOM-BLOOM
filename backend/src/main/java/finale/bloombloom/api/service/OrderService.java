package finale.bloombloom.api.service;

import finale.bloombloom.api.request.OrderBouquetRequest;
import finale.bloombloom.api.request.StoreLocationRequest;
import finale.bloombloom.api.response.OrderDetailResponse;
import finale.bloombloom.api.response.OrderListResponse;
import finale.bloombloom.api.response.StoreLocationResponse;
import finale.bloombloom.db.entity.Order;
import finale.bloombloom.db.entity.Store;

import java.util.List;

public interface OrderService {
    List<OrderListResponse> findOrderById(String userId);
    Order createOrder(OrderBouquetRequest orderBouquetRequest, String userId);
    OrderDetailResponse findOrderDetail(Long orderSeq);
    public List<StoreLocationResponse> findStore(StoreLocationRequest storeLocationRequest);
}