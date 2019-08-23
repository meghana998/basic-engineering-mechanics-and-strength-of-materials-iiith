            var sxx=0;//sigma in xyz directions
            var sxv=0;//sigma in xyz directions
            var sxz=0;//sigma in xyz directions
            var szz=0;//sigma in xyz directions
            var szv=0;//sigma in xyz directions
            var szx=0;//sigma in xyz directions
            var svx=0;//sigma in xyz directions
            var svv=0;//sigma in xyz directions
            var svz=0;//sigma in xyz directions
            var s1xx=0;//sigma in x'y'z' directions ie,opposite directions
            var s1xv=0;//sigma in x'y'z' directions ie,opposite directions
            var s1xz=0;//sigma in x'y'z' directions ie,opposite directions
            var s1zz=0;//sigma in x'y'z' directions ie,opposite directions
            var s1zv=0;//sigma in x'y'z' directions ie,opposite directions
            var s1zx=0;//sigma in x'y'z' directions ie,opposite directions
            var s1vx=0;//sigma in x'y'z' directions ie,opposite directions
            var s1vv=0;//sigma in x'y'z' directions ie,opposite directions
            var s1vz=0;//sigma in x'y'z' directions ie,opposite directions
            var value1=0;//these are direction of principal stresses (value1^2+value2^2+value3^2=1^2)
            var value2=0;//these are direction of principal stresses (value1^2+value2^2+value3^2=1^2)
            var value3=0;//these are direction of principal stresses (value1^2+value2^2+value3^2=1^2)
            var thetax=0;//angles of the cube
            var thetay=0;//angles of the cube
            var thetaz=0;//angles of the cube

            var out1 = document.getElementById("d1");//s1xx rangesilder1
			var out2 = document.getElementById("d2");//s1xv rs2
            var out3 = document.getElementById("d3");//s1xz rs3
            var out4 = document.getElementById("d4");//s1vx rs4
            var out5 = document.getElementById("d5");//s1vv rs5
            var out6 = document.getElementById("d6");//s1vz rs6
            var out7 = document.getElementById("d7");//s1zx  rs7
            var out8 = document.getElementById("d8");//s1zv rs8
            var out9 = document.getElementById("d9");//s1zz rs9
            var out10= document.getElementById("demo13");//value1
            var out11= document.getElementById("demo14");//value2
            var out12= document.getElementById("demo15");//value3
            
            //these are sxx,sxv,sxz.........
            sxx = document.getElementById("demo1").value;
			sxv = document.getElementById("demo2").value;
			sxz = document.getElementById("demo3").value;
			svx = document.getElementById("demo4").value;
			svv = document.getElementById("demo5").value;
			svz = document.getElementById("demo6").value;
			szx = document.getElementById("demo7").value;
			szv = document.getElementById("demo8").value;
			szz = document.getElementById("demo9").value;
			thetax = document.getElementById("demo10").value;
			thetay = document.getElementById("demo11").value;
		    thetaz = document.getElementById("demo12").value;

            //calculating value1,value2,value3
            value1=sxx+svv+szz;
            value2=(sxx*svv)+(svv*szz)+(szz*sxx)-(sxv*sxv)-(svz*svz)-(szx*szx);
            value3=(sxx*svv*szz)-(2*sxv*svz*szx)+(sxx*svz*svz)-(svv*szx*szx)-(szz*sxv*sxv);
            
            //calculating s1xx,s1xv,s1xz.........
            s1xx=(sxx+svv+((sxx-svv)*Math.cos(thetax)*Math.cos(thetax))+(2*sxv*Math.sin(thetax)*Math.sin(thetax)))/2;
            s1xv=-((((sxx-svv)*Math.sin(thetax)*Math.sin(thetax))+(2*sxv*Math.cos(thetax)*Math.cos(thetax)))/2);
            s1xz=((((sxx-szz)*Math.sin(thetax)*Math.sin(thetax))+(2*sxz*Math.cos(thetax)*Math.cos(thetax)))/2);
            s1zz=(sxx+szz+((sxx-szz)*Math.cos(thetaz)*Math.cos(thetaz))+(2*sxv*Math.sin(thetaz)*Math.sin(thetaz)))/2;;
            s1zv=((((szz-svv)*Math.sin(thetaz)*Math.sin(thetaz))+(szv*Math.cos(thetaz)*Math.cos(thetaz)))/2);
            s1zx=((((szz-sxx)*Math.sin(thetax)*Math.sin(thetax))+(szx*Math.cos(thetax)*Math.cos(thetax)))/2);
            s1vx=((((svv-sxx)*Math.sin(thetax)*Math.sin(thetax))+(svx*Math.cos(thetax)*Math.cos(thetax)))/2);
            s1vv=(sxx+svv-((sxx-svv)*Math.cos(thetax)*Math.cos(thetax))-(2*sxv*Math.sin(thetay)*Math.sin(thetay)))/2;
            s1vz=((((svv-szz)*Math.sin(thetay)*Math.sin(thetay))+(svz*Math.cos(thetay)*Math.cos(thetay)))/2);



            var sli1 = document.getElementById("myRange1");
			sli1.onchange = function() {
				 out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;

 				 out10.innerHTML=value1;
                 out11.innerHTML=value2;
                 out12.innerHTML=value3;
 				 }
            
            var sli2 = document.getElementById("myRange2");
			sli2.onchange = function() {
                  out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;

 				 out10.innerHTML=value1;
                 out11.innerHTML=value2;
                 out12.innerHTML=value3;
 				 }

 			var sli3 = document.getElementById("myRange3");
			sli3.onchange = function() {
                 out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;

 				 out10.innerHTML=value1;
                 out11.innerHTML=value2;
                 out12.innerHTML=value3;
 				 }

 			var sli4 = document.getElementById("myRange4");
			sli4.oninput = function() {
                 out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;

 				 out10.innerHTML=value1;
                 out11.innerHTML=value2;
                 out12.innerHTML=value3;
 				 }

 			var sli5 = document.getElementById("myRange5");
			sli5.onchange = function() {
                  out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;


 				 out10.innerHTML=value1;
                 out11.innerHTML=value2;
                 out12.innerHTML=value3;
 				 }

 			var sli6 = document.getElementById("myRange6");
			sli6.onchange = function() {
				 out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;
 				 out10.innerHTML=value1;
                 out11.innerHTML=value2;
                 out12.innerHTML=value3;
 				 }

 			var sli7 = document.getElementById("myRange7");
			sli7.onchange = function() {
				out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;
 				 out10.innerHTML=value1;
                 out11.innerHTML=value2;
                 out12.innerHTML=value3;
 				 }

 			var sli8 = document.getElementById("myRange8");
			sli8.onchange = function() {
				out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;
 				 out10.innerHTML=value1;
                 out11.innerHTML=value2;
                 out12.innerHTML=value3;
 				 }

 			var sli9 = document.getElementById("myRange9");
			sli9.onchange = function() {
				out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;
 				 out10.innerHTML=value1;
                 out11.innerHTML=value2;
                 out12.innerHTML=value3;
 				 }

 			
            
            //on changing  thetax ,thetay,thetaz ehat happens
		    var sli10 = document.getElementById("myRange10");
			sli10.onchange = function() {
 				  out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;
				}


			var sli11 = document.getElementById("myRange11");
			sli11.onchange = function() {
 				 out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;
				}

			var sli12 = document.getElementById("myRange12");
			sli12.onchange = function() {
 				 out1.innerHTML=s1xx;
				 out2.innerHTML=s1xv;
				 out3.innerHTML=s1xz;
				 out4.innerHTML=s1vx;
				 out5.innerHTML=s1vv;
				 out6.innerHTML=s1vz;
				 out7.innerHTML=s1zx;
				 out8.innerHTML=s1zv;
				 out9.innerHTML=s1zz;           
				}