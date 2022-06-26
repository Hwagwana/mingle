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