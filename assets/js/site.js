/* Left Hand Labs Music: the only JS on the site. Mobile nav toggle + "demo coming soon" fallback. */
(function(){
  document.documentElement.classList.remove('no-js');
  var btn=document.querySelector('.navtoggle'), nav=document.getElementById('site-nav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open'); btn.setAttribute('aria-expanded',open?'true':'false');});}
  // Audio demos: if kits/audio/<slug>.mp3 isn't uploaded yet, hide the player and show "demo coming soon".
  document.querySelectorAll('.demo').forEach(function(box){
    var a=box.querySelector('audio'); if(!a) return;
    function missing(){box.classList.add('missing');}
    a.addEventListener('error',missing,true);
    if(a.error||a.networkState===3) missing();
  });
})();
