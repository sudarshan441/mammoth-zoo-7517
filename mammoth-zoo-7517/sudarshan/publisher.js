import navbar from /mammoth-zoo-7517/arts/components/navbar.js
document.getElementById("navbar").innerHTML=navbar();


let arr=[{
    img:"https://ksr-ugc.imgix.net/assets/038/105/109/4fa845a05e6a891fe2c742cfe0c50fd9_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659046945&auto=format&frame=1&q=92&s=44eacde3710b2fbea0f705bfb203eb93",
    title:"Skythief - Book 1 of The Realmwalkers",
    para:"A brand new series full of gods, monsters & adventure by award winning author Matthew Wolf",
    by:"By Matthew Wolf"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/319/773/5fb3b89c2f6569f6f2a0210514adb060_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660837418&auto=format&frame=1&q=92&s=c93164fa4997b5ef149b594758138e96",
    title:"Pride Street: Soft-Boiled Corgi Detectives",
    para:"A cozy mystery series with two charming men, two adorable corgis, and a ghost! Queer as all get out, with a dash of paranormal fun.",
    by:"By T. Thorn Coyle"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/158/626/893efb9d9736e8e95686c57c330747ca_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659497679&auto=format&frame=1&q=92&s=afdeba26f1a55e957a85c0e500cd9f11",
    title:"Their Fae Goddess Exclusive Hardcovers + Swag",
    para:"An action-packed reverse harem fae fantasy romance with bits of sci-fi, because everyone wishes for a chance to touch the stars.",
    by:"By Catherine Banks"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/144/060/5438c880959707915e4d86afdbaa5f2a_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659395426&auto=format&frame=1&q=92&s=30873ab16587994f0357fe9a105dffcd",
    title:"The Year of the Cat - Năm Con Mèo (bilingual picture book)",
    para:"Bilingual English/Vietnamese picture book that retells the Lunar New Year legend from the viewpoint of a clever and determined Cat",
    by:"By Jeannie Lin"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/226/634/e49c5752c86e8ccda118429b8f948fbe_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660078635&auto=format&frame=1&q=92&s=448272d2e4772d2a8d8a455c9a3ef636",
    title:"ABC: Adobo, Boba, Chai (A Children's Board Book)",
    para:"An A-to-Z alphabet children's board book that celebrates Asian American values.",
    by:"By Angel Halo Chang"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/312/317/23237a1ecba89f5c2caa35e97942e0bd_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660775413&auto=format&frame=1&q=92&s=89bccd815f2fc7668a30844b5e5ca4c7",
    title:"The Secret Ingredient: The Pengrooms Book 2",
    para:"A whimsical picture book celebrating LGBTQ families.",
    by:"By Paul Castle"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/336/670/25ccc5a150da90f1e5484aaf81abbe8e_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660975543&auto=format&frame=1&q=92&s=7919a37c850ad37e7f406b55ab9edeab",
    title:"The Practical Witch's Almanac 2023: Infinite Spells",
    para:"Friday Gladheart is back with the biggest, best annual witchy planner and collection of knowledge yet!",
    by:"By Microcosm Publishing"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/186/573/056b53f3b328bd6b2e892d29b7795bc0_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659710974&auto=format&frame=1&q=92&s=720572c1a7c9ccc81a2111c29bee4024",
    title:"Chokepoint Capitalism: an audiobook Amazon won't sell",
    para:"How Big Tech and Big Content Captured Creative Labor Markets and How We'll Win Them Back",
    by:"By Cory Doctorow"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/029/375/32da11b66a308420cc707885a6313c8b_original.JPG?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1658414374&auto=format&frame=1&q=92&s=a467506828147b185421496b71a314d7",
    title:"WWE's The Bushwhackers Official Wrestling Autobiography",
    para:"Blood, Sweat & Cheers: The Bushwhackers is a 360+ page autobiography, detailing over 50 years of action by the 2015 WWE Hall of Famers!",
    by:"By John Crowther"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/155/137/f2189b9c3ced7decca3b610df56de9eb_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659470884&auto=format&frame=1&q=92&s=7c6754b9090ca1037fc54c8c71022c55",
    title:"Bleeding Edges: The Art of Danni Shinya Luo",
    para:"A 120-page deluxe hardcover featuring the art of Danni Shinya Luo, echoing the idea of “bleeding edges” through watercolor blooms.",
    by:"By Rocketship"
},
{
    img:"https://ksr-ugc.imgix.net/assets/037/903/566/547191231d690e70c90d9b99e9840106_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1657355023&auto=format&frame=1&q=92&s=a7277c8ba932827c0b4894f56c2539ee",
    title:"SCP Foundation Artbooks — New Paperback Edition",
    para:"A more affordable paperback edition of the legendary SCP Foundation Artbooks by ParaBooks PH.",
    by:"By ParaBooks"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/359/401/945478727a9d49795db7df693b37d609_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661204217&auto=format&frame=1&q=92&s=b71253520af342c70d29d02c36f914bc",
    title:"Lord of Maps: Coffee Table Book with over 70 Maps",
    para:"The grand collection of Hand Drawn maps by Isaac Dushku (Lord of Maps). Includes all 50 states and two dozen extra maps.",
    by:"By Isaac"
},
{
    img:"https://ksr-ugc.imgix.net/assets/035/324/436/33748a59995048e69f5c611890e1ba94_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1634917437&auto=format&frame=1&q=92&s=598141832887857e1041d76ae4318296",
    title:"Jax and Phoebe Make a Planet",
    para:"A science podcast about Earth's incredible 4.6-billion year history, two friends...and pie.",
    by:"By Jax and Phoebe Make a Planet"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/275/443/c932ad4e7da68e7b7e8862f8da8f3bcc_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660517011&auto=format&frame=1&q=92&s=943b083cedb0bdcf85c268e1dc0ad800",
    title:"Podcast: Technology and the Future of Humanity",
    para:"Discuss the positive and negative impact of emerging new technologies in the world on the future of humanity in the next 30-50 years.",
    by:"By Anand Anandalingam"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/241/177/da15a3d3d64bb36711387d1feeca9c29_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660191971&auto=format&frame=1&q=92&s=f5cabd11472c6d1f4d46055a1a492a5b",
    title:"Oceanside Chat: L.I.T.E. Beyond Generations - Season 3",
    para:"The most practical yet thought-provoking educational podcast focusing on Leadership, Innovation, Technology, and Entrepreneurship!",
    by:"By Oceanside Perspective"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/344/937/b1b9593be5813c829c1ce72eff83f578_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661081604&auto=format&frame=1&q=92&s=8f3248bfe5368c30832fa5f8babdf975",
    title:"Poison Apple, Villains & Creatures of Fables & Legends",
    para:"A hardcover zine & tarot deck featuring art, comics, & prose focused on the villains & creatures from fables & legends around the world",
    by:"By Comics Manifest"
},
{
    img:"https://ksr-ugc.imgix.net/assets/037/801/243/5689e615780151e92f7f88ba2bb283e6_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1656524778&auto=format&frame=1&q=92&s=9eecb0acf08f0144ba973c29fa0e113a",
    title:"Apex Magazine 2023",
    para:"A bi-monthly digital literary magazine of science fiction, dark fantasy, and horror.",
    by:"By Apex Publications"
},
{
    img:"https://ksr-ugc.imgix.net/assets/037/070/705/63946917396f7db8b1ae0b642e7d7b7c_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1650671038&auto=format&frame=1&q=92&s=a0242cf5883fdc951b62e0fb2c9ef730",
    title:"SECOND PRINTING - BadAzz MoFo 25th Anniversary Compendium",
    para:"A second chance to get a book you didn't know you absolutely need to have!",
    by:"By David F. Walker"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/022/262/27ccc14473f33e60c3fa27e3192d5e09_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1658354082&auto=format&frame=1&q=92&s=444934ba2877bec670011d16988a5359",
    title:"IT CAME FROM THE CLOSET Anthology & Party",
    para:"A spooky celebration for a new Feminist Press anthology of queer and trans writers on their favorite horror films",
    by:"By Feminist Press"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/075/933/2d80d0cc4e542858c4458d6d185264f6_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1658844367&auto=format&frame=1&q=92&s=a62020abb371668d5f4f70c81335c6e0",
    title:"New Zombies Need Brains Anthologies for Year 10!",
    para:"Four new SF&F anthologies from ZNB featuring dragons, games, solar punk, and magical artifacts!",
    by:"By Joshua Palmatier"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/116/779/3feac90ea6ce45eb336b8ede37308ac0_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659140278&auto=format&frame=1&q=92&s=a77b9cc11972d7ce22259812a414356b",
    title:"OBSOLESCENCE: A Dark Sci-Fi, Fantasy, and Horror Anthology",
    para:"A new collection of short stories about repurposed technology with horrifying or fantastical twists.",
    by:"By Alan Lastufka"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/207/642/b1cd717f156926e47d170b3c0b495754_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659950340&auto=format&frame=1&q=92&s=1414f84fd6c1f9df48c5df3e910c9e00",
    title:"Hypnerotomachia Poliphili",
    para:"A new translation of the mysterious 1499 arcane allegory.",
    by:"By Black Letter Press"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/026/516/80fa3fe8353149f17166671ee71963e4_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1658393445&auto=format&frame=1&q=92&s=f1269cb7b80705fe6eb34440560d48a9",
    title:"Kokuteeru: 1924 Japanese Cocktail Book",
    para:"The first and only distribution of the 1924 text Kokuteeru into Australia for bartenders and drink enthusiasts",
    by:"By Brendan Scott Grey"
},
{
    img:"https://ksr-ugc.imgix.net/assets/038/200/453/e35251f60a92670677a2748dd024f9ef_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659877657&auto=format&frame=1&q=92&s=f195ed868e3e0ef018e63ddb1a193c08",
    title:"14-Day Video Creator U.N.L.O.C.K.",
    para:"14-Day Video Creator U.N.L.O.C.K. is an online course created for anyone who wants to be successful on YouTube.",
    by:"By Jeremy Vest"
}

]
console.log(arr.length)

