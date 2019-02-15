function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("Application/json");
	xhr.open('GET',file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	}
	xhr.send(null);
}
getfile("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	profile(data.Profile);
	career(data.Career);
	education(data.Education);
	language(data.Languages);
})
var left=document.querySelector(".left");
function profile(e){
	var img=document.createElement("img");
	img.src=e.img;
	left.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=e.Name;
	left.appendChild(h2);
	var h3=document.createElement("h3");
	h3.textContent=e.Roll_no;
	left.appendChild(h3);
	var h4=document.createElement("h4");
	h4.textContent=e.Place;
	left.appendChild(h4);
	var h5=document.createElement("h5");
	h5.textContent=e.Designation;
	left.appendChild(h5);
}
var right=document.querySelector(".right");
function career(e){
	var h1=document.createElement("h1");
    h1.innerHTML="Resume Building";
    right.appendChild(h1);
    var h2=document.createElement("h2");
    h2.textContent="Career Objective";
    right.appendChild(h2);
    var hr=document.createElement("hr");
    right.appendChild(hr);
    var p=document.createElement("p");
    p.textContent=e.Info;
    right.appendChild(p);
}
function education(e){
	var h1=document.createElement("h2");
	h1.innerHTML="Educational details";
	right.appendChild(h1);
	var line=document.createElement("hr");
	right.appendChild(line);
	var table=document.createElement("table");
	table.border="2";
	var tr1="<tr><td><b>S No.</b></td><td><b>Degree</b></td><td><b>Institute</b></td><td><b>Percentage</b></td><td><b>Year Of Passing</b></td></tr>";
	var tr2="";
	for (var i = 0;i<e.length;i++) {
		tr2=tr2+"<tr><td>"+e[i].S_No+"</td><td>"+e[i].Degree+"</td><td>"+e[i].Institute+"</td><td>"+e[i].Percentage+"</td><td>"+e[i].YOP+"</td></tr>";
	}
	table.innerHTML=tr1+tr2;
	right.appendChild(table);
}
function language(e){
	var h2=document.createElement("h2");
	h2.innerHTML="Languages Known";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.append(hr);
	var ul=document.createElement("ul");
	var ul1="";
	for(i=0;i<e.length;i++){
		ul1=ul1+"<li><p>"+e[i].Lang+"</p></li>";
	}
	ul.innerHTML=ul1;
	right.appendChild(ul);
}