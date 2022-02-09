function getGithubInfo(user) {
    // Following code used to make an ajax call to fetch the user github profile
    // below we are making an ajax call
    
    $.ajax({
        "url": "https://api.github.com/users/" + user,
        "type": 'GET',
        "success": function (res) {
            showUser(res);
        },
        "fail": noSuchUser(user),
    });
}

function showUser(user) {
    // Below code is to display the retrieved user profile details
    $(".avatar").show();
    $(".information").show();
    $("#profile h1").text(user.login);
    $(".avatar img").attr("src", user.avatar_url);
    $("#Name").text(user.name == null ? "null" : user.name);
    $("#LoginId").text(user.id);
    $("#git").attr("href",user.html_url);
    console.log("below are the user details");
    console.log(user);
}

function noSuchUser(username) {
    // If there is no profile for the given user name , below code display " Not Found"
    $("#profile h1").text(username + " NOT FOUND");
    $(".avatar").hide();
    $(".information").hide();
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        let username;
        if (e.which == 13) {
            //read what user enters
            username = $(this).val();
            //reset the text which user typed in the input
            $(this).val("");
            //get the user's information and then store the respsonse
            response = getGithubInfo(username);
            //Incase of successful response show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } 
            else {
               noSuchUser(username);
            }
        }
    })
});