appendata(arr,0,3);

function appendata(data,start,end){
  document.getElementById("box").innerHTML=null;
  
 
  for(let i=start; i<end; i++){
    
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=data[i].img;
    
    let title=document.createElement("h4");
    title.innerText=data[i].title;
    let para=document.createElement("p");
    para.innerText=data[i].para;
    let by=document.createElement("p");
    by.innerText=data[i].by;
  

    div.append(img,title,para,by)
  document.getElementById("box").append(div);

  }
   }
   document.querySelector("#fiction").addEventListener("click",function(){
   
    appendata(arr,3,6);

   })
   document.querySelector("#children").addEventListener("click",function(){
    appendata(arr,6,9);
   })
   document.querySelector("#nonfiction").addEventListener("click",function(){
    appendata(arr,9,12);
   })
   document.querySelector("#arts").addEventListener("click",function(){
    appendata(arr,12,15);
   })
   document.querySelector("#radio").addEventListener("click",function(){
    appendata(arr,15,18);
   })
   document.querySelector("#zines").addEventListener("click",function(){
    appendata(arr,18,21);
   })
   document.querySelector("#antho").addEventListener("click",function(){
    appendata(arr,21,24);
   })
   document.querySelector("#acadamics").addEventListener("click",function(){
    appendata(arr,15,18);
   })

   let tabs=document.querySelectorAll("#buttons>button")
   tabs.forEach(function(tab,index){
    tab.addEventListener("click",function(){
        tabs.forEach((tab)=>{
            tab.classList.remove("active")
        })
tabs[index].classList.add("active")
    })

   })

   let arr1=[{
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
  
    
  
    appendataa(arr1,1);
  
    function appendataa(data,num){
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
      if(i==1){
        button.setAttribute("class","activ");
      }
      
      button.innerText=i;
      button.addEventListener("click",function(){
        appendataa(arr1,i);
      })
      document.querySelector("#button").append(button);
    }
  
    let butons=document.querySelectorAll("#button>button");
    
    butons.forEach(function(tab,index){
     tab.addEventListener("click",function(){
      butons.forEach((tab)=>{
             tab.classList.remove("activ")
         })
         butons[index].classList.add("activ")
     })
  
    })

    let span = document.getElementsByClassName('first');
	let div = document.getElementsByClassName('firstCrousel');
	let l = 0;
	span[1].onclick = ()=>{
		l++;
		for(let i of div)
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
		for(let i of div)
		{	
			if (l==0) {i.style.left = "0px";}
			if (l==1) {i.style.left = "-740px";}
			if (l==2) {i.style.left = "-1480px";}
			if (l==3) {i.style.left = "-2220px";}
			if (l < 0) {l=0;}
		}
	}

    let span2 = document.getElementsByClassName('second');
    let div2 = document.getElementsByClassName('secondCrousel');
    let l2 = 0;
        span2[1].onclick = ()=>{
            l2++;
            for(let i of div2)
            {
                if (l2==0) {i.style.left = "0px";}
                if (l2==1) {i.style.left = "-740px";}
                if (l2==2) {i.style.left = "-1480px";}
                if (l2==3) {i.style.left = "-2220px";}
                if (l2==4) {i.style.left = "-2960px";}
                if (l2>4) {l2=4;}
            }
        }
        span2[0].onclick = ()=>{
            l2--; 
            for(var i of div2)
            {	
                if (l2==0) {i.style.left = "0px";}
                if (l2==1) {i.style.left = "-740px";}
                if (l2==2) {i.style.left = "-1480px";}
                if (l2==3) {i.style.left = "-2220px";}
                if (l2 < 0) {l2=0;}
            }
        }
        var span3 = document.getElementsByClassName('third');
        var div3 = document.getElementsByClassName('thirdCrousel');
        var l3 = 0;
        span3[1].onclick = ()=>{
            l3++;
            for(let i of div3)
            {
                if (l3==0) {i.style.left = "0px";}
                if (l3==1) {i.style.left = "-740px";}
                if (l3==2) {i.style.left = "-1480px";}
                if (l3==3) {i.style.left = "-2220px";}
                if (l3==4) {i.style.left = "-2960px";}
                if (l3>4) {l3=4;}
            }
        }
        span3[0].onclick = ()=>{
            l3--; 
            for(let i of div3)
            {	
                if (l3==0) {i.style.left = "0px";}
                if (l3==1) {i.style.left = "-740px";}
                if (l3==2) {i.style.left = "-1480px";}
                if (l3==3) {i.style.left = "-2220px";}
                if (l3 < 0) {l3=0;}
            }
        }
  