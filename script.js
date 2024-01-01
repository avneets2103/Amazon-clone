// hover border feature
const loc = document.querySelectorAll('.hoverBorder');
loc.forEach(el => {
    el.addEventListener('mouseover', ()=>{
        el.classList.add('whiteBorder')
    })
    el.addEventListener('mouseout', function() {
        el.classList.remove('whiteBorder')
    });
});

// search click glow feature
const search = document.querySelector('.searchInput');
const nav2 = document.querySelector('.clickBorder');
search.addEventListener('click', function() {
    nav2.classList.add('clickOutline');
});
// Remove the border when somewhere else on the page is clicked
document.addEventListener('click', function(event) {
    if (event.target !== search) {
        nav2.classList.remove('clickOutline');
    }
});

// redirect on searching
function redirectToAmazon() {
    const searchQuery = document.querySelector('.searchInput').value;
    const url = "https://www.amazon.com/s?k=" + encodeURIComponent(searchQuery);
    window.location.href = url;
}
document.querySelector('.searchIcon').addEventListener('click', redirectToAmazon);

// input placeholder
const  input = document.querySelector('.search input');
document.querySelector('.categories').addEventListener('change', function() {
    const opt = this.value;
    if(opt=='All'){
        input.setAttribute('placeholder', 'Search Amazon');
    }
    else{input.setAttribute('placeholder', 'Search ' + opt);}
});

// courosal
// images: 'images/sliding'+X+'.jpg'
let bgNo = 1;
const leftArr = document.getElementById('left');
const rightArr = document.getElementById('right');
const bgDiv = document.querySelector('.bg');

leftArr.addEventListener('click', ()=>{
    bgDiv.classList.remove('bg'+String(bgNo));
    if(bgNo==1){bgNo = 4;}
    else{bgNo--;}
    bgDiv.classList.add('bg'+bgNo);
})

rightArr.addEventListener('click', ()=>{
    bgDiv.classList.remove('bg'+String(bgNo));
    if(bgNo==4){
        bgNo = 1;
    }
    else{
        bgNo++;
    }
    bgDiv.classList.add('bg'+bgNo);
})

// time counter
const seconds = document.querySelector('#timeCounter .secs');
const minutes = document.querySelector('#timeCounter .mins');
const hours = document.querySelector('#timeCounter .hrs');
setInterval(()=>{
    currSecs = Number(seconds.textContent);
    currMins = Number(minutes.textContent);
    currHrs = Number(hours.textContent);
    if(currSecs==0){
        currSecs = 59;
        if(currMins == 0){
            currMins = 59;
            if(currHrs==0){
                currHrs=-1;
            }
            else{
                currHrs--;
            }
        }
        else{
            currMins--;
        }
    }
    else{
        currSecs--;
    }

    if(currHrs==-1){
        document.querySelector('#topDeal p').textContent = "Deal over"
        document.getElementById('timeCounter').textContent = "";
    }
    else{
        seconds.textContent = currSecs;
        minutes.textContent = currMins;
        hours.textContent = currHrs;
    }
}, 1000);