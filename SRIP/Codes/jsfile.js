            var slider1 = document.getElementById("myRange1");
			var output1 = document.getElementById("demo1");
			var out1 = document.getElementById("d1");
			out1.innerHTML = slider1.value;
			output1.innerHTML = slider1.value;
			slider1.oninput = function() {
 				 output1.innerHTML = this.value;
 				 out1.innerHTML = this.value;
 				 }
			
			
			
			
			
