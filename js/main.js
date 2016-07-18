var element = document.getElementById("element");
var photo = document.getElementById("photo");// can also use jquery's $("photo")
TweenLite.fromTo(photo, 1.5, {width:0, height:0}, {width:100, height:200});
TweenLite.to(element, 1 ,{padding: 5, 
                          backgroundColor: "#ff2d6f",
                          
                         ease:Power2.easeOut});

//TweenMax.(tweenMethod)(target,duration,{vars}) different methods may add additoinal fallbacks
TweenMax.from(".logo", 2, {opacity:0,scale: 0, ease:Bounce.easeOut
                        });
TweenMax.staggerFrom(".box", 1, {opacity: 0, x: 1000,delay: 1,rotation: 360, scale:2}, 0.2 );
//Once animation is done fade out content
//TweenMax.to(".logo, .box",0.5, {opacity:0, delay: 3, onComplete: complete});

//fallback funtion
//function complete(){
//    alert("Wow, very amaze such animate much done!")
//}
