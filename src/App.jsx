import "./App.css";

function App() {
  return (
    <div className="cv-container">
      <h1>Ayşegül Badem</h1>
      <p className="email">aysegulbadem0@gmail.com</p>

      {/* Sosyal medya ikonları (login sayfalarına yönlendirir) */}
      <div className="socials" aria-label="Sosyal medya bağlantıları">
        <a
          className="social-link"
          href="https://www.linkedin.com/login"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn giriş sayfası"
          title="LinkedIn"
        >
          {/* LinkedIn icon */}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 23.5h4V7.9h-4V23.5zM8.5 7.9h3.8v2.1h0.1c0.5-1 1.9-2.1 4-2.1 4.3 0 5.1 2.8 5.1 6.5v9.1h-4v-8.1c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1v8.3h-4V7.9z" />
          </svg>
        </a>

        <a
          className="social-link"
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram giriş sayfası"
          title="Instagram"
        >
          {/* Instagram icon */}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
          </svg>
        </a>

        <a
          className="social-link"
          href="https://x.com/i/flow/login"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter) giriş sayfası"
          title="X"
        >
          {/* X icon */}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.9 2H22l-6.8 7.8L23 22h-6.4l-5-6.5L6 22H2l7.3-8.4L1 2h6.6l4.5 5.9L18.9 2zm-1.1 18h1.7L6.7 3.9H4.9L17.8 20z" />
          </svg>
        </a>
      </div>

      <section>
        <h2>Eğitim</h2>
        <p>
          Kapadokya Üniversitesi <br />
          Bilgisayar Programcılığı <br />
          (Mezuniyet: 2026)
        </p>
      </section>

     <section>
  <h2>İş Deneyimi</h2>
  <p>
    Henüz profesyonel iş deneyimim bulunmamaktadır. 
    Eğitim sürecimde ve bireysel çalışmalarımda React, JavaScript ve 
    frontend teknolojileri üzerine projeler geliştirerek kendimi 
    sürekli geliştirmekteyim.
  </p>
</section>

      <section>
        <h2>Yetenekler</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML / CSS</li>
          <li>Python</li>
          <li>C#</li>
        </ul>
      </section>

      <section>
        <h2>Hobiler & İlgi Alanları</h2>
        <p>
          Yazılım geliştirme, frontend teknolojileri öğrenme, yeni projeler üretme ve kendini sürekli geliştirme.
        </p>
      </section>
    </div>
  );
}

export default App;