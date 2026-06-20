package com.smarthire.smarthire_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smarthire.smarthire_backend.dto.DashboardResponse;
import com.smarthire.smarthire_backend.service.DashboardService;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin("*")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/stats")
    public DashboardResponse getStats() {

        return dashboardService.getStats();
    }
}