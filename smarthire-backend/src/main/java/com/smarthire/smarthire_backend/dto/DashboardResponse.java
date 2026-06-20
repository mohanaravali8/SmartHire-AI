package com.smarthire.smarthire_backend.dto;

public class DashboardResponse {

    private int users;
    private int resumesAnalyzed;
    private int jobsMatched;
    private int averageATS;

    public DashboardResponse(
            int users,
            int resumesAnalyzed,
            int jobsMatched,
            int averageATS) {

        this.users = users;
        this.resumesAnalyzed = resumesAnalyzed;
        this.jobsMatched = jobsMatched;
        this.averageATS = averageATS;
    }

    public int getUsers() {
        return users;
    }

    public int getResumesAnalyzed() {
        return resumesAnalyzed;
    }

    public int getJobsMatched() {
        return jobsMatched;
    }

    public int getAverageATS() {
        return averageATS;
    }
}