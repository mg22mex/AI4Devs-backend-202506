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

      case 'walipini':
        // Invernadero subterráneo - excavación + estructura
        const walipiniDepth = 2; // Profundidad típica
        const excavationVol = areaNum * walipiniDepth;
        materials = {
          'Excavación de tierra': `${excavationVol.toFixed(2)} m³`,
          'Muros de contención (piedra o tierra)': `${(areaNum * 0.6).toFixed(2)} m³`,
          'Plástico invernadero (doble capa)': `${(areaNum * 1.3).toFixed(2)} m²`,
          'Estructura de madera para techo': `${(areaNum * 0.12).toFixed(2)} m³`,
          'Tubería de ventilación': `${(areaNum * 0.5).toFixed(0)} metros`,
          'Grava para drenaje': `${(areaNum * 0.15).toFixed(2)} m³`,
          'Barril de agua (masa térmica)': `${Math.ceil(areaNum / 10)} unidades`
        };
        cost = excavationVol * 8000 + areaNum * 25000;
        break;

      case 'cellar':
        // Bodega subterránea para almacenamiento
        const cellarDepth = 2.5; // Profundidad típica
        const cellarExcavation = areaNum * cellarDepth;
        materials = {
          'Excavación': `${cellarExcavation.toFixed(2)} m³`,
          'Muros de piedra o concreto': `${(areaNum * 0.8).toFixed(2)} m³`,
          'Impermeabilización': `${(areaNum * 1.5).toFixed(0)} m²`,
          'Techo abovedado (piedra/ladrillo)': `${(areaNum * 1.2).toFixed(2)} m²`,
          'Tubos de ventilación': '2-4 unidades',
          'Puerta aislada': '1 unidad',
          'Estantes de madera': `${(areaNum * 0.3).toFixed(0)} metros lineales`,
          'Grava para piso': `${(areaNum * 0.1).toFixed(2)} m³`
        };
        cost = cellarExcavation * 10000 + areaNum * 45000;
        break;

      case 'temazcal':
        // Baño de vapor tradicional - pequeña estructura
        const temazcalArea = areaNum < 10 ? areaNum : 10; // Máximo 10m² típico
        const domeHeight = 1.8; // Altura baja típica
        materials = {
          'Piedra volcánica para calentamiento': `${(temazcalArea * 0.3).toFixed(2)} m³`,
          'Adobe o tierra para domo': `${(temazcalArea * 0.5).toFixed(2)} m³`,
          'Estructura de madera (arcos)': `${(temazcalArea * 0.08).toFixed(2)} m³`,
          'Lona o plástico (barrera de vapor)': `${(temazcalArea * 1.5).toFixed(2)} m²`,
          'Puerta pequeña de madera': '1 unidad',
          'Chimenea/salida de humo': '1 unidad',
          'Bancas de madera interior': `${Math.ceil(temazcalArea / 2)} unidades`,
          'Piedras de río para decoración': `${(temazcalArea * 50).toFixed(0)} kg`
        };
        cost = temazcalArea * 85000; // Más costoso por especialización
        break;

      case 'bano-seco':
        // Baño compostero ecológico - sistema compacto
        const numUnits = Math.ceil(areaNum / 1.5) || 1; // Típicamente 1.5m² por unidad
        materials = {
          'Unidades a construir': `${numUnits}`,
          'Madera tratada para estructura': `${(numUnits * 0.4).toFixed(2)} m³`,
          'Tapa de inodoro con asiento': `${numUnits} unidades`,
          'Contenedor/cámara de compostaje (200L)': `${numUnits * 2} unidades`,
          'Tubo de ventilación PVC (10cm)': `${(numUnits * 3).toFixed(0)} metros`,
          'Malla mosquitera': `${(numUnits * 2).toFixed(0)} m²`,
          'Material absorbente (aserrín)': `${(numUnits * 80).toFixed(0)} kg/año`,
          'Bisagras y herrajes': `${numUnits * 4} unidades`,
          'Puerta de madera': `${numUnits} unidad(es)`,
          'Material de separación (orina)': `${numUnits} sistemas`
        };
        cost = numUnits * 320000; // Costo por unidad completa
        break;

      case 'horno':
        // Horno de barro/leña para cocción y panadería
        const hornoSize = areaNum < 2 ? areaNum : 2; // Típicamente 1-2 m²
        materials = {
          'Tipo': 'Horno de barro o rocket oven',
          'Ladrillos refractarios': `${Math.ceil(hornoSize * 200)} unidades`,
          'Adobe o mezcla refractaria': `${(hornoSize * 0.8).toFixed(2)} m³`,
          'Arena refractaria': `${(hornoSize * 0.3).toFixed(2)} m³`,
          'Arco de fierro o acero': `${Math.ceil(hornoSize * 2)} barras`,
          'Puerta de fierro fundido': '1 unidad',
          'Tubo de chimenea (15cm)': `${Math.ceil(hornoSize * 2.5)} metros`,
          'Aislante natural (perlita, vermiculita)': `${(hornoSize * 0.15).toFixed(2)} m³`,
          'Base de piedra o concreto': `${(hornoSize * 1.5).toFixed(2)} m²`
        };
        cost = hornoSize * 450000; // Costo por m² de horno
        break;

      case 'chimenea':
        // Chimenea o rocket mass heater
        const chimeneyHeight = heightNum || 2.5; // Altura típica
        materials = {
          'Tipo': 'Chimenea de masa térmica o tradicional',
          'Ladrillos refractarios': `${Math.ceil(chimeneyHeight * 150)} unidades`,
          'Ladrillos comunes (cuerpo)': `${Math.ceil(chimeneyHeight * 200)} unidades`,
          'Mortero refractario': `${(chimeneyHeight * 0.15).toFixed(2)} m³`,
          'Tubo de acero inoxidable (20cm)': `${chimeneyHeight.toFixed(0)} metros`,
          'Plancha de acero para cámara': '2-3 unidades',
          'Puerta de fierro con vidrio': '1 unidad',
          'Banco de masa térmica (opcional)': `${(areaNum * 0.4).toFixed(2)} m³ de adobe`,
          'Aislante cerámico': `${(chimeneyHeight * 0.2).toFixed(2)} m²`
        };
        cost = chimeneyHeight * 280000 + areaNum * 120000; // Altura + banco térmico
        break;

      case 'piso-climatizado':
        // Sistema de piso radiante con masa térmica
        materials = {
          'Base de grava': `${(areaNum * 0.15).toFixed(2)} m³`,
          'Aislante térmico (EPS o natural)': `${(areaNum * 1.1).toFixed(2)} m²`,
          'Tubería PEX o cobre (16-20mm)': `${(areaNum * 7).toFixed(0)} metros`,
          'Colectores y distribuidores': `${Math.ceil(areaNum / 30)} juegos`,
          'Adobe o concreto para masa térmica': `${(areaNum * 0.08).toFixed(2)} m³`,
          'Terminación de piso (baldosa, madera)': `${(areaNum * 1.05).toFixed(2)} m²`,
          'Bomba circuladora': '1 unidad',
          'Termostato y válvulas': '1 sistema',
          'Fuente de calor (estufa, solar)': '1 unidad'
        };
        cost = areaNum * 85000; // Costo por m² instalado
        break;

      case 'cosecha-agua':
        // Sistema de captación de agua de lluvia
        const roofArea = areaNum; // Área de techo en m²
        const rainfall = 800; // mm anuales (promedio Chile central)
        const captureVolume = (roofArea * rainfall / 1000 * 0.85).toFixed(0); // Litros anuales, 85% eficiencia
        materials = {
          'Área de captación (techo)': `${roofArea.toFixed(0)} m²`,
          'Volumen anual capturable': `${captureVolume} litros`,
          'Canaletas PVC o zinc': `${(roofArea * 0.8).toFixed(0)} metros`,
          'Bajadas de agua (tubos 100mm)': `${Math.ceil(roofArea / 40)} unidades`,
          'Tanque de almacenamiento (1000-5000L)': `${Math.ceil(parseInt(captureVolume) / 30000)} tanques`,
          'Filtro de hojas y sedimentos': `${Math.ceil(roofArea / 40)} unidades`,
          'Tubería de distribución': `${(roofArea * 0.5).toFixed(0)} metros`,
          'Sistema de primera lluvia (desvío)': '1 unidad',
          'Bomba (si es necesario)': '1 unidad (opcional)'
        };
        cost = roofArea * 25000 + Math.ceil(parseInt(captureVolume) / 1000) * 150000;
        break;

      case 'aguas-grises':
        // Sistema de tratamiento de aguas grises
        const peopleServed = Math.ceil(areaNum / 20) || 4; // Estimar personas según área
        const greyWaterDaily = peopleServed * 90; // Litros/día/persona
        materials = {
          'Personas a servir': `${peopleServed}`,
          'Volumen diario': `${greyWaterDaily} litros`,
          'Trampa de grasas': '1 unidad',
          'Filtro de sólidos': '1 unidad',
          'Tubería de conducción (50mm)': `${(areaNum * 0.4).toFixed(0)} metros`,
          'Zona de plantas filtradoras': `${(peopleServed * 2).toFixed(0)} m²`,
          'Grava para filtración': `${(peopleServed * 0.5).toFixed(2)} m³`,
          'Plantas acuáticas (juncos, papiros)': `${peopleServed * 10} unidades`,
          'Tanque de distribución': '1 unidad (200-500L)',
          'Sistema de riego por goteo': `${(peopleServed * 15).toFixed(0)} metros`
        };
        cost = peopleServed * 180000;
        break;

      case 'estanque':
        // Estanque o lago natural
        const pondArea = areaNum < 50 ? areaNum : 50; // Máximo típico 50m²
        const pondDepth = 1.5; // Profundidad promedio
        const pondVolume = pondArea * pondDepth * 0.7; // m³ (factor de forma)
        materials = {
          'Área de espejo de agua': `${pondArea.toFixed(0)} m²`,
          'Volumen de agua': `${pondVolume.toFixed(0)} m³ (${(pondVolume * 1000).toFixed(0)} litros)`,
          'Excavación': `${(pondArea * pondDepth * 1.2).toFixed(2)} m³`,
          'Geomembrana EPDM o arcilla': `${(pondArea * 1.3).toFixed(2)} m²`,
          'Grava perimetral': `${(pondArea * 0.15).toFixed(2)} m³`,
          'Plantas acuáticas oxigenadoras': `${Math.ceil(pondArea / 3)} unidades`,
          'Plantas flotantes': `${Math.ceil(pondArea / 5)} unidades`,
          'Peces (opcional, control larvas)': `${Math.ceil(pondVolume / 2)} unidades`,
          'Bomba recirculación (opcional)': '1 unidad',
          'Sistema de rebose': '1 unidad'
        };
        cost = pondArea * 45000;
        break;

      case 'permacultura':
        // Diseño de permacultura integral
        const landArea = areaNum; // Área total del terreno
        materials = {
          'Área de diseño': `${landArea.toFixed(0)} m²`,
          'Zonas de permacultura': '5 zonas planificadas',
          'Elementos sugeridos': 'Según diseño integral',
          'Análisis de sitio': '1 estudio completo',
          'Diseño de agua (swales, zanjas)': `${(landArea * 0.1).toFixed(0)} metros lineales`,
          'Árboles frutales': `${Math.ceil(landArea / 100)} unidades`,
          'Cercos vivos': `${(landArea * 0.3).toFixed(0)} metros`,
          'Compost y lombricultivo': '2 sistemas',
          'Huerto intensivo': `${Math.ceil(landArea / 50)} m²`,
          'Zona de bosque alimentario': `${(landArea * 0.2).toFixed(0)} m²`
        };
        cost = landArea * 15000; // Costo de diseño e implementación básica
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
      'circular': 'Diseño Circular/Domo',
      'walipini': 'Walipini (Invernadero Subterráneo)',
      'cellar': 'Bodega/Cellar Subterráneo',
      'temazcal': 'Temazcal (Baño de Vapor)',
      'bano-seco': 'Baño Seco (Compostero)',
      'horno': 'Horno de Barro/Leña',
      'chimenea': 'Chimenea/Rocket Mass Heater',
      'piso-climatizado': 'Piso Climatizado (Radiante)',
      'cosecha-agua': 'Cosecha de Agua de Lluvia',
      'aguas-grises': 'Tratamiento de Aguas Grises',
      'estanque': 'Estanque/Lago Natural',
      'permacultura': 'Diseño de Permacultura'
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
            <option value="walipini">Walipini (Invernadero Subterráneo)</option>
            <option value="cellar">Bodega/Cellar Subterráneo</option>
            <option value="temazcal">Temazcal (Baño de Vapor)</option>
            <option value="bano-seco">Baño Seco (Compostero)</option>
          </optgroup>
          <optgroup label="Sistemas de Calefacción y Cocción">
            <option value="horno">Horno de Barro/Leña</option>
            <option value="chimenea">Chimenea/Rocket Mass Heater</option>
            <option value="piso-climatizado">Piso Climatizado (Radiante)</option>
          </optgroup>
          <optgroup label="Gestión de Agua y Permacultura">
            <option value="cosecha-agua">Cosecha de Agua de Lluvia</option>
            <option value="aguas-grises">Tratamiento de Aguas Grises</option>
            <option value="estanque">Estanque/Lago Natural</option>
            <option value="permacultura">Diseño de Permacultura</option>
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
