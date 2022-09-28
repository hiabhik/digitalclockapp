

function time(){
    let ele =document.getElementById("lunchimg")
    let message = document.getElementById("message");
    let lunchmess =document.getElementById("lunchmessage");


    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();

    let am_or_pm = document.getElementsByClassName("b1_3")[0];
    
    if(hr >= 12){
      am_or_pm.innerHTML="PM";
    }
    else{
      am_or_pm.innerHTML="AM";
    }


  
    document.getElementById("hrs").innerHTML=hr;
    document.getElementById("minu").innerHTML =min;
    document.getElementById("seconds").innerHTML =sec;

  if(hr>=10 && hr<12){
    ele.src ="Component 30 – 1.svg";
    message.innerText="GOOD MORNING!! WAKE UP !!"
    lunchmess.innerText="GRAB SOME HEALTHY BREAKFAST!!!"
  }
    
  if(hr>=12 && hr<16){
      ele.src ="Component 31 – 1.svg";
      message.innerText="GOOD AFTERNOON!! TAKE SOME SLEEP"
      lunchmess.innerText="LET'S HAVE SOME LUNCH !!"

  }

   if(hr>=16 && hr<20){
    ele.src="lunch_image.jpg";
    message.innerText="GOOD EVENING !!"
    lunchmess.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"

  }
   if(hr>=20){
    ele.src="Component 32 – 1.svg";
    message.innerText="GOOD NIGHT !!"
    lunchmess.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
  }
  

   
  };




  
  setInterval(time,1000);


  function messagebox(){
    
    let change = document.getElementsByClassName("timeset")[0]
    let change1 = change.options[change.selectedIndex].innerText
    document.getElementById("text1").innerText = change1 

    let change2 = document.getElementsByClassName("timeset")[1]
    let change3 = change2.options[change2.selectedIndex].innerText
    document.getElementById("text2").innerText = change3

    let change4 = document.getElementsByClassName("timeset")[2]
    let change5 = change4.options[change4.selectedIndex].innerText
    document.getElementById("text3").innerText = change5

    let change6 = document.getElementsByClassName("timeset")[3]
    let change7 = change6.options[change6.selectedIndex].innerText
    document.getElementById("text4").innerText = change7

 
  }


