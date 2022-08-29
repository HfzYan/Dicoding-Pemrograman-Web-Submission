const language = {
  html: null,
  css: null,
  javaScript: null,
  php: null,
  cPlusPlus: null,
  kotlin: null,

  icons: {
    html: "./assets/img/html_icon.png",
    css: "./assets/img/css-icon.png",
    javaScript: "./assets/img/js-icon.png",
    php: "./assets/img/php-icon.png",
    cPlusPlus: "./assets/img/cpp-icon.png",
    kotlin: "./assets/img/kotlin-icon.png",
  },
};

const createIconsHTML = (language) => {
  if (language.html != null) {
    language.html = `
    <flexcol>
      <flexrow class="img">
        <img src="${language.icons.html}" />
      </flexrow>
    </flexcol>
    `;
  } else {
    language.html = "";
  }

  if (language.css != null) {
    language.css = `
    <flexcol>
      <flexrow class="img">
        <img src="${language.icons.css}" />
      </flexrow>
    </flexcol>
    `;
  } else {
    language.css = "";
  }

  if (language.javaScript != null) {
    language.javaScript = `
    <flexcol>
      <flexrow class="img">
        <img src="${language.icons.javaScript}" />
      </flexrow>
    </flexcol>
    `;
  } else {
    language.javaScript = "";
  }

  if (language.php != null) {
    language.php = `
    <flexcol>
      <flexrow class="img">
        <img src="${language.icons.php}" />
      </flexrow>
    </flexcol>
    `;
  } else {
    language.php = "";
  }

  if (language.cPlusPlus != null) {
    language.cPlusPlus = `
    <flexcol>
      <flexrow class="img">
        <img src="${language.icons.cPlusPlus}" />
      </flexrow>
    </flexcol>
    `;
  } else {
    language.cPlusPlus = "";
  }

  if (language.kotlin != null) {
    language.kotlin = `
    <flexcol>
      <flexrow class="img">
        <img src="${language.icons.kotlin}" />
      </flexrow>
    </flexcol>
    `;
  } else {
    language.kotlin = "";
  }
};

class ProjectArticle extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute("title") || null;
    this.src = this.getAttribute("src") || null;
    language.html = this.getAttribute("html") || null;
    language.css = this.getAttribute("css") || null;
    language.javaScript = this.getAttribute("js") || null;
    language.php = this.getAttribute("php") || null;
    language.cPlusPlus = this.getAttribute("cpp") || null;
    language.kotlin = this.getAttribute("kotlin") || null;
    createIconsHTML(language);
    this.render();
  }

  render() {
    this.innerHTML = `
      <flexrow>
        <img src="${this.src}" class="project-img">
      </flexrow>
      <flexrow class="project">
        <h3 class="project">${this.title}</h3> 
      </flexrow>
      <flexrow class="project-icon">
        ${language.html}
        ${language.css}
        ${language.javaScript}
        ${language.php}
        ${language.cPlusPlus}
        ${language.kotlin}
      </flexrow>
    `;
  }
}

customElements.define("project-article", ProjectArticle);
