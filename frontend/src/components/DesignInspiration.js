import React from 'react';

function DesignInspiration() {
  const designs = [
    {
      title: 'Casa de Adobe Mediterránea',
      technique: 'Adobe',
      location: 'Valle Central, Chile',
      description: 'Construcción de adobe tradicional con techo de tejas, paredes gruesas que proporcionan excelente aislamiento térmico. Integración con el paisaje mediante colores tierra y formas simples.',
      features: ['120 m²', '2 dormitorios', 'Patio interior', 'Aleros amplios', 'Orientación norte'],
      climate: 'Clima mediterráneo con estaciones marcadas',
      icon: '🏠'
    },
    {
      title: 'Domo de Superadobe',
      technique: 'Superadobe',
      location: 'Norte de Chile',
      description: 'Estructura en forma de domo construida con sacos de tierra, ideal para climas áridos. Diseño circular que minimiza el uso de materiales y maximiza la eficiencia espacial.',
      features: ['45 m²', 'Espacio diáfano', 'Lucernario central', 'Resistente a sismos', 'Bajo costo'],
      climate: 'Clima desértico con alta radiación solar',
      icon: '🏜️'
    },
    {
      title: 'Cabaña de Cob con Techo Verde',
      technique: 'Cob',
      description: 'Pequeña cabaña de cob con formas orgánicas y esculturales. Techo verde que proporciona aislamiento adicional y se integra con el entorno natural.',
      features: ['35 m²', 'Diseño de espacio abierto', 'Nichos integrados', 'Techo vivo', 'Ventanas curvas'],
      climate: 'Clima templado húmedo',
      icon: '🏡'
    },
    {
      title: 'Casa de Bahareque Tropical',
      technique: 'Bahareque',
      location: 'Zona tropical',
      description: 'Construcción ligera de bahareque con ventilación cruzada natural. Elevada del suelo para protección contra humedad e inundaciones.',
      features: ['80 m²', 'Planta elevada', 'Ventilación cruzada', 'Terrazas amplias', 'Materiales locales'],
      climate: 'Clima tropical húmedo',
      icon: '🎋'
    },
    {
      title: 'Casa de Pacas de Paja Eficiente',
      technique: 'Pacas de Paja',
      location: 'Zona fría',
      description: 'Vivienda ultra-eficiente con muros de pacas de paja y revoque de cal. Diseño pasivo que minimiza necesidades de calefacción.',
      features: ['100 m²', 'Triple vidriado', 'Muro trombe', 'Aislamiento R-30', 'Energía pasiva'],
      climate: 'Clima frío con inviernos severos',
      icon: '🌾'
    },
    {
      title: 'Estructura de Bambú Contemporánea',
      technique: 'Bambú',
      location: 'Zona subtropical',
      description: 'Diseño moderno que aprovecha la resistencia y flexibilidad del bambú. Estructura liviana con grandes ventanales y conexión con el exterior.',
      features: ['90 m²', 'Doble altura', 'Estructura expuesta', 'Gran luminosidad', 'Diseño modular'],
      climate: 'Clima subtropical',
      icon: '🎍'
    },
    {
      title: 'Casa Híbrida Bioclimática',
      technique: 'Mixta',
      description: 'Combina adobe en muros norte y sur, vidrio al norte, ventilación cruzada y techo de paja. Diseño que responde al microclima específico del sitio.',
      features: ['150 m²', 'Diseño bioclimático', 'Captación solar', 'Ventilación natural', 'Inercia térmica'],
      climate: 'Clima temperado',
      icon: '🌍'
    },
    {
      title: 'Ecoaldea de Tierra',
      technique: 'Múltiples',
      description: 'Conjunto de viviendas naturales con espacios comunitarios. Uso de diferentes técnicas según función: adobe para casas, cob para espacios comunes, bahareque para talleres.',
      features: ['Diseño comunitario', 'Huertos integrados', 'Espacios compartidos', 'Gestión de agua', 'Autonomía energética'],
      climate: 'Adaptable a diferentes climas',
      icon: '🏘️'
    },
    {
      title: 'Casa de Piedra de Montaña',
      technique: 'Piedra',
      location: 'Zona montañosa',
      description: 'Construcción tradicional con piedra de cantera local. Muros gruesos de 60cm que proporcionan excelente aislamiento. Integrada en ladera con vistas panorámicas.',
      features: ['110 m²', 'Muros de piedra vista', 'Chimenea central', 'Durabilidad centenaria', 'Fusión con terreno'],
      climate: 'Clima de montaña con temperaturas extremas',
      icon: '🪨'
    },
    {
      title: 'Casa Lumínica de Botellas',
      technique: 'Botellas de Vidrio',
      location: 'Proyecto artístico comunitario',
      description: 'Muro decorativo construido con 3,000 botellas de vidrio recicladas. Crea efectos de luz mágicos durante el día. Proyecto participativo que reutiliza residuos locales.',
      features: ['Muro de 25 m²', 'Efectos cromáticos', 'Material reciclado 100%', 'Construcción comunitaria', 'Arte funcional'],
      climate: 'Cualquier clima (muro interior o protegido)',
      icon: '🍾'
    },
    {
      title: 'Casa de Tapia Contemporánea',
      technique: 'Tapia/Tapial',
      location: 'Zona semiárida',
      description: 'Vivienda moderna de tierra compactada con diseño minimalista. Muros monolíticos sin revoque que muestran capas de tierra. Integración perfecta de técnica ancestral con arquitectura contemporánea.',
      features: ['140 m²', 'Muros de 40cm', 'Acabado natural', 'Diseño moderno', 'Cero mantenimiento'],
      climate: 'Clima seco con variación térmica',
      icon: '🏗️'
    },
    {
      title: 'Casa de Tierra-Paja Alpina',
      technique: 'Tierra-Paja',
      location: 'Zona de alta montaña',
      description: 'Construcción de madera con relleno de tierra-paja. Excelente aislamiento para climas extremos. Estructura expuesta tipo chalet combinada con tecnología natural.',
      features: ['95 m²', 'Aislamiento R-35', 'Estructura de madera', 'Confort térmico superior', 'Bajo consumo energético'],
      climate: 'Clima alpino con inviernos rigurosos',
      icon: '🏔️'
    },
    {
      title: 'Cabaña de Madera del Bosque',
      technique: 'Madera',
      location: 'Bosque templado',
      description: 'Cabaña construida con madera local certificada. Diseño que respeta el entorno boscoso. Uso de técnicas tradicionales de carpintería con acabados naturales.',
      features: ['70 m²', 'Madera certificada FSC', 'Techo de madera natural', 'Integración total', 'Estufa de leña'],
      climate: 'Clima templado lluvioso',
      icon: '🪵'
    },
    {
      title: 'Earthship de Llantas Autosuficiente',
      technique: 'Llantas/Neumáticos',
      location: 'Nuevo México, USA / Adaptable',
      description: 'Casa completamente autosuficiente construida con 800 neumáticos reciclados. Diseño en forma de U que maximiza captación solar. Integra invernadero interior, captación de agua lluvia y tratamiento de aguas.',
      features: ['120 m²', '800 llantas recicladas', 'Invernadero interior', 'Autosuficiente 100%', 'Masa térmica extrema'],
      climate: 'Adaptable a cualquier clima, ideal para extremos',
      icon: '🛞'
    },
    {
      title: 'Domo de Superadobe Circular',
      technique: 'Circular + Superadobe',
      location: 'California, USA',
      description: 'Domo perfecto de 10 metros de diámetro construido con técnica de superadobe en espiral. Sin columnas interiores, espacio diáfano. Diseño icónico de Cal-Earth Institute.',
      features: ['78 m²', 'Sin estructura interna', 'Ventilación cenital', 'Resistente a sismos', 'Eficiencia térmica 30%'],
      climate: 'Climas áridos y semi-áridos',
      icon: '⭕'
    },
    {
      title: 'Casa con Sistemas Pasivos Integrados',
      technique: 'Mixta + Climatización Pasiva',
      location: 'Diseño bioclimático avanzado',
      description: 'Vivienda que combina masa térmica (muros de tapia), ventilación cruzada, chimenea solar, pozo canadiense y captación solar. Consume 80% menos energía que casa convencional.',
      features: ['130 m²', 'Pozo canadiense', 'Chimenea solar', 'Muros de tapia 50cm', 'Confort sin HVAC'],
      climate: 'Clima continental con extremos',
      icon: '🌡️'
    },
    {
      title: 'Casa de Mampostería con Botellas',
      technique: 'Mampostería + Botellas',
      location: 'Proyecto urbano comunitario',
      description: 'Construcción híbrida que combina muros estructurales de mampostería con muros interiores decorativos de 2,500 botellas de colores. Participación de 50 vecinos en construcción.',
      features: ['110 m²', '2,500 botellas', 'Construcción comunitaria', 'Muros lumínicos', 'Arte funcional'],
      climate: 'Urbano, clima templado',
      icon: '🏘️'
    },
    {
      title: 'Walipini Andino de Alta Montaña',
      technique: 'Walipini',
      location: 'Altiplano andino, 3,800 msnm',
      description: 'Invernadero subterráneo que permite cultivar hortalizas durante todo el año en clima extremo. Excavación de 2.2m aprovecha temperatura constante del subsuelo (12-15°C). Producción continua a pesar de heladas nocturnas de -15°C.',
      features: ['60 m²', 'Cultivo todo el año', 'Protección contra heladas', 'Ahorro de agua 60%', 'Sin calefacción'],
      climate: 'Alta montaña con heladas 300+ días/año',
      icon: '🌱'
    },
    {
      title: 'Bodega Subterránea Campesina',
      technique: 'Root Cellar',
      location: 'Zona rural templada',
      description: 'Bodega tradicional excavada en colina con techo abovedado de piedra. Mantiene temperatura de 10-12°C y humedad 85% todo el año sin electricidad. Almacena 2 toneladas de productos durante 6-8 meses.',
      features: ['25 m²', 'Temperatura constante', 'Sin refrigeración', 'Duración 100+ años', 'Techo abovedado'],
      climate: 'Templado con estaciones marcadas',
      icon: '🍷'
    },
    {
      title: 'Temazcal Comunitario Maya',
      technique: 'Temazcal',
      location: 'Península de Yucatán, México',
      description: 'Baño de vapor tradicional de 8m² construido con piedra volcánica y adobe. Domo bajo (1.6m altura) retiene calor perfectamente. Capacidad para 6-8 personas. Usado semanalmente por comunidad de 50 familias para ceremonias de sanación.',
      features: ['8 m²', 'Piedra volcánica', 'Tradición ancestral', 'Terapia y bienestar', 'Bajo costo'],
      climate: 'Tropical, ideal cualquier clima',
      icon: '♨️'
    },
    {
      title: 'Sistema de Baños Secos Comunitario',
      technique: 'Baño Seco',
      location: 'Ecoaldea Valle del Sol, Chile',
      description: 'Sistema de 4 baños secos composteros que sirven a comunidad de 25 personas. Construcción de madera con separación de orina y doble cámara. En 3 años han generado 800 kg de compost de alta calidad sin contaminar agua. Ahorro de 300,000 litros de agua potable anuales.',
      features: ['4 unidades', 'Cero agua', '800 kg compost/3 años', 'Ahorro 300K litros/año', 'Bajo mantenimiento'],
      climate: 'Adaptable a cualquier clima',
      icon: '🚽'
    }
  ];

  const principles = [
    {
      title: 'Diseño Bioclimático',
      description: 'Aprovechar las condiciones climáticas locales para maximizar confort y minimizar consumo energético.',
      tips: [
        'Orientación según hemisferio (norte en sur, sur en norte)',
        'Ventilación cruzada natural',
        'Aleros dimensionados para cada latitud',
        'Uso de masa térmica',
        'Protección solar en verano'
      ]
    },
    {
      title: 'Integración con el Entorno',
      description: 'Diseñar edificaciones que se integren armónicamente con el paisaje y ecosistema local.',
      tips: [
        'Usar materiales locales',
        'Respetar topografía existente',
        'Colores que se integren al paisaje',
        'Mínima alteración del terreno',
        'Preservar vegetación nativa'
      ]
    },
    {
      title: 'Eficiencia de Recursos',
      description: 'Optimizar el uso de materiales, agua y energía en diseño y construcción.',
      tips: [
        'Diseño compacto reduce materiales',
        'Espacios multiuso',
        'Captación de agua lluvia',
        'Energías renovables',
        'Reutilización de materiales'
      ]
    },
    {
      title: 'Espacios Saludables',
      description: 'Crear ambientes interiores que promuevan salud y bienestar de los ocupantes.',
      tips: [
        'Buena calidad del aire',
        'Iluminación natural abundante',
        'Conexión visual con naturaleza',
        'Materiales no tóxicos',
        'Aislamiento acústico'
      ]
    }
  ];

  return (
    <div>
      <h2 className="section-title">Inspiración y Diseños</h2>

      <div className="info-section">
        <p style={{fontSize: '1.1em', textAlign: 'center'}}>
          Explora ejemplos inspiradores de construcción natural de diferentes técnicas y climas.
        </p>
      </div>

      <h3 style={{color: '#2d3748', fontSize: '1.5em', marginTop: '30px', marginBottom: '20px'}}>
        Proyectos Destacados
      </h3>

      {designs.map((design, index) => (
        <div key={index} className="card" style={{marginBottom: '25px'}}>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
            <span style={{fontSize: '2.5em', marginRight: '15px'}}>{design.icon}</span>
            <div>
              <h3 style={{margin: 0, color: '#4a7c59'}}>{design.title}</h3>
              <span className="technique-badge">{design.technique}</span>
              {design.location && (
                <span style={{color: '#718096', fontSize: '0.9em', marginLeft: '10px'}}>
                  📍 {design.location}
                </span>
              )}
            </div>
          </div>

          <p style={{fontSize: '1.05em', lineHeight: '1.7', marginBottom: '20px'}}>
            {design.description}
          </p>

          <div style={{background: '#f7fafc', padding: '15px', borderRadius: '8px', marginBottom: '15px'}}>
            <h4 style={{color: '#2d3748', fontSize: '1.1em', marginBottom: '10px'}}>
              Características Principales:
            </h4>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
              {design.features.map((feature, i) => (
                <span key={i} style={{
                  background: 'white',
                  padding: '6px 12px',
                  borderRadius: '15px',
                  fontSize: '0.9em',
                  color: '#4a5568',
                  border: '1px solid #e2e8f0'
                }}>
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <p style={{fontSize: '0.95em', color: '#718096', fontStyle: 'italic'}}>
            <strong>Clima:</strong> {design.climate}
          </p>
        </div>
      ))}

      <h3 style={{color: '#2d3748', fontSize: '1.5em', marginTop: '50px', marginBottom: '20px'}}>
        Principios de Diseño Sostenible
      </h3>

      <div className="cards-grid">
        {principles.map((principle, index) => (
          <div key={index} className="card">
            <h3>{principle.title}</h3>
            <p style={{marginBottom: '20px'}}>{principle.description}</p>
            <h4 style={{fontSize: '1em', color: '#4a7c59', marginBottom: '10px'}}>
              Estrategias Clave:
            </h4>
            <ul style={{paddingLeft: '20px'}}>
              {principle.tips.map((tip, i) => (
                <li key={i} style={{marginBottom: '8px', color: '#4a5568'}}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="info-section" style={{marginTop: '40px'}}>
        <h4>📚 Recursos Adicionales</h4>
        <p>Para profundizar en construcción natural, considera explorar:</p>
        <ul>
          <li><strong>Libros recomendados:</strong> "La Casa Ecológica" de Julià Pérez, "Building with Earth" de Gernot Minke</li>
          <li><strong>Documentales:</strong> "Earthship Chronicles", "The Natural Building Companion"</li>
          <li><strong>Organizaciones:</strong> Red Iberoamericana de Construcción con Tierra (RedIberoTerra)</li>
          <li><strong>Cursos:</strong> Busca talleres prácticos de bioconstrucción en tu región</li>
          <li><strong>Comunidades:</strong> Únete a grupos locales de construcción natural</li>
        </ul>
      </div>

      <div className="result-box" style={{marginTop: '30px'}}>
        <h4>💡 Consejos para tu Diseño</h4>
        <p><strong>Empieza simple:</strong> Tu primer proyecto debe ser manejable y realista.</p>
        <p><strong>Visita proyectos existentes:</strong> Aprende de edificios naturales locales.</p>
        <p><strong>Experimenta a pequeña escala:</strong> Construye una caseta o horno antes de tu casa.</p>
        <p><strong>Documenta el proceso:</strong> Toma fotos y notas para futuras referencias.</p>
        <p><strong>Trabaja con la naturaleza:</strong> Observa patrones naturales antes de intervenir.</p>
      </div>
    </div>
  );
}

export default DesignInspiration;
