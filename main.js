   
       ///////hjfx///
       gsap.from(".txt", 0.8, {
        y: 40,
        opacity: 0,
        ease: "power2.inOut",
        delay: 0,
      });
      
      
      TweenLite.to(".loader", 1, {
        width: "40vw",
        delay: 2,
        duration: 2.9,
      });
      
      gsap.to(".pre-loader", 2, {
        top: "-115vh",
        ease: "power4.inOut",
        delay: 3.5,
      });

      gsap.from(".tab", {
        opacity: 1, 
        x: -650,
        duration: 2.5,
        delay: 0,
      });

      gsap.from(".trai", {
        opacity: 1, 
        x: -400,
        duration: 2,
        delay: 0,
      });

      gsap.from(".phai", {
        opacity: 1, 
        x: 300,
        duration: 2,
        delay: 0,
      });

      gsap.from(".btn-dropdown", {
        opacity: 1, 
        y: 80,
        duration: 1,
        delay: 0,
      });

     


      /////tab///
       
        window.onload=function(){
          if (is_touch_device()){
            var divs=document.getElementsByClassName( 'flag');
            for (var i=0; i<divs.length; i++)
              divs[i].style.display='none'; 
          }
        }
        
        function is_touch_device() {
          return !!('ontouchstart' in window) // works on most browsers 
              || !!('onmsgesturechange' in window); // works on ie10
        };
//////



var tabs = document.querySelectorAll(".sw .tab ul li");
var ds = document.querySelectorAll(".d");
var inte = document.querySelectorAll(".inter");
var animations = document.querySelectorAll(".ani");
var all = document.querySelectorAll(".c1");
var gl = document.querySelectorAll("canvas");
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

    gl.forEach((canvas)=>{
      canvas.style.visibility = "hidden"; 
  })
  
		if(tabval == "d"){
			ds.forEach((d)=>{
				d.style.visibility = "visible";  
			});
            animations.forEach((ani)=>{
				ani.style.visibility = "hidden";          
			});
      gl.forEach((canvas)=>{
				canvas.style.visibility = "hidden"; 
			}); 


		}
		else if(tabval == "ani"){
			animations.forEach((ani)=>{
				ani.style.visibility = "visible";          
			});
      gl.forEach((canvas)=>{
				canvas.style.visibility = "hidden"; 
			}); 
            all.forEach((c1)=>{
                c1.style.visibility = "hidden";
            });

		}
		else{
			inte.forEach((inter)=>{
				inter.style.visibility = "visible"; 
			});
      gl.forEach((canvas)=>{
				canvas.style.visibility = "visible"; 
			}); 
            animations.forEach((ani)=>{
				ani.style.visibility = "hidden";          
			}); 
            
		}

	})
})




////float///


$(document).ready(function() {
  if($(window).width() >= 769) {
    animateDiv($('.a'));
    animateDiv($('.q'));
    animateDiv($('.w'));
    animateDiv($('.e'));
    animateDiv($('.r'));
    animateDiv($('.t'));
    animateDiv($('.y'));
    animateDiv($('.u'));
    animateDiv($('.i')); }

        animateDiv($('.b'));
        animateDiv($('.c'));
        animateDiv($('.z'));
        animateDiv($('.x'));
        animateDiv($('.v'));
        animateDiv($('.n'));
        animateDiv($('.m'));
        animateDiv($('.l'));
        animateDiv($('.k'));
    
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
        var speedModifier = 0.008;
    }
    else
    {
    var speedModifier = 0.09;
    };

    var speed = Math.ceil(greatest / speedModifier);

    return speed;
}



