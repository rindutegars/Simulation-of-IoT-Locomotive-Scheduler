package com.lokomotif.schedulerlokomotif.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.lokomotif.schedulerlokomotif.model.LokoDummy;

@Service
public class LokoApiService {

    private final String apiUrl = "http://localhost:8080/api/receive-data";

    private final RestTemplate restTemplate;

    @Autowired
    public LokoApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public void callAPI(List<LokoDummy> lokoDummyList) {

        // Membuat header untuk permintaan POST
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<List<LokoDummy>> requestEntity = new HttpEntity<>(lokoDummyList, headers);

        // Melakukan permintaan POST ke API
        String response = restTemplate.postForObject(apiUrl, requestEntity, String.class);
    }
}
