const title = document.getElementsByClassName("title")
const subTitle = document.getElementsByClassName("subtitle")

for(let i=0;i<title.length;i++){
    title[i].addEventListener("click",()=>{
        for(let j=0;j<title.length;j++){
            if(i===j){
                subTitle[i].classList.toggle("show")
            }else{
                subTitle[j].classList.remove("show")
            }
        }
    })
}