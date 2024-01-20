// signup button
document.addEventListener('DOMContentLoaded', function() {
    var signupElement = document.getElementById('signup'); //getElementByID(id값 넣기)

    signupElement.addEventListener('click', function() {
        window.location.href = 'Signup.html'; 
    });
});

// login button 
document.addEventListener('DOMContentLoaded', function() {
    var signupElement = document.getElementById('login');

    signupElement.addEventListener('click', function() {
        window.location.href = 'Login.html'; 
    });
});

// Home button 
document.addEventListener('DOMContentLoaded', function() {
    var signupElement = document.getElementById('home');

    signupElement.addEventListener('click', function() {
        window.location.href = 'VibeArchive.html'; 
    });
});



    function check(form)
    {
        if (form.logemail.value == "1" && form.logpass.value == "1") {
            alert ("You log in successfully");
            window.open('VibeArchive.html');
            window.close('login.page.html');
    }   else if (form.logemail.value == "" || form.logpass.value == "") {
            alert("You didn't enter ID or password. Try again");
    }   else {
            alert("Error UserID or Password. Try Again");
    }
}



// Search
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}




function addToPlaylist(song) {
    alert('You added the song to Your Archive: ' + song);
    // Add further logic here if needed
}

function deleteFromPlaylist(song) {
    alert('You deleted the song from Your Archive: ' + song);
    // Add further logic here if needed
}

var likesCount = {};

function likeSong(song) {
    if (likesCount[song]) {
        likesCount[song]++;
    } else {
        likesCount[song] = 1;
    }
    alert('Likes for ' + song + ': ' + likesCount[song]);
}



function addToPlaylist(songName) {
    // Create a new list item
    let newSong = document.createElement('li');
    newSong.textContent = songName;

    // Add this new song to the archive list
    document.getElementById('archiveList').appendChild(newSong);

    // Optional: Display a confirmation message
    alert(songName + ' added to your archive');
}



function deleteFromPlaylist(songName) {
    // 아카이브 리스트에서 모든 항목을 가져옵니다
    let archiveList = document.getElementById('archiveList').getElementsByTagName('li');
    
    for (let i = 0; i < archiveList.length; i++) {
        // 리스트의 각 항목의 텍스트 내용이 삭제하려는 노래 이름과 일치하는지 확인합니다
        if (archiveList[i].textContent.includes(songName)) {
            // 해당 항목을 리스트에서 제거합니다
            archiveList[i].remove();
            alert(songName + ' removed from your archive');
            return; // 항목을 찾아 제거한 후 함수를 종료합니다
        }
    }

    // 일치하는 항목이 없으면 알림을 표시합니다
    alert('Song not found in your archive');
}