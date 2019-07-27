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
			