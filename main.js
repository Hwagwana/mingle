const imgDb = "./"
console.log(postList);

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
}

createBanner();

// 게시글 리스트 생성

function createPost(){
    var pb = document.getElementById("postListBox");
    for(let i=0;i<postList.length;i++){
        var newClick = document.createElement("a");
        newClick.classList.add("postClick");
        newClick.href = "post"+postList[i].index;
        newClick.style = "text-decoration:none";
        var newPost = document.createElement("div");
        newPost.classList.add("postEx");
        var newUploader = document.createElement("section");
        newUploader.classList.add("uploader");
        var newProfile = document.createElement("img");
        newProfile.classList.add("uploaderImg");
        newProfile.classList.add("profileImg");
        newProfile.src = imgDb+postList[i].uploaderImg;
        newUploader.appendChild(newProfile);
        var newName = document.createElement("p");
        newName.classList.add("uploaderName");
        newName.innerHTML = postList[i].uploaderName;
        newUploader.appendChild(newName);
        newPost.appendChild(newUploader);
        var newContent = document.createElement("p");
        newContent.classList.add("postContent");
        newContent.innerHTML = postList[i].content;
        newPost.appendChild(newContent);
        newCat = document.createElement("section");
        newCat.classList.add("categories");
        for(let j=0;j<catList.length;j++){
            var percat = catList[j];
            newButton = document.createElement("li");
            newButton.classList.add("catButton");
            newButton.innerHTML = percat;
            if(postList[i].category[j]==true){
                newButton.classList.add("cBOn");
            }
            else{newButton.classList.add("cBOff")}
            newCat.appendChild(newButton);
        }
            newPost.appendChild(newCat);
        if(postList[i].img!=""){
            newImg = document.createElement("img");
            newImg.classList.add("postImg");
            newImg.src = imgDb+postList[i].img;
            newPost.appendChild(newImg);
        }
        newClick.appendChild(newPost);
        pb.appendChild(newClick);
    }
}

createPost();

// 이미지 업로드

var input = document.getElementById("image_upload");
var preview = document.getElementById("preview");

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
    while(preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
    const files = input.files;

    for(const file of files){
        if(validFileType(file)) {
            var p = document.getElementById("preview");
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            myPost.img = URL.createObjectURL(file);
            img.classList.add("previewImg");
            img.classList.add("postImg");
            document.getElementById("preview").style.display="block";
            p.appendChild(img);
        }
        else {
            alert("Not a valid file type.")
        }
    }
}

const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
];
  
function validFileType(file) {
    return fileTypes.includes(file.type);
}

// 카테고리 설정

function catCheck(n){
    var change = document.querySelectorAll(".myCategory")[n];
    console.log(change);
    if(myPost.category[n]==false){
        myPost.category[n]=true;
        change.classList.replace("cBOff","cBOn");
    }else if(myPost.category[n]==true){
        myPost.category[n]=false;
        change.classList.replace("cBOn","cBOff");
    }
}

var myCatList = document.querySelectorAll(".myCategory");
for(let i=0;i<myCatList.length;i++){
    myCatList[i].addEventListener("click", function(){
        console.log("clicked");
        catCheck(i);
    });
}

// 게시글 쓰기

function posting(){
    var txt = document.getElementById("uploadInput");
    var lines = txt.value.split("\n");
    var resultString  = "";
    for (var i = 0; i < lines.length; i++) {
       resultString += lines[i] + "<br />";
    }
    myPost.content=resultString;
    myPost.index=postList.length+1;
    postList.unshift(myPost);
    console.log(postList);
    window.location.reload();
}

var upload = document.getElementById("uploadButton");
upload.onclick = posting;



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