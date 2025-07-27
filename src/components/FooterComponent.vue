<template>
    <footer class="footer">
      <div class="footer-content">
        <p class="credit">
          © 2025 — Built with ❤️ by
          <a href="https://www.linkedin.com/in/mimansa-joshi" target="_blank">Mimansa Joshi</a>
        </p>
  
        <div class="social-links">
          <a href="https://github.com/mimansajoshi04" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mimansa-joshi" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:joshimd@rknec.edu" target="_blank" aria-label="Email">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: var(--nav-bg);
    padding: 20px 0;
    color: var(--nav-link);
    text-align: center;
    font-size: 14px;
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .footer a {
    color: var(--nav-link-active);
    text-decoration: none;
    font-weight: 600;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  
  .social-links {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
  
  .social-links i {
    font-size: 20px;
    transition: color 0.3s;
  }
  
  .social-links i:hover {
    color: var(--accent);
  }
  </style>
  