package com.example.icp10;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textView=findViewById(R.id.textView);
        Retrofit retrofit=new Retrofit.Builder()
                 .baseUrl("https://api.github.com/")
                 .addConverterFactory(GsonConverterFactory.create())
                 .build();

        ApiCollections apiCollections=retroit.create(ApiCollections.class);

        Call<List<User>> users=apiCollections.getData();
    }
}