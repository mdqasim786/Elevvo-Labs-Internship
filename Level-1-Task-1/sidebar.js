const sidebar   = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const main      = document.getElementById('main');
const overlay   = document.getElementById('overlay');

const isMobile = () => window.innerWidth <= 768;

// Toggle sidebar open/closed
toggleBtn.addEventListener('click', () => {
  if (isMobile()) {
    // Mobile: slide drawer in/out
    sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('active');
  } else {
    // Desktop: collapse to icon rail
    sidebar.classList.toggle('collapsed');
    toggleBtn.classList.toggle('collapsed');
    main.classList.toggle('expanded');
  }
});

// Close sidebar when overlay is clicked (mobile)
overlay.addEventListener('click', () => {
  sidebar.classList.remove('mobile-open');
  overlay.classList.remove('active');
});

// Active nav link highlighting
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Auto-close sidebar on mobile after clicking a link
    if (isMobile()) {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('active');
    }
  });
});

// Clean up mobile state when resizing to desktop
window.addEventListener('resize', () => {
  if (!isMobile()) {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
  }
});