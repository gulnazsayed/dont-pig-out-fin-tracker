function changePig(event) {
    var key = event.key;
    var piggy = document.getElementById("piggy");
    var acc = document.getElementById("accessoryI");
    
    if (key == "1") {
        piggy.style.backgroundImage = "url('pig1.png')";
    }else if (key == "2") {
        piggy.style.backgroundImage = "url('pig2.png')";
    }else if (key == "3") {
        piggy.style.backgroundImage = "url('pig3.png')";
    }else if (key == "4") {
        piggy.style.backgroundImage = "url('pig4.png')";
    }else if (key == "5") {
        piggy.style.backgroundImage = "url('pig5.png')";
    }

    if (key == "q") {
        acc.style.backgroundImage = "url('car.png')";
    }else if (key == "w") {
        acc.style.backgroundImage = "url('game.png')";
    }else if (key == "e") {
        acc.style.backgroundImage = "url('steak.png')";
    }else if (key == "r") {
        acc.style.backgroundImage = "url('groceries.png')";
    }else if (key == "t") {
        acc.style.backgroundImage = "url('gift.png')";
    }
  }