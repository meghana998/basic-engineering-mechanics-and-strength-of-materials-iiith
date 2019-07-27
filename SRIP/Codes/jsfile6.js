var slider9 = document.getElementById("myRange9");
			var output9 = document.getElementById("demo9");
			output9.innerHTML = slider9.value;
			var out9 = document.getElementById("d9");
			out9.innerHTML = slider9.value;

			slider9.oninput = function() {
 				 output9.innerHTML = this.value;
 				 out9.innerHTML = this.value;
				}