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