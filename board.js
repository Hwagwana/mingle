// 필터 적용

function catFilter(n){
    var cat = document.querySelectorAll(".topCat");
    if(cat[n].classList.contains("cBOn")){
        for(let k=0;k<catList.length-1;k++){
            if(cat[k].classList.contains("cBOn")){
                cat[k].classList.replace("cBOn","cBOff");
            };
        }
        var lists = document.querySelectorAll(".default");
        if(lists.length>0){
            for(let j=0;j<lists.length;j++){
                lists[j].style.display="block";
            }
        }
    } else if(cat[n].classList.contains("cBOff")){
        for(let i=0;i<catList.length-1;i++){
            if(cat[i].classList.contains("cBOn")){
                cat[i].classList.replace("cBOn","cBOff");
            };
        }
        var lists = document.querySelectorAll(".default");
        if(lists.length>0){
            for(let j=0;j<lists.length;j++){
                lists[j].style.display="none";
            }
        }
    
        cat[n].classList.replace("cBOff","cBOn");
        var one = document.querySelectorAll("."+catList[n]);
        if(one.length>0){
            for(j=0;j<one.length;j++){
                one[j].style.display="block";
            }
        }
    }
}

for(let i=0;i<catList.length-1;i++){
    var cat = document.querySelectorAll(".topCat");
    cat[i].addEventListener("click",function(){
        catFilter(i);
    });
}

// 게시판 버튼

function createBoard(n){
    var eb = document.getElementById("eventBox");
    eb.style.display = "none";
    var bt = document.getElementById("boardTop");
    bt.style.display = "flex";
    var bn = document.getElementById("boardName");
    bn.innerHTML = boardList[n];
    var posts = document.querySelectorAll(".postClick");
    removeElements(posts);
    var pb = document.getElementById("postListBox");
    for(let i=0;i<postList.length;i++){
        if(postList[i].board==boardList[n]){
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
    boardNow = boardList[n];
    myPost.boardNum = n;
    myPost.board = boardList[n];
}


var menu = document.querySelectorAll(".menuButton")[1];
menu.addEventListener("click",function(){
    createBoard(0);
})
var menu = document.querySelectorAll(".menuButton")[2];
menu.addEventListener("click",function(){
    createBoard(1);
})
var menu = document.querySelectorAll(".menuButton")[3];
menu.addEventListener("click",function(){
    createBoard(2);
})
var menu = document.querySelectorAll(".menuButton")[4];
menu.addEventListener("click",function(){
    createBoard(3);
})
var menu = document.querySelectorAll(".menuButton")[5];
menu.addEventListener("click",function(){
    createBoard(4);
})