/////fix
var colors = [
    'rgb(86, 255, 168)', 
    "white", 
  '#ed9df9',
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
  
    ///pag1///

    var colors1 = [
        'rgb(86, 255, 168)', 
        "white", 
        "orange",
      ];
      
        var currentColor1 = 0
        var lis1 = document.querySelectorAll("#f")
        function changeColor1() {
          --currentColor1
          if (currentColor1 < 0) currentColor1 = colors1.length -1
          for (var i = 0; i < lis1.length; i++) {
            lis1[i].style.color = colors1[(currentColor1 +i) % colors1.length]
          }
        }
        setInterval(changeColor1, 1000)



        
        /// tim background-color: #b634e948; ///
        
        ////background-color: #d1abf5;
        ///#ffccff;///
        ///

        /// green background-color: #34e9a448;///
        
        ///   background-color: #95f6d1;////

      
      
      
        const cb = document.querySelector("#cox");
        const ba = document.querySelector(".flag");
        
        function change() {
          const
            { width: cbWidth, height: cbHeight } = cb.getBoundingClientRect(),
            { width: baWidth, height: baHeight } = ba.getBoundingClientRect(),
            i = Math.floor(Math.random() * (cbWidth - baWidth)) + 1,
            j = Math.floor(Math.random() * (cbHeight - baHeight)) + 1;
        
          ba.style.left = i + "px";
          ba.style.top = j + "px";
        }
        
        ba.addEventListener("click", change);
        
        ////
        
        const cursor = document.querySelector('#cursor');
        const cursorCircle = cursor.querySelector('.cursor__circle');
        
        const mouse = { x: 0, y: 0 }; // mouse pointer's coordinates
        const pos = { x: 0, y: 0 }; // cursor's coordinates
        const speed = 0.8; // between 0 and 1
        
        const updateCoordinates = e => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
        }
        
        window.addEventListener('mousemove', updateCoordinates);
        const updateCursor = () => {
          const diffX = Math.round(mouse.x - pos.x);
          const diffY = Math.round(mouse.y - pos.y);
          
          pos.x += diffX * speed;
          pos.y += diffY * speed;
          
          
          const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
        
          cursor.style.transform = translate;
         
        };
        
        function loop() {
          updateCursor();
          requestAnimationFrame(loop);
        }
        
        requestAnimationFrame(loop);
        
        /////
        
        $(function(){
            $('#banve').click(function(e){
              var x = e.clientX;
              var y = e.clientY;
          
            
              var circle=$('<div class="circle"></div>');
            var back = ["#ff72f6","#01e194","#0096FF","yellow"];
            var rand = back[Math.floor(Math.random() * back.length)];
             circle.css('background',rand);
            circle.css('background-blend-mode','color-dodge');
                  circle.css('top',e.pageY - 30);
                   circle.css('left',e.pageX - 30)
                   $('#banve').append(circle);
            })
          })
          
          $(function(){
          $("button").on("click", function(){
          $('#banve').load('#banve')
          })
          })
        
        
          ///
        
          
          //var poem = [
          //  "View as computers to interact with the bike",
          //  "Mobile Devices is not fully supported",
          //    "Click on screen to drive the bike",
          //    "Welcome to Messy as Ninja Lead",
          //    "Click onto the traffic Lights ",
          //    "This project made by @Voth000",
          //    "Ninja Lead is a street icon in Vietnam",
          //    "View as computers to interact with the bike",
          //    "Mobile Devices is not fully supported", ];
            
           // var i = 0;
            
            // text animation loop
          //  (function loop() {
           //     document.querySelector(".tvt").textContent = poem[i];
           //     i = ++i % poem.length;
           //     setTimeout(loop, 800);} )();
        
           
                // text animation loop
             
                 
                
        //var dialog = ['Hello,', 'This is an archive for https://voth000.github.io/ninjalead/', 'Click on Screen to Draw'];
        
        //let displayIndex = 0;
        //let elem = document.getElementById('tv1');
        //let delay = 1000; // 1 second delay
        
        //setInterval(() => {
         // if (elem) {
         //   elem.innerHTML = dialog[displayIndex];
         // }
          
          // Move to the next item in dialog
         // displayIndex++;
          
          // If display index goes out of index range, start again
          //if (displayIndex >= dialog.length) {
          //  displayIndex = 0;
         // }
        //}, delay);//
        
        
        
            var colors = [
                'rgb(86 255 168 / 51%)', 
                
                "#fff233b8", 
              
                "#ffa1f76b",
               
              
              ];
              
                var currentColor = 0
                var lis = document.querySelectorAll(".tvt")
                function changeColor() {
                  --currentColor
                  if (currentColor < 0) currentColor = colors.length -1
                  for (var i = 0; i < lis.length; i++) {
                    lis[i].style.color = colors[(currentColor +i) % colors.length]
                  }
                }
                
                setInterval(changeColor, 800);
        
        
        
        
        
        
                /////
                class TextScramble {
                    constructor(el) {
                      this.el = el
                      this.chars = '!<>-_\\/[]{}—=+*^?#________'
                      this.update = this.update.bind(this)
                    }
                    setText(newText) {
                      const oldText = this.el.innerText
                      const length = Math.max(oldText.length, newText.length)
                      const promise = new Promise((resolve) => this.resolve = resolve)
                      this.queue = []
                      for (let i = 0; i < length; i++) {
                        const from = oldText[i] || ''
                        const to = newText[i] || ''
                        const start = Math.floor(Math.random() * 40)
                        const end = start + Math.floor(Math.random() * 40)
                        this.queue.push({ from, to, start, end })
                      }
                      cancelAnimationFrame(this.frameRequest)
                      this.frame = 0
                      this.update()
                      return promise
                    }
                    update() {
                      let output = ''
                      let complete = 0
                      for (let i = 0, n = this.queue.length; i < n; i++) {
                        let { from, to, start, end, char } = this.queue[i]
                        if (this.frame >= end) {
                          complete++
                          output += to
                        } else if (this.frame >= start) {
                          if (!char || Math.random() < 0.28) {
                            char = this.randomChar()
                            this.queue[i].char = char
                          }
                          output += `<span class="dud">${char}</span>`
                        } else {
                          output += from
                        }
                      }
                      this.el.innerHTML = output
                      if (complete === this.queue.length) {
                        this.resolve()
                      } else {
                        this.frameRequest = requestAnimationFrame(this.update)
                        this.frame++
                      }
                    }
                    randomChar() {
                      return this.chars[Math.floor(Math.random() * this.chars.length)]
                    }
                  }
                  
                  // ——————————————————————————————————————————————————
                  // Example
                  // ——————————————————————————————————————————————————
                  
                  const phrases = [
                    "View as computers to interact with the bike",
                     "Mobile Devices is not fully supported",
                    "Click on screen to drive the bike",
                     "Welcome to Messy as Ninja Lead",
                    "Click onto the traffic Lights ",
                    "This project made by @Voth000",
                    "Ninja Lead is a street icon in Vietnam",
                    "View as computers to interact with the bike",
                    "Mobile Devices is not fully supported",
                  ]
                  
                  const el = document.querySelector('#tv6')
                  const fx = new TextScramble(el)
                  
                  let counter = 0
                  const next = () => {
                    fx.setText(phrases[counter]).then(() => {
                      setTimeout(next, 1000)
                    })
                    counter = (counter + 1) % phrases.length
                  }
                  
                  next()
        
        
                  const phrases1 = [
                    'Hello,', 
                    'This is an archive for https://voth000.github.io/ninjalead/', 
                    'Click on Screen to Draw',
        
                  ]
                  
                  const el1 = document.querySelector('#tv')
                  const fx1 = new TextScramble(el1)
                  
                  let counter1 = 0
                  const next1 = () => {
                    fx1.setText(phrases1[counter1]).then(() => {
                      setTimeout(next1, 800)
                    })
                    counter1 = (counter1 + 1) % phrases1.length
                  }
                  
                  next1()
        
        
                  const phrases2 = [
                    "View as computers to interact with the bike",
                     "Mobile Devices is not fully supported",
                    "Click on screen to drive the bike",
                     "Welcome to Messy as Ninja Lead",
                    "Click onto the traffic Lights ",
                    "This project made by @Voth000",
                    "Ninja Lead is a street icon in Vietnam",
                    "View as computers to interact with the bike",
                    "Mobile Devices is not fully supported",
        
                  ]
                  
                  const el2 = document.querySelector('#tv1')
                  const fx2 = new TextScramble(el2)
                  
                  let counter2 = 0
                  const next2 = () => {
                    fx2.setText(phrases2[counter2]).then(() => {
                      setTimeout(next2, 800)
                    })
                    counter2 = (counter2 + 1) % phrases2.length
                  }
                  
                  next2()
        
        
                  const phrases3 = [
                    "View as computers to interact with the bike",
                     "Mobile Devices is not fully supported",
                    "Click on screen to drive the bike",
                     "Welcome to Messy as Ninja Lead",
                    "Click onto the traffic Lights ",
                    "This project made by @Voth000",
                    "Ninja Lead is a street icon in Vietnam",
                    "View as computers to interact with the bike",
                    "Mobile Devices is not fully supported",
        
                  ]
                  
                  const el3 = document.querySelector('#tv4')
                  const fx3 = new TextScramble(el3)
                  
                  let counter3 = 0
                  const next3 = () => {
                    fx3.setText(phrases3[counter3]).then(() => {
                      setTimeout(next3, 800)
                    })
                    counter3 = (counter3 + 1) % phrases3.length
                  }
                  
                  next3()


                  const phrases4 = [
                    "Loading..",
                    "Checking the internet connection...",
        
                  ]
                  
                  const el4 = document.querySelector('#mb')
                  const fx4 = new TextScramble(el4)
                  
                  let counter4 = 0
                  const next4 = () => {
                    fx4.setText(phrases4[counter4]).then(() => {
                      setTimeout(next4, 800)
                    })
                    counter4 = (counter4 + 1) % phrases4.length
                  }
                  
                  next4()
        /////
     

    