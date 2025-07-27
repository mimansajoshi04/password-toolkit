<template>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/generate-password">Password Generator</router-link>
      <router-link to="/strength-check">Password Strength Check</router-link>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #333;
    padding: 10px;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
    padding: 10px;
    flex: 1 1 auto;
    text-align: center;
  }

  .navbar a.router-link-active {
  color: black; /* bright yellow for active */
  font-weight: bold;
}
  
  @media (max-width: 600px) {
    .navbar {
      flex-direction: column;
      align-items: center;
    }
  
    .navbar a {
      width: 100%;
      border-top: 1px solid #444;
    }
  }
  </style>
  