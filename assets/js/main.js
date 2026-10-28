/* AbdElrahman Mohammed — portfolio interactions (vanilla JS, no dependencies) */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- Theme toggle ---------- */
  var themeBtn = $('#theme-toggle');
  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { }
  });

  /* ---------- Mobile menu ---------- */
  var menuBtn = $('#menu-toggle');
  var navLinks = $('#nav-links');
  function setMenu(open) {
    navLinks.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', function () {
    setMenu(!navLinks.classList.contains('open'));
  });
  $$('a', navLinks).forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  /* ---------- Hero name: split into animated letters ---------- */
  var splitEl = $('[data-split]');
  if (splitEl && !reduceMotion) {
    var text = splitEl.textContent.trim();
    splitEl.setAttribute('aria-label', text);
    splitEl.textContent = '';
    var ci = 0;
    text.split(' ').forEach(function (word, wi, arr) {
      var w = document.createElement('span');
      w.className = 'word';
      w.setAttribute('aria-hidden', 'true');
      word.split('').forEach(function (ch) {
        var c = document.createElement('span');
        c.className = 'char';
        c.textContent = ch;
        c.style.setProperty('--ci', ci++);
        w.appendChild(c);
      });
      splitEl.appendChild(w);
      if (wi < arr.length - 1) splitEl.appendChild(document.createTextNode(' '));
    });
  } else if (splitEl) {
    // keep gradient on last name without animation
    var parts = splitEl.textContent.trim().split(' ');
    var last = parts.pop();
    splitEl.innerHTML = parts.join(' ') + ' <span class="word">' + last + '</span>';
  }

  /* ---------- Typed roles ---------- */
  var typedEl = $('#typed');
  var roles = [
    'AI & Back-End Developer',
    'RAG & GenAI Builder',
    'ASP.NET Core Engineer',
    'Clean Architecture · DDD · CQRS',
    'Angular Full-Stack Developer'
  ];
  if (typedEl && !reduceMotion) {
    var r = 0, i = roles[0].length, deleting = true;
    var tick = function () {
      var word = roles[r];
      if (deleting) {
        i--;
        typedEl.textContent = word.slice(0, i);
        if (i <= 0) { deleting = false; r = (r + 1) % roles.length; }
        setTimeout(tick, 35);
      } else {
        i++;
        typedEl.textContent = roles[r].slice(0, i);
        if (i >= roles[r].length) { deleting = true; setTimeout(tick, 2200); return; }
        setTimeout(tick, 70);
      }
    };
    setTimeout(tick, 2600);
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Counters ---------- */
  function formatNum(n, fmt) {
    if (fmt === 'k') return n.toLocaleString('en-US');
    return String(n);
  }
  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var fmt = el.getAttribute('data-format');
    if (reduceMotion) { el.textContent = formatNum(target, fmt); return; }
    var start = null, dur = 1800;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = formatNum(Math.round(target * eased), fmt);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = $$('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { runCounter(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  } else {
    counters.forEach(runCounter);
  }

  /* ---------- Chat mock: type the bot answer when visible ---------- */
  var chat = $('.chat-mock');
  var botText = $('#bot-text');
  if (chat && botText) {
    var full = botText.getAttribute('data-text');
    var typeAnswer = function () {
      if (reduceMotion) { botText.textContent = full; chat.classList.add('done'); return; }
      var k = 0;
      (function t() {
        k += 2;
        botText.textContent = full.slice(0, k);
        if (k < full.length) setTimeout(t, 22);
        else chat.classList.add('done');
      })();
    };
    var chio = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { setTimeout(typeAnswer, 600); chio.disconnect(); }
    }, { threshold: 0.5 });
    chio.observe(chat);
  }

  /* ---------- Degree progress (Aug 2022 → May 2027) ---------- */
  var degStart = new Date(2022, 7, 1).getTime();
  var degEnd = new Date(2027, 4, 31).getTime();
  var pct = Math.max(0, Math.min(100, Math.round((Date.now() - degStart) / (degEnd - degStart) * 100)));
  var degBar = $('#degree-bar');
  var degPct = $('#degree-pct');
  if (degPct) degPct.textContent = pct + '%';
  var eduMain = $('.edu-main');
  if (eduMain && degBar) {
    var eio = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { degBar.style.width = pct + '%'; eio.disconnect(); }
    }, { threshold: 0.4 });
    eio.observe(eduMain);
  }

  /* ---------- Project filters with sliding glider ---------- */
  var filters = $$('.filter');
  var glider = $('.filter-glider');
  var projects = $$('.project');
  function moveGlider(btn) {
    if (!glider || !btn) return;
    glider.style.width = btn.offsetWidth + 'px';
    glider.style.transform = 'translateX(' + btn.offsetLeft + 'px)';
  }
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filters.forEach(function (b) {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      moveGlider(btn);
      var f = btn.getAttribute('data-filter');
      projects.forEach(function (p, idx) {
        var cats = p.getAttribute('data-cat').split(' ');
        var show = f === 'all' || cats.indexOf(f) !== -1;
        p.classList.toggle('is-hidden', !show);
        p.classList.remove('pop');
        if (show) {
          void p.offsetWidth; // restart animation
          p.style.animationDelay = (idx * 0.06) + 's';
          p.classList.add('pop', 'is-visible');
        }
      });
    });
  });
  var activeFilter = $('.filter.active');
  moveGlider(activeFilter);
  window.addEventListener('resize', function () { moveGlider($('.filter.active')); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { moveGlider($('.filter.active')); });
  }

  /* ---------- Card spotlight + 3D tilt (mouse only) ---------- */
  if (finePointer && !reduceMotion) {
    $$('.spot, .tilt').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');
        if (card.classList.contains('tilt')) {
          var rx = ((y / rect.height) - 0.5) * -8;
          var ry = ((x / rect.width) - 0.5) * 8;
          card.style.transform = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-4px)';
        }
      });
      card.addEventListener('pointerleave', function () {
        if (card.classList.contains('tilt')) card.style.transform = '';
      });
    });

    /* magnetic buttons */
    $$('.magnetic').forEach(function (btn) {
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = 'translate(' + dx * 0.18 + 'px,' + dy * 0.28 + 'px)';
      });
      btn.addEventListener('pointerleave', function () { btn.style.transform = ''; });
    });

    /* cursor glow */
    var glow = $('.cursor-glow');
    var gx = 0, gy = 0, tx = 0, ty = 0, raf = null;
    var follow = function () {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      glow.style.transform = 'translate(' + gx + 'px,' + gy + 'px)';
      raf = (Math.abs(tx - gx) > 0.5 || Math.abs(ty - gy) > 0.5) ? requestAnimationFrame(follow) : null;
    };
    window.addEventListener('pointermove', function (e) {
      tx = e.clientX; ty = e.clientY;
      document.body.classList.add('has-pointer');
      if (!raf) raf = requestAnimationFrame(follow);
    }, { passive: true });
  }

  /* ---------- Scroll: nav state, progress bar, timeline, active link ---------- */
  var nav = $('#nav');
  var progress = $('.scroll-progress');
  var toTop = $('#to-top');
  var timeline = $('#timeline');
  var tlFill = $('.timeline-fill');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    nav.classList.toggle('scrolled', y > 20);
    progress.style.setProperty('--p', h > 0 ? (y / h).toFixed(4) : 0);
    toTop.classList.toggle('show', y > window.innerHeight * 0.8);

    if (timeline && tlFill) {
      var r = timeline.getBoundingClientRect();
      var vh = window.innerHeight;
      var p = (vh * 0.6 - r.top) / r.height;
      tlFill.style.setProperty('--tp', Math.max(0, Math.min(1, p)).toFixed(3));
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  // Active nav link
  var linkMap = {};
  $$('#nav-links a').forEach(function (a) { linkMap[a.getAttribute('href').slice(1)] = a; });
  var sio = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        Object.keys(linkMap).forEach(function (k) { linkMap[k].classList.remove('active'); });
        if (linkMap[en.target.id]) linkMap[en.target.id].classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(function (s) { sio.observe(s); });

  /* ---------- Copy email ---------- */
  var toast = $('#toast');
  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }
  var copyBtn = $('#copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      var done = function () {
        showToast('Email copied to clipboard ✓');
        copyBtn.querySelector('span').textContent = 'Copied!';
        setTimeout(function () { copyBtn.querySelector('span').textContent = 'Copy'; }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, function () { showToast(email); });
      } else {
        showToast(email);
      }
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
