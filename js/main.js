//TweenMax(target,duration,{vars}) different methods may add additoinal fallbacks
TweenMax.from(".logo", 2, {opacity:0,scale: 0, ease:Bounce.easeOut
                        });
TweenMax.staggerFrom(".box", 1, {opacity: 0, y: 200,delay: 1,rotation: 360, scale:2}, 0.2 );
//Once animation is done fade out content
TweenMax.to(".logo, .box",0.5, {opacity:0, delay: 3, onComplete: complete});

//fallback funtion
function complete(){
    alert("Wow, very ameze such animate much done!")
}
