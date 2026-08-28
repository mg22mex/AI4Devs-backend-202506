import React, { useState } from 'react';

function ThreeDVisualization() {
  const [projectData, setProjectData] = useState({
    name: '',
    technique: 'adobe',
    area: '',
    height: '',
    width: '',
    length: '',
    design: 'rectangular'
  });

  const [showExport, setShowExport] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateExportData = () => {
    const areaNum = parseFloat(projectData.area);
    const heightNum = parseFloat(projectData.height);
    const widthNum = parseFloat(projectData.width) || Math.sqrt(areaNum);
    const lengthNum = parseFloat(projectData.length) || Math.sqrt(areaNum);

    const exportData = {
      proyecto: {
        nombre: projectData.name,
        fecha: new Date().toLocaleDateString('es-CL'),
        técnica: projectData.technique,
        diseño: projectData.design
      },
      dimensiones: {
        área_total: `${areaNum} m²`,
        ancho: `${widthNum.toFixed(2)} m`,
        largo: `${lengthNum.toFixed(2)} m`,
        altura_muros: `${heightNum} m`,
        volumen: `${(areaNum * heightNum).toFixed(2)} m³`
      },
      especificaciones_3D: {
        escala: '1:100',
        unidades: 'metros',
        origen: '[0, 0, 0]',
        coordenadas: {
          esquina_1: `[0, 0, 0]`,
          esquina_2: `[${widthNum.toFixed(2)}, 0, 0]`,
          esquina_3: `[${widthNum.toFixed(2)}, ${lengthNum.toFixed(2)}, 0]`,
          esquina_4: `[0, ${lengthNum.toFixed(2)}, 0]`,
          altura_máxima: `[0, 0, ${heightNum}]`
        }
      },
      recomendaciones_modelado: [
        'Comenzar con la planta base',
        'Extruir muros a la altura especificada',
        'Agregar espesor de muro según técnica',
        'Modelar aberturas (puertas y ventanas)',
        'Aplicar texturas según material',
        'Configurar iluminación natural',
        'Ajustar cámara para renders'
      ]
    };

    return exportData;
  };

  const exportToJSON = () => {
    const data = generateExportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${projectData.name || 'proyecto'}_datos_3D.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportToText = () => {
    const data = generateExportData();
    let textContent = `ESPECIFICACIONES TÉCNICAS PARA MODELADO 3D\n`;
    textContent += `${'='.repeat(60)}\n\n`;
    textContent += `PROYECTO: ${data.proyecto.nombre}\n`;
    textContent += `FECHA: ${data.proyecto.fecha}\n`;
    textContent += `TÉCNICA: ${data.proyecto.técnica}\n`;
    textContent += `DISEÑO: ${data.proyecto.diseño}\n\n`;
    textContent += `DIMENSIONES:\n`;
    Object.entries(data.dimensiones).forEach(([key, value]) => {
      textContent += `  - ${key.replace(/_/g, ' ')}: ${value}\n`;
    });
    textContent += `\nESPECIFICACIONES 3D:\n`;
    textContent += `  - Escala: ${data.especificaciones_3D.escala}\n`;
    textContent += `  - Unidades: ${data.especificaciones_3D.unidades}\n`;
    textContent += `\nCOORDENADAS:\n`;
    Object.entries(data.especificaciones_3D.coordenadas).forEach(([key, value]) => {
      textContent += `  - ${key.replace(/_/g, ' ')}: ${value}\n`;
    });
    textContent += `\nRECOMENDACIONES:\n`;
    data.recomendaciones_modelado.forEach((rec, i) => {
      textContent += `  ${i + 1}. ${rec}\n`;
    });

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${projectData.name || 'proyecto'}_especificaciones.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const tools3D = [
    {
      name: 'SketchUp Free',
      icon: '🏗️',
      type: 'Gratuito (Web)',
      difficulty: 'Fácil',
      features: ['Interfaz intuitiva', 'Modelado rápido', 'Biblioteca de objetos', 'Exporta a varios formatos'],
      bestFor: 'Principiantes y diseño rápido',
      url: 'sketchup.com/es/plans-and-pricing/sketchup-free'
    },
    {
      name: 'Blender',
      icon: '🎨',
      type: 'Gratuito (Open Source)',
      difficulty: 'Media-Alta',
      features: ['Renders fotorrealistas', 'Animaciones', 'Texturas avanzadas', 'Muy completo'],
      bestFor: 'Renders de alta calidad y presentaciones profesionales',
      url: 'blender.org'
    },
    {
      name: 'FreeCAD',
      icon: '📐',
      type: 'Gratuito (Open Source)',
      difficulty: 'Media',
      features: ['Diseño paramétrico', 'Precisión técnica', 'Planos 2D automáticos', 'Arquitectura'],
      bestFor: 'Planos técnicos precisos y arquitectura',
      url: 'freecadweb.org'
    },
    {
      name: 'Sweet Home 3D',
      icon: '🏡',
      type: 'Gratuito',
      difficulty: 'Fácil',
      features: ['Diseño de interiores', 'Vista 2D y 3D simultánea', 'Catálogo de muebles', 'Renders rápidos'],
      bestFor: 'Diseño de interiores y distribución',
      url: 'sweethome3d.com'
    },
    {
      name: 'Planner 5D',
      icon: '🏠',
      type: 'Freemium (básico gratis)',
      difficulty: 'Muy Fácil',
      features: ['Diseño intuitivo', 'Biblioteca extensa', 'Renders en la nube', 'App móvil', 'Vista VR'],
      bestFor: 'Diseño rápido de interiores y presentaciones',
      url: 'planner5d.com',
      naturalLimitations: 'Biblioteca limitada en elementos naturales (adobe, cob, bambú). Requiere creatividad con texturas y objetos personalizados.'
    },
    {
      name: 'Revit (Autodesk)',
      icon: '🏢',
      type: 'Pago (con trial)',
      difficulty: 'Alta',
      features: ['BIM profesional', 'Planos automáticos', 'Cálculos estructurales', 'Estándar industria'],
      bestFor: 'Proyectos profesionales y BIM',
      url: 'autodesk.com/products/revit'
    },
    {
      name: 'ArchiCAD',
      icon: '🏛️',
      type: 'Pago (con trial)',
      difficulty: 'Alta',
      features: ['BIM para arquitectos', 'Renders integrados', 'Documentación completa', 'Colaboración'],
      bestFor: 'Arquitectura profesional',
      url: 'graphisoft.com/solutions/archicad'
    }
  ];

  const renderSteps = [
    {
      step: 1,
      title: 'Preparación de Datos',
      description: 'Usa la calculadora de EcoArq para obtener dimensiones exactas',
      tasks: [
        'Calcular materiales y dimensiones',
        'Exportar datos técnicos (JSON o TXT)',
        'Tener claridad sobre técnica constructiva',
        'Definir orientación solar'
      ]
    },
    {
      step: 2,
      title: 'Modelado Base',
      description: 'Crear la geometría básica en software 3D',
      tasks: [
        'Importar dimensiones desde archivo exportado',
        'Crear planta base con medidas exactas',
        'Extruir muros a la altura calculada',
        'Agregar espesor de muro según técnica'
      ]
    },
    {
      step: 3,
      title: 'Detalles Arquitectónicos',
      description: 'Agregar elementos constructivos',
      tasks: [
        'Modelar puertas y ventanas',
        'Agregar techo según diseño',
        'Incluir cimientos y base',
        'Modelar elementos especiales (nichos, arcos, etc.)'
      ]
    },
    {
      step: 4,
      title: 'Materiales y Texturas',
      description: 'Aplicar acabados realistas',
      tasks: [
        'Aplicar textura de tierra para adobe/cob',
        'Textura de piedra para muros pétreos',
        'Material translúcido para botellas de vidrio',
        'Texturas de madera, paja, etc.'
      ]
    },
    {
      step: 5,
      title: 'Iluminación',
      description: 'Configurar luz natural y artificial',
      tasks: [
        'Agregar luz solar según orientación',
        'Configurar hora del día',
        'Iluminación interior (opcional)',
        'Sombras realistas'
      ]
    },
    {
      step: 6,
      title: 'Renderizado',
      description: 'Generar imágenes finales',
      tasks: [
        'Posicionar cámara(s)',
        'Configurar calidad de render',
        'Renderizar vistas clave',
        'Ajustar postprocesamiento'
      ]
    }
  ];

  return (
    <div>
      <h2 className="section-title">Visualización 3D y Planos</h2>

      <div className="info-section">
        <p style={{fontSize: '1.1em', textAlign: 'center', marginBottom: '30px'}}>
          Lleva tu proyecto de construcción natural al siguiente nivel con visualizaciones 3D y renders fotorrealistas.
        </p>
      </div>

      {/* Formulario de Datos del Proyecto */}
      <div className="card" style={{marginBottom: '30px'}}>
        <h3>📊 Datos del Proyecto para Exportar</h3>
        <p style={{marginBottom: '20px'}}>
          Ingresa los datos de tu proyecto para generar archivos técnicos que puedes usar en software 3D.
        </p>

        <div className="form-group">
          <label>Nombre del Proyecto:</label>
          <input
            type="text"
            name="name"
            value={projectData.name}
            onChange={handleInputChange}
            placeholder="Ej: Casa Ecológica Familiar"
          />
        </div>

        <div className="two-column-grid">
          <div className="form-group">
            <label>Técnica Constructiva:</label>
            <select name="technique" value={projectData.technique} onChange={handleInputChange}>
              <option value="adobe">Adobe</option>
              <option value="cob">Cob</option>
              <option value="superadobe">Superadobe</option>
              <option value="tapia">Tapia/Tapial</option>
              <option value="piedra">Piedra</option>
              <option value="botellas">Botellas de Vidrio</option>
              <option value="llantas">Llantas/Neumáticos</option>
              <option value="mamposteria">Mampostería</option>
            </select>
          </div>

          <div className="form-group">
            <label>Diseño:</label>
            <select name="design" value={projectData.design} onChange={handleInputChange}>
              <option value="rectangular">Rectangular</option>
              <option value="cuadrado">Cuadrado</option>
              <option value="circular">Circular/Domo</option>
              <option value="en_u">En forma de U (Earthship)</option>
              <option value="l">En forma de L</option>
            </select>
          </div>
        </div>

        <div className="two-column-grid">
          <div className="form-group">
            <label>Área Total (m²):</label>
            <input
              type="number"
              name="area"
              value={projectData.area}
              onChange={handleInputChange}
              placeholder="Ej: 80"
              step="0.01"
            />
          </div>

          <div className="form-group">
            <label>Altura de Muros (m):</label>
            <input
              type="number"
              name="height"
              value={projectData.height}
              onChange={handleInputChange}
              placeholder="Ej: 2.5"
              step="0.1"
            />
          </div>
        </div>

        <div className="two-column-grid">
          <div className="form-group">
            <label>Ancho (m) - Opcional:</label>
            <input
              type="number"
              name="width"
              value={projectData.width}
              onChange={handleInputChange}
              placeholder="Se calcula automático"
              step="0.1"
            />
          </div>

          <div className="form-group">
            <label>Largo (m) - Opcional:</label>
            <input
              type="number"
              name="length"
              value={projectData.length}
              onChange={handleInputChange}
              placeholder="Se calcula automático"
              step="0.1"
            />
          </div>
        </div>

        <div style={{display: 'flex', gap: '15px', marginTop: '20px'}}>
          <button 
            className="button-primary" 
            onClick={() => {
              if (!projectData.name || !projectData.area || !projectData.height) {
                alert('Por favor completa al menos nombre, área y altura');
                return;
              }
              setShowExport(true);
            }}
          >
            Ver Datos de Exportación
          </button>
          <button 
            className="button-primary" 
            onClick={exportToJSON}
            style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}
          >
            Descargar JSON
          </button>
          <button 
            className="button-primary" 
            onClick={exportToText}
            style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}
          >
            Descargar TXT
          </button>
        </div>

        {showExport && (
          <div className="result-box" style={{marginTop: '20px'}}>
            <h4>📄 Vista Previa de Datos Exportables</h4>
            <pre style={{
              background: '#2d3748',
              color: '#a0aec0',
              padding: '20px',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9em',
              maxHeight: '400px'
            }}>
              {JSON.stringify(generateExportData(), null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* Software 3D Recomendado */}
      <h2 className="section-title">🎨 Software 3D Recomendado</h2>

      <div className="cards-grid">
        {tools3D.map((tool, index) => (
          <div key={index} className="card">
            <div style={{fontSize: '3em', marginBottom: '10px'}}>{tool.icon}</div>
            <h3>{tool.name}</h3>
            <p style={{color: '#4a7c59', fontWeight: '600'}}>{tool.type}</p>
            <p style={{marginBottom: '15px'}}><strong>Dificultad:</strong> {tool.difficulty}</p>
            
            <h4 style={{fontSize: '1em', color: '#4a7c59', marginBottom: '10px'}}>Características:</h4>
            <ul style={{paddingLeft: '20px', marginBottom: '15px'}}>
              {tool.features.map((feature, i) => (
                <li key={i} style={{marginBottom: '5px', fontSize: '0.9em'}}>{feature}</li>
              ))}
            </ul>

            <p style={{
              background: '#e6f7ed',
              padding: '10px',
              borderRadius: '8px',
              fontSize: '0.9em',
              marginBottom: '15px'
            }}>
              <strong>Ideal para:</strong> {tool.bestFor}
            </p>

            <a 
              href={`https://${tool.url}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#4a7c59',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Visitar Sitio →
            </a>
          </div>
        ))}
      </div>

      {/* Proceso de Renderizado */}
      <h2 className="section-title" style={{marginTop: '60px'}}>🔨 Proceso de Renderizado</h2>

      {renderSteps.map((step, index) => (
        <div key={index} className="card" style={{marginBottom: '25px'}}>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
            <div style={{
              background: 'linear-gradient(135deg, #4a7c59 0%, #6ba587 100%)',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5em',
              fontWeight: '700',
              marginRight: '20px'
            }}>
              {step.step}
            </div>
            <div>
              <h3 style={{margin: 0}}>{step.title}</h3>
              <p style={{margin: '5px 0 0 0', color: '#718096'}}>{step.description}</p>
            </div>
          </div>

          <h4 style={{color: '#4a7c59', marginBottom: '10px'}}>Tareas:</h4>
          <ul style={{paddingLeft: '20px'}}>
            {step.tasks.map((task, i) => (
              <li key={i} style={{marginBottom: '8px', color: '#4a5568'}}>
                {task}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Recursos y Tutoriales */}
      <div className="info-section" style={{marginTop: '40px'}}>
        <h4>📚 Recursos de Aprendizaje</h4>
        
        <h5 style={{color: '#4a7c59', marginTop: '20px'}}>YouTube - Tutoriales en Español:</h5>
        <ul>
          <li><strong>SketchUp:</strong> Buscar "SketchUp para arquitectura tutorial español"</li>
          <li><strong>Blender:</strong> Canal "Blender en Español" - renders arquitectónicos</li>
          <li><strong>FreeCAD:</strong> "FreeCAD arquitectura tutorial"</li>
          <li><strong>Sweet Home 3D:</strong> "Sweet Home 3D casa completa"</li>
        </ul>

        <h5 style={{color: '#4a7c59', marginTop: '20px'}}>Comunidades:</h5>
        <ul>
          <li><strong>Reddit:</strong> r/architecture, r/blender, r/sketchup</li>
          <li><strong>Foros:</strong> SketchUcation, BlenderArtists</li>
          <li><strong>Discord:</strong> Servidores de Blender y arquitectura</li>
        </ul>

        <h5 style={{color: '#4a7c59', marginTop: '20px'}}>Texturas Gratuitas:</h5>
        <ul>
          <li><strong>Texturas de tierra/adobe:</strong> textures.com, ambientcg.com</li>
          <li><strong>Materiales PBR:</strong> polyhaven.com (gratis, alta calidad)</li>
          <li><strong>Piedra natural:</strong> 3dtextures.me</li>
          <li><strong>Madera:</strong> Free PBR materials</li>
        </ul>
      </div>

      {/* Tips Profesionales */}
      <div className="result-box" style={{marginTop: '30px'}}>
        <h4>💡 Tips Profesionales para Renders</h4>
        
        <div className="two-column-grid" style={{marginTop: '20px'}}>
          <div>
            <h5 style={{color: '#4a7c59'}}>Calidad Visual:</h5>
            <ul style={{paddingLeft: '20px'}}>
              <li>Usar iluminación HDRI para realismo</li>
              <li>Agregar imperfecciones a materiales</li>
              <li>Incluir vegetación y contexto</li>
              <li>Renderizar en "golden hour" (atardecer)</li>
              <li>Usar profundidad de campo sutil</li>
            </ul>
          </div>

          <div>
            <h5 style={{color: '#4a7c59'}}>Eficiencia:</h5>
            <ul style={{paddingLeft: '20px'}}>
              <li>Empezar con renders de baja calidad</li>
              <li>Usar proxies para vegetación densa</li>
              <li>Renderizar por capas (compositing)</li>
              <li>Guardar presets de cámara</li>
              <li>Hacer renders nocturnos (más rápidos)</li>
            </ul>
          </div>
        </div>

        <h5 style={{color: '#4a7c59', marginTop: '20px'}}>Vistas Esenciales:</h5>
        <ul style={{paddingLeft: '20px'}}>
          <li><strong>Exterior frontal:</strong> Vista desde acceso principal</li>
          <li><strong>Vista aérea:</strong> A 45° para ver todo el proyecto</li>
          <li><strong>Interior:</strong> Espacio social principal</li>
          <li><strong>Detalle:</strong> Textura de material característico</li>
          <li><strong>Contexto:</strong> Con entorno natural/urbano</li>
        </ul>
      </div>

      {/* Nueva Sección: Elementos Naturales en Software 3D */}
      <h2 className="section-title" style={{marginTop: '60px'}}>🌿 Modelar Elementos Naturales en Software 3D</h2>
      
      <div className="info-section">
        <p style={{fontSize: '1.05em', textAlign: 'center', marginBottom: '30px'}}>
          Guía específica para representar construcción natural y jardines interiores en Planner 5D y otros programas.
          Estos elementos suelen no estar en bibliotecas estándar - aquí te mostramos cómo crearlos.
        </p>
      </div>

      <div className="card" style={{marginBottom: '30px'}}>
        <h3>🏠 Elementos Naturales en Planner 5D</h3>
        <p style={{marginBottom: '20px'}}>
          Planner 5D es excelente para interiores pero carece de materiales de construcción natural.
          Aquí cómo solucionar esto:
        </p>

        <div className="two-column-grid">
          <div>
            <h5 style={{color: '#4a7c59'}}>🧱 Muros de Adobe/Tierra:</h5>
            <ul style={{fontSize: '0.9em'}}>
              <li><strong>Usar:</strong> Muros de ladrillo o concreto como base</li>
              <li><strong>Textura:</strong> Subir foto de adobe real o descargar de textures.com</li>
              <li><strong>Color:</strong> Tonos ocre, terracota, marrón claro</li>
              <li><strong>Espesor:</strong> Aumentar a 40-60cm (más que muro estándar)</li>
              <li><strong>Tip:</strong> Agregar irregularidades con relieves sutiles</li>
            </ul>

            <h5 style={{color: '#4a7c59', marginTop: '15px'}}>🌾 Techos de Paja/Verde:</h5>
            <ul style={{fontSize: '0.9em'}}>
              <li><strong>Usar:</strong> Techo inclinado genérico</li>
              <li><strong>Textura paja:</strong> Textura de madera clara o pasto seco</li>
              <li><strong>Techo verde:</strong> Textura de pasto + pequeñas plantas</li>
              <li><strong>Espesor:</strong> Mayor que techo estándar (30-40cm)</li>
              <li><strong>Tip:</strong> Agregar vegetación en bordes</li>
            </ul>
          </div>

          <div>
            <h5 style={{color: '#4a7c59'}}>🎋 Bambú y Madera Natural:</h5>
            <ul style={{fontSize: '0.9em'}}>
              <li><strong>Columnas:</strong> Usar columnas de madera, ajustar radio</li>
              <li><strong>Textura:</strong> Bambú real o madera con nudos</li>
              <li><strong>Vigas:</strong> Elementos estructurales vistos</li>
              <li><strong>Color:</strong> Miel, caramelo, natural sin barniz</li>
              <li><strong>Tip:</strong> No usar acabados brillantes (más natural)</li>
            </ul>

            <h5 style={{color: '#4a7c59', marginTop: '15px'}}>🪨 Piedra Natural:</h5>
            <ul style={{fontSize: '0.9em'}}>
              <li><strong>Usar:</strong> Muros de piedra o roca de biblioteca</li>
              <li><strong>Textura:</strong> Piedra irregular, no pulida</li>
              <li><strong>Color:</strong> Grises, marrones, según región</li>
              <li><strong>Mortero:</strong> Visible entre piedras (realismo)</li>
              <li><strong>Tip:</strong> Combinar tamaños diferentes</li>
            </ul>
          </div>
        </div>

        <h4 style={{color: '#4a7c59', marginTop: '25px'}}>🌿 Jardines Interiores en Planner 5D</h4>
        <div className="two-column-grid">
          <div>
            <h5 style={{color: '#4a7c59'}}>Plantas de Interior:</h5>
            <ul style={{fontSize: '0.9em'}}>
              <li><strong>Biblioteca:</strong> Planner 5D tiene +100 plantas</li>
              <li><strong>Distribución:</strong> 1 planta grande cada 8-10 m²</li>
              <li><strong>Esquinas:</strong> Plantas altas (2m+) en esquinas</li>
              <li><strong>Mesas:</strong> Plantas pequeñas en superficies</li>
              <li><strong>Grupos:</strong> Agrupar 3-5 plantas para impacto</li>
              <li><strong>Tip:</strong> Usar macetas de materiales naturales</li>
            </ul>
          </div>
          
          <div>
            <h5 style={{color: '#4a7c59'}}>Muros Verdes/Jardines Verticales:</h5>
            <ul style={{fontSize: '0.9em'}}>
              <li><strong>Método 1:</strong> Textura de pared con vegetación</li>
              <li><strong>Método 2:</strong> Panel personalizado con plantas</li>
              <li><strong>Método 3:</strong> Multiplicar plantas pequeñas en grid</li>
              <li><strong>Altura:</strong> Cubrir 60-80% de altura de muro</li>
              <li><strong>Ubicación:</strong> Muros con iluminación natural</li>
              <li><strong>Tip:</strong> Agregar sistema de riego visible (realismo)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card" style={{marginBottom: '30px'}}>
        <h3>🎨 Técnicas Avanzadas para Otros Software</h3>
        
        <div className="two-column-grid">
          <div>
            <h5 style={{color: '#4a7c59'}}>SketchUp:</h5>
            <ul style={{fontSize: '0.9em'}}>
              <li><strong>Warehouse 3D:</strong> Buscar "adobe house", "living wall"</li>
              <li><strong>Plugins:</strong> ClothWorks (techos de paja orgánicos)</li>
              <li><strong>Texturas:</strong> texture.com → proyectar en UV</li>
              <li><strong>Plantas:</strong> SketchUp tiene biblioteca Laubwerk</li>
              <li><strong>Muros curvos:</strong> Plugin Curviloft para cob/adobe</li>
            </ul>

            <h5 style={{color: '#4a7c59', marginTop: '15px'}}>Blender (Avanzado):</h5>
            <ul style={{fontSize: '0.9em'}}>
              <li><strong>Particle System:</strong> Pasto en techos verdes</li>
              <li><strong>Displacement:</strong> Irregularidades en adobe</li>
              <li><strong>Geometry Nodes:</strong> Muros de botellas/llantas</li>
              <li><strong>Add-ons:</strong> Botanical, Ivy Gen (vegetación)</li>
              <li><strong>PBR Materials:</strong> Poly Haven (adobe, tierra, paja)</li>
            </ul>
          </div>

          <div>
            <h5 style={{color: '#4a7c59'}}>Sweet Home 3D:</h5>
            <ul style={{fontSize: '0.9em'}}>
              <li><strong>Importar modelos:</strong> Formato OBJ desde bibliotecas</li>
              <li><strong>Texturas personalizadas:</strong> Carpeta de usuario</li>
              <li><strong>Plantas:</strong> Biblioteca tiene +50 especies</li>
              <li><strong>Limitación:</strong> Menos flexible para muros naturales</li>
              <li><strong>Mejor para:</strong> Distribución con muebles naturales</li>
            </ul>

            <h5 style={{color: '#4a7c59', marginTop: '15px'}}>Revit/ArchiCAD (BIM):</h5>
            <ul style={{fontSize: '0.9em'}}>
              <li><strong>Familias custom:</strong> Crear muros de adobe paramet.</li>
              <li><strong>Materiales:</strong> Definir propiedades térmicas reales</li>
              <li><strong>Capas:</strong> Muros multicapa (tierra-paja-revoque)</li>
              <li><strong>Plantas:</strong> Importar desde Laubwerk o VizPeople</li>
              <li><strong>Ventaja:</strong> Cálculos energéticos precisos</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="result-box" style={{marginTop: '30px'}}>
        <h4>💡 Tips Profesionales: Elementos Naturales</h4>
        
        <div className="two-column-grid" style={{marginTop: '20px'}}>
          <div>
            <h5 style={{color: '#4a7c59'}}>Realismo en Materiales:</h5>
            <ul style={{paddingLeft: '20px', fontSize: '0.9em'}}>
              <li>Adobe/tierra: Agregar variación de color sutil</li>
              <li>Piedra: Nunca perfectamente alineada</li>
              <li>Madera: Mostrar nudos, vetas, imperfecciones</li>
              <li>Paja: Textura orgánica, no uniforme</li>
              <li>Plantas: Variar tamaños y especies</li>
            </ul>
          </div>

          <div>
            <h5 style={{color: '#4a7c59'}}>Jardines Interiores:</h5>
            <ul style={{paddingLeft: '20px', fontSize: '0.9em'}}>
              <li>Iluminación: Agregar luz natural direccional</li>
              <li>Sombras: Plantas proyectan sombras en muros</li>
              <li>Macetas: Materiales naturales (barro, fibra)</li>
              <li>Riego: Mostrar sistema si es muro verde</li>
              <li>Densidad: No sobrepoblar (espacio respirable)</li>
            </ul>
          </div>
        </div>

        <h5 style={{color: '#4a7c59', marginTop: '20px'}}>Recursos Específicos:</h5>
        <ul style={{paddingLeft: '20px', fontSize: '0.9em'}}>
          <li><strong>Texturas Adobe:</strong> textures.com/search?q=adobe+wall</li>
          <li><strong>Plantas 3D:</strong> sketchuptextureclub.com/plants</li>
          <li><strong>Piedra Natural:</strong> ambientcg.com/list?type=Material&search=stone</li>
          <li><strong>Muros Verdes:</strong> cgtrader.com/search/living+wall</li>
          <li><strong>Bambú:</strong> 3dwarehouse.sketchup.com/search/?q=bamboo</li>
        </ul>
      </div>

      {/* Casos de Estudio */}
      <h2 className="section-title" style={{marginTop: '60px'}}>🎯 Casos de Estudio: De EcoArq a 3D</h2>

      <div className="cards-grid">
        <div className="card">
          <h3>Casa de Adobe Tradicional</h3>
          <p><strong>Software usado:</strong> SketchUp + Enscape</p>
          <p><strong>Tiempo:</strong> 8 horas modelado + 2 horas renders</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Proceso:</h4>
          <ol style={{paddingLeft: '20px', fontSize: '0.9em'}}>
            <li>Exportar dimensiones desde EcoArq</li>
            <li>Modelar planta base en SketchUp</li>
            <li>Aplicar textura de adobe descargada</li>
            <li>Agregar techo de tejas</li>
            <li>Render con Enscape (plugin)</li>
          </ol>
        </div>

        <div className="card">
          <h3>Earthship con Llantas</h3>
          <p><strong>Software usado:</strong> Blender</p>
          <p><strong>Tiempo:</strong> 12 horas modelado + 4 horas renders</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Desafíos:</h4>
          <ul style={{paddingLeft: '20px', fontSize: '0.9em'}}>
            <li>Modelar forma en U</li>
            <li>Textura de llantas + revoque</li>
            <li>Invernadero con vidrio translúcido</li>
            <li>Iluminación natural compleja</li>
          </ul>
        </div>

        <div className="card">
          <h3>Domo de Superadobe</h3>
          <p><strong>Software usado:</strong> FreeCAD + Blender</p>
          <p><strong>Tiempo:</strong> 6 horas modelado + 3 horas renders</p>
          <h4 style={{color: '#4a7c59', marginTop: '15px'}}>Ventajas:</h4>
          <ul style={{paddingLeft: '20px', fontSize: '0.9em'}}>
            <li>Forma simple (esfera)</li>
            <li>Textura de tierra uniforme</li>
            <li>Lucernario central dramático</li>
            <li>Renders rápidos por simetría</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="result-box" style={{marginTop: '40px', textAlign: 'center'}}>
        <h3 style={{fontSize: '1.5em', marginBottom: '15px'}}>🚀 ¡Comienza Ahora!</h3>
        <p style={{fontSize: '1.1em', marginBottom: '20px'}}>
          Usa EcoArq para calcular y planificar tu proyecto, luego llévalo a 3D para presentaciones profesionales.
        </p>
        <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button 
            className="button-primary"
            onClick={() => window.scrollTo(0, 0)}
          >
            Calcular mi Proyecto
          </button>
          <button 
            className="button-primary"
            onClick={() => window.open('https://www.sketchup.com/es/plans-and-pricing/sketchup-free', '_blank')}
            style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}
          >
            Ir a SketchUp Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThreeDVisualization;
