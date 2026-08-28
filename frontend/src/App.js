import React, { useState } from 'react';
import './App.css';
import MaterialCalculator from './components/MaterialCalculator';
import TechniquesGuide from './components/TechniquesGuide';
import ProjectPlanner from './components/ProjectPlanner';
import DesignInspiration from './components/DesignInspiration';
import ThreeDVisualization from './components/ThreeDVisualization';
import Home from './components/Home';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home />;
      case 'calculator':
        return <MaterialCalculator />;
      case 'techniques':
        return <TechniquesGuide />;
      case 'planner':
        return <ProjectPlanner />;
      case 'inspiration':
        return <DesignInspiration />;
      case '3d':
        return <ThreeDVisualization />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🏡 EcoArq</h1>
        <p>Plataforma de Diseño de Construcción Natural</p>
      </header>

      <nav className="navigation">
        <button 
          className={`nav-button ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => setActiveSection('home')}
        >
          Inicio
        </button>
        <button 
          className={`nav-button ${activeSection === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveSection('calculator')}
        >
          Calculadora de Materiales
        </button>
        <button 
          className={`nav-button ${activeSection === 'techniques' ? 'active' : ''}`}
          onClick={() => setActiveSection('techniques')}
        >
          Técnicas Constructivas
        </button>
        <button 
          className={`nav-button ${activeSection === 'planner' ? 'active' : ''}`}
          onClick={() => setActiveSection('planner')}
        >
          Planificador de Proyectos
        </button>
        <button 
          className={`nav-button ${activeSection === 'inspiration' ? 'active' : ''}`}
          onClick={() => setActiveSection('inspiration')}
        >
          Inspiración y Diseños
        </button>
        <button 
          className={`nav-button ${activeSection === '3d' ? 'active' : ''}`}
          onClick={() => setActiveSection('3d')}
        >
          Visualización 3D
        </button>
      </nav>

      <main className="content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
