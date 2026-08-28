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
    },
    {
      name: 'Llantas/Neumáticos (Earthship)',
      icon: '🛞',
      description: 'Construcción con neumáticos usados rellenos de tierra compactada, popularizada por el arquitecto Michael Reynolds.',
      advantages: [
        'Reutiliza residuos difíciles de reciclar',
        'Excelente masa térmica (regulación de temperatura)',
        'Muy resistente estructuralmente',
        'Material casi gratuito',
        'Aislamiento térmico superior',
        'Resistente a sismos e impactos'
      ],
      disadvantages: [
        'Trabajo físicamente muy exigente',
        'Requiere mucha mano de obra',
        'Olor inicial (se disipa con revoque)',
        'Estética industrial (debe cubrirse)',
        'Peso considerable (buenos cimientos)'
      ],
      ideal: 'Construcciones autosuficientes, climas extremos, zonas con muchas llantas disponibles',
      process: [
        'Recolectar llantas usadas (mismo tamaño preferible)',
        'Diseñar muros en forma de U o herradura',
        'Rellenar cada llanta con tierra compactada',
        'Apisonar con mazo de goma (muy compacto)',
        'Apilar llantas en hileras entrelazadas',
        'Rellenar espacios con latas de aluminio',
        'Revocar completamente con tierra o yeso'
      ]
    },
    {
      name: 'Mampostería Natural',
      icon: '🧱',
      description: 'Construcción tradicional con bloques o ladrillos de barro cocido unidos con mortero de cal.',
      advantages: [
        'Técnica probada durante milenios',
        'Alta durabilidad y resistencia',
        'Buena masa térmica',
        'Acepta diversos acabados',
        'Resistente al fuego',
        'Permite construcciones de varios pisos'
      ],
      disadvantages: [
        'Cocción de ladrillos consume energía',
        'Más costosa que tierra cruda',
        'Requiere habilidad técnica',
        'Producción genera emisiones CO2',
        'Rigidez (no flexible como bahareque)'
      ],
      ideal: 'Construcciones permanentes urbanas, zonas sísmicas moderadas, climas diversos',
      process: [
        'Seleccionar o fabricar ladrillos de calidad',
        'Preparar mortero de cal-arena (proporción 1:3)',
        'Establecer primera hilada nivelada perfectamente',
        'Levantar muros con junta de 1-1.5 cm',
        'Instalar refuerzos en puntos críticos',
        'Impermeabilizar base y coronamiento',
        'Aplicar acabado según diseño'
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

      <h2 className="section-title" style={{marginTop: '60px'}}>🌡️ Manejo Pasivo de Temperatura y Aire</h2>

      <div className="info-section">
        <p style={{fontSize: '1.1em', textAlign: 'center', marginBottom: '30px'}}>
          Los sistemas pasivos son estrategias de diseño que regulan temperatura y ventilación sin usar energía activa.
        </p>
      </div>

      <div className="cards-grid">
        <div className="card">
          <h3>🌡️ Masa Térmica</h3>
          <p><strong>Concepto:</strong> Materiales densos (tierra, piedra) absorben calor durante el día y lo liberan por la noche.</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Aplicación:</h4>
          <ul>
            <li>Muros gruesos de adobe o tapia (40-60 cm)</li>
            <li>Pisos de tierra compactada o baldosa</li>
            <li>Llantas rellenas de tierra</li>
            <li>Orientar masa térmica al sol en climas fríos</li>
          </ul>
          <p style={{marginTop: '15px'}}><strong>Mejor para:</strong> Climas con gran amplitud térmica (día/noche)</p>
        </div>

        <div className="card">
          <h3>💨 Ventilación Cruzada</h3>
          <p><strong>Concepto:</strong> Entrada y salida de aire en lados opuestos crea corriente natural que enfría.</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Diseño:</h4>
          <ul>
            <li>Ventanas opuestas alineadas</li>
            <li>Entrada de aire bajo (fresco)</li>
            <li>Salida de aire alto (caliente sube)</li>
            <li>Ventanas en dirección de vientos dominantes</li>
          </ul>
          <p style={{marginTop: '15px'}}><strong>Mejor para:</strong> Climas cálidos-húmedos</p>
        </div>

        <div className="card">
          <h3>☀️ Captación Solar Directa</h3>
          <p><strong>Concepto:</strong> Ventanas al norte (hemisferio sur) o sur (hemisferio norte) captan calor solar.</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Elementos:</h4>
          <ul>
            <li>Ventanas grandes orientadas al sol</li>
            <li>Vidrios dobles o triples</li>
            <li>Aleros que bloquean sol de verano</li>
            <li>Piso oscuro que absorbe calor</li>
          </ul>
          <p style={{marginTop: '15px'}}><strong>Mejor para:</strong> Climas fríos</p>
        </div>

        <div className="card">
          <h3>🌬️ Efecto Chimenea (Stack Effect)</h3>
          <p><strong>Concepto:</strong> Aire caliente sube y sale por aberturas altas, succionando aire fresco por abajo.</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Implementación:</h4>
          <ul>
            <li>Torre de ventilación o lucernario superior</li>
            <li>Entradas de aire bajas al norte</li>
            <li>Doble altura o techo alto</li>
            <li>Aberturas regulables</li>
          </ul>
          <p style={{marginTop: '15px'}}><strong>Mejor para:</strong> Climas cálidos sin viento</p>
        </div>

        <div className="card">
          <h3>🏜️ Pozo Canadiense</h3>
          <p><strong>Concepto:</strong> Aire circula por tubos enterrados, aprovechando temperatura constante del subsuelo.</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Componentes:</h4>
          <ul>
            <li>Tubos PVC enterrados a 2-3 metros</li>
            <li>Longitud mínima 20-30 metros</li>
            <li>Entrada con filtro de aire</li>
            <li>Pendiente para condensación</li>
          </ul>
          <p style={{marginTop: '15px'}}><strong>Mejor para:</strong> Climas extremos (calor y frío)</p>
        </div>

        <div className="card">
          <h3>🌳 Vegetación Estratégica</h3>
          <p><strong>Concepto:</strong> Plantas como reguladores térmicos y de viento.</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Aplicaciones:</h4>
          <ul>
            <li>Árboles caducos al norte (sombra verano, sol invierno)</li>
            <li>Árboles perennes como cortavientos</li>
            <li>Techos verdes (aislamiento)</li>
            <li>Enredaderas en muros oeste</li>
          </ul>
          <p style={{marginTop: '15px'}}><strong>Mejor para:</strong> Todos los climas</p>
        </div>
      </div>

      <h2 className="section-title" style={{marginTop: '60px'}}>⭕ Construcción Circular y Domos</h2>

      <div className="info-section">
        <p style={{fontSize: '1.1em', textAlign: 'center', marginBottom: '30px'}}>
          Las estructuras circulares y domos son las formas más eficientes en la naturaleza y la construcción.
        </p>
      </div>

      <div className="card" style={{marginBottom: '30px'}}>
        <h3>✨ Ventajas de Construcción Circular</h3>
        <div className="two-column-grid" style={{gap: '20px', marginTop: '20px'}}>
          <div>
            <h4 style={{color: '#4a7c59'}}>Eficiencia Estructural</h4>
            <ul>
              <li>Menor cantidad de materiales (30% menos)</li>
              <li>Sin esquinas débiles</li>
              <li>Distribución uniforme de fuerzas</li>
              <li>Mayor resistencia a vientos y sismos</li>
              <li>Auto-soportante (domos)</li>
            </ul>
          </div>
          <div>
            <h4 style={{color: '#4a7c59'}}>Eficiencia Térmica</h4>
            <ul>
              <li>Menor superficie expuesta (menos pérdida)</li>
              <li>Mejor circulación de aire</li>
              <li>No acumulación de calor en esquinas</li>
              <li>Hasta 30% ahorro energético</li>
              <li>Temperatura más uniforme</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cards-grid">
        <div className="card">
          <h3>🏛️ Tipos de Estructuras Circulares</h3>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Yurtas</h4>
          <p>Estructura portátil circular con techo cónico. Origen nómada de Asia Central.</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Domos Geodésicos</h4>
          <p>Estructura de triángulos interconectados. Popularizado por Buckminster Fuller.</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Domos de Superadobe</h4>
          <p>Espiral de sacos de tierra. Técnica de Nader Khalili.</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Domos Monolíticos</h4>
          <p>Cúpulas de concreto inflado o ferrocemento.</p>
        </div>

        <div className="card">
          <h3>📐 Consideraciones de Diseño</h3>
          <ul style={{paddingLeft: '20px'}}>
            <li><strong>Diámetro óptimo:</strong> 6-12 metros para vivienda</li>
            <li><strong>Altura:</strong> Radio/2 a Radio (según uso)</li>
            <li><strong>Puertas y ventanas:</strong> Requieren marcos especiales</li>
            <li><strong>Divisiones internas:</strong> Usar muebles o cortinas curvas</li>
            <li><strong>Instalaciones:</strong> Planificar desde el centro</li>
            <li><strong>Cimientos:</strong> Circular continuo o radial</li>
            <li><strong>Techo:</strong> Centro debe ser punto alto</li>
          </ul>
        </div>

        <div className="card">
          <h3>🔨 Técnicas Aplicables</h3>
          <p style={{marginBottom: '15px'}}>Casi cualquier técnica puede adaptarse a forma circular:</p>
          <ul style={{paddingLeft: '20px'}}>
            <li><strong>Superadobe:</strong> Ideal para domos</li>
            <li><strong>Cob:</strong> Perfecto para formas orgánicas</li>
            <li><strong>Bahareque:</strong> Estructura curva ligera</li>
            <li><strong>Pacas de Paja:</strong> Posible con curvatura suave</li>
            <li><strong>Llantas:</strong> Earthships en herradura</li>
            <li><strong>Madera:</strong> Yurtas y domos geodésicos</li>
          </ul>
        </div>
      </div>

      <div className="result-box" style={{marginTop: '30px'}}>
        <h4>💡 Cálculo de Eficiencia Circular</h4>
        <p>Para una vivienda de <strong>80 m² de área</strong>:</p>
        <div className="two-column-grid" style={{marginTop: '15px'}}>
          <div>
            <p><strong>Construcción Cuadrada (10x8m):</strong></p>
            <ul style={{paddingLeft: '20px', marginTop: '10px'}}>
              <li>Perímetro: 36 metros</li>
              <li>Superficie de muros (h=2.5m): 90 m²</li>
              <li>Esquinas: 4 puntos débiles</li>
            </ul>
          </div>
          <div>
            <p><strong>Construcción Circular (radio 5.05m):</strong></p>
            <ul style={{paddingLeft: '20px', marginTop: '10px'}}>
              <li>Perímetro: 31.7 metros (-12%)</li>
              <li>Superficie de muros: 79 m² (-12%)</li>
              <li>Esquinas: 0 puntos débiles</li>
            </ul>
          </div>
        </div>
        <p style={{marginTop: '15px', fontSize: '1.1em', color: '#4a7c59'}}>
          <strong>Ahorro: 12% en materiales + mayor resistencia estructural</strong>
        </p>
      </div>

      <div className="info-section" style={{marginTop: '40px'}}>
        <h4>🌟 Proyectos Circulares Destacados</h4>
        <ul>
          <li><strong>Cal-Earth (California):</strong> Domos de superadobe de Nader Khalili</li>
          <li><strong>Earthship Biotecture (Nuevo México):</strong> Casas autosuficientes en U</li>
          <li><strong>Dome House (Japón):</strong> Domos de espuma de poliestireno y concreto</li>
          <li><strong>Yurt Living (Mongolia-USA):</strong> Yurtas modernas permanentes</li>
          <li><strong>Casas Hobbit (Nueva Zelanda):</strong> Domos enterrados</li>
        </ul>
      </div>
    </div>
  );
}

export default TechniquesGuide;
