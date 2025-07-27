<template>
  <div class="about container">
    <h2>About This Project</h2>

    <p>
      The <strong>Password Security Toolkit</strong> is a modern, user-friendly application designed to help individuals stay safe online by promoting strong password practices. It provides tools to test password strength, estimate crack times, and generate highly secure passwords.
    </p>

    <p>
      This project was built using <strong>Vue.js 3</strong> to ensure a fast, reactive user experience. It also utilizes responsive design, dark mode theming, and interactive visual feedback to enhance usability across devices.
    </p>

    <p>
      Core features include:
      <ul>
        <li>Password strength analysis with real-time feedback</li>
        <li>Instant secure password generator</li>
        <li>Mobile-friendly responsive layout</li>
      </ul>
    </p>

    <p>
      This toolkit was created with a focus on digital security awareness and simplicity. The goal is to empower users to make better security decisions, whether they're protecting social accounts, emails, or sensitive logins.
    </p>

    <p>
      Future improvements may include breach detection, password reuse warnings, clipboard copy features, and integration with browser extensions.
    </p>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 60px auto;
  font-size: 18px;
  line-height: 1.8;
  color: var(--primary-text);
  text-align: justify;
}

.about ul {
  list-style: none;
  padding-left: 0;
  margin-top: 12px;
}

.about li {
  margin-bottom: 8px;
  padding-left: 1.2em;
  position: relative;
}

.about li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--accent);
}
</style>
