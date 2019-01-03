function myFunction() {
}
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
if (randomNumber1==1) {
      document.getElementById('picone').setAttribute("src", "dice1.png");
    }
    if (randomNumber1==2){
      document.getElementById('picone').setAttribute("src", "dice2.png");
    }

    if (randomNumber1==3){
      document.getElementById('picone').setAttribute("src", "dice3.png");
    }

    if (randomNumber1==4){
      document.getElementById('picone').setAttribute("src", "dice4.png");
    }

    if (randomNumber1==5){
      document.getElementById('picone').setAttribute("src", "dice5.png");
    }
    if (randomNumber1==6){
      document.getElementById('picone').setAttribute("src", "dice6.png");
}


// do {
    var randomNumber2  = Math.floor((Math.random() * 6) + 1);
 // while(numX=== randomNumber1);


  if (randomNumber2==1 ) {
    document.getElementById('pictwo').setAttribute("src", "dice1.png");
  }
  if (randomNumber2==2 ){
    document.getElementById('pictwo').setAttribute("src", "dice2.png");
  }

  if (randomNumber2==3 ){
    document.getElementById('pictwo').setAttribute("src", "dice3.png");
  }

  if (randomNumber2==4 ){
    document.getElementById('pictwo').setAttribute("src", "dice4.png");
  }

  if (randomNumber2==5 ){
    document.getElementById('pictwo').setAttribute("src", "dice5.png");
  }
  if (randomNumber2==6 ){
    document.getElementById('pictwo').setAttribute("src", "dice6.png");
  }

if (randomNumber1>randomNumber2) {
  document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins! ";
  document.querySelector(".Heading")[0].createElement("img", "flag.png"); }
if (randomNumber1<randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="Player2 wins! ";
}
if (randomNumber1===randomNumber2) {
  document.getElementsByTagName("h1")[0].innerHTML="Draw! ";
}
