const imgDb = "./img/"

// 총 게시글 리스트 생성

function createPost(board){
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
        for(let j=0;j<catList.length-1;j++){
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

// 총 게시글 리스트 생성

function createBoard(board){
    var pb = document.getElementById("postListBox");
    for(let i=0;i<postList.length;i++){
        if(postList[i].board==board){
            var newClick = document.createElement("a");
            newClick.classList.add("postClick");
            for(let k=0;k<(catList.length);k++){
                if(postList[i].category[k]==true){
                    newClick.classList.add(catList[k]);
                }
            }
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
            for(let j=0;j<catList.length-1;j++){
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
}

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
        catCheck(i);
    });
}

// 글 쓰기

const removeElements = (elms) => elms.forEach(el => el.remove());

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
    var posts = document.querySelectorAll(".postClick");
    removeElements(posts);
    console.log(postList);
    createPost();
}

var upload = document.getElementById("uploadButton");
upload.onclick = posting;