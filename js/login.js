var id_map = new Map();

// load
$(document).ready( function() {
    $('#signup').click( function() {
        window.location.href = 'Signup.html'; 
    });
    $('#login').click( function() {
        window.location.href = 'Login.html'; 
    });    
    $('#home').click( function() {
        window.location.href = 'search.html'; 
    });    


    //엔터키 누르면 로그인 시도하도록 하자
    $("input[name=login]").keydown(function (key) {
        if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
            check();
        }
    });

    $("input[name=signup]").keydown(function (key) {
        if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
            signup();
        }
    });


    //아이디 비번 목록들.. (DB로 구현해야 하나 한계가 있으니)
    id_map.put("power", "1111");
    id_map.put("apple", "2222");
    id_map.put("google", "3333");
    id_map.put("sheep", "4444");
    id_map.put("donut", "5555");
    id_map.put("admin", "6666");
    id_map.put("watch", "7777");
    id_map.put("domino", "8888");
    id_map.put("chicken", "9999");
});

function check() {
    let id = $("#logemail").val();
    let pw = $("#logpass").val();
    if (id_map.containsKey(id) && pw == id_map.get(id)) {
            alert ("You log in successfully");
            sessionStorage.setItem("loginId", id ); // 세션 저장
            window.location.href = 'search.html'; 
    }   else if (id == "" ) {
            alert("You didn't enter ID Try again");
            $("logemail").focus();
    }   else if (pw == "") {
            alert("You didn't enter password. Try again");
            $("logemail").focus();
    }   else {
            alert("Error UserID or Password. Try Again");
    }
}

function signup() {
    if($("#signup_id").val() != "" && $("#signup_pw").val() != ""){
        id_map.put($("#signup_id").val(), $("#signup_pw").val());
        alert("Congratulation!! "+ $("#signup_name").val() +" Try login");
        $("#reg-log").click();
    } else {
        alert("Error Signup");
    }
}


window.onload = function() {
    alert("You need to sign in to search for songs.");
  };