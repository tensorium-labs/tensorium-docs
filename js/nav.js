// Shared sidebar nav + active state logic

const NAV = [
  {
    group: 'Getting Started',
    items: [
      { icon: '🏠', label: 'Overview',       href: '/index.html' },
      { icon: '⚡', label: 'Quick Start',     href: '/index.html#quickstart' },
    ],
  },
  {
    group: 'Guides',
    items: [
      { icon: '⛏', label: 'Mining Guide',    href: '/mining.html' },
      { icon: '◈', label: 'Pool Mining',      href: 'https://pooltxm.tensoriumlabs.com', ext: true },
      { icon: '⬡', label: 'Running a Node',  href: '/node.html' },
      { icon: '💳', label: 'CLI Wallet',       href: '/wallet.html' },
      { icon: '🧩', label: 'Chrome Wallet',    href: '/chrome-wallet.html' },
      { icon: '🛟', label: 'Wallet Support',   href: '/wallet-support.html' },
    ],
  },
  {
    group: 'Reference',
    items: [
      { icon: '🛠', label: 'Developer Guide', href: '/developer.html' },
      { icon: '🔌', label: 'RPC API',         href: '/rpc.html' },
      { icon: '🌐', label: 'Network Params',  href: '/network.html' },
    ],
  },
  {
    group: 'Resources',
    items: [
      { icon: '💬', label: 'Telegram', href: 'https://t.me/+QOsnpSdhDGZkZGQ1', ext: true },
      { icon: '📄', label: 'Whitepaper',       href: 'https://whitepaper.tensoriumlabs.com', ext: true },
      { icon: '⚖', label: 'Risk Disclosure',   href: 'https://github.com/tensorium-labs/tensorium-core/blob/main/RISK_DISCLOSURE.md', ext: true },
      { icon: '🔒', label: 'Privacy Policy',    href: '/privacy-policy.html' },
      { icon: '🔍', label: 'Explorer',          href: 'https://explorer.tensoriumlabs.com',  ext: true },
      { icon: '🚰', label: 'Faucet',           href: 'https://faucet.tensoriumlabs.com',    ext: true },
      { icon: '💱', label: 'OTC Trading',      href: 'https://otc.tensoriumlabs.com',       ext: true },
      { icon: '🔗', label: 'Bridge (Soon)',    href: 'https://bridge.tensoriumlabs.com',    ext: true },
      { icon: '📊', label: 'Status',           href: 'https://status.tensoriumlabs.com',    ext: true },
      { icon: '⌨', label: 'GitHub',            href: 'https://github.com/tensorium-labs/tensorium-core', ext: true },
    ],
  },
];

function buildSidebar(activeHref) {
  const nav = document.querySelector('.sidebar-nav');
  if (!nav) return;

  const page = activeHref || window.location.pathname.split('/').pop() || 'index.html';

  NAV.forEach(({ group, items }) => {
    const g = document.createElement('div');
    g.className = 'nav-group';
    const t = document.createElement('div');
    t.className = 'nav-group-title';
    t.textContent = group;
    g.appendChild(t);

    items.forEach(({ icon, label, href, ext }) => {
      const a = document.createElement('a');
      a.className = 'nav-item';
      a.href = href;
      if (ext) a.target = '_blank';

      const fileName = href.split('/').pop().split('#')[0];
      const curFile  = page.split('#')[0];
      if (fileName === curFile || (curFile === '' && fileName === 'index.html')) {
        a.classList.add('active');
      }

      a.innerHTML = `<span class="nav-icon">${icon}</span>${label}${ext ? ' <span style="font-size:10px;opacity:.4">↗</span>' : ''}`;
      g.appendChild(a);
    });

    nav.appendChild(g);
  });
}

// Scroll-spy for in-page sections
function setupScrollSpy() {
  const sections = document.querySelectorAll('[id]');
  const navItems = document.querySelectorAll('.nav-item');
  if (!sections.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const href = `#${e.target.id}`;
        navItems.forEach(a => {
          if (a.getAttribute('href')?.endsWith(href)) {
            navItems.forEach(x => x.classList.remove('active'));
            a.classList.add('active');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => io.observe(s));
}

// FAQ toggle
document.addEventListener('click', e => {
  const q = e.target.closest('.faq-q');
  if (!q) return;
  const a    = q.nextElementSibling;
  const icon = q.querySelector('.faq-icon');
  const open = a.classList.contains('open');
  document.querySelectorAll('.faq-a.open').forEach(x => {
    x.classList.remove('open');
    x.previousElementSibling.querySelector('.faq-icon').textContent = '+';
  });
  if (!open) { a.classList.add('open'); if (icon) icon.textContent = '−'; }
});
