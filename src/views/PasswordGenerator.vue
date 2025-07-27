<template>
  <div class="generator container text-center">
    <h2 class="title">Password Generator</h2>
    <p class="subtitle mt-2">
      Create a strong, random password with customizable options.
    </p>

    <!-- Length Input -->
    <div class="input-group mt-4">
      <label for="length">Password Length:</label>
      <input
        type="number"
        id="length"
        v-model.number="length"
        min="6"
        max="32"
        class="input-number"
      />
    </div>

    <!-- Character Type Checkboxes -->
    <div class="checkbox-group mt-3">
      <label><input type="checkbox" v-model="useLower" /> Lowercase</label>
      <label><input type="checkbox" v-model="useUpper" /> Uppercase</label>
      <label><input type="checkbox" v-model="useNumbers" /> Numbers</label>
      <label><input type="checkbox" v-model="useSymbols" /> Symbols</label>
    </div>

    <!-- Generate Button -->
    <button class="generate-button mt-4" @click="generate">
      Generate Password
    </button>

    <!-- Output Section -->
    <div v-if="password" class="result mt-4">
      <p class="password-display">
        🔑 <span class="generated-password">{{ password }}</span>

        <!-- Copy Button -->
        <button @click="copyToClipboard" class="icon-button" title="Copy to clipboard">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 1H4a2 2 0 0 0-2 2v16h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 18H8V7h11v16z"/>
          </svg>
        </button>

        <span v-if="copied" class="copied-text">Copied!</span>
      </p>

      <!-- Strength Feedback -->
      <p class="strength">
        Strength: <span :class="strengthClass">{{ strengthText }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordGenerator",
  data() {
    return {
      password: '',
      length: 16,
      useLower: true,
      useUpper: true,
      useNumbers: true,
      useSymbols: true,
      copied: false,
    };
  },
  computed: {
    strengthText() {
      const len = this.password.length;
      let score = 0;
      if (this.useLower) score++;
      if (this.useUpper) score++;
      if (this.useNumbers) score++;
      if (this.useSymbols) score++;
      score += len >= 16 ? 1 : len >= 12 ? 0.5 : 0;

      if (score >= 4.5) return 'Strong';
      else if (score >= 3) return 'Medium';
      else return 'Weak';
    },
    strengthClass() {
      switch (this.strengthText) {
        case 'Strong':
          return 'strong';
        case 'Medium':
          return 'medium';
        default:
          return 'weak';
      }
    }
  },
  methods: {
    generate() {
      let chars = '';
      if (this.useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
      if (this.useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (this.useNumbers) chars += '0123456789';
      if (this.useSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
      if (!chars) {
        this.password = '⚠️ Select at least one character type.';
        return;
      }

      let pwd = '';
      for (let i = 0; i < this.length; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      this.password = pwd;
      this.copied = false;
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.password).then(() => {
        this.copied = true;
        setTimeout(() => (this.copied = false), 5000);
      });
    },
  },
};
</script>

<style scoped>
.generator {
  max-width: 600px;
  margin: 60px auto;
  padding: 32px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: var(--accent);
}

.subtitle {
  font-size: 16px;
  color: var(--primary-text);
  opacity: 0.8;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.input-number {
  width: 60px;
  padding: 8px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--primary-text);
}

.checkbox-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 12px;
}

.generate-button {
  padding: 12px 28px;
  font-size: 16px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-weight: 600;
}

.generate-button:hover {
  background: #369b70;
}

.result {
  margin-top: 24px;
}

.password-display {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 18px;
  word-break: break-word;
  color: var(--primary-text);
}

.generated-password {
  font-family: 'Courier New', monospace;
  background: rgba(0, 0, 0, 0.05);
  padding: 8px 12px;
  border-radius: 6px;
}

.icon-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: background 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
}

.icon-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #42b983;
}

.copied-text {
  color: var(--accent);
  font-size: 14px;
  margin-left: 6px;
}

.strength {
  margin-top: 12px;
  font-weight: bold;
}

.weak {
  color: var(--weak);
}

.medium {
  color: var(--medium);
}

.strong {
  color: var(--strong);
}
</style>
