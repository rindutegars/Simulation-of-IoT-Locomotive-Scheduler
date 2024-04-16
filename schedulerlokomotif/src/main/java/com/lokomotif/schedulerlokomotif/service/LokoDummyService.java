package com.lokomotif.schedulerlokomotif.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;

import com.lokomotif.schedulerlokomotif.model.LokoDummy;

@Service
public class LokoDummyService {
    public List<LokoDummy> generateDummyData() {
        List<LokoDummy> dummyDataList = new ArrayList<>();

        String[] namaLokoArray = { "LokoDummy A", "LokoDummy B", "LokoDummy C", "LokoDummy D", "LokoDummy E" };
        String[] dimensiLokoArray = { "10x5", "8x4", "12x6", "9x5", "11x7" };
        String[] statusArray = { "Aktif", "Nonaktif", "Maintenance", "Aktif", "Nonaktif" };

        for (int i = 0; i < namaLokoArray.length; i++) {
            LokoDummy lokoDummy = new LokoDummy();
            lokoDummy.setKodeLoko(UUID.randomUUID());
            lokoDummy.setNamaLoko(namaLokoArray[i]);
            lokoDummy.setDimensiLoko(dimensiLokoArray[i]);
            lokoDummy.setStatus(statusArray[i]);
            LocalDateTime now = LocalDateTime.now();
            lokoDummy.setTanggal(now.toLocalDate());
            lokoDummy.setJam(now.toLocalTime());
            dummyDataList.add(lokoDummy);
        }

        return dummyDataList;
    }
}
