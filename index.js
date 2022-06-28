// 배너 리스트 생성

function createBanner(){
    var eb = document.getElementById("eventBox");
    for(let i=0;i<bannerList.length;i++){
        var newEv = document.createElement("div");
        newEv.classList.add("eventEx");
        newEv.id=`evex${i+1}`;
        var newImgBox = document.createElement("section");
        newImgBox.classList.add("eventTimgBox");
        var newImg = document.createElement("img");
        newImg.classList.add("eventImg");
        newImg.src=imgDb+bannerList[i].img;
        newImgBox.appendChild(newImg);
        newEv.appendChild(newImgBox);
        var newDetail = document.createElement("section");
        newDetail.classList.add("eventDetail");
        var newHost = document.createElement("div");
        newHost.classList.add("eventHost");
        var newHostImg = document.createElement("img");
        newHostImg.classList.add("hostImg");
        newHostImg.src=imgDb+bannerList[i].hostImg;
        var newHostName = document.createElement("p");
        newHostName.classList.add("hostName");
        newHostName.innerHTML = bannerList[i].hostName;
        newHost.appendChild(newHostImg);
        newHost.appendChild(newHostName);
        newDetail.appendChild(newHost);
        var newTitle = document.createElement("h2");
        newTitle.classList.add("eventTitle");
        newTitle.innerHTML = bannerList[i].title;
        newDetail.appendChild(newTitle);
        var newContent = document.createElement("p");
        newContent.classList.add("eventContent");
        newContent.innerHTML = bannerList[i].content;
        newDetail.appendChild(newContent);
        newEv.appendChild(newDetail);
        eb.appendChild(newEv);
    }
    eb.style.display="grid";
}

createBanner();

// 화면 넘기기

let c = 1;
const max = document.querySelectorAll(".eventEx").length;

const arrowL = document.getElementById("leftArrow");
const arrowR = document.getElementById("rightArrow");

arrowL.addEventListener("click",goLeft);
arrowR.addEventListener("click",goRight);

function goRight() {
    if(c<max){
        now = document.getElementById(`evex${c}`);
        right = document.getElementById(`evex${c+1}`);
        now.style.display = "none";
        right.style.display = "grid";
        c+=1;
    }else if(c==max){
        now = document.getElementById(`evex${c}`);
        right = document.getElementById(`evex1`);
        now.style.display = "none";
        right.style.display = "grid";
        c=1;
    }
}

function goLeft() {
    if(c>1){
        now = document.getElementById(`evex${c}`);
        left = document.getElementById(`evex${c-1}`);
        now.style.display = "none";
        left.style.display = "grid";
        c-=1;
    }else if(c==1){
        now = document.getElementById(`evex1`);
        left = document.getElementById(`evex${max}`);
        now.style.display = "none";
        left.style.display = "grid";
        c=max;
    }
}