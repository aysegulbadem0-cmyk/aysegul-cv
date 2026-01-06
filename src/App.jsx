import "./App.css";

function App() {
  return (
    <div className="cv-container">
      <h1>Ayşegül Badem</h1>
      <p className="email">aysegulbadem0@gmail.com</p>
      <p>
  <a href="https://github.com/kullaniciadiniz" target="_blank">GitHub</a> |{" "}
  <a href="https://linkedin.com/in/kullaniciadiniz" target="_blank">LinkedIn</a>
</p>

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
        <p>Henüz iş deneyimi yok.</p>
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