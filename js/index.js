
let count=0;

// count= count+1;
  function rock(){
    count= count+1;
    if(count>5){
      count = 1;
      if (confirm(" Game over. Starting New Game "));
    }
    let me = ""
    let computer_play= ""
    let win = ""
    let computer = Math.floor(Math.random() * 3)+1;
    if (computer === 1){
       computer_play = "ROCK";
       win = "BRAKET"
       me = "BRAKET"
    }else if(computer===2){
      computer_play="PAPER";
      win = "WIN"
      me = "LOOSE"
    }else{
      computer_play="SCISSORS"
      win = "LOOSE"
      me = "WIN"
    }



    if (confirm(count+" play: you played ROCK! and computer played "+computer_play ));
    document.getElementById("demo").innerHTML = win
    document.getElementById("demo2").innerHTML = me


  }


  function paper(){
    count= count+1;
    if(count>5){
      count = 1;
      if (confirm(" Game over. Starting New Game "));
    }
    let me = ""
    let computer_play= ""
    let win = ""
    let computer = Math.floor(Math.random() * 3)+1;
    if (computer === 1){
       computer_play = "ROCK";
       win = "LOOSE"
       me = "WIN"
    }else if(computer===2){
      computer_play="PAPER";
      win = "BRAKET"
      me = "BRAKET"
    }else{
      computer_play="SCISSORS"
      win = "WIN"
      me = "LOOSE"
    }



    if (confirm(count+" play: you played PAPER! and computer played "+computer_play ));
    document.getElementById("demo").innerHTML = win
    document.getElementById("demo2").innerHTML = me

  }
  function scissors(){
    count= count+1;
    if(count>5){
      count = 1;
      if (confirm(" Game over. Starting New Game "));

    }
    let me = ""
  let computer_play= ""
  let win = ""
  let computer = Math.floor(Math.random() * 3)+1;
  if (computer === 1){
     computer_play = "ROCK";
     win = "WIN"
     me = "LOOSE"
  }else if(computer===2){
    computer_play="PAPER";
    win = "LOOSE"
    me = "WIN"
  }else{
    computer_play="SCISSORS"
    win = "BRAKET"
    me = "BRAKET"
  }



  if (confirm(count+" play: you played SCISSORS! and computer played "+computer_play ));
  document.getElementById("demo").innerHTML = win
  document.getElementById("demo2").innerHTML = me
  }

  function result() {


    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
