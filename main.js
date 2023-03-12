var tabs = document.querySelectorAll(".sw .tab ul li");
var ds = document.querySelectorAll(".d");
var inte = document.querySelectorAll(".inter");
var animations = document.querySelectorAll(".ani");
var all = document.querySelectorAll(".c1");
var bod = document.querySelector("header");




tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})

		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((c1)=>{
			c1.style.visibility = "hidden";
		})

		if(tabval == "d"){
			ds.forEach((d)=>{
				d.style.visibility = "visible";  
			});
            animations.forEach((ani)=>{
				ani.style.visibility = "hidden";          
			});

		}


		else if(tabval == "ani"){
			animations.forEach((ani)=>{
				ani.style.visibility = "visible";          
			});
            all.forEach((c1)=>{
                c1.style.visibility = "hidden";
            })
		}



		else{
			inte.forEach((inter)=>{
				inter.style.visibility = "visible"; 
			}); 
            animations.forEach((ani)=>{
				ani.style.visibility = "hidden";          
			}); 
		}

	})
})




////float///
$(document).ready(function() {
    animateDiv($('.a'));
    animateDiv($('.q'));
    animateDiv($('.w'));
    animateDiv($('.e'));
    animateDiv($('.r'));
    animateDiv($('.t'));
    animateDiv($('.y'));
    animateDiv($('.u'));
    animateDiv($('.i'));

        animateDiv($('.b'));
        animateDiv($('.c'));
        animateDiv($('.z'));
        animateDiv($('.x'));
        animateDiv($('.v'));
        animateDiv($('.n'));
    
});

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height() - 200;
    var w = $container.width() - 200;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};




function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier=" ";

    if($("#fl").is(":hover"))
    {
        var speedModifier = 0.002;
    }
    else
    {
    var speedModifier = 0.08;
    };

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}


/////fix
var colors = [
    'rgb(86, 255, 168)', 
    
    "#FFF233", 
  
    "#F23EE2",
   
  
  ];
  
    var currentColor = 0
    var lis = document.querySelectorAll("#h")
    function changeColor() {
      --currentColor
      if (currentColor < 0) currentColor = colors.length -1
      for (var i = 0; i < lis.length; i++) {
        lis[i].style.color = colors[(currentColor +i) % colors.length]
      }
    }
    setInterval(changeColor, 1000)
  