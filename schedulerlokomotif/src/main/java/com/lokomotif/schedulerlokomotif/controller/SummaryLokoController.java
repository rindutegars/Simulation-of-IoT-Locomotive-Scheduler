package com.lokomotif.schedulerlokomotif.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.lokomotif.schedulerlokomotif.model.SummaryLoko;
import com.lokomotif.schedulerlokomotif.service.SummaryLokoService;
import java.util.List;

@RestController
@RequestMapping("/api/summary-loko")
@CrossOrigin(origins = "http://localhost:5173")
public class SummaryLokoController {

    @Autowired
    private SummaryLokoService summaryLokoService;

    @GetMapping("/get-summary")
    public List<SummaryLoko> getSummaryLoko() {
        return summaryLokoService.getAllSummaryLoko();
    }

    @GetMapping("/latest")
    public List<SummaryLoko> getAllSummaryLokoLatestFirst() {
        return summaryLokoService.getAllSummaryLokoLatest();
    }
}
