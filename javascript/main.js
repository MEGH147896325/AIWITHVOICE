var SpeechRecognition = window.webkitSpeechRecognition;
var msg = new SpeechSynthesisUtterance();
var recognition = new SpeechRecognition();
var item = ["What do you call a pasta in a bowl of noodles|||||| a impasta","what do you call an aligater in a vest? ||| an \"investigator\"","why did the banana go to the doctor? || because he didn't peel well", "what do you call a sleeping bull ? || a buldozer","when is the best time to go to the dentist ? || At tooth-hurty!","what has four wheels and flies ? || a garbage truck!"];
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.write(today);
var u;
var speak;
var search;
var newsearch;

function start() {
  document.getElementById("caught").innerHTML = "";
  recognition.start();
}
/*
I tried to make a greet function but didn't work 
function greet(){
  msg.text = "Hello . nice to meet you ... I am redy to listen your commands"; 
  window.speechSynthesis.speak(msg);
}
*/

recognition.onresult = function run (event) {
  
  var content = event.results[0][0].transcript;
  
   var newcontent =  content.toLowerCase();
   
  if (newcontent == "open youtube"||newcontent == "start youtube"){
    window.open("https://www.youtube.com", "_blank");
    
    msg.text = "Opening youtube";
    window.speechSynthesis.speak(msg);
    }
    else if(newcontent == "open gmail" || newcontent == "start gmail"){
      window.open("https://mail.google.com", "_blank");
      msg.text = "Opening gmail";
      window.speechSynthesis.speak(msg);
        
      
    }
    else if (newcontent == "start classes"||newcontent == "join classes"){
        window.open("https://meet.google.com/yaf-wyxw-wrr", "_blank");
        
        msg.text = "Joining classes";
        window.speechSynthesis.speak(msg);
    }
    else if (newcontent.slice(0,6) == "search"){
      search = newcontent.slice(6,newcontent.length);
      
      newsearch = search.replace(/ /g, "+");
      msg.text = "searching for " + search;
      window.speechSynthesis.speak(msg);
      
      window.open("https://www.google.com/search?q=" + newsearch, "_blank");

    }
    else if (newcontent == "good"){
      
      msg.text = "THANK YOU but you should also thank megh for making me";
      window.speechSynthesis.speak(msg);
    }
    else if (newcontent == "who made you"){
      msg.text = "M e g h made me he is the smartest boy XD";
      window.speechSynthesis.speak(msg);
    }
    else if (newcontent =="show youtube history"){
      msg.text = "Showing Youtube history";
      window.speechSynthesis.speak(msg);
      window.open("https://www.youtube.com/feed/history", "_blank");
    }
    else if (newcontent == "open youtube dashboard"){
      msg.text = "Openiing Your dashboard";
      window.speechSynthesis.speak(msg);
      window.open("https://studio.youtube.com/channel/videos", "_blank");
    }
    else if (newcontent.slice(0,5) == "speak")
    {
        speak = newcontent.slice(7, newcontent.length);
        msg.text = speak;
        window.speechSynthesis.speak(msg);
    }
    else if (newcontent == "open google"){
        msg.text = "Openiing google but you can also search by saying , search and your query";
      window.speechSynthesis.speak(msg);
      window.open("https://www.google.com", "_blank");
      }
      else if (newcontent == "joke"){
        u = 0;
        
        msg.text = item[Math.floor(Math.random()*item.length)];
        
        window.speechSynthesis.speak(msg);
      }
      else if (newcontent == "date"){
        today = mm + '/' + dd + '/' + yyyy;
        msg.text = today;
        window.speechSynthesis.speak(msg);
      }
      else if (newcontent.slice(0,14) == "youtube search"){
        search = newcontent.slice(14,newcontent.length);
        
        newsearch = search.replace(/ /g, "+");
        msg.text = "searching on Youtube for " + search;
        window.speechSynthesis.speak(msg);
        
        window.open("https://www.youtube.com/results?search_query=" + newsearch, "_blank");
  
      }
      else if (newcontent == "open discord"||newcontent == "start discord"){
        msg.text = "opening discord";
        window.speechSynthesis.speak(msg);
        
        window.open("https://discord.com/channels/@me", "_blank");
      }
      
  document.getElementById("caught").innerHTML = content;

  
  }
  
