              var slider5 = document.getElementById("myRange5");
			var output5 = document.getElementById("demo5");
			output5.innerHTML = slider5.value;
			var out5 = document.getElementById("d5");
			out5.innerHTML = slider5.value;
			slider5.oninput = function() {
 				 output5.innerHTML = this.value;
 				 out5.innerHTML = this.value;
				}