<template>
  <Sidebar />
  <Header/>
</template>

<style lang="scss" scoped>
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}
* {
  font-family: "Fira sans", sans-serif;
}
body {
  background: var(--light);
}
button {
  cursor: pointer;
}
.app {
  main {
    @media (max-width: 1024px) {
      padding-left: 4rem;
    }
  }
}
</style>