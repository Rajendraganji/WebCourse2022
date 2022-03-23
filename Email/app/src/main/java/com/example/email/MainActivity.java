package com.example.email;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    EditText email;
    EditText subject;
    EditText message;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        email=findViewById(R.id.emailText);
        subject=findViewById(R.id.subjectText);
        message=findViewById(R.id.messageText);

        Button btn=findViewById(R.id.sendButton);

        btn.setOnClickListener(new View.OnClickListener()
        {

            @Override
           public void onClick(View v){
                String emailTxt=email.getText().toString();
                String[] rec1=emailTxt.split(",");
                String subjectTxt=email.getText().toString();
                String messageTxt=email.getText().toString();


                Intent intent=new Intent();
                intent.setAction(Intent.ACTION_SEND);
                intent.putExtra(Intent.EXTRA_EMAIL,rec1);
                intent.putExtra(Intent.EXTRA_SUBJECT,subjectTxt);
                intent.putExtra(Intent.EXTRA_TEXT,messageTxt);

                intent.setType("text/plain");

                startActivity(Intent.createChooser(intent,"How do you want to send yout email"));

            }
        });

    }
}