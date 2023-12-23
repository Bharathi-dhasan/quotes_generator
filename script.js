var quote=document.querySelector("blockquote");
var author=document.querySelector("p");
var next=document.querySelector(".next");
const geturl="https://api.quotable.io/random";
async function getquote(url){
    var res=await fetch(url);
    var data=await res.json();
    console.log(data);
    postquote(data.content);
    postauthor(data.author);
}
getquote(geturl);

function postquote(content){
    quote.innerHTML='" '+content+' "';
}
function postauthor(authorr){
    author.innerHTML="-- "+authorr;
}
next.addEventListener('click',()=>{
    if(!navigator.onLine){
        alert('please connect internet');
    }
        getquote(geturl);
});

if(!navigator.onLine){
    alert('please connect internet');
}