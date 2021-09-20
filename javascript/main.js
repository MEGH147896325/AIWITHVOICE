var SpeechRecognition = window.webkitSpeechRecognition;
var msg = new SpeechSynthesisUtterance();
var recognition = new SpeechRecognition();
var search;
var newsearch;

function start() {
  document.getElementById("caught").innerHTML = "";
  recognition.start();
}

recognition.onresult = function run (event) {
  
  var content = event.results[0][0].transcript;
  
   var newcontent =  content.toLowerCase();
   
  if (newcontent == "open youtube"||newcontent == "start youtube"){
    window.open("https://www.youtube.com", "_blank");
    
    msg.text = "Opening youtube";
    window.speechSynthesis.speak(msg);
    }else if(newcontent == "open gmail" || newcontent == "start gmail"){
      window.open("https://mail.google.com", "_blank");
      msg.text = "Opening gmail";
      window.speechSynthesis.speak(msg);
        
      
    }else if (newcontent == "start classes"||newcontent == "join classes"){
        window.open("https://meet.google.com/yaf-wyxw-wrr", "_blank");
        
        msg.text = "Joining classes";
        window.speechSynthesis.speak(msg);
    }else if (newcontent.slice(0,6) == "search"){
      search = newcontent.slice(6,newcontent.length);
      
      newsearch = search.replace(/ /g, "+");
      msg.text = "searching for " + search;
      window.speechSynthesis.speak(msg);
      
      window.open("https://www.google.com/search?q=" + newsearch, "_blank");

    }else if (newcontent == "good"){
      
      msg.text = "THANK YOU but you should also thank megh for making me";
      window.speechSynthesis.speak(msg);
    }else if (newcontent == "who made you"){
      msg.text = "M e g h made me he is the smartest boy XD";
      window.speechSynthesis.speak(msg);
    }
  
  document.getElementById("caught").innerHTML = content;

  
  }
  
