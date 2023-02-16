		var age=prompt("ender the age");
		var gender=prompt("ender the gender(male or female)");
		var z='female';
		var op='male';
		if(gender==z && age>=20){
		document.write("your working place  is :urban areas");
		}
		else if(gender==op){
			if(age>=20&&age<=40){
			 document.write("your working place  is : anywhere");
			}
			else if(age>40 && age<=60){
			document.write("your working place  is : urban areas(boy)");
			}
			else {
		    document.write("you are not eligible:error");
		    }
		}
		else {
		document.write("you are not eligible:error");
		}
		document.write("<br>");
