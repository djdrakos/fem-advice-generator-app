import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <h2>Advice #117</h2>
        
        <p>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>

        <svg className="divider" aria-hidden="true" width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/>
            <g fill="#CEE3E9">
              <rect width="6" height="16" rx="3"/>
              <rect x="14" width="6" height="16" rx="3"/>
            </g>
          </g>
        </svg>

        <button  aria-label="generate new advice"> 
          <svg 
            role="graphics-symbol img" 
            aria-labelledby="title"
            width="24" height="24" 
            xmlns="http://www.w3.org/2000/svg">
            <title id="title" lang="en">Dice Icon</title>
            <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/>
            </svg>
        </button>
      </main>
      
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.  Coded by <a href="https://github.com/dj-drakos">DJ Drakos</a>.
      </footer>
    </div>
  );
}

export default App;
