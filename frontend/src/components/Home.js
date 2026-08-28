import React from 'react';

function Home() {
  return (
    <div>
      <h2 className="section-title">Bienvenido a EcoArq</h2>
      
      <div className="info-section">
        <p style={{fontSize: '1.2em', textAlign: 'center', marginBottom: '30px'}}>
          Tu plataforma integral para diseñar y planificar proyectos de construcción natural sostenible.
        </p>
      </div>

      <div className="cards-grid">
        <div className="card">
          <div className="icon">🏗️</div>
          <h3>Calculadora de Materiales</h3>
          <p>
            Calcula con precisión los materiales necesarios para tu proyecto de construcción natural.
            Incluye 17 técnicas: tierra (adobe, cob, superadobe, tapia, tierra-paja), fibras vegetales (bahareque, paja, bambú), pétreos (piedra, mampostería, madera), reciclaje (botellas, llantas) y diseños especiales (circular, walipini, cellar, temazcal).
          </p>
          <ul>
            <li>✓ Cálculos precisos por m²</li>
            <li>✓ 17 técnicas constructivas</li>
            <li>✓ Estimación de costos</li>
            <li>✓ Diseños especiales</li>
          </ul>
        </div>

        <div className="card">
          <div className="icon">📚</div>
          <h3>Guía de Técnicas</h3>
          <p>
            Aprende sobre 17 diferentes técnicas de construcción natural, sistemas pasivos de climatización y diseños especiales.
          </p>
          <ul>
            <li>✓ Adobe, cob, tapia y tierra-paja</li>
            <li>✓ Piedra, mampostería y madera</li>
            <li>✓ Botellas y llantas recicladas</li>
            <li>✓ Walipini, cellar y temazcal</li>
            <li>✓ Sistemas de manejo térmico pasivo</li>
            <li>✓ Construcción circular y domos</li>
          </ul>
        </div>

        <div className="card">
          <div className="icon">📋</div>
          <h3>Planificador de Proyectos</h3>
          <p>
            Organiza tu proyecto paso a paso con nuestro planificador inteligente.
            Define metas, presupuesto y cronograma.
          </p>
          <ul>
            <li>✓ Gestión de fases</li>
            <li>✓ Control de presupuesto</li>
            <li>✓ Lista de tareas</li>
          </ul>
        </div>

        <div className="card">
          <div className="icon">🎨</div>
          <h3>Inspiración y Diseños</h3>
          <p>
            Explora una colección de diseños inspiradores de construcción natural
            de todo el mundo.
          </p>
          <ul>
            <li>✓ Casas de tierra</li>
            <li>✓ Estructuras de bambú</li>
            <li>✓ Diseños bioclimáticos</li>
          </ul>
        </div>

        <div className="card">
          <div className="icon">🖼️</div>
          <h3>Visualización 3D y Planos</h3>
          <p>
            Exporta tus proyectos y crea renders 3D profesionales. Incluye guías de software, tutoriales y exportación de datos técnicos.
          </p>
          <ul>
            <li>✓ Exportar datos a JSON/TXT</li>
            <li>✓ Guías de software 3D</li>
            <li>✓ Proceso de renderizado</li>
            <li>✓ Recursos y tutoriales</li>
          </ul>
        </div>
      </div>

      <div className="info-section" style={{marginTop: '40px'}}>
        <h4>¿Por qué construcción natural?</h4>
        <div className="two-column-grid">
          <div>
            <h4 style={{color: '#4a7c59', fontSize: '1.1em', marginBottom: '15px'}}>
              Beneficios Ambientales
            </h4>
            <ul>
              <li>Reducción de la huella de carbono</li>
              <li>Materiales renovables y locales</li>
              <li>Mínimo procesamiento industrial</li>
              <li>Biodegradable y reciclable</li>
              <li>Menor consumo energético</li>
            </ul>
          </div>
          <div>
            <h4 style={{color: '#4a7c59', fontSize: '1.1em', marginBottom: '15px'}}>
              Beneficios Económicos y Sociales
            </h4>
            <ul>
              <li>Reducción de costos de construcción</li>
              <li>Excelente confort térmico</li>
              <li>Regulación natural de humedad</li>
              <li>Fomenta la autoconstrucción</li>
              <li>Fortalece comunidades locales</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
