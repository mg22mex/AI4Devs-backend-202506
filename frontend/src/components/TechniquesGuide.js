import React from 'react';

function TechniquesGuide() {
  const techniques = [
    {
      name: 'Adobe',
      icon: '🧱',
      description: 'Bloques de tierra cruda mezclada con arena y paja, secados al sol.',
      advantages: [
        'Excelente inercia térmica',
        'Alta durabilidad (siglos)',
        'Bajo costo',
        'Fácil de trabajar',
        'Resistente al fuego'
      ],
      disadvantages: [
        'Requiere protección contra humedad',
        'Proceso de secado lento',
        'Pesado para transporte',
        'Requiere cimientos fuertes'
      ],
      ideal: 'Climas secos y cálidos, construcciones permanentes',
      process: [
        'Seleccionar tierra con 15-30% de arcilla',
        'Mezclar con arena (proporción 70-30)',
        'Agregar paja o fibra vegetal',
        'Moldear en bloques de 30x40x10 cm',
        'Secar al sol por 3-4 semanas',
        'Construir con mortero de tierra'
      ]
    },
    {
      name: 'Cob',
      icon: '🏠',
      description: 'Técnica de construcción monolítica con mezcla húmeda de tierra, arena y paja.',
      advantages: [
        'Permite formas orgánicas y curvas',
        'No requiere moldes',
        'Excelente masa térmica',
        'Integra esculturas y nichos',
        'Muy económico'
      ],
      disadvantages: [
        'Proceso lento',
        'Requiere mucha mano de obra',
        'Sensible a la humedad',
        'Necesita protección constante'
      ],
      ideal: 'Autoconstrucción, diseños creativos, climas templados',
      process: [
        'Preparar mezcla: 70% arcilla, 20% arena, 10% paja',
        'Amasar con los pies hasta consistencia plástica',
        'Formar bolas o "cobs" de mezcla',
        'Aplicar en capas de 20-30 cm',
        'Dejar secar entre capas (1-3 días)',
        'Alisar y dar forma mientras está húmedo'
      ]
    },
    {
      name: 'Superadobe',
      icon: '🏜️',
      description: 'Sacos rellenos de tierra apilados en forma de domo o bóveda.',
      advantages: [
        'Muy resistente a sismos',
        'Resistente a huracanes',
        'Construcción rápida',
        'Bajo costo',
        'Mínima herramienta'
      ],
      disadvantages: [
        'Sacos de plástico (no biodegradable)',
        'Formas limitadas (domos)',
        'Requiere revoque grueso',
        'Difícil para aberturas grandes'
      ],
      ideal: 'Zonas sísmicas, construcciones de emergencia, climas áridos',
      process: [
        'Preparar tierra tamizada (puede ser del sitio)',
        'Llenar sacos tubulares de polipropileno',
        'Apisonar tierra dentro del saco',
        'Colocar en forma circular o de domo',
        'Poner alambre de púas entre capas',
        'Revocar con tierra-cal o cemento'
      ]
    },
    {
      name: 'Bahareque (Quincha)',
      icon: '🎋',
      description: 'Entramado de caña o bambú relleno con tierra y fibras.',
      advantages: [
        'Muy liviano',
        'Flexible ante sismos',
        'Rápida construcción',
        'Excelente aislamiento',
        'Materiales locales'
      ],
      disadvantages: [
        'Menor durabilidad',
        'Vulnerable a insectos',
        'Requiere mantenimiento regular',
        'Sensible a humedad extrema'
      ],
      ideal: 'Zonas tropicales, construcciones livianas, ampliaciones',
      process: [
        'Construir estructura de postes de madera',
        'Tejer entramado de caña o bambú',
        'Atar con bejucos o alambre',
        'Aplicar mezcla de tierra-paja',
        'Dejar secar y aplicar segunda capa',
        'Revocar con cal o arcilla fina'
      ]
    },
    {
      name: 'Pacas de Paja',
      icon: '🌾',
      description: 'Construcción con fardos de paja como bloques estructurales o de relleno.',
      advantages: [
        'Excelente aislamiento térmico y acústico',
        'Construcción muy rápida',
        'Material renovable',
        'Bajo costo',
        'Mínima energía incorporada'
      ],
      disadvantages: [
        'Requiere protección contra humedad',
        'Riesgo de roedores',
        'Necesita revoque completo',
        'Difícil obtener permisos'
      ],
      ideal: 'Climas fríos, construcciones eficientes energéticamente',
      process: [
        'Usar pacas bien secas y compactadas',
        'Construir sobre base elevada',
        'Apilar como ladrillos, atar con alambre',
        'Aplicar estructura de madera o auto-portante',
        'Instalar malla gallinera',
        'Revocar con tierra-cal o cal-arena'
      ]
    },
    {
      name: 'Bambú',
      icon: '🎍',
      description: 'Construcción con cañas de bambú como elemento estructural y de cerramiento.',
      advantages: [
        'Material más resistente que el acero',
        'Crece muy rápido (renovable)',
        'Liviano y flexible',
        'Bajo costo',
        'Estética única'
      ],
      disadvantages: [
        'Requiere tratamiento contra insectos',
        'Sensible a humedad',
        'Uniones complejas',
        'Durabilidad variable según tratamiento'
      ],
      ideal: 'Zonas tropicales y subtropicales, estructuras livianas',
      process: [
        'Cosechar bambú maduro (3-5 años)',
        'Curar al sol o con fuego',
        'Tratar con sal de boro o inmersión',
        'Diseñar uniones con tornillos o amarres',
        'Proteger de contacto con el suelo',
        'Aplicar acabados protectores'
      ]
    },
    {
      name: 'Piedra',
      icon: '🪨',
      description: 'Construcción tradicional con piedra natural, unida con mortero de cal o barro.',
      advantages: [
        'Durabilidad excepcional (siglos)',
        'Resistencia al fuego y agua',
        'Excelente masa térmica',
        'Material abundante en muchas zonas',
        'Estética natural atractiva',
        'Mínimo mantenimiento'
      ],
      disadvantages: [
        'Requiere mano de obra especializada',
        'Proceso lento y laborioso',
        'Peso considerable (cimientos fuertes)',
        'Costosa si se transporta lejos',
        'Difícil hacer modificaciones'
      ],
      ideal: 'Zonas con abundancia de piedra, construcciones duraderas, climas extremos',
      process: [
        'Seleccionar piedras de río o cantera',
        'Clasificar por tamaño y forma',
        'Preparar mortero de cal o tierra-cemento',
        'Colocar piedras grandes en la base',
        'Levantar muros rellenando huecos con mortero',
        'Dejar juntas de dilatación',
        'Aplicar acabado o dejar vista'
      ]
    },
    {
      name: 'Botellas de Vidrio Recicladas',
      icon: '🍾',
      description: 'Muros construidos con botellas de vidrio unidas con mortero, creando efectos lumínicos únicos.',
      advantages: [
        'Reutiliza residuos (ecológico)',
        'Crea efectos de luz hermosos',
        'Buen aislamiento térmico',
        'Material gratuito o muy barato',
        'Resistente al agua',
        'Estética única y artística'
      ],
      disadvantages: [
        'Requiere muchas botellas',
        'Proceso de recolección laborioso',
        'Limpieza intensiva necesaria',
        'Requiere buen diseño estructural',
        'Menos resistencia que muros sólidos'
      ],
      ideal: 'Muros no estructurales, cerramientos, muros decorativos, espacios creativos',
      process: [
        'Recolectar y limpiar botellas (mismo tamaño)',
        'Diseñar patrón de colocación',
        'Preparar mortero de tierra-cemento o cal',
        'Colocar botellas horizontalmente con fondos hacia fuera',
        'Rellenar espacios con mortero',
        'Instalar malla de refuerzo entre capas',
        'Revocar si se desea o dejar botellas expuestas'
      ]
    },
    {
      name: 'Tapia/Tapial (Tierra Compactada)',
      icon: '🏗️',
      description: 'Técnica de tierra compactada entre encofrados, creando muros monolíticos muy resistentes.',
      advantages: [
        'Muros muy resistentes y duraderos',
        'Excelente masa térmica',
        'Acabado liso sin revoque',
        'Construcción relativamente rápida',
        'Bajo costo de materiales',
        'Estética contemporánea'
      ],
      disadvantages: [
        'Requiere encofrado (inversión inicial)',
        'Trabajo físicamente exigente',
        'Necesita tierra específica',
        'Sensible a lluvia durante construcción',
        'Requiere experiencia técnica'
      ],
      ideal: 'Construcciones modernas de tierra, climas áridos y semi-áridos',
      process: [
        'Seleccionar tierra con 5-15% arcilla',
        'Tamizar y mezclar con grava pequeña',
        'Preparar encofrado resistente',
        'Llenar encofrado con capas de 10-15 cm',
        'Compactar cada capa con pisón',
        'Desencofrar después de 24-48 horas',
        'Proteger del agua hasta curado completo'
      ]
    },
    {
      name: 'Tierra-Paja (Light Earth)',
      icon: '🌾',
      description: 'Mezcla ligera de paja recubierta con barbotina de arcilla, excelente aislante.',
      advantages: [
        'Excelente aislamiento térmico',
        'Muy liviano',
        'Transpirable y regulador de humedad',
        'Materiales económicos',
        'Fácil de trabajar',
        'Buen aislamiento acústico'
      ],
      disadvantages: [
        'Requiere estructura portante',
        'Necesita protección exterior',
        'Proceso de secado lento',
        'Sensible a humedad extrema',
        'Menos masa térmica que tierra sólida'
      ],
      ideal: 'Relleno de estructuras de madera, climas fríos, renovaciones',
      process: [
        'Preparar barbotina de arcilla líquida',
        'Sumergir paja en la barbotina',
        'Escurrir el exceso',
        'Rellenar estructura de madera en capas',
        'Compactar ligeramente',
        'Dejar secar completamente (varias semanas)',
        'Aplicar revoque de protección'
      ]
    },
    {
      name: 'Madera',
      icon: '🪵',
      description: 'Construcción tradicional con estructura y revestimiento de madera natural.',
      advantages: [
        'Material renovable si es certificado',
        'Construcción rápida',
        'Liviano y flexible',
        'Buen aislamiento natural',
        'Fácil de trabajar',
        'Estética cálida y natural'
      ],
      disadvantages: [
        'Requiere tratamiento contra insectos y hongos',
        'Sensible a humedad',
        'Requiere mantenimiento regular',
        'Costo variable según tipo de madera',
        'Riesgo de incendio (requiere protección)'
      ],
      ideal: 'Zonas boscosas, climas fríos y templados, construcción rápida',
      process: [
        'Seleccionar madera apropiada (dura para estructura)',
        'Secar madera adecuadamente',
        'Aplicar tratamientos naturales preventivos',
        'Construir estructura portante',
        'Instalar aislamiento natural',
        'Aplicar revestimiento exterior',
        'Proteger con acabados ecológicos'
      ]
    }
  ];

  return (
    <div>
      <h2 className="section-title">Técnicas de Construcción Natural</h2>

      <div className="info-section">
        <p style={{fontSize: '1.1em', textAlign: 'center'}}>
          Explora las principales técnicas de construcción con materiales naturales,
          sus características, ventajas y aplicaciones ideales.
        </p>
      </div>

      {techniques.map((tech, index) => (
        <div key={index} className="card" style={{marginBottom: '30px'}}>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
            <span className="icon" style={{margin: '0 15px 0 0'}}>{tech.icon}</span>
            <h3 style={{margin: 0}}>{tech.name}</h3>
          </div>
          
          <p style={{fontSize: '1.1em', marginBottom: '25px'}}>{tech.description}</p>

          <div className="two-column-grid" style={{gap: '20px'}}>
            <div>
              <h4 style={{color: '#4a7c59', marginBottom: '15px'}}>✅ Ventajas</h4>
              <ul style={{paddingLeft: '20px'}}>
                {tech.advantages.map((adv, i) => (
                  <li key={i} style={{marginBottom: '8px', color: '#4a5568'}}>{adv}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{color: '#d97706', marginBottom: '15px'}}>⚠️ Desventajas</h4>
              <ul style={{paddingLeft: '20px'}}>
                {tech.disadvantages.map((dis, i) => (
                  <li key={i} style={{marginBottom: '8px', color: '#4a5568'}}>{dis}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{marginTop: '25px', padding: '15px', background: '#e6f7ed', borderRadius: '10px'}}>
            <h4 style={{color: '#4a7c59', marginBottom: '10px'}}>📍 Ideal para:</h4>
            <p style={{margin: 0, color: '#4a5568'}}>{tech.ideal}</p>
          </div>

          <div style={{marginTop: '25px'}}>
            <h4 style={{color: '#4a7c59', marginBottom: '15px'}}>🔨 Proceso de Construcción:</h4>
            <ol style={{paddingLeft: '20px'}}>
              {tech.process.map((step, i) => (
                <li key={i} style={{marginBottom: '10px', color: '#4a5568', lineHeight: '1.6'}}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}

      <div className="info-section">
        <h4>Recomendaciones Generales</h4>
        <ul>
          <li><strong>Protección contra humedad:</strong> Todas las técnicas requieren buenos cimientos elevados y aleros amplios.</li>
          <li><strong>Clima local:</strong> Considera las condiciones climáticas de tu zona al elegir la técnica.</li>
          <li><strong>Disponibilidad de materiales:</strong> Usa materiales locales para reducir costos y huella ambiental.</li>
          <li><strong>Mano de obra:</strong> Algunas técnicas son ideales para autoconstrucción, otras requieren experiencia.</li>
          <li><strong>Normativa:</strong> Verifica los códigos de construcción locales antes de iniciar.</li>
          <li><strong>Capacitación:</strong> Considera tomar talleres prácticos antes de tu primer proyecto.</li>
        </ul>
      </div>
    </div>
  );
}

export default TechniquesGuide;
