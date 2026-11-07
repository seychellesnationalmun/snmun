/* SNMUN — public-site behaviour. No administrator/service-role credentials are used here. */
(() => {
  'use strict';
  const cfg = window.SNMUN_CONFIG || {};
  const $ = (s,root=document) => root.querySelector(s);
  const $$ = (s,root=document) => Array.from(root.querySelectorAll(s));
  const body = document.body;

  // Static file preview: /about/ remains the production URL; locally we resolve
  // it to about/index.html without requiring special browser configuration.
  if (location.protocol === 'file:') {
    const root = body.dataset.root || './';
    document.addEventListener('click', (e) => {
      const a = e.target.closest?.('a[href^="/"]');
      if (!a || e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('//')) return;
      e.preventDefault();
      const parts = href.split('#');
      const pathname = parts[0].replace(/^\//,'');
      const route = pathname.endsWith('/') || !pathname ? pathname + 'index.html' : pathname;
      const dest = new URL(root + route, window.location.href);
      if (parts[1]) dest.hash = parts[1];
      window.location.href = dest.toString();
    });
  }

  const navToggle = $('.mobile-nav-toggle');
  const menu = $('#site-navigation');
  const narrow = () => window.matchMedia('(max-width: 1260px)').matches;
  function setMenu(open) {
    body.classList.toggle('nav-open', Boolean(open));
    navToggle?.setAttribute('aria-expanded', String(Boolean(open)));
    navToggle?.setAttribute('aria-label', open ? 'Close main menu' : 'Open main menu');
    if (open) {
      body.style.overflow = 'hidden';
      const first = $('a',menu); if(first) first.focus({preventScroll:true});
    } else {
      body.style.overflow = '';
      $$('.nav-has-submenu').forEach(el=>{
        el.classList.remove('is-expanded');
        $('.submenu-toggle',el)?.setAttribute('aria-expanded','false');
      });
    }
  }
  navToggle?.addEventListener('click', () => setMenu(!body.classList.contains('nav-open')));
  $$('.submenu-toggle').forEach(btn=>btn.addEventListener('click',(e)=>{
    if (!narrow()) return;
    e.preventDefault();
    const item = btn.closest('.nav-has-submenu');
    if (!item) return;
    const open = item.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded',String(open));
  }));
  document.addEventListener('keydown',e=>{
    if(e.key === 'Escape' && body.classList.contains('nav-open')) {setMenu(false);navToggle?.focus();}
  });
  document.addEventListener('pointerdown', e => {
    if (body.classList.contains('nav-open') && !e.target.closest?.('#site-header')) setMenu(false);
  });
  window.addEventListener('resize',()=>{if (!narrow() && body.classList.contains('nav-open'))setMenu(false);},{passive:true});
  const header = $('#site-header');
  const updateHeader = () => header?.classList.toggle('scrolled',window.scrollY>14);
  updateHeader(); window.addEventListener('scroll',updateHeader,{passive:true});
  const year=$('#copyright-year'); if(year) year.textContent=String(new Date().getFullYear());

  // No fake or broken social links. Icons become clickable only after an official
  // account URL has been configured in assets/js/config.js.
  const domains={instagram:['instagram.com'],facebook:['facebook.com','fb.com'],linkedin:['linkedin.com'],youtube:['youtube.com','youtu.be'],x:['x.com','twitter.com'],tiktok:['tiktok.com']};
  $$('.social-icon[data-social]').forEach(el=>{
    const name=el.dataset.social;
    const raw=cfg.socialAccounts?.[name];
    if(typeof raw !== 'string'||!raw.trim())return;
    let url;
    try { url=new URL(raw); } catch { return; }
    const hosts=domains[name]||[];
    if(url.protocol!=='https:'||!hosts.some(d=>url.hostname===d||url.hostname.endsWith('.'+d))) return;
    const a=document.createElement('a'); a.href=url.href; a.target='_blank';a.rel='noopener noreferrer';
    a.className='social-icon';a.setAttribute('aria-label',`SNMUN on ${name}`);a.innerHTML=el.innerHTML;el.replaceWith(a);
  });

  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  const heroVideo=$('#hero-video');
  if(heroVideo){
    if(reduce||saveData){heroVideo.pause();heroVideo.removeAttribute('autoplay');heroVideo.style.display='none';}
    else{
      heroVideo.addEventListener('playing',()=>heroVideo.classList.add('is-playing'));
      heroVideo.addEventListener('error',()=>heroVideo.classList.remove('is-playing'));
      const attempt=heroVideo.play(); if(attempt && typeof attempt.catch==='function') attempt.catch(()=>{});
      document.addEventListener('visibilitychange',()=>{
        if(document.hidden)heroVideo.pause();else heroVideo.play().catch(()=>{});
      });
    }
  }
  if (!reduce && 'IntersectionObserver' in window){
    const elements=$$('[data-reveal]');
    if(elements.length){
      body.classList.add('js-observe');
      const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}
      }),{rootMargin:'0px 0px -35px 0px',threshold:.08});
      elements.forEach(el=>io.observe(el));
    }
  }

  const cleanText=(v,max=240)=>typeof v==='string'?v.trim().slice(0,max):'';
  const validURL=v=>{
    if(typeof v!=='string'||!v.trim())return null;
    if(v.startsWith('/')&&!v.startsWith('//'))return v;
    try{const u=new URL(v);return u.protocol==='https:'?u.href:null;}catch{return null;}
  };
  const dateInSeychelles=v=>{
    try {return new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'Indian/Mahe'}).format(new Date(v));}
    catch{return '';}
  };
  // Direct fetch only from a fixed, read-only RPC that returns approved public
  // data. Never query administrative / confidential source tables from a browser.
  async function loadPublicFeed(){
    if (!cfg.enableLiveFeed || !cfg.supabaseUrl || !cfg.supabaseAnonKey || !cfg.homepageRpc) return;
    if (body.dataset.page !== 'home') return;
    const controller=new AbortController();
    const t=setTimeout(()=>controller.abort(),6500);
    try {
      const endpoint=new URL('/rest/v1/rpc/'+cfg.homepageRpc,cfg.supabaseUrl);
      const response=await fetch(endpoint.href,{
        method:'POST',headers:{'apikey':cfg.supabaseAnonKey,'Authorization':'Bearer '+cfg.supabaseAnonKey,'Content-Type':'application/json'},body:'{}',signal:controller.signal,cache:'no-store'
      });
      if(!response.ok) return; // e.g. RPC SQL not installed yet — preserve fallback.
      const data=await response.json();
      if(!data||typeof data!=='object'||Array.isArray(data))return;
      const notice=Array.isArray(data.announcements)?data.announcements[0]:null;
      if(notice&&cleanText(notice.message)) {
        const bar=$('#announcement-bar');
        if(bar){
          bar.textContent='';const wrap=document.createElement('div');wrap.className='announcement-content';
          const msg=document.createElement('span');msg.textContent=cleanText(notice.message,360);wrap.append(msg);
          const u=validURL(notice.button_url);const label=cleanText(notice.button_label,50);
          if(u&&label){const a=document.createElement('a');a.href=u;a.textContent=label;if(u.startsWith('https://')){a.target='_blank';a.rel='noopener noreferrer';}wrap.append(a);}
          bar.append(wrap);bar.className='announcement-bar';
          if(['gold','light'].includes(notice.style))bar.classList.add('announcement-'+notice.style);
          bar.hidden=false;
        }
      }
      const posts=Array.isArray(data.news)?data.news.slice(0,3):[];
      if(posts.length){
        const target=$('#news-feed');if(target){
          const grid=document.createElement('div');grid.className='feed-grid';
          posts.forEach(p=>{
            if(!cleanText(p.title)) return;
            const card=document.createElement('article');card.className='feed-card';
            const meta=document.createElement('span');meta.className='feed-meta';meta.textContent=(cleanText(p.content_type,25)||'Official news').replaceAll('_',' ')+' · '+dateInSeychelles(p.published_at);
            const h=document.createElement('h3');h.textContent=cleanText(p.title,150);
            const ex=document.createElement('p');ex.textContent=cleanText(p.excerpt,225);
            const a=document.createElement('a');a.href='/news-media/';a.textContent='View news and media';
            card.append(meta,h,ex,a);grid.append(card);
          });
          if(grid.children.length)target.replaceChildren(grid);
        }
      }
      const events=Array.isArray(data.events)?data.events.slice(0,3):[];
      if(events.length){
        const target=$('#events-feed');if(target){
          const list=document.createElement('div');list.className='event-list';const h=document.createElement('h3');h.textContent='Forthcoming activities';list.append(h);
          events.forEach(e=>{
            if(!cleanText(e.title))return;
            const article=document.createElement('div');article.className='event-item';
            const name=document.createElement('strong');name.textContent=cleanText(e.title,160);
            const time=document.createElement('time');time.dateTime=e.starts_at||'';time.textContent=dateInSeychelles(e.starts_at);
            article.append(name,time);list.append(article);
          });
          if(list.children.length>1)target.replaceChildren(list);
        }
      }
    } catch(e){ /* Network not available: intentional editorial fallback. */ }
    finally {clearTimeout(t);}
  }
  loadPublicFeed();
})();
