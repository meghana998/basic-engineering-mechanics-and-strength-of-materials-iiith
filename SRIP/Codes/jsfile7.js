var slider10 = document.getElementById("myRange10");
			var output10 = document.getElementById("demo10");
			output10.innerHTML = slider10.value;
			slider10.oninput = function() {
 				 output10.innerHTML = this.value;
 				 var s1 = document.getElementById("myRange10");
                 var d=s1.value;
                 document.getElementById("div1").style.transform ="rotateX("+d.toString(2)+"deg)";
                 document.getElementById("div2").style.transform ="rotateX("+d.toString(2)+"deg)";
                 document.getElementById("wrapD3Cube3").style.transform ="rotatex("+d.toString(2)+"deg)";
				}
			var slider11 = document.getElementById("myRange11");
			var output11 = document.getElementById("demo11");
			output11.innerHTML = slider11.value;
			slider11.oninput = function() {
 				 output11.innerHTML = this.value;
 				 var s1 = document.getElementById("myRange11");
                 var d=s1.value;
                 document.getElementById("div2").style.transform ="rotateY("+d.toString(2)+"deg)";
                 document.getElementById("div3").style.transform ="rotateY("+d.toString(2)+"deg)";
                 document.getElementById("wrapD3Cube3").style.transform ="rotateY("+d.toString(2)+"deg)";
             
				}
			var slider12 = document.getElementById("myRange12");
			var output12 = document.getElementById("demo12");
			output12.innerHTML = slider12.value;
			slider12.oninput = function() {
 				 output12.innerHTML = this.value;
 				 var s1 = document.getElementById("myRange12");
                 var d=s1.value;
                 document.getElementById("div3").style.transform ="rotateY("+d.toString(2)+"deg)";
                 document.getElementById("div1").style.transform ="rotateY("+d.toString(2)+"deg)";
                 document.getElementById("wrapD3Cube3").style.transform ="rotateY("+d.toString(2)+"deg)";
             
				}