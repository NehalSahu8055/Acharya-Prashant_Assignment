export default function Navbar() {
  return (
  <header>
    <nav role="navigation" aria-label="Main menu">
      <a href="/" aria-label="Home | Project tracking Intro Component">
        <img class="logo" src="/logo.svg" alt="" width="25" />
      </a>
      <button
        class="nav-hamburger"
        aria-labelledby="hamburger"
        aria-haspopup="true"
        aria-controls="menu"
        aria-expanded="false"
      >
        <img class="ham-icon" src="/icon-hamburger.svg" alt="" />
        <span id="hamburger" class="sr-only"> Toggle Hamburger Menu </span>
      </button>

      <ul role="menu" id="menu" class="menu" aria-label="Menu">
        <li role="menuitem" class="menu-item" aria-label="product link">
          <a href="#">product</a>
        </li>
        <li role="menuitem" class="menu-item" aria-label="features link">
          <a href="#">features</a>
        </li>
        <li role="menuitem" class="menu-item" aria-label="pricing link">
          <a href="#">pricing</a>
        </li>
        <li
          role="menuitem"
          class="menu-item"
          aria-hidden="true"
          focusable="false"
        >
          <hr class="divider" />
        </li>
        <li role="menuitem" class="menu-item__cta" aria-label="login link">
          <a href="#">login</a>
        </li>
      </ul>
    </nav>
  </header>
  );
}
