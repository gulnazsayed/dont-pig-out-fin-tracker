function changePig(catChosen) {
    // var config = {
    //     apiKey: "AIzaSyA-A5xRAyWhCXfUbsQxdBteiKIS-YMwSSM",
    //     authDomain: "dontpigout-6a78f.firebaseapp.com",
    //     databaseURL: "https://dontpigout-6a78f.firebaseio.com",
    //     projectId: "dontpigout-6a78f",
    //     storageBucket: "dontpigout-6a78f.appspot.com",
    //     messagingSenderId: "103970144178"
    // };
    // firebase.initializeApp(config);

var query = firebase.database().ref("users/userId").orderByKey();
    query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        // key will be "ada" the first time and "alan" the second time
        var key = childSnapshot.key;
        // childData will be the actual contents of the child
        var childData = childSnapshot.val();
        //console.log(childData.groceries);
        var total = childData.total;
        var total_org = childData.total_org;

        var percentage = (total/total_org)*100;
        console.log(percentage);

        if(percentage > 100){
            pigState = 1;
        }
        else if(percentage > 85){
            pigState = 2;
            console.log("pig should be 2");
        } 
        else if(percentage > 70){
            pigState = 3;
        }
        else if(percentage > 65){
            pigState = 4;
        }
        else{
            pigState = 5;
        }

    var piggy = document.getElementById("piggy");
    var acc = document.getElementById("accessoryI");
    
    switch(pigState){
        case 1:
            piggy.style.backgroundImage = "url('pig1.png')";
        break;
        case 2:
            piggy.style.backgroundImage = "url('pig2.png')";
        break;
        case 3:
            piggy.style.backgroundImage = "url('pig3.png')";
        break;
        case 4:
            piggy.style.backgroundImage = "url('pig4.png')";
        break;
        case 5:
            piggy.style.backgroundImage = "url('pig5.png')";
        break;
    }

    switch(catChosen){
        case "groceries":
            acc.style.backgroundImage = "url('groceries.png')";
        break;
        case "gas":
            acc.style.backgroundImage = "url('car.png')";
        break;
        case "entertainment":
            acc.style.backgroundImage = "url('game.png')";
        break;
        case "miscellaneous":
            acc.style.backgroundImage = "url('gift.png')";
        break;
    }
    });
  })
}