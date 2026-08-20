document.addEventListener('DOMContentLoaded',function(){

  var header=document.getElementById('siteHeader');
  function onScroll(){ header.classList.toggle('scrolled', window.scrollY>10); }
  document.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  var burger=document.getElementById('burgerBtn');
  var mmenu=document.getElementById('mobileMenu');
  burger.addEventListener('click',function(){
    mmenu.classList.toggle('open');
  });
  mmenu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){ mmenu.classList.remove('open'); });
  });

  var toast=document.getElementById('toast');
  var toastTimer;
  function showToast(msg){
    toast.textContent=msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer=setTimeout(function(){ toast.classList.remove('show'); },2200);
  }
  function copyIp(){
    var text='play.wolfcraft.biz.id';
    if(navigator.clipboard){
      navigator.clipboard.writeText(text).then(function(){ showToast('IP disalin: '+text); });
    } else {
      showToast('IP: '+text);
    }
  }
  document.getElementById('copyHeroIp').addEventListener('click',copyIp);
  document.getElementById('copyNavIp').addEventListener('click',copyIp);

  var storeTabs=document.querySelectorAll('.store-tab');
  storeTabs.forEach(function(tab){
    tab.addEventListener('click',function(){
      storeTabs.forEach(function(t){ t.classList.remove('active'); });
      document.querySelectorAll('.store-panel').forEach(function(p){ p.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('store-'+tab.dataset.store).classList.add('active');
    });
  });

  var lbTabs=document.querySelectorAll('.lb-tab');
  lbTabs.forEach(function(tab){
    tab.addEventListener('click',function(){
      lbTabs.forEach(function(t){ t.classList.remove('active'); });
      document.querySelectorAll('.lb-panel').forEach(function(p){ p.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('lb-'+tab.dataset.lb).classList.add('active');
    });
  });

  document.querySelectorAll('.acc-item').forEach(function(item){
    var body=item.querySelector('.acc-body');
    if(item.classList.contains('open')){ body.style.maxHeight=body.scrollHeight+'px'; }
    item.querySelector('.acc-head').addEventListener('click',function(){
      var isOpen=item.classList.contains('open');
      document.querySelectorAll('.acc-item').forEach(function(o){
        o.classList.remove('open');
        o.querySelector('.acc-body').style.maxHeight=null;
      });
      if(!isOpen){
        item.classList.add('open');
        body.style.maxHeight=body.scrollHeight+'px';
      }
    });
  });

  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  var shardHolder=document.getElementById('shards');
  var n=window.innerWidth<768?10:20;
  for(var i=0;i<n;i++){
    var s=document.createElement('div');
    s.className='shard';
    s.style.left=(Math.random()*100)+'%';
    s.style.bottom='-20px';
    s.style.animationDuration=(10+Math.random()*14)+'s';
    s.style.animationDelay=(Math.random()*16)+'s';
    shardHolder.appendChild(s);
  }

  var base=2847;
  var elP=document.getElementById('statPlayers');
  var elP2=document.getElementById('heroPlayers');
  setInterval(function(){
    base+=Math.floor(Math.random()*7)-3;
    if(base<2600)base=2600;
    var v=base.toLocaleString('en-US');
    elP.textContent=v; elP2.textContent=v;
  },4000);

});
