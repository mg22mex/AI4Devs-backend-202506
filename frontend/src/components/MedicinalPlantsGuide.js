import React, { useState } from 'react';

const MedicinalPlantsGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlant, setSelectedPlant] = useState(null);

  const plants = [
    {
      id: 4,
      name: 'Chaga',
      scientific: 'Inonotus obliquus',
      category: 'hongos',
      icon: '🍄',
      uses: 'Inmunomodulador potente, antioxidante (ORAC 52,000+), anticancerígeno, salud digestiva',
      tincture: '1:5 (50% alcohol) - Doble extracción',
      doseTincture: '2-3ml × 2-3 veces/día',
      doseOther: 'Té: 2-4g/taza × 1-3 tazas/día. Polvo: 1,000-3,000mg/día',
      warnings: 'Anticoagulantes, diabetes (monitorear glucosa)',
      legal: 'legal',
      bestTime: 'Mañana y tarde con comidas'
    },
    {
      id: 8,
      name: 'Cola de Pavo',
      scientific: 'Trametes versicolor',
      category: 'hongos',
      icon: '🍄',
      uses: 'Cáncer adyuvante (mejor evidencia), inmunomodulador, VPH, infecciones respiratorias',
      tincture: '1:4 (50% alcohol)',
      doseTincture: '3-5ml × 2-3 veces/día',
      doseOther: 'Extracto: 3,000-9,000mg/día. Té: 5-10g/L × hervir 1-2h',
      warnings: 'Autoinmunes (consultar), embarazo',
      legal: 'legal',
      bestTime: 'Con comidas, 2-3 veces al día'
    },
    {
      id: 9,
      name: 'Cordyceps',
      scientific: 'Cordyceps sinensis / C. militaris',
      category: 'hongos',
      icon: '🍄',
      uses: 'Rendimiento atlético (↑VO2 max), energía, libido, función pulmonar, función renal',
      tincture: '1:4 (50% alcohol)',
      doseTincture: '2-4ml × 2 veces/día',
      doseOther: 'Polvo: 3,000-6,000mg/día. Té: 3-5g/500ml × 1h hervir',
      warnings: 'Autoinmunes, cirugía próxima, trastornos hemorrágicos',
      legal: 'legal',
      bestTime: 'Mañana, 1-2h pre-entrenamiento. NO noche'
    },
    {
      id: 16,
      name: 'Ganoderma (Reishi)',
      scientific: 'Ganoderma lucidum',
      category: 'hongos',
      icon: '🍄',
      uses: 'Adaptógeno, inmunomodulador, sueño, ansiedad, hepatoprotector, cardiovascular',
      tincture: '1:5 (50% alcohol) - Doble extracción',
      doseTincture: '2-4ml × 2-3 veces/día',
      doseOther: 'Extracto: 1,500-5,000mg/día. Té: 3-5g/L × 1-2h hervir',
      warnings: 'Cirugía próxima, trasplante órganos, anticoagulantes',
      legal: 'legal',
      bestTime: 'Mañana y noche. Para sueño: 1-2h antes dormir'
    },
    {
      id: 22,
      name: 'Melena de León',
      scientific: 'Hericium erinaceus',
      category: 'hongos',
      icon: '🍄',
      uses: '🧠 Neuroprotector #1, memoria, demencia/Alzheimer, depresión, regeneración neuronal (NGF)',
      tincture: '1:5 (50% alcohol) - Doble extracción',
      doseTincture: '3-5ml × 2 veces/día',
      doseOther: 'Extracto: 3,000-5,000mg/día. Polvo: 1-3g/día',
      warnings: 'Alergia a hongos',
      legal: 'legal',
      bestTime: 'Mañana y tarde. Efectos: 2-4 semanas'
    },
    {
      id: 3,
      name: 'Cardo Mariano',
      scientific: 'Silybum marianum',
      category: 'plantas',
      icon: '🌿',
      uses: '🫀 Hepatoprotector #1, cirrosis, hepatitis, hígado graso, antioxidante',
      tincture: '1:5 (70% alcohol)',
      doseTincture: '30-60 gotas × 3 veces/día',
      doseOther: 'Extracto estandarizado: 280-600mg silimarina/día',
      warnings: 'Alergia a Asteraceae (ambrosía)',
      legal: 'legal',
      bestTime: 'Con comidas. Tratamiento mínimo 6-8 semanas'
    },
    {
      id: 20,
      name: 'Jengibre',
      scientific: 'Zingiber officinale',
      category: 'plantas',
      icon: '🫚',
      uses: '🤢 Náuseas #1 (embarazo, quimio), dolor menstrual, artritis, digestivo, migraña',
      tincture: '1:5 (60% alcohol)',
      doseTincture: '1-3ml × 3 veces/día',
      doseOther: 'Fresco: 1-2cm rallado/taza. Polvo: 500-2,000mg/día',
      warnings: 'Anticoagulantes, cálculos biliares, cirugía próxima',
      legal: 'legal',
      bestTime: 'Con comidas. SEGURO en embarazo hasta 4g/día'
    },
    {
      id: 25,
      name: 'Ginkgo Biloba',
      scientific: 'Ginkgo biloba',
      category: 'adaptogenos',
      icon: '🍃',
      uses: 'Memoria, circulación cerebral, antioxidante, vértigo, tinnitus, demencia, concentración',
      tincture: '1:5 (50-70% alcohol)',
      doseTincture: '30-60 gotas × 2-3 veces/día',
      doseOther: 'Extracto estandarizado: 120-240mg/día (24% glucósidos, 6% terpenos)',
      warnings: 'Anticoagulantes, cirugía próxima (suspender 2 semanas), epilepsia, embarazo',
      legal: 'legal',
      bestTime: 'Mañana y tarde. Efectos: 2-3 semanas (circulación), 6-12 semanas (memoria)',
      critical: true
    },
    {
      id: 26,
      name: 'Ashwagandha',
      scientific: 'Withania somnifera',
      category: 'adaptogenos',
      icon: '🌿',
      uses: 'Adaptógeno, reduce estrés/cortisol (-30%), ansiedad, energía, libido, sueño, tiroides, fuerza muscular',
      tincture: '1:5 (60% alcohol)',
      doseTincture: '2-4ml × 2 veces/día',
      doseOther: 'Extracto: 300-600mg/día (withanólidos 5%). Polvo raíz: 3-6g/día',
      warnings: 'Embarazo, lactancia, autoinmunes, hipertiroidismo',
      legal: 'legal',
      bestTime: 'Mañana (energía) y noche (sueño). Con comida',
      critical: true
    },
    {
      id: 7,
      name: 'Cola de Caballo',
      scientific: 'Equisetum arvense',
      category: 'plantas',
      icon: '🌾',
      uses: 'Salud ósea, cabello/uñas (sílice), diurético, remineralización',
      tincture: '1:5 (25% alcohol)',
      doseTincture: '2-6ml × 3 veces/día',
      doseOther: 'Té: 2-3g/taza × 2-3/día. Cápsulas: 300-600mg × 3/día',
      warnings: 'Embarazo, diabetes, deficiencia de tiamina',
      legal: 'legal',
      bestTime: 'Con comidas. Ciclos de 6-8 semanas'
    },
    {
      id: 24,
      name: 'Sábila (Aloe Vera)',
      scientific: 'Aloe vera',
      category: 'plantas',
      icon: '🌵',
      uses: '(Gel) Quemaduras, heridas, digestivo. (Flor) Ornamental',
      tincture: '1:5 (40% alcohol)',
      doseTincture: '1-2ml × 2/día (flor)',
      doseOther: 'Gel fresco: aplicar directo. Jugo: 30-60ml × 2/día (sin aloína)',
      warnings: 'Embarazo, lactancia, <12 años, enfermedad renal',
      legal: 'legal',
      bestTime: 'Gel: aplicar según necesidad. Jugo: antes comidas'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas', icon: '🌿' },
    { id: 'hongos', name: 'Hongos Medicinales', icon: '🍄' },
    { id: 'plantas', name: 'Plantas Medicinales', icon: '🌱' },
    { id: 'adaptogenos', name: 'Adaptógenos', icon: '💪' }
  ];

  const filteredPlants = selectedCategory === 'all' 
    ? plants 
    : plants.filter(p => p.category === selectedCategory);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#4a7c59', marginBottom: '10px' }}>🌿 Guía de Plantas Medicinales</h2>
      <p style={{ marginBottom: '30px', color: '#666' }}>
        Base de datos de 26 especies con información detallada sobre preparación, dosis y usos medicinales.
      </p>

      {/* Category Filter */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '30px', 
        flexWrap: 'wrap' 
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setSelectedPlant(null);
            }}
            style={{
              padding: '10px 20px',
              background: selectedCategory === cat.id ? '#4a7c59' : '#f0f0f0',
              color: selectedCategory === cat.id ? 'white' : '#333',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.3s'
            }}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Download Links */}
      <div style={{
        background: '#e8f5e8',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        border: '1px solid #c8e6c9'
      }}>
        <h3 style={{ color: '#4a7c59', marginTop: 0 }}>📄 Archivos Descargables</h3>
        <p style={{ marginBottom: '15px', fontSize: '14px', color: '#666' }}>
          Accede a la información completa en diferentes formatos:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
          <a 
            href="/PLANTAS_MEDICINALES_PDF.html" 
            target="_blank"
            style={{
              background: 'white',
              padding: '12px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#4a7c59',
              border: '1px solid #c8e6c9',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '500'
            }}
          >
            📕 Guía Completa PDF
          </a>
          <a 
            href="/ETIQUETAS_TINTURAS.html" 
            target="_blank"
            style={{
              background: 'white',
              padding: '12px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#4a7c59',
              border: '1px solid #c8e6c9',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '500'
            }}
          >
            🏷️ Etiquetas Minimalistas
          </a>
          <a 
            href="/TABLA_PLANTAS_MEDICINALES.csv" 
            download
            style={{
              background: 'white',
              padding: '12px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#4a7c59',
              border: '1px solid #c8e6c9',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '500'
            }}
          >
            📊 Base de Datos CSV
          </a>
          <a 
            href="/GUIA_RAPIDA_VISUAL.txt" 
            target="_blank"
            style={{
              background: 'white',
              padding: '12px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#4a7c59',
              border: '1px solid #c8e6c9',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '500'
            }}
          >
            📝 Guía Rápida TXT
          </a>
        </div>
      </div>

      {/* Plant Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '20px' 
      }}>
        {filteredPlants.map(plant => (
          <div
            key={plant.id}
            onClick={() => setSelectedPlant(plant.id === selectedPlant ? null : plant.id)}
            style={{
              background: 'white',
              border: plant.critical ? '2px solid #ff9800' : '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: selectedPlant === plant.id ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            {/* Header */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              marginBottom: '12px',
              borderBottom: '2px solid #e8f5e8',
              paddingBottom: '10px'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '24px' }}>{plant.icon}</span>
                  <h3 style={{ 
                    margin: 0, 
                    color: '#3a5a3a',
                    fontSize: '18px'
                  }}>
                    {plant.name}
                  </h3>
                </div>
                <p style={{ 
                  margin: '5px 0 0 32px', 
                  fontStyle: 'italic', 
                  color: '#6b8e6b',
                  fontSize: '14px'
                }}>
                  {plant.scientific}
                </p>
              </div>
              <span style={{
                background: plant.legal === 'legal' ? '#c8e6c9' : '#ffcdd2',
                color: plant.legal === 'legal' ? '#2e7d32' : '#c62828',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 'bold'
              }}>
                {plant.legal === 'legal' ? '✅ Legal' : '⚠️ Regulado'}
              </span>
            </div>

            {/* Uses */}
            <div style={{ 
              background: '#f9fdf9', 
              padding: '12px', 
              borderRadius: '8px',
              marginBottom: '12px',
              borderLeft: '3px solid #6b8e6b'
            }}>
              <strong style={{ color: '#4a6a4a', fontSize: '12px' }}>USOS PRINCIPALES:</strong>
              <p style={{ margin: '5px 0 0 0', fontSize: '14px', lineHeight: '1.5' }}>
                {plant.uses}
              </p>
            </div>

            {/* Expanded Details */}
            {selectedPlant === plant.id && (
              <div style={{ 
                marginTop: '15px', 
                paddingTop: '15px', 
                borderTop: '1px solid #e8f5e8',
                animation: 'fadeIn 0.3s'
              }}>
                {/* Tincture */}
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#4a6a4a', fontSize: '13px' }}>🧪 Tintura:</strong>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>{plant.tincture}</p>
                  <p style={{ margin: '3px 0 0 0', fontSize: '14px', color: '#2e7d32' }}>
                    <strong>Dosis:</strong> {plant.doseTincture}
                  </p>
                </div>

                {/* Other Forms */}
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#4a6a4a', fontSize: '13px' }}>💊 Otras formas:</strong>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>{plant.doseOther}</p>
                </div>

                {/* Best Time */}
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#4a6a4a', fontSize: '13px' }}>⏰ Mejor momento:</strong>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>{plant.bestTime}</p>
                </div>

                {/* Warnings */}
                <div style={{
                  background: plant.critical ? '#fff3cd' : '#f5f5f5',
                  padding: '10px',
                  borderRadius: '6px',
                  borderLeft: plant.critical ? '3px solid #ff9800' : '3px solid #999'
                }}>
                  <strong style={{ 
                    color: plant.critical ? '#e65100' : '#666', 
                    fontSize: '13px' 
                  }}>
                    {plant.critical ? '⚠️ ADVERTENCIA CRÍTICA:' : '⚠️ Contraindicaciones:'}
                  </strong>
                  <p style={{ margin: '5px 0 0 0', fontSize: '13px', lineHeight: '1.4' }}>
                    {plant.warnings}
                  </p>
                </div>
              </div>
            )}

            {/* Click hint */}
            <div style={{ 
              textAlign: 'center', 
              marginTop: '12px', 
              color: '#999', 
              fontSize: '12px' 
            }}>
              {selectedPlant === plant.id ? '▲ Clic para ocultar detalles' : '▼ Clic para ver más detalles'}
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{
        marginTop: '40px',
        padding: '20px',
        background: '#fff3cd',
        border: '2px solid #ffa726',
        borderRadius: '10px'
      }}>
        <h4 style={{ color: '#e65100', marginTop: 0 }}>⚠️ DESCARGO DE RESPONSABILIDAD</h4>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
          Esta información es <strong>solo para fines educativos</strong>. No constituye consejo médico profesional. 
          Consulte siempre con un médico, herbólogo o profesional de la salud calificado antes de iniciar 
          cualquier tratamiento con plantas medicinales.
        </p>
      </div>

      {/* Info Box */}
      <div style={{
        marginTop: '20px',
        padding: '20px',
        background: '#e3f2fd',
        borderRadius: '10px',
        border: '1px solid #90caf9'
      }}>
        <h4 style={{ color: '#1565c0', marginTop: 0 }}>📚 Base de Datos Completa</h4>
        <p style={{ margin: '10px 0', fontSize: '14px' }}>
          Esta es una selección de <strong>11 de las 26 especies</strong> documentadas. 
          Para acceder a la información completa de todas las especies, descarga los archivos PDF, CSV o TXT usando los enlaces de arriba.
        </p>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
          <strong>Incluye también:</strong> Cannabis, Amanita muscaria, Flores medicinales (Jazmín, Magnolia, Granada), 
          Chuchupate, Chilcuague, Hierba del sapo, y más.
        </p>
      </div>
    </div>
  );
};

export default MedicinalPlantsGuide;
