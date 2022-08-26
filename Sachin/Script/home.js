let arr=[{
    img:"https://ksr-ugc.imgix.net/assets/038/087/883/941042cee72ec625e0019504a729abe4_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1658925176&gif-q=50&lossless=true&s=2858b7c1b4bee85f3404e8a02f00ef71",
    title:`Halls of Hegra`,
    percent:"522% funded",
    by:"By Petter Schanke Olsen"
    },

   {img:"https://ksr-ugc.imgix.net/assets/038/358/017/1f1a73a1d02fdc5df998e4031c8ee1e4_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661193971&auto=format&frame=1&q=92&s=0936bfd15c1bd6c274a4e4f371b02f40",
    title:`The Year of the Cat - Nam Con Meo(bilingu..)`,
    percent:"22% funded",
    by:"By Jeannie Lin"},

    {
    img:"https://ksr-ugc.imgix.net/assets/038/213/416/ae3a12a5bd5ed617fab272f225252a6a_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659987275&auto=format&frame=1&q=92&s=af080988e336eccd3d0e9776013c39c5",
    title:`Doomensions: Pop-Up Mysry Manor`,
    percent:"1,397% funded",
    by:"By Curious Correspondence"
    },


    {img:"https://ksr-static.imgix.net/ZineQuest4-2022-homepage-module-1204x516-068c3e7.png?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=9ae0de42128499ce31a965fed2da316d",
    title:`Anatomy of Dinosaurs`,
    percent:"193% funded",
    by:"By Small Fish Studios"},

    {
    img:"https://ksr-ugc.imgix.net/assets/038/298/665/dac3f87db3e059305a6ad171d76997d4_original.jpg?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1660680838&auto=format&frame=1&q=92&s=f97082ab673e5e191fe5a317838eecf0",
    title:`Apex Magazine`,
    percent:"199% funded",
    by:"By Apex Publication"
    },

   {img:"https://ksr-ugc.imgix.net/assets/038/222/873/761ec44006b744db6bf286bd97aaf18f_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1660057991&auto=format&frame=1&q=92&s=8c31bb444473c2e9f64c66acebef73a5",
    title:`Pocket Hex`,
    percent:"2,353% funded",
    by:"By Landen Pelish"},
    
    {
    img:"https://ksr-ugc.imgix.net/assets/038/246/855/789d54d41a958dfadbde9358471b213b_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660236137&auto=format&frame=1&q=92&s=24ba08731e9b88e496efe81319e5dcae",
    title:`The Secret Ingredient: The Pengroom Boo..`,
    percent:"108% funded",
    by:"By Paul Castle"
    },


    {img:"https://ksr-ugc.imgix.net/assets/038/069/397/4cb3fbba5ea235d1de70afde77cc6268_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1658792407&auto=format&frame=1&q=92&s=3ad6002098fcb63ada9ab1a4d3e6f1c8",
    title:`BANDO 4.0 | Multi-Functional Slim Wallet`,
    percent:"1,452% funded",
    by:"By Steven Elliot"},


    {img:"https://ksr-ugc.imgix.net/assets/038/087/883/941042cee72ec625e0019504a729abe4_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1658925176&gif-q=50&lossless=true&s=2858b7c1b4bee85f3404e8a02f00ef71",
    title:`Geminos - Stacked screens for enhanced`,
    percent:"8,144% funded",
    by:"By Mobile Pixels "}]
  
    
  
    appendata(arr,1);
  
    function appendata(data,num){
      document.getElementById("pagination1").innerHTML=null;
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
        div.setAttribute("id","page")
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
        percent.setAttribute("id","persent")
        percent.innerText=data[i].percent;
        let by=document.createElement("p");
        by.innerText=data[i].by;
        div2.append(title,percent,by)
        div.append(div1,div2)
        document.getElementById("pagination1").append(div);
  
      }
       }
    for(let i=1; i<=3; i++){
      let button=document.createElement("button");
      button.setAttribute("id","button1")
      button.innerText=i;
      button.addEventListener("click",function(){
        appendata(arr,i);
      })
      document.querySelector("#button").append(button);
    }