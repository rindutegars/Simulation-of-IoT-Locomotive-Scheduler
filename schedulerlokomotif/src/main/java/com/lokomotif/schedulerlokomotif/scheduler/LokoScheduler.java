package com.lokomotif.schedulerlokomotif.scheduler;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.lokomotif.schedulerlokomotif.model.LokoDummy;
import com.lokomotif.schedulerlokomotif.service.LokoApiService;
import com.lokomotif.schedulerlokomotif.service.LokoDummyService;

import org.slf4j.Logger;

@Component
public class LokoScheduler {

    private static final Logger LOGGER = LoggerFactory.getLogger(LokoScheduler.class);

    private final LokoApiService lokoApiService;
    private final LokoDummyService lokoDummyService;

    @Autowired
    public LokoScheduler(LokoApiService lokoApiService, LokoDummyService lokoDummyService) {
        this.lokoApiService = lokoApiService;
        this.lokoDummyService = lokoDummyService;
    }

    @Scheduled(fixedRate = 10000) // 10000 milidetik = 10 detik
    public void generateAndPrintDummyData() {
        List<LokoDummy> dummyDataList = lokoDummyService.generateDummyData();

        // buka komen dibawah apabila telah berhasil membuat projek node js
        lokoApiService.callAPI(dummyDataList);

        for (LokoDummy apiData : dummyDataList) {
            LOGGER.info("API Data: {}", apiData.toString());
        }
    }
}
