// Ude Import export (MANDATORY)
import navbar from '../components/navbar.js';

document.querySelector("#header").innerHTML = navbar();
let news = document.querySelector("#detailed_news");
let data=JSON.parse(localStorage.getItem("news"));
data=data[0];
showNews1(data);
let input=document.querySelector("#search_input");
input.addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        searchResults(input.value);
        localStorage.setItem("search",input.value);
        window.location.href="search.html";
    }
})
async function searchResults(val){

    try{
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${val}`);
        let data=await res.json();
        data=data.articles;
        console.log(data);
        showNews(data);
    }
    catch(err){
        console.log("err:",err);
    }
}

function showNews(data){
    results.innerHTML=null;
    data.forEach((el) => {
        let {urlToImage,title,description}=el;
        let card=document.createElement("div");
        card.setAttribute("class","news");
        card.onclick = function () {
            seeNews(el);
        }
        let div1=document.createElement("div");
        let img1=document.createElement("img");
        img1.src=urlToImage;
        div1.append(img1);
        let div2=document.createElement("div");
        let p1=document.createElement("p");
        p1.innerText=title;
        p1.style.fontWeight="600";
        let p2=document.createElement("p");
        p2.innerText=description;
        div2.append(p1,p2);
        card.append(div1,div2);
        results.append(card);
    })
}

function showNews1(data) {
    news.innerHTML = null;
        let { urlToImage, title, description,content } = data;
        
        let h3 = document.createElement("h3");
        h3.innerText=title;
        let img1 = document.createElement("img");
        img1.src = urlToImage;
        let p1 = document.createElement("p");
        p1.innerText = description;
        p1.style.fontWeight = "600";
        let p2 = document.createElement("p");
        p2.innerText = content;
        news.append(h3,img1,p1,p2);
    
}