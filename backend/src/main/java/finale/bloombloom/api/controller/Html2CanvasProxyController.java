package finale.bloombloom.api.controller;

import lombok.RequiredArgsConstructor;
import org.apache.commons.io.IOUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLDecoder;

@RequestMapping("/api/v1/proxy")
@RestController
@RequiredArgsConstructor
public class Html2CanvasProxyController {
    /**
     * 기능 : html2canvas를 사용할때 외부이미지를 포함해야한다. 이때 CORS로 인해 이미지를 불러오지 못한다.
     *       이를 위해 Proxy역할을 할 수 있는 controller를 만들고자 한다.
     * 작성자 : 김정혁
     */
    @GetMapping
    @ResponseBody
    public byte[] html2canvasProxy(HttpServletRequest req) {
        byte[] data = null;
        try {
            URL url = new URL(URLDecoder.decode(req.getParameter("url"),
                    java.nio.charset.StandardCharsets.UTF_8.toString()));

            HttpURLConnection connection = (HttpURLConnection)
                    url.openConnection();
            connection.setRequestMethod("GET");

            if(connection.getResponseCode() == 200) {
                data = IOUtils.toByteArray(connection.getInputStream());
            } else {
                System.out.println("responseCode : "
                        + connection.getResponseCode());
            }
        } catch (MalformedURLException e) {
            data = "wrong URL".getBytes(java.nio.charset.StandardCharsets.UTF_8);
        } catch(Exception e) {
            System.out.println(e);
        }
        return data;
    }
}

