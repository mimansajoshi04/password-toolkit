<template>
  <div class="strength-checker container text-center">
    <h2 class="title">Password Strength Checker</h2>
    <p class="subtitle mt-2">
      Enter your password to evaluate how secure it is and how long it might take to crack.
    </p>

    <!-- Password Input -->
    <input
      type="text"
      v-model="password"
      class="password-input"
      placeholder="Enter your password"
      @input="checkStrength"
      autocomplete="off"
    />

    <!-- Strength Feedback -->
    <div class="feedback mt-3">
      <p class="label" :class="strengthClass">Strength: {{ strengthLabel }}</p>
      <p class="label" :class="timeClass">Estimated Crack Time: {{ crackTime }}</p>
    </div>

    <p class="tip mt-3">
      💡 Tip: Use a mix of uppercase, lowercase, numbers, and symbols for better security.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      strengthLabel: '',
      crackTime: '',
      strengthLevel: 0,
    };
  },
  computed: {
    strengthClass() {
      return {
        weak: this.strengthLevel < 2,
        medium: this.strengthLevel === 2,
        strong: this.strengthLevel > 2,
      };
    },
    timeClass() {
      return {
        weak: this.strengthLevel < 2,
        strong: this.strengthLevel > 2,
      };
    },
  },
  methods: {
    checkStrength() {
      const pwd = this.password;
      let charset = 0;
      if (/[a-z]/.test(pwd)) charset += 26;
      if (/[A-Z]/.test(pwd)) charset += 26;
      if (/[0-9]/.test(pwd)) charset += 10;
      if (/[^A-Za-z0-9]/.test(pwd)) charset += 32;
      const entropy = pwd.length * Math.log2(charset || 1);
      const guessesPerSec = 1e10;
      const seconds = Math.pow(2, entropy) / guessesPerSec;

      this.strengthLabel = this.getLabel(entropy);
      this.crackTime = this.formatTime(seconds);
    },
    getLabel(entropy) {
      if (entropy < 28) return (this.strengthLevel = 0, 'Very Weak');
      if (entropy < 36) return (this.strengthLevel = 1, 'Weak');
      if (entropy < 60) return (this.strengthLevel = 2, 'Reasonable');
      if (entropy < 80) return (this.strengthLevel = 3, 'Strong');
      return (this.strengthLevel = 4, 'Very Strong');
    },
    formatTime(seconds) {
      if (seconds < 1) return 'less than a second';
      const units = [
        ['year', 31536000],
        ['day', 86400],
        ['hour', 3600],
        ['minute', 60],
        ['second', 1],
      ];
      const parts = [];
      for (const [name, value] of units) {
        const count = Math.floor(seconds / value);
        if (count > 0) {
          parts.push(`${count} ${name}${count > 1 ? 's' : ''}`);
          seconds %= value;
        }
      }
      return parts.join(', ');
    },
  },
};
</script>

<style scoped>
.strength-checker {
  max-width: 600px;
  margin: 60px auto;
  padding: 32px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: var(--accent);
}

.subtitle {
  font-size: 16px;
  color: var(--primary-text);
  opacity: 0.85;
  margin-bottom: 20px;
}

.password-input {
  width: 100%;
  max-width: 400px;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--primary-text);
  transition: border 0.2s ease;
}

.password-input:focus {
  border-color: var(--accent);
  outline: none;
}

.feedback {
  margin-top: 16px;
}

.label {
  font-size: 16px;
  font-weight: 600;
}

.tip {
  font-size: 14px;
  color: var(--medium);
  margin-top: 16px;
}

/* Strength Classes */
.weak {
  color: var(--weak);
}

.medium {
  color: var(--medium);
}

.strong {
  color: var(--strong);
}

/* Responsive */
@media (max-width: 600px) {
  .password-input {
    width: 90%;
  }
}
</style>
