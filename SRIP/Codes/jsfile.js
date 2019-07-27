            var slider1 = document.getElementById("myRange1");
			var output1 = document.getElementById("demo1");
			var out1 = document.getElementById("d1");
			out1.innerHTML = slider1.value;
			output1.innerHTML = slider1.value;
			slider1.oninput = function() {
 				 output1.innerHTML = this.value;
 				 out1.innerHTML = this.value;
 				 }
			var slider2 = document.getElementById("myRange2");
			var output2 = document.getElementById("demo2");
			output2.innerHTML = slider2.value;
			var out2 = document.getElementById("d2");
			out2.innerHTML = slider2.value;
			var slider4 = document.getElementById("myRange4");
			var output4 = document.getElementById("demo4");
			var out4 = document.getElementById("d4");
			out4.innerHTML = slider4.value;
			output4.innerHTML = slider4.value;
			slider2.oninput = function() {
 				 output2.innerHTML = this.value;
 				 out2.innerHTML = this.value;
 				 out4.innerHTML = this.value;
 				 output4.innerHTML = this.value;
				}
			slider4.oninput = function() {
 				 output4.innerHTML = this.value;
 				 out4.innerHTML = this.value;
 				 out2.innerHTML = this.value;
 				 output2.innerHTML = this.value;
				}
			var slider3 = document.getElementById("myRange3");
			var output3= document.getElementById("demo3");
			output3.innerHTML = slider3.value;
			var out3 = document.getElementById("d3");
			out3.innerHTML = slider3.value;
			var slider7 = document.getElementById("myRange7");
			var output7 = document.getElementById("demo7");
			output7.innerHTML = slider7.value;
            var out7 = document.getElementById("d7");
			out7.innerHTML = slider7.value;
			slider3.oninput = function() {
 				 output3.innerHTML = this.value;
 				 output7.innerHTML = this.value;
 				 out3.innerHTML = this.value;
 				 out7.innerHTML = this.value;
				}

			slider7.oninput = function() {
 				 output7.innerHTML = this.value;
 				 output3.innerHTML = this.value;
 				 out7.innerHTML = this.value;
 				 out3.innerHTML = this.value;
				}
			
			var slider5 = document.getElementById("myRange5");
			var output5 = document.getElementById("demo5");
			output5.innerHTML = slider5.value;
			var out5 = document.getElementById("d5");
			out5.innerHTML = slider5.value;
			slider5.oninput = function() {
 				 output5.innerHTML = this.value;
 				 out5.innerHTML = this.value;
				}
			var slider6 = document.getElementById("myRange6");
			var output6 = document.getElementById("demo6");
			output6.innerHTML = slider6.value;
			var out6 = document.getElementById("d6");
			out6.innerHTML = slider6.value;

			var slider8 = document.getElementById("myRange8");
			var output8 = document.getElementById("demo8");
			output8.innerHTML = slider8.value;
			var out8 = document.getElementById("d8");
			out8.innerHTML = slider8.value;
			slider6.oninput = function() {
 				 output6.innerHTML = this.value;
 				 output8.innerHTML = this.value;
 				 out8.innerHTML = this.value;
 				 out6.innerHTML = this.value;
				}
			
			slider8.oninput = function() {
 				 output6.innerHTML = this.value;
 				 output8.innerHTML = this.value;
 				 out8.innerHTML = this.value;
 				 out6.innerHTML = this.value;
				}
			var slider9 = document.getElementById("myRange9");
			var output9 = document.getElementById("demo9");
			output9.innerHTML = slider9.value;
			var out9 = document.getElementById("d9");
			out9.innerHTML = slider9.value;

			slider9.oninput = function() {
 				 output9.innerHTML = this.value;
 				 out9.innerHTML = this.value;
				}
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