<template>
  <aside>
    <div class="logo">
      <img class="w-100" src="@/assets/Images/Seeker.svg" alt="Logo" />
    </div>

    <div class="menu">
      <router-link to="/dashboard" class="button">
        <img
          class="nav-icon mx-auto"
          src="@/assets/Images/icons/home.svg"
          alt=""
        />
      </router-link>
      <router-link to="/" class="button">
        <img
          class="nav-icon mx-auto"
          src="@/assets/Images/icons/category.svg"
          alt=""
        />
      </router-link>
      <router-link to="/" class="button">
        <img
          class="nav-icon mx-auto"
          src="@/assets/Images/icons/bookmark.svg"
          alt=""
        />
      </router-link>
      <router-link to="/" class="button">
        <img
          class="nav-icon mx-auto"
          src="@/assets/Images/icons/profile.svg"
          alt=""
        />
      </router-link>
    </div>
  </aside>
</template>

<script>
</script>

<style lang="scss" scoped>
aside {
  float: left;
  flex-direction: column;

  top: 0;
  position: sticky;
  font-family: "Nunito", sans-serif;
  transition: 0.4s ease-in-out;
  z-index: 4;

  background-color: white;

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 3rem;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 1rem 1rem;

      .material-icons {
        font-size: 2rem;
        background: linear-gradient(128.58deg, #0f123f 14.67%, #3a408f 86.8%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: #f3f4f6;

        .material-icons,
        .text {
          background: linear-gradient(128.58deg, #0f123f 14.67%, #3a408f 86.8%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      &.router-link-exact-active {
        background-color: #f3f4f6;
        border-right: 5px solid transparent;
        background: linear-gradient(to bottom, white, white),
          linear-gradient(to bottom, #0f123f 14.67%, #3a408f 86.8%);
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;

        .material-icons,
        .text {
          background: linear-gradient(128.58deg, #0f123f 14.67%, #3a408f 86.8%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  @media (max-width: 1024px) {
    position: sticky;
    z-index: 1;
  }
}
</style>