let recommendedArr = [{
        img: "https://ksr-ugc.imgix.net/assets/038/393/081/2e44ae21eb45a1c89e6710e5dc4c08c2_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661467972&auto=format&frame=1&q=92&s=1d56e07d6302549a2489088b0b9af3c8",
        title: `BRUTTA FIGURA`,
        percent: "160% funded",
        by: "By 3dtotal Publishing"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/037/790/720/c344dc70415573a28b647a4b799d1c98_original.tif?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1656449645&auto=format&frame=1&q=92&s=f4b94f6db49dbba578b037a26000a3ef",
        title: `Young Offenders! Volume 1 | Teen Superhero`,
        percent: "71% funded",
        by: "By Mark O. Stack"
    }, {
        img: "https://ksr-ugc.imgix.net/assets/038/391/440/fddcf72b47f846ac13b699d1fca0cd63_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661454458&auto=format&frame=1&q=92&s=cbb25b843db8866c251753aa1cc5c38e",
        title: `Of Strokes & Shades`,
        percent: "103% funded",
        by: "By 3dtotal Publishing"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/038/167/690/4678304e24c6971652734cc44116b343_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659560480&auto=format&frame=1&q=92&s=8f54bf7bf0e99c9af6e6a17daa236d43",
        title: `What it Takes`,
        percent: "40% funded",
        by: "By Kez"
    },

    {
        img: "https://ksr-ugc.imgix.net/assets/037/710/699/e4f49a44389f45a91e12112893be508e_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1655787417&auto=format&frame=1&q=92&s=c4d6083c3d3ba332288a5f157c873cf8",
        title: `PLACES WE KNEW - A Japanese American Short Film`,
        percent: "65% funded",
        by: "By John J. Perez"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/037/693/720/417a3f6359d493662f6898b88c5a40e0_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1655643914&auto=format&frame=1&q=92&s=8fc52e53741e755e06c8344fbec2f65d",
        title: `S.T.A.L.K.E.R. | Shadow of the Zone`,
        percent: "353% funded",
        by: "y Chris Fildes"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/015/787/550/2e5f41c57bb4b610b24b731aa4a76557_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1488985393&auto=format&frame=1&q=92&s=89123cc3a04a55234503bb279def1830",
        title: `The Roots of Evil`,
        percent: "788% funded",
        by: "By Uncanny Pictures"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/037/811/479/357036f4f5c392bf1a239f673a0cdc45_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1656600677&auto=format&frame=1&q=92&s=61535f1413fe2f16d999822e2436c881",
        title: `
Silent Dreams: A film from Bhutan`,
        percent: "102% funded",
        by: "By Mark O. Stack"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/038/221/700/e0ade2f4dc6e0ab0262e9149aceaf707_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660051988&auto=format&frame=1&q=92&s=fb45872d445c97a2f2831fe7827c710d",
        title: `STEWART UDALL and the Politics of Beauty: Finishing Funds`,
        percent: "72% funded",
        by: "By Jonathan Hedrick"
    }
]



appendata(recommendedArr, 1);

function appendata(data, num) {

    document.getElementById("cont").innerHTML = null;

    let n;
    let start;
    if (num == 1) {
        start = 0
        n = 3
    } else if (num == 2) {
        start = 3
        n = 6
    } else {
        start = 6
        n = 9
    }

    for (let i = start; i < n; i++) {
        let div = document.createElement("div");

        let div1 = document.createElement("div");
        div1.setAttribute("id", "image")

        let div2 = document.createElement("div");
        div2.setAttribute("id", "content");

        let img = document.createElement("img");
        img.src = data[i].img;
        div1.append(img);

        let title = document.createElement("h4");
        title.innerText = data[i].title;

        let percent = document.createElement("p");
        percent.innerText = data[i].percent;

        let by = document.createElement("p");
        by.innerText = data[i].by;

        let social = document.createElement('div')
        social.id = "recommended-social-media"



        div2.append(title, percent, by, )
        div.append(div1, div2)

        document.getElementById("cont").append(div);

    }
}


for (let i = 1; i <= 3; i++) {
    let button = document.createElement("button");

    button.innerText = i;
    button.addEventListener("click", function() {
        appendata(recommendedArr, i);
    })
    document.querySelector("#pagi").append(button);
}