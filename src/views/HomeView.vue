<template>
  <div class="content-wrapper">
    <!-- Hero: Text and Buttons -->
    <div class="hero">
      <h1 class="title">Password Security Toolkit</h1>
      <p class="subtitle">
        Stay one step ahead in your digital security. This toolkit helps you create and evaluate secure passwords to protect your online identity.
      </p>

      <p class="description">
        Weak or reused passwords are a leading cause of security breaches. With this tool, you can check the strength of any password, see how long it might take to crack, and instantly generate new, secure ones tailored to your preferences. It's simple, fast, and privacy-friendly—nothing is stored or sent anywhere.
      </p>

      <p class="description">
        Whether you're managing personal accounts, setting up a new profile, or reviewing your digital hygiene, this toolkit is designed to help you build a strong defense. Start now:
      </p>

      <div class="button-group">
        <router-link to="/strength-check" class="action-button secondary">
          Check Password Strength
        </router-link>
        <router-link to="/generate-password" class="action-button secondary">
          Generate Password
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;
}

/* Hero Content */
.hero {
  flex: 1;
  max-width: 700px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--accent);
}

.subtitle {
  font-size: 18px;
  color: var(--primary-text);
  opacity: 0.95;
  line-height: 1.6;
  margin-bottom: 16px;
  text-align: justify;
}

.description {
  font-size: 16px;
  color: var(--primary-text);
  line-height: 1.7;
  opacity: 0.85;
  margin-bottom: 16px;
  text-align: justify;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.action-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease;
  min-width: 180px;
  text-align: center;
  background: var(--accent);
  color: #fff;
}

.action-button:hover {
  background: #369b70;
}

.secondary {
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
}

.secondary:hover {
  background: white;
  color: black;
}

/* Responsive */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    text-align: center;
    gap: 32px;
  }

  .button-group {
    justify-content: center;
  }
}
</style>
