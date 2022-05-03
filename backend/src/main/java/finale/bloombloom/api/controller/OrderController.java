package finale.bloombloom.api.controller;


import finale.bloombloom.api.request.OrderBouquetRequest;
import finale.bloombloom.api.response.OrderListResponse;
import finale.bloombloom.api.service.OrderService;
import finale.bloombloom.common.auth.BloomUserDetails;
import finale.bloombloom.common.model.response.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/order")
@RestController
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    /**
     * 기능 : 주문 내역 리스트 조회
     * 작성자 : 김정혁
     */
    @GetMapping
    ResponseEntity<Result> orderlist (Authentication authentication){
        if(authentication==null)
            return ResponseEntity.status(401).body(Result.builder().message("인증 실패").build());

        BloomUserDetails bloomUserDetails = (BloomUserDetails) authentication.getDetails();

        List<OrderListResponse> list =  orderService.findOrderById(bloomUserDetails.getUsername());

        return ResponseEntity.status(200).body(Result.builder().data(list).message("주문 내역 리스트 조회에 성공하였습니다.").build());
    }

    /**
     * 기능 : 꽃다발 주문 의뢰
     * 작성자 : 김정혁
     */
    @PostMapping("/request")
    ResponseEntity<Result> orderBouquet (Authentication authentication, @RequestBody OrderBouquetRequest orderBouquetRequest){
        if(authentication==null)
            return ResponseEntity.status(401).body(Result.builder().message("인증 실패").build());

        BloomUserDetails bloomUserDetails = (BloomUserDetails) authentication.getDetails();

        return ResponseEntity.status(200).body(Result.builder()
                .data(orderService.createOrder(orderBouquetRequest,bloomUserDetails.getUsername()))
                .message("주문 의뢰에 성공하였습니다.")
                .build()
        );
    }

}
