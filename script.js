/* Site rendering — No personal information is stored here.
   Edit data.js to update your portfolio. */
(() => {
  'use strict';
  const d = window.PORTFOLIO_DATA;
  if (!d) { document.body.textContent = 'Could not load data.js. Check that data.js is in the same folder as index.html.'; return; }
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = value => {const s = String(value || '').trim(); return /^(https?:\/\/|mailto:)/i.test(s) || /^(assets\/)[\w.\-/]+$/i.test(s) ? s : '';};
  const text = (id, value) => { if ($(id)) $(id).textContent = value || ''; };
  const html = (id, value) => {if ($(id)) $(id).innerHTML = value || '';};
  const tag = value => `<span class="tag">${esc(value)}</span>`;
  const tags = list => (list || []).map(tag).join('');
  const bullets = list => list?.length ? `<ul class="points">${list.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>` : '';
  const outbound = (link, label='View more') => safeUrl(link) ? `<a class="inline-link" href="${esc(safeUrl(link))}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>` : '';
  const card = body => `<article class="item-card">${body}</article>`;
  const navItems = [
    ['home','Overview'],['about','About'],['research','Research'],['publications','Publications'],['experience','Experience'],['education','Education'],['projects','Projects'],['skills','Technical skills'],['awards','Awards'],['certifications','Certifications'],['activities','Activities'],['languages','Languages'],['service','Academic service'],['contact','Contact']
  ];
  html('siteNav', navItems.map(([id,label],i)=>`<a href="#${id}" data-section="${id}"><span class="nav-no">${String(i+1).padStart(2,'0')}</span>${label}</a>`).join(''));
  const profile = d.profile || {};
  document.title = `${profile.name || 'Academic Portfolio'} | ${d.site?.browserTitle || 'Academic Portfolio'}`;
  const meta = document.querySelector('meta[name="description"]'); if(meta)meta.content = profile.bio || 'Academic portfolio';
  text('brandName',profile.name); text('brandInitials',profile.initials || (profile.name||'YN').split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase());
  text('mobileBrand',profile.name || 'Academic Portfolio');
  text('eyebrow',d.site?.accentLabel); text('profileName',profile.name);text('profileRole',profile.role);text('profileAffiliation',profile.affiliation);text('profileTagline',profile.tagline);text('locationLine',profile.location ? '⌖  ' + profile.location : '');
  text('bio', profile.bio);html('researchInterests',tags(profile.researchInterests));
  text('footerIdentity',`© ${new Date().getFullYear()} ${profile.name || 'Academic Portfolio'}`);
  text('footerNote',d.site?.footerNote);
  const portrait = safeUrl(profile.photoFile) ? `<img src="${esc(safeUrl(profile.photoFile))}" alt="Portrait of ${esc(profile.name)}" onerror="this.replaceWith(document.createTextNode(''))">` : `<span>${esc(profile.initials || 'YN')}</span>`;
  html('portraitMount',`<div class="portrait">${portrait}</div>`);
  const linkDefs=[['email','Email','✉'],['googleScholar','Google Scholar','↗'],['github','GitHub','↗'],['linkedin','LinkedIn','↗'],['orcid','ORCID','↗'],['universityProfile','KUET Profile','↗'],['cvFile','Download CV','↓']];
  const socialLinks=linkDefs.flatMap(([key,label,icon])=>{
    const raw=profile[key] || '';
    const href=key==='email' && raw && !String(raw).startsWith('mailto:') ? 'mailto:'+raw : raw;
    const link=safeUrl(href);
    return link ? [`<a class="action-link ${key==='email'?'primary':''}" href="${esc(link)}" ${key==='email'?'':'target="_blank" rel="noopener noreferrer"'}>${icon} ${label}</a>`] : [];
  }).join('');
  html('profileLinks',socialLinks);html('contactLinks',socialLinks || '<span class="empty-note">Add your email or profile URLs in data.js to display contact buttons.</span>');
  html('researchItems',(d.research || []).map(r => card(`<p class="overline">${esc(r.kind)}</p><h3>${esc(r.title)}</h3>${r.date?`<p class="item-meta">${esc(r.date)}</p>`:''}${bullets(r.points)}<div class="tags">${tags(r.topics)}</div>${outbound(r.url,'Read more')}`)).join(''));
  const allPubs = d.publications || [];
  text('publicationCount',`${allPubs.length} works`);
  const renderPubs=filter=>{
    const filtered=filter==='All' ? allPubs : allPubs.filter(p=>p.type===filter);
    html('publicationItems',filtered.map(p=>card(`<div class="item-top"><div><p class="overline">${esc(p.type)}</p><h3>${esc(p.title)}</h3></div><span class="item-date">${esc(p.year)}</span></div><p class="item-meta">${esc(p.authors ? p.authors+' · ' : '')}${esc(p.venue)}${p.meta?' · '+esc(p.meta):''}</p>${bullets(p.points)}${outbound(p.url || (p.doi ? 'https://doi.org/'+p.doi : ''),'Publication link')}`)).join('') || '<p class="empty-note">No publications in this category.</p>');
  };
  function setupFilter(id,values,cb){
    const el=$(id);const buttons=values.map(v=>`<button class="filter-btn" type="button" data-value="${esc(v)}" aria-pressed="${v==='All'?'true':'false'}">${esc(v)}</button>`).join('');el.innerHTML=buttons;
    el.addEventListener('click',e=>{let b=e.target.closest('button[data-value]');if(!b)return;el.querySelectorAll('button').forEach(node=>node.setAttribute('aria-pressed',String(node===b)));cb(b.dataset.value);});cb('All');
  }
  setupFilter('publicationFilters',['All',...new Set(allPubs.map(p=>p.type))],renderPubs);
  html('experienceItems',(d.experience||[]).map(e=>`<div class="timeline-item">${card(`<div class="item-top"><div><h3>${esc(e.role)}</h3><p class="item-meta">${esc(e.organization)}${e.place?' · '+esc(e.place):''}</p></div><span class="item-date">${esc(e.date)}</span></div>${bullets(e.points)}`)}</div>`).join(''));
  html('educationItems',(d.education||[]).map(e=>card(`<div class="item-top"><div><h3>${esc(e.degree)}</h3><p class="item-meta">${esc(e.school)}${e.place?' · '+esc(e.place):''}</p></div><span class="item-date">${esc(e.date)}</span></div><div class="edu-details">${(e.details||[]).map(s=>`<span class="edu-stat">${esc(s)}</span>`).join('')}</div>${e.courses?.length?`<p class="courses"><strong>Relevant coursework:</strong> ${e.courses.map(esc).join(' · ')}</p>`:''}`)).join(''));
  const projects=d.projects || [];
  setupFilter('projectFilters',['All',...new Set(projects.map(x=>x.category))],filter=>{
    html('projectItems',projects.filter(p=>filter==='All'||p.category===filter).map(p=>`<article class="item-card project-card"><p class="overline">${esc(p.category)} project</p><h3>${esc(p.title)}</h3><p class="description">${esc(p.description)}</p><div class="tags">${tags(p.tags)}</div>${outbound(p.url,'Project link')}</article>`).join(''));
  });
  html('skillItems',(d.skills||[]).map(s=>`<article class="skill-box"><h3>${esc(s.group)}</h3><div class="tag-list">${tags(s.items)}</div></article>`).join(''));
  const compact=(arr,makeTitle,makeDescription)=>arr.map(r=>`<article class="compact-row"><div><h3>${makeTitle(r)}</h3><p>${makeDescription(r)}</p></div><span class="date">${esc(r.date)}</span></article>`).join('');
  html('awardItems',compact(d.awards||[],r=>esc(r.title),r=>esc(r.detail)));
  html('certificationItems',compact(d.certifications||[],r=>`${esc(r.name)}${outbound(r.url,'Verify')}`,r=>esc(r.issuer)));
  html('activityItems',compact(d.activities||[],r=>esc(r.role),r=>esc(r.organization)));
  html('languageItems',compact(d.languages||[],r=>esc(r.language),r=>esc(r.proficiency)));
  html('serviceItems',(d.service||[]).map(s=>`<article class="service-card"><strong>${esc(s.role)} · ${esc(s.organization)}</strong><span>${esc(s.detail)}</span></article>`).join(''));
  const toggle=$('menuToggle');const sidebar=document.querySelector('.sidebar');
  toggle.addEventListener('click',()=>{const on=sidebar.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(on));});
  $('siteNav').addEventListener('click',e=>{if(e.target.closest('a')){sidebar.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');}});
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('#siteNav a').forEach(a=>a.classList.toggle('active',a.dataset.section===entry.target.id));}})},{rootMargin:'-18% 0px -67% 0px'});navItems.forEach(([id])=>{if($(id))observer.observe($(id));});}
})();
