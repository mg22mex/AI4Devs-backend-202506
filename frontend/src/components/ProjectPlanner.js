import React, { useState } from 'react';

function ProjectPlanner() {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('casa');
  const [budget, setBudget] = useState('');
  const [area, setArea] = useState('');
  const [technique, setTechnique] = useState('adobe');
  const [showPlan, setShowPlan] = useState(false);
  const [phases, setPhases] = useState([]);

  const generatePlan = () => {
    if (!projectName || !budget || !area) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const projectPhases = [
      {
        name: 'Fase 1: Planificación y Diseño',
        duration: '2-4 semanas',
        tasks: [
          'Análisis del terreno y estudios de suelo',
          'Diseño arquitectónico y planos',
          'Cálculo de materiales',
          'Obtención de permisos',
          'Presupuesto detallado'
        ],
        budget: parseFloat(budget) * 0.05
      },
      {
        name: 'Fase 2: Preparación del Sitio',
        duration: '1-2 semanas',
        tasks: [
          'Limpieza y nivelación del terreno',
          'Trazado de la construcción',
          'Excavación para cimientos',
          'Preparación de accesos',
          'Instalación de servicios temporales'
        ],
        budget: parseFloat(budget) * 0.10
      },
      {
        name: 'Fase 3: Cimientos y Estructura Base',
        duration: '3-4 semanas',
        tasks: [
          'Construcción de cimientos de piedra o concreto',
          'Sistema de drenaje',
          'Impermeabilización de base',
          'Sobrecimiento elevado (mínimo 40cm)',
          'Instalaciones sanitarias básicas'
        ],
        budget: parseFloat(budget) * 0.20
      },
      {
        name: 'Fase 4: Muros y Estructura',
        duration: '6-8 semanas',
        tasks: getTechniqueSpecificTasks(technique),
        budget: parseFloat(budget) * 0.30
      },
      {
        name: 'Fase 5: Techumbre',
        duration: '2-3 semanas',
        tasks: [
          'Instalación de estructura de techo',
          'Colocación de aislamiento',
          'Impermeabilización',
          'Instalación de cubierta final',
          'Canaletas y bajadas de agua'
        ],
        budget: parseFloat(budget) * 0.15
      },
      {
        name: 'Fase 6: Acabados e Instalaciones',
        duration: '4-6 semanas',
        tasks: [
          'Instalaciones eléctricas',
          'Instalaciones de agua y gas',
          'Revoques y enlucidos',
          'Pisos',
          'Puertas y ventanas',
          'Pintura o acabados naturales'
        ],
        budget: parseFloat(budget) * 0.15
      },
      {
        name: 'Fase 7: Finalización',
        duration: '1-2 semanas',
        tasks: [
          'Limpieza final',
          'Instalación de accesorios',
          'Paisajismo básico',
          'Inspecciones finales',
          'Documentación de obra'
        ],
        budget: parseFloat(budget) * 0.05
      }
    ];

    setPhases(projectPhases);
    setShowPlan(true);
  };

  const getTechniqueSpecificTasks = (tech) => {
    const tasks = {
      'adobe': [
        'Producción de adobes (mínimo 3 semanas previas)',
        'Construcción de muros con mortero de tierra',
        'Instalación de dinteles y refuerzos',
        'Integración de marcos de puertas y ventanas',
        'Curado y protección de muros'
      ],
      'cob': [
        'Preparación de mezcla de cob',
        'Construcción de muros por capas',
        'Modelado de formas y nichos',
        'Secado entre capas',
        'Integración de elementos estructurales'
      ],
      'superadobe': [
        'Llenado y apisonado de sacos',
        'Construcción de muros en forma de domo',
        'Colocación de alambre de púas entre capas',
        'Instalación de aberturas',
        'Revoque exterior grueso'
      ],
      'bahareque': [
        'Construcción de estructura de madera',
        'Tejido de entramado de caña',
        'Aplicación de mezcla de tierra-paja',
        'Secado y segunda capa',
        'Revoque final'
      ],
      'paja': [
        'Construcción de estructura de madera',
        'Apilado y amarre de pacas',
        'Compresión de pacas',
        'Instalación de malla',
        'Revoque completo de protección'
      ],
      'bambu': [
        'Tratamiento de bambú',
        'Construcción de estructura',
        'Uniones y amarres',
        'Instalación de cerramientos',
        'Protección y acabados'
      ],
      'piedra': [
        'Selección y clasificación de piedras',
        'Preparación de mortero de cal',
        'Colocación de piedras grandes en base',
        'Levantamiento de muros con técnica tradicional',
        'Relleno de juntas y acabado'
      ],
      'botellas': [
        'Recolección y limpieza de botellas',
        'Diseño de patrón lumínico',
        'Preparación de mortero reforzado',
        'Colocación de botellas con malla de refuerzo',
        'Acabado y protección de superficie'
      ],
      'tapia': [
        'Preparación de tierra y mezcla',
        'Construcción y ajuste de encofrados',
        'Llenado y compactación por capas',
        'Desencofrado progresivo',
        'Curado y protección superficial'
      ],
      'tierra-paja': [
        'Preparación de barbotina de arcilla',
        'Tratamiento de paja con barbotina',
        'Construcción de estructura portante',
        'Relleno con mezcla tierra-paja',
        'Secado completo y revoque de protección'
      ],
      'madera': [
        'Tratamiento preventivo de madera',
        'Construcción de estructura portante',
        'Instalación de aislamiento natural',
        'Colocación de revestimiento exterior',
        'Aplicación de acabados protectores'
      ],
      'llantas': [
        'Recolección y selección de llantas',
        'Relleno y apisonado intensivo de tierra',
        'Apilado en forma de U o herradura',
        'Relleno de espacios con latas',
        'Revoque completo de protección'
      ],
      'mamposteria': [
        'Fabricación o compra de ladrillos',
        'Preparación de mortero de cal',
        'Levantamiento de muros con niveles',
        'Instalación de refuerzos estructurales',
        'Impermeabilización y acabados'
      ],
      'circular': [
        'Diseño circular o de domo específico',
        'Trazado circular del perímetro',
        'Cimientos circulares o radiales',
        'Construcción según técnica base elegida',
        'Acabados curvos y detalles especiales'
      ],
      'walipini': [
        'Excavación de fosa con pendiente norte-sur',
        'Construcción de muros de contención',
        'Instalación de estructura de techo inclinado',
        'Cobertura con plástico invernadero doble capa',
        'Instalación de sistema de ventilación y drenaje'
      ],
      'cellar': [
        'Excavación profunda en pendiente',
        'Construcción de muros impermeabilizados',
        'Construcción de techo abovedado',
        'Instalación de ventilación cruzada',
        'Construcción de acceso y estantes'
      ],
      'temazcal': [
        'Excavación ligera y base circular',
        'Construcción de estructura de arcos',
        'Construcción de domo bajo con adobe',
        'Instalación de piedras volcánicas y chimenea',
        'Impermeabilización y aislamiento con tierra'
      ],
      'bano-seco': [
        'Diseño y ubicación del sistema',
        'Construcción de estructura y caseta',
        'Instalación de cámara doble de compostaje',
        'Montaje de asiento con separador',
        'Instalación de tubo de ventilación de 3m',
        'Educación de usuarios sobre manejo'
      ],
      'horno': [
        'Construcción de base elevada de piedra',
        'Instalación de piso refractario',
        'Construcción de cúpula con molde',
        'Aplicación de capas aislantes y adobe',
        'Instalación de puerta y chimenea',
        'Curado con fuegos graduales'
      ],
      'chimenea': [
        'Construcción de cámara de combustión refractaria',
        'Instalación de barril o tubo de calor',
        'Construcción de banco de masa térmica',
        'Instalación de chimenea exterior',
        'Sistema de tiro y puerta de carga',
        'Curado y pruebas de funcionamiento'
      ],
      'piso-climatizado': [
        'Preparación y nivelación de base',
        'Instalación de aislante térmico',
        'Tendido de tubería PEX en serpentín',
        'Conexión a colectores y termostato',
        'Vertido de masa térmica sobre tubos',
        'Instalación de terminación de piso',
        'Conexión a fuente de calor y pruebas'
      ]
    };
    return tasks[tech] || tasks['adobe'];
  };

  const formatCurrency = (amount) => {
    return `$${parseInt(amount).toLocaleString('es-CL')} CLP`;
  };

  return (
    <div>
      <h2 className="section-title">Planificador de Proyectos</h2>

      <div className="info-section">
        <p style={{fontSize: '1.1em', textAlign: 'center'}}>
          Crea un plan detallado para tu proyecto de construcción natural con fases, tareas y presupuesto.
        </p>
      </div>

      <div className="form-group">
        <label>Nombre del Proyecto:</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Ej: Casa Ecológica Familiar"
        />
      </div>

      <div className="two-column-grid">
        <div className="form-group">
          <label>Tipo de Proyecto:</label>
          <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
            <option value="casa">Casa</option>
            <option value="cabaña">Cabaña</option>
            <option value="ampliacion">Ampliación</option>
            <option value="taller">Taller/Estudio</option>
            <option value="bodega">Bodega</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Técnica Constructiva:</label>
          <select value={technique} onChange={(e) => setTechnique(e.target.value)}>
            <optgroup label="Técnicas de Tierra">
              <option value="adobe">Adobe</option>
              <option value="cob">Cob</option>
              <option value="superadobe">Superadobe</option>
              <option value="tapia">Tapia/Tapial</option>
              <option value="tierra-paja">Tierra-Paja</option>
            </optgroup>
            <optgroup label="Técnicas con Fibras Vegetales">
              <option value="bahareque">Bahareque</option>
              <option value="paja">Pacas de Paja</option>
              <option value="bambu">Bambú</option>
            </optgroup>
            <optgroup label="Materiales Pétreos y Tradicionales">
              <option value="piedra">Piedra</option>
              <option value="mamposteria">Mampostería</option>
              <option value="madera">Madera</option>
            </optgroup>
            <optgroup label="Reciclaje y Materiales Reutilizados">
              <option value="botellas">Botellas de Vidrio</option>
              <option value="llantas">Llantas/Neumáticos</option>
            </optgroup>
            <optgroup label="Diseños Especiales">
              <option value="circular">Diseño Circular/Domo</option>
              <option value="walipini">Walipini (Invernadero)</option>
              <option value="cellar">Bodega/Cellar</option>
              <option value="temazcal">Temazcal</option>
              <option value="bano-seco">Baño Seco</option>
            </optgroup>
            <optgroup label="Sistemas de Calefacción y Cocción">
              <option value="horno">Horno de Barro/Leña</option>
              <option value="chimenea">Chimenea/Rocket Mass Heater</option>
              <option value="piso-climatizado">Piso Climatizado</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className="two-column-grid">
        <div className="form-group">
          <label>Presupuesto Total (CLP):</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Ej: 15000000"
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Área de Construcción (m²):</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Ej: 60"
            min="0"
          />
        </div>
      </div>

      <button className="button-primary" onClick={generatePlan}>
        Generar Plan de Proyecto
      </button>

      {showPlan && (
        <div style={{marginTop: '40px'}}>
          <div className="result-box">
            <h3 style={{fontSize: '1.5em', marginBottom: '15px'}}>
              📋 Plan de Proyecto: {projectName}
            </h3>
            <p><strong>Tipo:</strong> {projectType.charAt(0).toUpperCase() + projectType.slice(1)}</p>
            <p><strong>Técnica:</strong> {technique.charAt(0).toUpperCase() + technique.slice(1)}</p>
            <p><strong>Área:</strong> {area} m²</p>
            <p><strong>Presupuesto Total:</strong> {formatCurrency(budget)}</p>
            <p><strong>Duración Estimada:</strong> 5-7 meses</p>
          </div>

          {phases.map((phase, index) => (
            <div key={index} className="card" style={{marginTop: '25px'}}>
              <h3 style={{color: '#4a7c59', marginBottom: '10px'}}>{phase.name}</h3>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                <p><strong>⏱️ Duración:</strong> {phase.duration}</p>
                <p><strong>💰 Presupuesto:</strong> {formatCurrency(phase.budget)}</p>
              </div>
              
              <h4 style={{marginBottom: '15px', color: '#2d3748'}}>Tareas:</h4>
              <ul style={{paddingLeft: '20px'}}>
                {phase.tasks.map((task, i) => (
                  <li key={i} style={{marginBottom: '10px', color: '#4a5568'}}>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="info-section" style={{marginTop: '30px'}}>
            <h4>💡 Consejos para el Éxito de tu Proyecto:</h4>
            <ul>
              <li><strong>Flexibilidad:</strong> Los plazos pueden extenderse según clima y disponibilidad de materiales.</li>
              <li><strong>Comunidad:</strong> Organiza mingas o talleres para reducir costos y crear comunidad.</li>
              <li><strong>Aprendizaje:</strong> Documenta el proceso para futuras referencias.</li>
              <li><strong>Materiales:</strong> Compra materiales por etapas para optimizar presupuesto.</li>
              <li><strong>Clima:</strong> Planifica las fases considerando la estación del año.</li>
              <li><strong>Reserva:</strong> Mantén un 10-20% del presupuesto para imprevistos.</li>
              <li><strong>Asesoría:</strong> Consulta con expertos locales en construcción natural.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPlanner;
