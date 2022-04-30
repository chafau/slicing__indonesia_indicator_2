<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-white" fixed="top">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <div class="form-group has-search">
            <span class="material-icons form-control-feedback"> search </span>
            <input type="text" class="form-control" placeholder="Search" />
          </div>

          <div class="dropdown notification-dropdown d-none d-lg-block mx-3">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="@/assets/Images/icons/bell.svg"
                class="w-100"
                alt=""
              />
              <span
                class="
                  position-absolute
                  top-0
                  start-1
                  translate-middle
                  p-2
                  bg-danger
                  border border-light
                  rounded-circle
                "
              >
                <span class="visually-hidden">New alerts</span>
              </span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </div>

          <div class="dropdown d-none d-lg-block">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="@/assets/Images/profile/BayunaRama.png"
                class="rounded-circle mx-2"
                style="width: 40px"
                alt="Avatar"
              />
              Bayuna Rama
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
#header {
  top: 0;
  position: sticky;
  font-family: "Nunito", sans-serif;
  transition: 0.4s ease-in-out;
  z-index: 99;
}

nav {
  .navbar-toggler {
    margin-left: auto;
  }

  .dropdown {
    margin-right: 3rem;

    .nav-link {
      color: black;
    }
  }

  .has-search .form-control {
    padding-left: 2.375rem;

    &:focus {
      box-shadow: none;
    }
  }

  .has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
  }

  .notification-dropdown {
    .nav-link {
      padding: 0;
    }

    .material-icons {
      font-size: 35px;
    }

    .dropdown-toggle::after {
      display: none;
    }
  }
}
</style>