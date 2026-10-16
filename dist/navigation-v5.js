const photoAssetRoot=new URL('assets/',document.currentScript.src);
// Nonmodal navigation disclosure: no overlay or scroll locking.
const navToggle=document.querySelector('#nav-toggle');
const navLinks=document.querySelector('#site-navigation');
const compactNavigation=matchMedia('(max-width: 1080px)');
function setNavigation(open,returnFocus=false){
  const expanded=compactNavigation.matches && open;
  navLinks.classList.toggle('is-open',expanded);
  navToggle.setAttribute('aria-expanded',String(expanded));
  navToggle.setAttribute('aria-label',expanded?'Close navigation':'Open navigation');
  navLinks.inert=compactNavigation.matches && !expanded;
  if(returnFocus && compactNavigation.matches)navToggle.focus({preventScroll:true});
}
setNavigation(false);
navToggle.addEventListener('click',()=>setNavigation(navToggle.getAttribute('aria-expanded')!=='true'));
navLinks.addEventListener('click',event=>{if(event.target.closest('a'))setNavigation(false,true)});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && navToggle.getAttribute('aria-expanded')==='true'){
    event.preventDefault();setNavigation(false,true);
  }
});
document.addEventListener('click',event=>{if(!event.target.closest('header'))setNavigation(false)});
document.addEventListener('focusin',event=>{if(!event.target.closest('header'))setNavigation(false)});
compactNavigation.addEventListener('change',()=>setNavigation(false));
const filters=document.querySelectorAll('[data-filter]'),projects=document.querySelectorAll('.project');filters.forEach(b=>b.onclick=()=>{filters.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));let count=0;projects.forEach(p=>{p.hidden=b.dataset.filter!=='all'&&p.dataset.category!==b.dataset.filter;if(!p.hidden)count++});document.querySelector('#filter-status').textContent=count+' photograph series shown.'});
const photo=document.querySelector('#photo');projects.forEach(p=>p.onclick=()=>{document.querySelector('#photo-image').src=new URL(p.dataset.image,photoAssetRoot).href;document.querySelector('#photo-image').alt=p.dataset.alt;document.querySelector('#photo-title').textContent=p.dataset.title;photo.showModal()});document.querySelector('#close-photo').onclick=()=>photo.close();
const preview=document.querySelector('#enquiry-preview');document.querySelector('#enquiry').onsubmit=e=>{e.preventDefault();const data=new FormData(e.target);document.querySelector('#preview-name').textContent='From: '+data.get('name');document.querySelector('#preview-email').textContent='Reply address: '+data.get('email');document.querySelector('#preview-message').textContent=data.get('message');preview.showModal();document.querySelector('#form-status').textContent='Enquiry preview created. Nothing was sent.'};document.querySelector('#close-preview').onclick=()=>preview.close();[photo,preview].forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
const sections=['work','studio','contact'];const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('nav a').forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})})},{rootMargin:'-10% 0px -65% 0px'});sections.forEach(id=>observer.observe(document.getElementById(id)));

// Header remains in normal flow and gains definition after eight pixels.
const header=document.querySelector('header');
const updateHeader=()=>header.classList.toggle('is-scrolled',window.scrollY>8);
updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});

// Enhance only after JS runs: without JS, all content stays readable.
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
if(!motionPreference.matches && 'IntersectionObserver' in window){
  document.querySelectorAll('main h1,main h2').forEach(heading=>{
    // Replace text nodes only, preserving intentional line breaks.
    let index=0;
    const walker=document.createTreeWalker(heading,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    const label=heading.innerText.replace(/\s+/g,' ').trim();
    heading.setAttribute('aria-label',label);
    nodes.forEach(node=>{
      const fragment=document.createDocumentFragment();
      node.textContent.split(/(\s+)/).filter(Boolean).forEach(part=>{
        if(/^\s+$/.test(part)){fragment.append(document.createTextNode(part));return}
        const word=document.createElement('span');word.className='word';
        word.textContent=part;word.setAttribute('aria-hidden','true');
        word.style.setProperty('--word-index',index++);fragment.append(word);
      });
      node.replaceWith(fragment);
    });
    heading.classList.add('reveal-text');
  });
  document.querySelectorAll('.intro .location,.intro-note,.hero,.section-head>p,.filters,.project,.studio>div:nth-child(2),.contact>div').forEach(el=>el.classList.add('rise'));
  const targets=document.querySelectorAll('.reveal-text,.rise');
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting && entry.boundingClientRect.bottom>=0)return;
      entry.target.classList.add('is-in');revealObserver.unobserve(entry.target);
      if(entry.target.matches('.intro h1')){
        document.querySelector('.intro .location').classList.add('is-in');
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -60px 0px'});
  targets.forEach(el=>{
    if(!el.matches('.intro .location'))revealObserver.observe(el);
  });
  motionPreference.addEventListener('change',event=>{
    if(event.matches){targets.forEach(el=>el.classList.add('is-in'));revealObserver.disconnect()}
  });
  // Keyboard focus must never land on an invisible project or form control.
  document.addEventListener('focusin',event=>{
    const block=event.target.closest('.rise');
    if(block){block.classList.add('is-in');revealObserver.unobserve(block)}
  });
}
