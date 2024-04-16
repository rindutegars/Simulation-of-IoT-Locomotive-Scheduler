package com.lokomotif.schedulerlokomotif.scheduler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.lokomotif.schedulerlokomotif.service.SummaryLokoService;

@Component
public class SummaryScheduler {
    @Autowired
    private SummaryLokoService summaryLokoService;

    @Scheduled(fixedRate = 60000) // Atur sesuai dengan kebutuhan jadwal
    public void generateSchedulerReport() {
        try {
            // Hitung summary dan simpan ke PostgreSQL dan push Telegram
            summaryLokoService.createSummaryLoko();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}