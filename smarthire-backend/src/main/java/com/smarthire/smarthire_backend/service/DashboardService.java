package com.smarthire.smarthire_backend.service;

import org.springframework.stereotype.Service;

import com.smarthire.smarthire_backend.dto.DashboardResponse;

@Service
public class DashboardService {

    public DashboardResponse getStats() {

        return new DashboardResponse(
                150, // users
                500, // resumes analyzed
                320, // jobs matched
                78   // avg ATS
        );
    }
}