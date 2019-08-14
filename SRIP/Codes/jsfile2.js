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