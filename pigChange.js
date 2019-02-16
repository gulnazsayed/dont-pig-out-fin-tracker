function changePig(event) {
    var key = event.key;
    var piggy = document.getElementByClassName('piggy');
    
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
  }