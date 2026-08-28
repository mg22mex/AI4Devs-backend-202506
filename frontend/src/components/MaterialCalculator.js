import React, { useState } from 'react';

function MaterialCalculator() {
  const [technique, setTechnique] = useState('adobe');
  const [area, setArea] = useState('');
  const [wallHeight, setWallHeight] = useState('2.5');
  const [wallThickness, setWallThickness] = useState('0.4');
  const [result, setResult] = useState(null);

  const calculateMaterials = () => {
    const areaNum = parseFloat(area);
    const heightNum = parseFloat(wallHeight);
    const thicknessNum = parseFloat(wallThickness);

    if (!areaNum || areaNum <= 0) {
      alert('Por favor ingresa un área válida');
      return;
    }

    let materials = {};
    let cost = 0;

    switch(technique) {
      case 'adobe':
        const adobeVolume = areaNum * heightNum * thicknessNum;
        materials = {
          'Tierra arcillosa': `${(adobeVolume * 1.8).toFixed(2)} m³`,
          'Arena': `${(adobeVolume * 0.6).toFixed(2)} m³`,
          'Paja o fibra': `${(adobeVolume * 0.2 * 1000).toFixed(0)} kg`,
          'Adobes necesarios (30x40x10cm)': `${Math.ceil(areaNum * heightNum / 0.12)}`,
          'Agua': `${(adobeVolume * 200).toFixed(0)} litros`
        };
        cost = adobeVolume * 25000; // Precio estimado por m³
        break;

      case 'cob':
        const cobVolume = areaNum * heightNum * thicknessNum;
        materials = {
          'Tierra arcillosa': `${(cobVolume * 2).toFixed(2)} m³`,
          'Arena': `${(cobVolume * 0.8).toFixed(2)} m³`,
          'Paja larga': `${(cobVolume * 0.15 * 1000).toFixed(0)} kg`,
          'Agua': `${(cobVolume * 250).toFixed(0)} litros`
        };
        cost = cobVolume * 20000;
        break;

      case 'superadobe':
        const sacoVolume = areaNum * heightNum * thicknessNum;
        const numSacos = Math.ceil(sacoVolume / 0.08); // Aprox 80 litros por saco
        materials = {
          'Tierra': `${(sacoVolume * 1.5).toFixed(2)} m³`,
          'Sacos de polipropileno': `${numSacos}`,
          'Alambre de púas': `${(areaNum * heightNum * 3.14 / 0.3).toFixed(0)} metros`,
          'Cal o cemento': `${(sacoVolume * 0.05 * 1000).toFixed(0)} kg`
        };
        cost = numSacos * 500 + sacoVolume * 15000;
        break;

      case 'bahareque':
        materials = {
          'Bambú o caña (estructura)': `${(areaNum / 2).toFixed(0)} unidades`,
          'Bejucos o alambre': `${(areaNum * 10).toFixed(0)} metros`,
          'Tierra arcillosa': `${(areaNum * 0.15).toFixed(2)} m³`,
          'Paja o fibra': `${(areaNum * 5).toFixed(0)} kg`,
          'Cal para acabado': `${(areaNum * 2).toFixed(0)} kg`
        };
        cost = areaNum * 30000;
        break;

      case 'paja':
        const numPacas = Math.ceil(areaNum * heightNum / 0.5); // Aprox 2 pacas por m²
        materials = {
          'Pacas de paja': `${numPacas}`,
          'Estructura de madera': `${(areaNum * 0.3).toFixed(2)} m³`,
          'Revoque de cal o arcilla': `${(areaNum * 0.03).toFixed(2)} m³`,
          'Malla gallinera': `${(areaNum * 1.2).toFixed(0)} m²`,
          'Impermeabilizante natural': `${(areaNum * 0.5).toFixed(0)} litros`
        };
        cost = numPacas * 8000 + areaNum * 40000;
        break;

      case 'bambu':
        const cañas = Math.ceil(areaNum / 3); // Aprox 3 cañas por m²
        materials = {
          'Cañas de bambú (6m)': `${cañas}`,
          'Amarres (cuerda o alambre)': `${(cañas * 10).toFixed(0)} metros`,
          'Impermeabilizante': `${(areaNum * 0.3).toFixed(0)} litros`,
          'Recubrimiento natural': `${(areaNum * 0.02).toFixed(2)} m³`,
          'Base de piedra': `${(areaNum * 0.1).toFixed(2)} m³`
        };
        cost = cañas * 15000 + areaNum * 25000;
        break;

      case 'piedra':
        const piedraVolume = areaNum * heightNum * thicknessNum;
        const toneladasPiedra = piedraVolume * 2.5; // Densidad aprox de piedra
        materials = {
          'Piedra de río o cantera': `${toneladasPiedra.toFixed(2)} toneladas (${piedraVolume.toFixed(2)} m³)`,
          'Mortero de cal': `${(piedraVolume * 0.3).toFixed(2)} m³`,
          'Arena': `${(piedraVolume * 0.4).toFixed(2)} m³`,
          'Cemento natural o cal': `${(piedraVolume * 0.15 * 1000).toFixed(0)} kg`,
          'Herramientas (cinceles, mazos)': 'Kit básico'
        };
        cost = toneladasPiedra * 35000 + piedraVolume * 45000;
        break;

      case 'botellas':
        const botellasVolume = areaNum * heightNum * thicknessNum;
        const numBotellas = Math.ceil(botellasVolume / 0.001); // Aprox 1000 botellas por m³
        materials = {
          'Botellas de vidrio (750ml-1L)': `${numBotellas}`,
          'Mortero de tierra-cemento': `${(botellasVolume * 0.6).toFixed(2)} m³`,
          'Arena': `${(botellasVolume * 0.3).toFixed(2)} m³`,
          'Cemento o cal': `${(botellasVolume * 0.1 * 1000).toFixed(0)} kg`,
          'Malla de refuerzo': `${(areaNum * 1.5).toFixed(0)} m²`
        };
        cost = botellasVolume * 35000; // Botellas recicladas (costo de recolección y mortero)
        break;

      case 'tapia':
        const tapiaVolume = areaNum * heightNum * thicknessNum;
        materials = {
          'Tierra seleccionada': `${(tapiaVolume * 1.2).toFixed(2)} m³`,
          'Grava o piedra pequeña': `${(tapiaVolume * 0.15).toFixed(2)} m³`,
          'Cal hidráulica': `${(tapiaVolume * 0.08 * 1000).toFixed(0)} kg`,
          'Encofrado reutilizable': `${(areaNum / 2).toFixed(0)} m² de tableros`,
          'Estabilizante (opcional)': `${(tapiaVolume * 0.05 * 1000).toFixed(0)} kg`
        };
        cost = tapiaVolume * 28000;
        break;

      case 'tierra-paja':
        const tierraPajaVolume = areaNum * heightNum * thicknessNum;
        materials = {
          'Tierra arcillosa (barbotina)': `${(tierraPajaVolume * 0.4).toFixed(2)} m³`,
          'Paja larga': `${(tierraPajaVolume * 0.3 * 1000).toFixed(0)} kg`,
          'Arena': `${(tierraPajaVolume * 0.2).toFixed(2)} m³`,
          'Estructura de madera': `${(areaNum * 0.2).toFixed(2)} m³`,
          'Agua': `${(tierraPajaVolume * 180).toFixed(0)} litros`,
          'Revoque de cal': `${(areaNum * 0.02).toFixed(2)} m³`
        };
        cost = tierraPajaVolume * 22000;
        break;

      case 'madera':
        const maderaVolume = areaNum * 0.15; // Estimación para estructura + cerramiento
        materials = {
          'Madera estructural (pino/eucalipto)': `${maderaVolume.toFixed(2)} m³`,
          'Tablones para revestimiento': `${(areaNum * 1.2).toFixed(0)} m²`,
          'Aislante natural (lana, corcho)': `${(areaNum * 0.15).toFixed(2)} m³`,
          'Tratamiento natural (aceite de linaza)': `${(areaNum * 0.3).toFixed(0)} litros`,
          'Clavos y tornillos': `${(areaNum * 0.5).toFixed(0)} kg`,
          'Impermeabilizante ecológico': `${(areaNum * 0.4).toFixed(0)} litros'
        };
        cost = maderaVolume * 450000 + areaNum * 55000;
        break;

      case 'llantas':
        const llantasVolume = areaNum * heightNum * thicknessNum;
        const numLlantas = Math.ceil(llantasVolume / 0.3); // Aprox 3-4 llantas por m³
        materials = {
          'Llantas/Neumáticos usados': `${numLlantas}`,
          'Tierra compactada para relleno': `${(llantasVolume * 1.8).toFixed(2)} m³`,
          'Botellas para muros internos (opcional)': `${Math.ceil(areaNum * 50)}`,
          'Mortero para revoque': `${(areaNum * 0.04).toFixed(2)} m³`,
          'Latas de aluminio (relleno)': `${Math.ceil(numLlantas * 5)}`,
          'Herramientas (mazo de goma)': '1 unidad'
        };
        cost = numLlantas * 500 + llantasVolume * 18000; // Llantas casi gratis
        break;

      case 'mamposteria':
        const mamposteriaVolume = areaNum * heightNum * thicknessNum;
        materials = {
          'Bloques/Ladrillos de barro cocido': `${Math.ceil(mamposteriaVolume / 0.003)} unidades`,
          'Mortero de cal-arena': `${(mamposteriaVolume * 0.25).toFixed(2)} m³`,
          'Cal hidráulica': `${(mamposteriaVolume * 0.12 * 1000).toFixed(0)} kg`,
          'Arena tamizada': `${(mamposteriaVolume * 0.35).toFixed(2)} m³`,
          'Refuerzo (varillas o malla)': `${(areaNum * 1.1).toFixed(0)} m²`,
          'Impermeabilizante base': `${(areaNum * 0.3).toFixed(0)} litros`
        };
        cost = mamposteriaVolume * 120000;
        break;

      case 'circular':
        // Para diseños circulares/domos - más eficiente en materiales
        const circularBaseArea = areaNum;
        const radius = Math.sqrt(circularBaseArea / Math.PI);
        const surfaceArea = 2 * Math.PI * radius * heightNum; // Área de superficie curva
        const domeVolume = (2/3) * Math.PI * Math.pow(radius, 2) * heightNum;
        materials = {
          'Técnica base seleccionada': '(Combinar con otra técnica)',
          'Área de superficie': `${surfaceArea.toFixed(2)} m²`,
          'Volumen de material': `${domeVolume.toFixed(2)} m³`,
          'Reducción vs construcción cuadrada': `${((1 - surfaceArea/(4*Math.sqrt(circularBaseArea)*heightNum)) * 100).toFixed(0)}%`,
          'Ventaja térmica': 'Mayor eficiencia energética',
          'Nota': 'Aplicar materiales según técnica elegida'
        };
        cost = domeVolume * 30000; // Estimado medio
        break;

      default:
        break;
    }

    setResult({
      materials,
      cost: cost.toFixed(0),
      area: areaNum,
      technique: getTechniqueName(technique)
    });
  };

  const getTechniqueName = (tech) => {
    const names = {
      'adobe': 'Adobe',
      'cob': 'Cob',
      'superadobe': 'Superadobe',
      'bahareque': 'Bahareque',
      'paja': 'Pacas de Paja',
      'bambu': 'Bambú',
      'piedra': 'Piedra',
      'botellas': 'Botellas de Vidrio',
      'tapia': 'Tapia/Tapial',
      'tierra-paja': 'Tierra-Paja',
      'madera': 'Madera',
      'llantas': 'Llantas/Neumáticos (Earthship)',
      'mamposteria': 'Mampostería',
      'circular': 'Diseño Circular/Domo'
    };
    return names[tech] || tech;
  };

  return (
    <div>
      <h2 className="section-title">Calculadora de Materiales</h2>

      <div className="form-group">
        <label>Técnica Constructiva:</label>
        <select value={technique} onChange={(e) => setTechnique(e.target.value)}>
          <optgroup label="Técnicas de Tierra">
            <option value="adobe">Adobe</option>
            <option value="cob">Cob</option>
            <option value="superadobe">Superadobe</option>
            <option value="tapia">Tapia/Tapial (Tierra Compactada)</option>
            <option value="tierra-paja">Tierra-Paja (Light Earth)</option>
          </optgroup>
          <optgroup label="Técnicas con Fibras Vegetales">
            <option value="bahareque">Bahareque (Quincha)</option>
            <option value="paja">Pacas de Paja (Fardos)</option>
            <option value="bambu">Bambú</option>
          </optgroup>
          <optgroup label="Materiales Pétreos y Tradicionales">
            <option value="piedra">Piedra</option>
            <option value="mamposteria">Mampostería</option>
            <option value="madera">Madera</option>
          </optgroup>
          <optgroup label="Reciclaje y Materiales Reutilizados">
            <option value="botellas">Botellas de Vidrio Recicladas</option>
            <option value="llantas">Llantas/Neumáticos (Earthship)</option>
          </optgroup>
          <optgroup label="Diseños Especiales">
            <option value="circular">Diseño Circular/Domo</option>
          </optgroup>
        </select>
      </div>

      <div className="two-column-grid">
        <div className="form-group">
          <label>Área de construcción (m²):</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Ej: 80"
            step="0.01"
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Altura de muros (m):</label>
          <input
            type="number"
            value={wallHeight}
            onChange={(e) => setWallHeight(e.target.value)}
            placeholder="Ej: 2.5"
            step="0.1"
            min="0"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Espesor de muro (m):</label>
        <input
          type="number"
          value={wallThickness}
          onChange={(e) => setWallThickness(e.target.value)}
          placeholder="Ej: 0.4"
          step="0.05"
          min="0"
        />
      </div>

      <button className="button-primary" onClick={calculateMaterials}>
        Calcular Materiales
      </button>

      {result && (
        <div className="result-box">
          <h4>Resultados para {result.technique}</h4>
          <p><strong>Área de construcción:</strong> {result.area} m²</p>
          
          <h4 style={{marginTop: '20px'}}>Materiales Necesarios:</h4>
          {Object.entries(result.materials).map(([material, cantidad]) => (
            <p key={material}><strong>{material}:</strong> {cantidad}</p>
          ))}
          
          <p style={{fontSize: '1.2em', marginTop: '20px', color: '#4a7c59'}}>
            <strong>Costo estimado:</strong> ${parseInt(result.cost).toLocaleString('es-CL')} CLP
          </p>
          
          <p style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '15px'}}>
            * Los costos son aproximados y pueden variar según la región y disponibilidad de materiales.
          </p>
        </div>
      )}

      <div className="info-section" style={{marginTop: '40px'}}>
        <h4>Notas Importantes:</h4>
        <ul>
          <li>Estos cálculos son estimaciones basadas en promedios. Ajusta según tus necesidades específicas.</li>
          <li>Considera agregar un 10-15% extra de materiales para compensar desperdicios.</li>
          <li>Los precios son referenciales y varían según la ubicación geográfica.</li>
          <li>Consulta con un experto local antes de iniciar la construcción.</li>
          <li>Verifica la calidad de la tierra antes de usarla (prueba de sedimentación).</li>
        </ul>
      </div>
    </div>
  );
}

export default MaterialCalculator;
