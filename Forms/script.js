var butn = document.getElementById('subscribe');
butn.addEventListener('click',subscribe,false);

var timer = setTimeout(subscribe,2000);
var closeBtn;


function subscribe(){
  clearTimeout(timer);
var subscribe = document.createElement('div');
var wind = document.createElement('div');
document.body.appendChild(subscribe);
subscribe.classList.add('subscribe');
subscribe = document.getElementsByClassName('subscribe')[0];
console.log(subscribe);
subscribe.innerHTML = '<div class="subwindow">  <p>Lorem ipsum dolor sit amet</p>  <input type="text">  <input type="text" name="" value="">  <p></p><button type="button" name="button" id="close">Подпишись</button></div>';
closeBtn = document.getElementById('close');
closeBtn.addEventListener('click',closeall,false);
}

function closeall(){
  var subs = document.getElementsByClassName('subscribe')[0];
document.body.removeChild(subs);
}
