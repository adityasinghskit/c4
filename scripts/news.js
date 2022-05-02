// Ude Import export (MANDATORY)
import navbar from '../components/navbar.js';

document.querySelector("#header").innerHTML = navbar();
let news = document.querySelector("#detailed_news");
let data=JSON.parse(localStorage.getItem("news"));
data=data[0];
showNews(data);

function showNews(data) {
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