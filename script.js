let nameR = document.getElementById("rachel")
let title = document.getElementById("title")

function larger(){
    nameR.style.fontSize = "60px";
    title.style.fontSize = "30px";
}

function regular(){
    nameR.style.fontSize = "40px";
    title.style.fontSize = "15px";
}

$.ajax( "https://api.adviceslip.com/advice",{ 
        success: function(APIResponse) {
            const myWisdom = JSON.parse(APIResponse)
            const advice = document.getElementById("advice")
            advice.innerHTML = myWisdom.slip.advice
    }
  });


   
