<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <span class="navbar-brand">seezit</span>

      <button class="navbar-toggler" data-toggle="collapse" data-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">Login</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Register</a>
          </li>
        </ul>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>

</style>