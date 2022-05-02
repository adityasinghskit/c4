// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from '../components/navbar.js';

document.querySelector("#header").innerHTML= navbar();

let results=document.querySelector("#results");
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



let india=document.querySelector("#in");
india.onclick=function(){
    getNews("in");
}
let china=document.querySelector("#ch");
china.onclick=function(){
    getNews("ch");
}
let usa=document.querySelector("#us");
usa.onclick=function(){
    getNews("us");
}
let unitedk=document.querySelector("#uk");
unitedk.onclick=function(){
    getNews("uk");
}
let newz=document.querySelector("#nz");
newz.onclick=function(){
    getNews("nz");
}

getNews("in");
async function getNews(country){

    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`);
        let data=await res.json();
        data=data.articles;
        console.log(data);
        showNews(data);
    }
    catch{
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

function seeNews(el) {
    let arr = [];
    arr.push(el);
    localStorage.setItem("news",JSON.stringify(arr));
    window.location.href="news.html";
}