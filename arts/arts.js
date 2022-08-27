let recommendedArr = [{
        img: "https://ksr-ugc.imgix.net/assets/037/786/640/8495937b6e687f4f74f6fef8232b3e8f_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1656428219&auto=format&frame=1&q=92&s=c0c2e0a71a9eaf7f5e2184096acb3a03",
        title: `BRUTTA FIGURA`,
        percent: "160% funded",
        by: "By Kiana Hayeri"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/038/169/938/6e53fe4b3d22d5d2c685c7ea5d953ffb_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659580039&auto=format&frame=1&q=92&s=272f56862da57d483d5fba34f42d5791",
        title: `Magic: The Gathering Documentary - Igniting the Spark`,
        percent: "71% funded",
        by: "By Cavegirl Productions"
    }, {
        img: "https://ksr-ugc.imgix.net/assets/037/758/587/dbf1a444e82e0fef1252170270d8fe63_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1656172173&auto=format&frame=1&q=92&s=a34e58639fe78bd32e9146e30add3fc5",
        title: `Behind the Smile Documentary`,
        percent: "103% funded",
        by: "By Lacey Darlene Paulson"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/038/072/381/f2896eebbdb682199044a8df79149367_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1658818296&auto=format&frame=1&q=92&s=77934435da5930f83128fd518166f42c",
        title: `Morris Code`,
        percent: "40% funded",
        by: "By Rhett Rossi"
    },

    {
        img: "https://ksr-ugc.imgix.net/assets/012/183/731/b959b36cd0330b23c7bba8a56ef46020_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1463739848&auto=format&frame=1&q=92&s=65b02662e8b681dd1f2b18d63310c280",
        title: `PLACES WE KNEW - A Japanese American Short Film`,
        percent: "65% funded",
        by: "By Oliver William Staton"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/012/382/660/acbdbaba772b41dbb0f7135ba607ca7e_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1463758153&auto=format&frame=1&q=92&s=649d127b0866f6d81ae94210bb74e89a",
        title: `S.T.A.L.K.E.R. | Shadow of the Zone`,
        percent: "353% funded",
        by: "By Stephen Hancock"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/015/787/550/2e5f41c57bb4b610b24b731aa4a76557_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1488985393&auto=format&frame=1&q=92&s=89123cc3a04a55234503bb279def1830",
        title: `The Roots of Evil`,
        percent: "788% funded",
        by: "By Uncanny Pictures"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/012/105/494/84148686dfe409daeabf474e769ceef0_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1463737394&auto=format&frame=1&q=92&s=7c08cf8f8809fbea051e8c1a9dc1c6ee",
        title: `
Silent Dreams: A film from Bhutan`,
        percent: "102% funded",
        by: "By Fora Films"
    },
    {
        img: "https://ksr-ugc.imgix.net/assets/021/604/056/c72fdeba1475250c36767867e6fbb654_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1535900166&auto=format&frame=1&q=92&s=e947f0a5977db89d78ae494cb11c906c",
        title: `STEWART UDALL and the Politics of Beauty: Finishing Funds`,
        percent: "72% funded",
        by: "By John de Graaf"
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