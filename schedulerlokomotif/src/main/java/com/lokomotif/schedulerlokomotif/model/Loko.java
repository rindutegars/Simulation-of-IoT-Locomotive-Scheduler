package com.lokomotif.schedulerlokomotif.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.annotation.Id;

@Data
@Document(collection = "lokomotifs")
public class Loko {
    @Id
    @Field("kodeLoko")
    private String kodeLoko;
    @Field("namaLoko")
    private String namaLoko;
    @Field("dimensiLoko")
    private String dimensiLoko;
    @Field("status")
    private String status;
    @Field("tanggal")
    private String tanggal;
    @Field("jam")
    private String jam;
}