package com.example.icp10;

import retrofit2.call;

import java.util.List;

public interface ApiCollections {

    @GET("users")
    Call<List<User>> getData();



}
