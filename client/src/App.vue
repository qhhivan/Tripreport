<template>
  <div id="app">
    <div id="nav">
      <router-link to="/trips">Trips</router-link> |
      <router-link to="/map">Maps</router-link> |
      <router-link to="/pictures">Bilder</router-link>
    </div>
    <router-view/>
  </div>
</template>
