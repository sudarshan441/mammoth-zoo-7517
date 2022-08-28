

let arr=[{
  img:"https://ksr-ugc.imgix.net/assets/037/765/438/9628f5c41fb64ded577a81579166d01f_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1656267680&gif-q=50&lossless=true&s=9ec38f973a8d77aaba02dd3222ad26c9",
  title:`Heart and Brain: The Video Game`,
  percent:"566% funded",
  by:"By Nick Seluk"
  },
 {img:"https://ksr-ugc.imgix.net/assets/038/281/438/9af611c43fb3e705b590bbcc73bdfe58_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660572282&auto=format&frame=1&q=92&s=3a6b275e03a7d51bc655914870e79ff7",
  title:`Sebastian Crowe's Guide to Drakkenheim`,
  percent:"3,351% funded",
  by:"By Dungeon Dudes"},{
  img:"https://ksr-ugc.imgix.net/assets/038/156/266/6a16b853846eba5c8d07255c89a7edf4_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1659477319&auto=format&frame=1&q=92&s=02b8a9e453315022d72851aedbe9eb37",
  title:`Sea of Legends: Vengeance of the Empires`,
  percent:"203% funded",
  by:"By Zach Weisman"
  },
  {img:"https://ksr-ugc.imgix.net/assets/038/087/883/941042cee72ec625e0019504a729abe4_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1658925176&gif-q=50&lossless=true&s=2858b7c1b4bee85f3404e8a02f00ef71",
  title:`Halls of Hegra`,
  percent:"430% funded",
  by:"By Petter Schanke Olsen"},{
  img:"https://ksr-ugc.imgix.net/assets/038/213/416/ae3a12a5bd5ed617fab272f225252a6a_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659987275&auto=format&frame=1&q=92&s=af080988e336eccd3d0e9776013c39c5",
  title:`Doomensions: Pop-Up Mystery Manor`,
  percent:"1,365% funded",
  by:"By Curious Correspondence"
  },
 {img:"https://ksr-ugc.imgix.net/assets/038/222/873/761ec44006b744db6bf286bd97aaf18f_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1660057991&auto=format&frame=1&q=92&s=8c31bb444473c2e9f64c66acebef73a5",
  title:`Pocket Hex`,
  percent:"2,353% funded",
  by:"By Landen Pelish"},{
  img:"https://ksr-ugc.imgix.net/assets/038/156/266/6a16b853846eba5c8d07255c89a7edf4_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1659477319&auto=format&frame=1&q=92&s=02b8a9e453315022d72851aedbe9eb37",
  title:`NANOLITH - Cyberpunk RPG Board Game`,
  percent:"788% funded",
  by:"By Woodpecker Games"
  },
  {img:"https://ksr-ugc.imgix.net/assets/038/087/883/941042cee72ec625e0019504a729abe4_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1658925176&gif-q=50&lossless=true&s=2858b7c1b4bee85f3404e8a02f00ef71",
  title:`
   Sherlock Holmes The Awakened`,
  percent:"282% funded",
  by:"By Frogwares"},
  {img:"https://ksr-ugc.imgix.net/assets/038/087/883/941042cee72ec625e0019504a729abe4_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1658925176&gif-q=50&lossless=true&s=2858b7c1b4bee85f3404e8a02f00ef71",
  title:`Project Ironside | A $399 Extendable Board`,
  percent:"3,172% funded",
  by:"By Dan Blacklock of Cloud Puncher Games"}]

  

  appendata3(arr,1);

  function appendata3(data,num){
    document.getElementById("cont").innerHTML=null;
    let n;
    let start;
    if(num==1){
      start=0
       n=3
    }else if(num==2){
      start=3
       n=6
    }else{
      start=6
      n=9
    }
    for(let i=start; i<n; i++){
      
      let div=document.createElement("div");
      let div1=document.createElement("div");
      div1.setAttribute("id","image")
      let div2=document.createElement("div");
      div2.setAttribute("id","content");
      let img=document.createElement("img");
      img.src=data[i].img;
      div1.append(img);
      let title=document.createElement("h4");
      title.innerText=data[i].title;
      let percent=document.createElement("p");
      percent.innerText=data[i].percent;
      let by=document.createElement("p");
      by.innerText=data[i].by;
      let save=document.createElement("i");
      save.setAttribute("class","fa-solid fa-bookmark") 
      
      let like=document.createElement("i");
      like.setAttribute("class","fa-solid fa-thumbs-up")
      let dislike=document.createElement("i");
      dislike.setAttribute("class","fa-solid fa-thumbs-down")
      div2.append(title,percent,by,save,like,dislike)
      div.append(div1,div2)
      document.getElementById("cont").append(div);

    }
     }
  for(let i=1; i<=3; i++){
    let button=document.createElement("button");
    button.innerText=i;
    button.addEventListener("click",function(){
      appendata3(arr,i);
    })
    document.querySelector("#button").append(button);
  }


// crauser code

  var span = document.getElementsByTagName('span');
	var div = document.getElementsByTagName('div');
	var l = 0;
	span[1].onclick = ()=>{
		l++;
		for(var i of div)
		{
			if (l==0) {i.style.left = "0px";}
			if (l==1) {i.style.left = "-740px";}
			if (l==2) {i.style.left = "-1480px";}
			if (l==3) {i.style.left = "-2220px";}
			if (l==4) {i.style.left = "-2960px";}
			if (l>4) {l=4;}
		}
	}
	span[0].onclick = ()=>{
		l--; 
		for(var i of div)
		{	
			if (l==0) {i.style.left = "0px";}
			if (l==1) {i.style.left = "-740px";}
			if (l==2) {i.style.left = "-1480px";}
			if (l==3) {i.style.left = "-2220px";}
			if (l < 0) {l=0;}
		}
	}