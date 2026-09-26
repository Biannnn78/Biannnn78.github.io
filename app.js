/* Interaksi tanpa framework; data yang bisa diedit berada di data.js. */
'use strict';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const icons = {
  github: '<path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 7a4.3 4.3 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.8 11.8 0 0 0-6.2 0C6.3 3.4 5.3 3.7 5.3 3.7A4.3 4.3 0 0 0 5.2 7a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V22"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M9 8v13M6 5.5h.01M9 5.5h.01"/>',
  pen: '<path d="m15 5 4 4M4 20l5-1L21 7a2.8 2.8 0 0 0-4-4L5 15l-1 5ZM4 20h16"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="m8 12-1 9 5-3 5 3-1-9"/>',
  trophy: '<path d="M8 3h8v5a4 4 0 0 1-8 0V3ZM8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4M12 12v6m-4 3h8m-6-3h4l2 3H8l2-3Z"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.code}</svg>`;
const data = portfolioData;
const e = escapeHTML;
// Hanya tautan HTTP(S) yang dibuka di tab baru.
function externalLink(url) {
  try { const parsed = new URL(url); return ['https:', 'http:'].includes(parsed.protocol) ? e(parsed.href) : ''; } catch { return ''; }
}

const navHTML = data.navigation.map(([id, title]) => `<a href="#${e(id)}"${id === 'home' ? ' class="active" aria-current="location"' : ''}>${e(title)}</a>`).join('');
$('#desktop-nav').innerHTML = navHTML;
$('#mobile-nav').innerHTML = navHTML;
$$('[data-socials]').forEach(element => { element.innerHTML = data.profile.socials.map(social => `<a href="${externalLink(social.url)}" target="_blank" rel="noopener noreferrer" aria-label="${e(social.name)} (tab baru)">${icon(social.icon)}</a>`).join(''); });
$$('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
$('#hero-bio').textContent = data.profile.heroBio;
$('#about-lead').textContent = data.profile.aboutLead;
$('#about-body').textContent = data.profile.aboutBody;
$('#location').textContent = data.profile.location;
$('#portrait').src = data.profile.portrait;
$('#footer-name').textContent = data.profile.name;
$('#email-link').href = `mailto:${data.profile.email}`;
$('#email-link').innerHTML = `${e(data.profile.email)} <span aria-hidden="true">↗</span>`;
$('#stats').innerHTML = data.stats.map(stat => `<div class="stat"><strong>${e(stat.value)}</strong><span>${e(stat.label)}</span></div>`).join('');
$('#services').innerHTML = data.services.map((service, i) => `<article class="service-card"><div class="service-top"><span class="service-icon">${icon(service.icon)}</span><span class="service-number">0${i + 1} /</span></div><h3>${e(service.title)}</h3><p>${e(service.description)}</p><a href="#kontak" data-service="${e(service.title)}">Mari diskusikan <span aria-hidden="true">↗</span></a></article>`).join('');
$('#skills').innerHTML = data.skills.map(group => `<div class="skill-group"><h3>${e(group.category)}</h3><div class="skill-badges">${group.items.map(([symbol, title]) => `<span class="skill-badge"><b aria-hidden="true">${e(symbol)}</b>${e(title)}</span>`).join('')}</div></div>`).join('');
$('#experience').innerHTML = data.experience.map(item => `<article class="timeline-item"><div class="timeline-meta"><span>${e(item.period)}</span><span class="pill">${e(item.type)}</span></div><h3>${e(item.title)}</h3><p class="timeline-org">${e(item.organization)}</p><p>${e(item.description)}</p></article>`).join('');
$('#achievements').innerHTML = data.achievements.map((item, index) => `<button class="achievement" data-achievement="${index}" aria-label="Lihat detail ${e(item.title)}"><span class="award-icon">${icon(item.icon)}</span><div><h3>${e(item.title)}</h3><p>${e(item.issuer)}</p><span class="award-year">${e(item.year)}</span></div><span class="award-arrow" aria-hidden="true">↗</span></button>`).join('');

function renderProjects(filter = 'all') {
  $('#projects').innerHTML = data.projects.filter(project => filter === 'all' || project.category === filter).map(project => `<article class="project-card"><button class="project-image" data-project="${e(project.id)}" aria-label="Lihat detail proyek ${e(project.name)}"><img src="${e(project.image)}" alt="${e(project.alt)}" loading="lazy" width="700" height="500"><span aria-hidden="true">↗</span></button><p class="project-category">${e(project.categoryLabel)}</p><h3>${e(project.name)}</h3><p>${e(project.description)}</p><div class="project-tags">${project.tags.map(tag => `<span>${e(tag)}</span>`).join('')}</div><div class="project-links">${project.demoUrl && externalLink(project.demoUrl) ? `<a href="${externalLink(project.demoUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Live demo ${e(project.name)} (tab baru)">Live Demo ↗</a>` : `<button data-project="${e(project.id)}" data-link-type="demo">Live Demo ↗</button>`}${project.sourceUrl && externalLink(project.sourceUrl) ? `<a href="${externalLink(project.sourceUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Source code ${e(project.name)} (tab baru)">${icon('github')} Source Code</a>` : `<button data-project="${e(project.id)}" data-link-type="source">${icon('github')} Source Code</button>`}</div></article>`).join('');
}
renderProjects();
$('.filter-button span').textContent = String(data.projects.length).padStart(2, '0');
$$('[data-filter]').forEach(button => button.addEventListener('click', () => {
  $$('[data-filter]').forEach(tab => { const active = tab === button; tab.classList.toggle('active', active); tab.setAttribute('aria-pressed', String(active)); });
  renderProjects(button.dataset.filter);
}));

$('#gallery').innerHTML = data.gallery.map((photo, index) => `<button class="gallery-card" data-photo="${index}" aria-label="Perbesar foto: ${e(photo.title)}"><img src="${e(photo.image)}" alt="${e(photo.alt)}" loading="lazy" width="700" height="560"><span class="gallery-caption"><small>${e(photo.category)}</small><strong>${e(photo.title)}</strong></span><span class="gallery-expand" aria-hidden="true">↗</span></button>`).join('');

// Native <dialog> menyediakan focus trap dan penutupan dengan tombol Escape.
const drawer = $('#mobile-menu');
const menuToggle = $('#menu-toggle');
menuToggle.addEventListener('click', () => { drawer.showModal(); menuToggle.setAttribute('aria-expanded', 'true'); });
$('#menu-close').addEventListener('click', () => drawer.close());
drawer.addEventListener('close', () => { menuToggle.setAttribute('aria-expanded', 'false'); });
$$('a', $('#mobile-nav')).forEach(link => link.addEventListener('click', () => { drawer.close(); const section = $(link.getAttribute('href')); section.setAttribute('tabindex', '-1'); section.focus({ preventScroll:true }); }));
window.matchMedia('(min-width: 1024px)').addEventListener('change', event => { if (event.matches && drawer.open) drawer.close(); });
const detailDialog = $('#detail-dialog');
$('.dialog-close').addEventListener('click', () => detailDialog.close());
[drawer, detailDialog].forEach(dialog => dialog.addEventListener('click', event => { if (event.target !== dialog) return; const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); }));
function showDetail(content) { $('#detail-content').innerHTML = content; detailDialog.showModal(); detailDialog.scrollTop = 0; }

document.addEventListener('click', event => {
  const projectButton = event.target.closest('[data-project]');
  if (projectButton) {
    const project = data.projects.find(item => item.id === projectButton.dataset.project);
    const requested = projectButton.dataset.linkType;
    const notice = requested === 'source'
      ? (project.isPlaceholder ? 'Source code belum ditambahkan. Isi sourceUrl pada proyek ini di data.js dengan URL repository GitHub Anda.' : 'Tautan repository proyek ini belum dibagikan. Anda tetap dapat menjelajahi websitenya melalui Live Demo.')
      : requested === 'demo' ? 'Live demo belum ditambahkan. Isi demoUrl pada proyek ini di data.js dengan URL website atau prototype Anda.'
      : project.isPlaceholder ? 'Ini adalah mockup proyek contoh. Ganti gambar, deskripsi, demoUrl, dan sourceUrl di data.js dengan karya Anda.' : '';
    const liveLink = externalLink(project.demoUrl);
    showDetail(`<img src="${e(project.image)}" alt="${e(project.alt)}"><p class="dialog-label">${e(project.categoryLabel)}</p><h2 id="detail-title">${e(project.name)}</h2><p>${e(project.detail)}</p><div class="project-tags">${project.tags.map(tag => `<span>${e(tag)}</span>`).join('')}</div>${notice ? `<p class="dialog-placeholder">${e(notice)}</p>` : ''}${liveLink ? `<a class="button button-beige" href="${liveLink}" target="_blank" rel="noopener noreferrer" aria-label="Buka live demo ${e(project.name)} (tab baru)">Kunjungi Website <span aria-hidden="true">↗</span></a>` : ''}`);
  }
  const achievementButton = event.target.closest('[data-achievement]');
  if (achievementButton) {
    const item = data.achievements[Number(achievementButton.dataset.achievement)];
    showDetail(`<p class="dialog-label">PRESTASI & SERTIFIKASI · ${e(item.year)}</p><h2 id="detail-title">${e(item.title)}</h2><p>${e(item.issuer)}</p><p>${e(item.description)}</p>${externalLink(item.certificateUrl) ? `<a class="button button-beige" href="${externalLink(item.certificateUrl)}" target="_blank" rel="noopener noreferrer">Lihat sertifikat ↗</a>` : '<p class="dialog-placeholder">Data sertifikasi contoh. Tambahkan tautan sertifikat asli pada certificateUrl di data.js.</p>'}`);
  }
  const photoButton = event.target.closest('[data-photo]');
  if (photoButton) {
    const photo = data.gallery[Number(photoButton.dataset.photo)];
    showDetail(`<img src="${e(photo.image)}" alt="${e(photo.alt)}"><p class="dialog-label">${e(photo.category)}</p><h2 id="detail-title">${e(photo.title)}</h2><p>${e(photo.caption)}</p>`);
  }
  const serviceLink = event.target.closest('[data-service]');
  if (serviceLink) { $('#subject').value = 'Kolaborasi proyek'; if (!$('#message').value.trim()) $('#message').value = `Halo Sabian, saya tertarik dengan layanan ${serviceLink.dataset.service}. Saya ingin mendiskusikan `; }
});

// Navigasi mengikuti section yang sedang dibaca, termasuk saat mencapai footer.
let scrollScheduled = false;
function updateActiveNav() {
  let active = 'home';
  for (const [id] of data.navigation) { if (document.getElementById(id).getBoundingClientRect().top <= 150) active = id; }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = 'kontak';
  $$('#desktop-nav a, #mobile-nav a').forEach(link => { const current = link.hash === `#${active}`; link.classList.toggle('active', current); if (current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  scrollScheduled = false;
}
window.addEventListener('scroll', () => { if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateActiveNav); } }, { passive:true });
updateActiveNav();

$('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if (!name || message.length < 10) { $('#form-status').textContent = 'Mohon isi nama dan pesan dengan minimal 10 karakter selain spasi.'; (!name ? form.elements.name : form.elements.message).focus(); return; }
  const subject = `${form.elements.subject.value} — ${name}`;
  const body = `Halo ${data.profile.name},\n\n${message}\n\nSalam,\n${name}\nEmail balasan: ${email}`;
  const mailto = `mailto:${data.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  $('#form-status').innerHTML = `Draft email siap dibuka. Pesan belum dikirim; silakan kirim melalui aplikasi email Anda. <a class="text-link" href="${e(mailto)}">Buka ulang draft ↗</a>`;
  window.location.href = mailto;
});
