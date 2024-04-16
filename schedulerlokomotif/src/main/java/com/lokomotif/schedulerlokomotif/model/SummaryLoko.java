package com.lokomotif.schedulerlokomotif.model;

import lombok.Data;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "summary_loko")
@Data
public class SummaryLoko {
    @Id
    private String id;

    @Column(name = "timestamps")
    private LocalDateTime timestamps;

    @Column(name = "total_aktif")
    private int totalAktif;

    @Column(name = "total_nonaktif")
    private int totalNonaktif;

    @Column(name = "total_loko")
    private int totalLoko;

    @Column(name = "total_maintenance")
    private int totalMaintenance;

    @Override
    public String toString() {
        return "SummaryLoko{" +
                "id=" + id +
                ", timestamps=" + timestamps +
                ", totalLoko=" + totalLoko +
                ", totalAktif=" + totalAktif +
                ", totalInaktif=" + totalNonaktif +
                ", totalMaintenance=" + totalMaintenance +
                '}';
    }
}