# INSTRUCCIONES DETALLADAS PARA CREAR EL CUESTIONARIO EN GOOGLE FORMS

## MÉTODO RÁPIDO: Copiar y Pegar

---

## PASO 1: CREAR EL FORMULARIO

1. Ve a: **https://forms.google.com**
2. Haz clic en el botón **"+"** (Nuevo formulario en blanco)
3. En el título, escribe: **"Cuestionario de Diagnóstico de Cefaleas"**
4. En la descripción, escribe:

```
Este cuestionario tiene como objetivo recopilar información detallada sobre sus dolores de cabeza para facilitar un diagnóstico preciso. El cuestionario integra criterios de medicina occidental (neurología) y medicina tradicional china.

Por favor, responda todas las preguntas con la mayor precisión posible. La información proporcionada será tratada de forma confidencial y solo será utilizada con fines diagnósticos y de tratamiento.

Tiempo estimado: 15-20 minutos
```

---

## PASO 2: CONFIGURACIÓN INICIAL

1. Haz clic en el ícono de **Configuración** (engranaje) en la parte superior derecha
2. Configura:
   - ✅ **Recopilar direcciones de correo electrónico**
   - ✅ **Permitir editar después de enviar**
   - ⬜ **Limitar a 1 respuesta** (opcional, según preferencia)
   - ⬜ **Los encuestados pueden ver gráficos de resumen** (desactivar por privacidad)

---

## PASO 3: CREAR LAS SECCIONES Y PREGUNTAS

### 📋 SECCIÓN 1: DATOS PERSONALES

**Agregar sección:**
1. Clic en el ícono de **"Agregar sección"** (icono de dos líneas horizontales)
2. Título de sección: **"SECCIÓN 1: DATOS PERSONALES"**

**Preguntas a agregar:**

**Pregunta 1:**
- Tipo: **Respuesta corta**
- Pregunta: "Nombre completo"
- ✅ Obligatoria

**Pregunta 2:**
- Tipo: **Fecha**
- Pregunta: "Fecha de nacimiento"
- ✅ Obligatoria

**Pregunta 3:**
- Tipo: **Respuesta corta**
- Pregunta: "Edad"
- Validación: Número → Entre 1 y 120
- ✅ Obligatoria

**Pregunta 4:**
- Tipo: **Opción múltiple**
- Pregunta: "Sexo"
- Opciones:
  - Masculino
  - Femenino
  - Otro
  - Prefiero no responder
- ✅ Obligatoria

**Pregunta 5:**
- Tipo: **Respuesta corta**
- Pregunta: "Peso (kg)"
- Validación: Número → Mayor que 0

**Pregunta 6:**
- Tipo: **Respuesta corta**
- Pregunta: "Altura (cm)"
- Validación: Número → Entre 50 y 250

**Pregunta 7:**
- Tipo: **Respuesta corta**
- Pregunta: "Ocupación"

**Pregunta 8:**
- Tipo: **Respuesta corta**
- Pregunta: "Teléfono de contacto"
- ✅ Obligatoria

**Pregunta 9:**
- Tipo: **Respuesta corta**
- Pregunta: "Correo electrónico"
- (Este campo ya se recopila automáticamente si activaste la opción en Configuración)

**Pregunta 10:**
- Tipo: **Párrafo**
- Pregunta: "Dirección"

---

### 🏥 SECCIÓN 2: ANTECEDENTES MÉDICOS PERSONALES

**Crear nueva sección:** "SECCIÓN 2: ANTECEDENTES MÉDICOS PERSONALES"

**Pregunta 11:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Tiene alguna enfermedad crónica diagnosticada?"
- Opciones:
  - No
  - Sí (especificar en la siguiente pregunta)
- Lógica: Si selecciona "Sí" → ir a pregunta de texto para especificar

**Pregunta 11b (condicional):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique qué enfermedades crónicas tiene"

**Pregunta 12:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Toma medicamentos de forma regular?"
- Opciones:
  - No
  - Sí (especificar en la siguiente pregunta)

**Pregunta 12b (condicional):**
- Tipo: **Párrafo**
- Pregunta: "Por favor, especifique qué medicamentos toma y dosis"

**Pregunta 13:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Tiene alergias conocidas?"
- Opciones:
  - No
  - Sí (especificar en la siguiente pregunta)

**Pregunta 13b (condicional):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique sus alergias"

**Pregunta 14:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Ha tenido traumatismos craneales previos?"
- Opciones:
  - No
  - Sí (especificar en la siguiente pregunta)

**Pregunta 14b (condicional):**
- Tipo: **Párrafo**
- Pregunta: "Por favor, especifique cuándo y cómo ocurrió el traumatismo"

**Pregunta 15:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Ha tenido cirugías previas?"
- Opciones:
  - No
  - Sí (especificar en la siguiente pregunta)

**Pregunta 15b (condicional):**
- Tipo: **Párrafo**
- Pregunta: "Por favor, especifique qué cirugías y cuándo"

**Pregunta 16:**
- Tipo: **Casillas de verificación** (selección múltiple)
- Pregunta: "¿Padece de alguna de estas condiciones?"
- Opciones:
  - Hipertensión arterial
  - Diabetes
  - Problemas cardíacos
  - Problemas de tiroides
  - Problemas renales
  - Problemas hepáticos
  - Problemas visuales
  - Ninguno de los anteriores

**Pregunta 17:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Ha sido diagnosticado previamente con algún tipo de cefalea?"
- Opciones:
  - No
  - Sí (especificar en la siguiente pregunta)

**Pregunta 17b (condicional):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique el tipo de cefalea diagnosticada"

---

### 👨‍👩‍👧‍👦 SECCIÓN 3: ANTECEDENTES FAMILIARES

**Crear nueva sección:** "SECCIÓN 3: ANTECEDENTES FAMILIARES"

**Pregunta 18:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Alguien en su familia sufre o ha sufrido de dolores de cabeza frecuentes?"
- Opciones:
  - No
  - Sí (especificar en la siguiente pregunta)
- ✅ Obligatoria

**Pregunta 18b (condicional):**
- Tipo: **Párrafo**
- Pregunta: "Por favor, especifique quién y qué tipo de cefalea"

**Pregunta 19:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Hay antecedentes familiares de:"
- Opciones:
  - Migraña
  - Cefalea tensional
  - Cefalea en racimos
  - Hipertensión arterial
  - Accidente cerebrovascular
  - Epilepsia
  - Ninguno

---

### 🎯 SECCIÓN 4: CARACTERÍSTICAS DEL DOLOR DE CABEZA

**Crear nueva sección:** "SECCIÓN 4: CARACTERÍSTICAS DEL DOLOR DE CABEZA"
**Descripción de sección:** "Frecuencia y Duración"

**Pregunta 20:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Con qué frecuencia experimenta dolores de cabeza?"
- Opciones:
  - Diariamente
  - Varias veces por semana (3-6 veces)
  - 1-2 veces por semana
  - Varias veces al mes (3-4 veces)
  - 1-2 veces al mes
  - Menos de una vez al mes
  - Es la primera vez
- ✅ Obligatoria

**Pregunta 21:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Cuánto tiempo hace que comenzó a tener estos dolores de cabeza?"
- Opciones:
  - Menos de 1 mes
  - 1-3 meses
  - 3-6 meses
  - 6 meses - 1 año
  - 1-3 años
  - Más de 3 años
- ✅ Obligatoria

**Pregunta 22:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Cuánto tiempo suele durar cada episodio de dolor?"
- Opciones:
  - Menos de 30 minutos
  - 30 minutos - 1 hora
  - 1-4 horas
  - 4-24 horas
  - 1-3 días
  - Más de 3 días
  - El dolor es constante
- ✅ Obligatoria

**Pregunta 23:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿El dolor aparece en momentos específicos del día?"
- Opciones:
  - Mañana (al despertar)
  - Media mañana
  - Mediodía
  - Tarde
  - Noche
  - Madrugada
  - Sin patrón específico

**Agregar subsección dentro de Sección 4:**
Texto descriptivo: **"Localización del Dolor"**

**Pregunta 24:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Dónde se localiza el dolor? (puede seleccionar varias opciones)"
- Opciones:
  - Frente
  - Sienes (ambos lados)
  - Sien derecha
  - Sien izquierda
  - Parte superior de la cabeza (vértex)
  - Parte posterior de la cabeza (occipital)
  - Nuca
  - Alrededor de los ojos
  - Ojo derecho
  - Ojo izquierdo
  - Detrás de los ojos
  - Mandíbula
  - Toda la cabeza
  - Otro
- ✅ Obligatoria

**Pregunta 24b (si selecciona "Otro"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique la localización"

**Pregunta 25:**
- Tipo: **Opción múltiple**
- Pregunta: "¿El dolor se mueve de un lugar a otro?"
- Opciones:
  - No, permanece en el mismo lugar
  - Sí (describir en la siguiente pregunta)

**Pregunta 25b (condicional):**
- Tipo: **Párrafo**
- Pregunta: "Por favor, describa el recorrido del dolor"

**Pregunta 26:**
- Tipo: **Opción múltiple**
- Pregunta: "¿El dolor es:"
- Opciones:
  - Unilateral (un solo lado)
  - Bilateral (ambos lados)
  - Cambia de lado
- ✅ Obligatoria

**Agregar subsección:** **"Calidad e Intensidad del Dolor"**

**Pregunta 27:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Cómo describiría el tipo de dolor? (puede seleccionar varias)"
- Opciones:
  - Pulsátil (como latidos)
  - Opresivo (como una banda apretada)
  - Punzante (como pinchazos)
  - Lancinante (como descargas eléctricas)
  - Sordo (constante y profundo)
  - Pesadez
  - Ardiente o quemante
  - Presión o peso
  - Explosivo
  - Otro
- ✅ Obligatoria

**Pregunta 27b (si selecciona "Otro"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, describa el tipo de dolor"

**Pregunta 28:**
- Tipo: **Escala lineal**
- Pregunta: "Intensidad del dolor"
- Escala: 1 a 10
- Etiqueta 1: "Muy leve"
- Etiqueta 10: "Insoportable"
- ✅ Obligatoria

**Pregunta 29:**
- Tipo: **Opción múltiple**
- Pregunta: "¿El dolor interfiere con sus actividades diarias?"
- Opciones:
  - No, puedo continuar con normalidad
  - Sí, pero puedo seguir trabajando/estudiando
  - Sí, debo detener mis actividades
  - Sí, debo recostarme o ir a la cama
  - Sí, requiero ir a urgencias
- ✅ Obligatoria

**Agregar subsección:** **"Factores Desencadenantes"**

**Pregunta 30:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Qué situaciones o factores parecen desencadenar sus dolores de cabeza? (puede seleccionar varias)"
- Opciones:
  - Estrés o ansiedad
  - Falta de sueño
  - Exceso de sueño
  - Ayuno o saltarse comidas
  - Ciertos alimentos (especificar en siguiente pregunta)
  - Alcohol (especificar en siguiente pregunta)
  - Cafeína (consumo o abstinencia)
  - Cambios climáticos
  - Luces brillantes o destellos
  - Ruidos fuertes
  - Olores intensos
  - Ejercicio físico intenso
  - Actividad sexual
  - Cambios hormonales (menstruación, ovulación)
  - Viajes o cambios de altitud
  - Trabajo prolongado frente a pantallas
  - Posturas inadecuadas
  - No identifico factores desencadenantes
  - Otro

**Pregunta 30b (si selecciona alimentos o alcohol):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique qué alimentos o tipo de alcohol"

**Agregar subsección:** **"Factores que Mejoran o Empeoran"**

**Pregunta 31:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Qué empeora su dolor de cabeza?"
- Opciones:
  - Movimiento o actividad física
  - Agacharse o inclinarse
  - Toser o estornudar
  - Luz brillante (fotofobia)
  - Ruido (fonofobia)
  - Olores fuertes
  - Estrés
  - Nada en particular

**Pregunta 32:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Qué alivia o mejora su dolor?"
- Opciones:
  - Reposo en cama
  - Oscuridad
  - Silencio
  - Dormir
  - Aplicar frío local
  - Aplicar calor local
  - Masajes
  - Presión en ciertas zonas
  - Medicamentos (especificar en siguiente pregunta)
  - Comer
  - Tomar agua
  - Café o té
  - Vómito
  - Nada lo alivia

**Pregunta 32b (si selecciona medicamentos):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique qué medicamentos"

---

### 🧠 SECCIÓN 5: SÍNTOMAS ASOCIADOS

**Crear nueva sección:** "SECCIÓN 5: SÍNTOMAS ASOCIADOS"
**Descripción:** "Síntomas Neurológicos"

**Pregunta 33:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Presenta alguno de estos síntomas antes, durante o después del dolor de cabeza?"
- Opciones:
  - Alteraciones visuales (aura): puntos brillantes, líneas zigzag, visión borrosa
  - Pérdida temporal de visión
  - Visión doble
  - Hormigueo o adormecimiento en cara, manos o brazos
  - Dificultad para hablar
  - Debilidad en extremidades
  - Mareos o vértigo
  - Pérdida de equilibrio
  - Confusión mental
  - Dificultad para concentrarse
  - Problemas de memoria
  - Sensibilidad aumentada al tacto
  - Ninguno

**Pregunta 34:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Experimenta náuseas o vómitos?"
- Opciones:
  - Nunca
  - Ocasionalmente
  - Frecuentemente
  - Siempre
- ✅ Obligatoria

**Pregunta 35:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Presenta lagrimeo o enrojecimiento ocular?"
- Opciones:
  - No
  - Sí, en ambos ojos
  - Sí, solo en el ojo del lado del dolor

**Pregunta 36:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Tiene congestión nasal o rinorrea (goteo nasal)?"
- Opciones:
  - No
  - Sí, bilateral
  - Sí, del lado del dolor

**Pregunta 37:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Presenta caída del párpado o hinchazón facial?"
- Opciones:
  - No
  - Sí (describir en siguiente pregunta)

**Pregunta 37b (condicional):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, describa los síntomas"

**Agregar subsección:** **"Síntomas Digestivos (Medicina Tradicional China)"**

**Pregunta 38:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Cómo es su apetito?"
- Opciones:
  - Normal
  - Aumentado
  - Disminuido
  - Variable

**Pregunta 39:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Experimenta sensaciones en el estómago relacionadas con el dolor de cabeza?"
- Opciones:
  - No
  - Pesadez estomacal
  - Náuseas
  - Sensación de plenitud
  - Distensión abdominal
  - Acidez o reflujo
  - Dolor epigástrico
  - Otro

**Pregunta 39b (si selecciona "Otro"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique"

**Pregunta 40:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Cómo son sus deposiciones?"
- Opciones:
  - Normales y regulares
  - Estreñimiento
  - Diarrea
  - Alternancia entre estreñimiento y diarrea
  - Heces con moco
  - Otro

**Pregunta 40b (si selecciona "Otro"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique"

**Pregunta 41:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Presenta hinchazón o distensión abdominal?"
- Opciones:
  - No
  - Ocasionalmente
  - Frecuentemente
  - Constantemente

**Agregar subsección:** **"Síntomas Emocionales y Mentales"**

**Pregunta 42:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Cómo describiría su estado emocional habitualmente?"
- Opciones:
  - Estable y tranquilo
  - Ansioso o nervioso
  - Irritable o frustrado
  - Triste o deprimido
  - Estresado
  - Agobiado
  - Cambios de humor frecuentes

**Pregunta 43:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Nota cambios en su estado emocional antes o durante el dolor de cabeza?"
- Opciones:
  - No
  - Sí (describir en siguiente pregunta)

**Pregunta 43b (condicional):**
- Tipo: **Párrafo**
- Pregunta: "Por favor, describa los cambios"

**Pregunta 44:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Cómo es la calidad de su sueño?"
- Opciones:
  - Duermo bien y descanso
  - Dificultad para conciliar el sueño
  - Despertares frecuentes durante la noche
  - Despertar muy temprano
  - Sueño no reparador
  - Pesadillas frecuentes

**Pregunta 45:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Cuántas horas duerme habitualmente?"
- Opciones:
  - Menos de 5 horas
  - 5-6 horas
  - 7-8 horas
  - Más de 8 horas

**Agregar subsección:** **"Otros Síntomas Corporales"**

**Pregunta 46:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Presenta tensión o dolor muscular?"
- Opciones:
  - No
  - Sí, en el cuello
  - Sí, en los hombros
  - Sí, en la espalda alta
  - Sí, en la mandíbula (bruxismo)
  - Otro

**Pregunta 46b (si selecciona "Otro"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique dónde"

**Pregunta 47:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Siente frío o calor de manera particular?"
- Opciones:
  - Normal
  - Sensación de frío frecuente (extremidades frías)
  - Sensación de calor frecuente
  - Manos y pies fríos
  - Sensación de calor en la cabeza
  - Alternancia entre frío y calor

**Pregunta 48:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Experimenta mareos o vértigo?"
- Opciones:
  - No
  - Ocasionalmente
  - Frecuentemente con el dolor de cabeza
  - Constantemente

**Pregunta 49:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Presenta zumbido en los oídos (tinnitus)?"
- Opciones:
  - No
  - Ocasionalmente
  - Frecuentemente
  - Constantemente

**Pregunta 50:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Tiene sensación de sequedad?"
- Opciones:
  - No
  - Boca seca
  - Ojos secos
  - Piel seca
  - Garganta seca

---

### ☯️ SECCIÓN 6: CARACTERÍSTICAS SEGÚN MEDICINA TRADICIONAL CHINA

**Crear nueva sección:** "SECCIÓN 6: CARACTERÍSTICAS SEGÚN MEDICINA TRADICIONAL CHINA"
**Descripción:** "Patrón de Energía"

**Pregunta 51:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Cómo es su nivel de energía habitualmente?"
- Opciones:
  - Buena energía durante todo el día
  - Cansancio leve
  - Fatiga moderada
  - Fatiga severa o agotamiento
  - Variable según el momento del día

**Pregunta 51b (si selecciona "Variable"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique cuándo tiene más o menos energía"

**Pregunta 52:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿En qué momento del día se siente con menos energía?"
- Opciones:
  - Mañana
  - Media mañana
  - Después de comer
  - Tarde
  - Noche
  - Todo el día

**Pregunta 53:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Presenta sudoración excesiva?"
- Opciones:
  - No
  - Sudor nocturno
  - Sudor diurno espontáneo
  - Sudor con esfuerzo mínimo
  - Sudor en zonas específicas

**Pregunta 53b (si selecciona "zonas específicas"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique las zonas"

**Agregar subsección:** **"Sensaciones de Temperatura"**

**Pregunta 54:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Dónde localiza sensaciones de calor o frío específicamente?"
- Opciones:
  - Calor en la cabeza
  - Calor en el pecho
  - Calor en el estómago
  - Frío en las extremidades
  - Frío en el abdomen
  - Frío en la espalda
  - No presento sensaciones particulares

**Pregunta 55:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Prefiere bebidas o alimentos?"
- Opciones:
  - Fríos
  - Calientes
  - Templados
  - Sin preferencia

**Agregar subsección:** **"Aspecto de la Lengua (Observación MTC)"**

**Pregunta 56:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Puede observar su lengua en un espejo? ¿Cómo la describiría?"
- Opciones:
  - Rosada y normal
  - Pálida
  - Roja en los bordes
  - Roja en la punta
  - Roja en el centro
  - Morada o púrpura
  - Con capa blanca
  - Con capa amarilla
  - Hinchada con marcas dentales
  - Seca
  - No estoy seguro

**Agregar subsección:** **"Aspecto del Pulso"**

**Pregunta 57:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Nota pulsaciones fuertes o evidentes en alguna parte de su cuerpo durante el dolor?"
- Opciones:
  - No
  - Sí, en las sienes
  - Sí, en el cuello
  - Otro

**Pregunta 57b (si selecciona "Otro"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique dónde"

---

### 🏃 SECCIÓN 7: ESTILO DE VIDA Y HÁBITOS

**Crear nueva sección:** "SECCIÓN 7: ESTILO DE VIDA Y HÁBITOS"

**Pregunta 58:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Cuánta agua bebe al día?"
- Opciones:
  - Menos de 1 litro
  - 1-2 litros
  - 2-3 litros
  - Más de 3 litros

**Pregunta 59:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Consume café o bebidas con cafeína?"
- Opciones:
  - No
  - Sí, 1 taza al día
  - Sí, 2-3 tazas al día
  - Sí, más de 3 tazas al día

**Pregunta 60:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Consume alcohol?"
- Opciones:
  - No
  - Ocasionalmente (1-2 veces al mes)
  - Semanalmente (1-2 veces por semana)
  - Frecuentemente (3 o más veces por semana)
  - Diariamente

**Pregunta 61:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Fuma?"
- Opciones:
  - No
  - Sí (especificar cantidad en siguiente pregunta)
  - Ex fumador (especificar cuándo dejó)

**Pregunta 61b (si fuma o ex fumador):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique cantidad por día o cuándo dejó de fumar"

**Pregunta 62:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Realiza ejercicio físico?"
- Opciones:
  - No
  - Sí, ocasionalmente (1-2 veces al mes)
  - Sí, regularmente (1-2 veces por semana)
  - Sí, frecuentemente (3-5 veces por semana)
  - Sí, diariamente

**Pregunta 63:**
- Tipo: **Respuesta corta**
- Pregunta: "¿Qué tipo de ejercicio realiza?"
- (Solo mostrar si respondió "Sí" en pregunta anterior)

**Pregunta 64:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Cuántas horas al día pasa frente a pantallas (computadora, celular, TV)?"
- Opciones:
  - Menos de 2 horas
  - 2-4 horas
  - 4-6 horas
  - 6-8 horas
  - Más de 8 horas

**Pregunta 65:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Cómo describiría su alimentación?"
- Opciones:
  - Balanceada y variada
  - Alta en alimentos procesados
  - Muchas comidas rápidas
  - Vegetariana/Vegana
  - Rica en carnes y proteínas
  - Irregular (me salto comidas)
  - Otro

**Pregunta 65b (si selecciona "Otro"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, describa su alimentación"

**Pregunta 66:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Consume regularmente alguno de estos alimentos?"
- Opciones:
  - Chocolate
  - Quesos maduros
  - Embutidos
  - Alimentos procesados
  - Comida picante
  - Alimentos fritos
  - Azúcar refinado
  - Lácteos
  - Gluten
  - Ninguno en particular

---

### 👩 SECCIÓN 8: CONTEXTO ESPECÍFICO PARA MUJERES

**Crear nueva sección:** "SECCIÓN 8: CONTEXTO ESPECÍFICO PARA MUJERES"
**Descripción:** "Esta sección solo debe ser completada por mujeres en edad fértil. Si no aplica, puede saltarla."

**Pregunta 67:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Es usted mujer en edad fértil?"
- Opciones:
  - Sí (continuar con las siguientes preguntas)
  - No (saltar a siguiente sección)
  - No aplica (saltar a siguiente sección)
- Configurar lógica de salto

**Pregunta 68:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Nota relación entre sus dolores de cabeza y su ciclo menstrual?"
- Opciones:
  - No
  - Sí, antes de la menstruación
  - Sí, durante la menstruación
  - Sí, en la ovulación
  - No he notado patrón

**Pregunta 69:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Está embarazada actualmente?"
- Opciones:
  - Sí
  - No

**Pregunta 70:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Toma anticonceptivos hormonales?"
- Opciones:
  - Sí
  - No

**Pregunta 71:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Está en la menopausia o perimenopausia?"
- Opciones:
  - Sí
  - No
  - No estoy segura

---

### 💊 SECCIÓN 9: TRATAMIENTOS PREVIOS

**Crear nueva sección:** "SECCIÓN 9: TRATAMIENTOS PREVIOS"

**Pregunta 72:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Ha consultado previamente por estos dolores de cabeza?"
- Opciones:
  - No, es la primera consulta
  - Sí, con médico general
  - Sí, con neurólogo
  - Sí, con especialista en dolor
  - Sí, con terapeuta de medicina alternativa
  - Otro

**Pregunta 72b (si selecciona "Otro"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique con quién"

**Pregunta 73:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Qué medicamentos ha utilizado para el dolor de cabeza?"
- Opciones:
  - Paracetamol/Acetaminofén
  - Ibuprofeno
  - Aspirina
  - Naproxeno
  - Triptanes (sumatriptán, rizatriptán, etc.)
  - Ergotamínicos
  - Medicamentos preventivos (especificar en siguiente pregunta)
  - Opioides
  - Ninguno
  - Otro

**Pregunta 73b (si selecciona "Medicamentos preventivos" u "Otro"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique qué medicamentos"

**Pregunta 74:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Qué tan efectivos han sido los medicamentos?"
- Opciones:
  - Muy efectivos (alivio completo)
  - Moderadamente efectivos (alivio parcial)
  - Poco efectivos
  - Nada efectivos
  - No he usado medicamentos

**Pregunta 75:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Ha probado terapias alternativas o complementarias?"
- Opciones:
  - Acupuntura
  - Masajes terapéuticos
  - Quiropráctica
  - Osteopatía
  - Yoga
  - Meditación o mindfulness
  - Biofeedback
  - Fitoterapia (plantas medicinales)
  - Homeopatía
  - Ninguna
  - Otra

**Pregunta 75b (si selecciona "Otra"):**
- Tipo: **Respuesta corta**
- Pregunta: "Por favor, especifique qué terapia"

**Pregunta 76:**
- Tipo: **Opción múltiple**
- Pregunta: "¿Alguna de estas terapias alternativas le ha ayudado?"
- Opciones:
  - Sí (especificar en siguiente pregunta)
  - No
  - No he probado

**Pregunta 76b (si selecciona "Sí"):**
- Tipo: **Párrafo**
- Pregunta: "Por favor, especifique cuál terapia y cómo le ayudó"

---

### ⚠️ SECCIÓN 10: SEÑALES DE ALARMA

**Crear nueva sección:** "SECCIÓN 10: SEÑALES DE ALARMA"
**Descripción:** "⚠️ IMPORTANTE: Estas preguntas identifican síntomas que requieren atención médica urgente."

**Pregunta 77:**
- Tipo: **Casillas de verificación**
- Pregunta: "¿Ha experimentado alguno de estos síntomas? ⚠️ IMPORTANTE"
- Opciones:
  - Dolor de cabeza súbito y muy intenso ("el peor de mi vida")
  - Dolor de cabeza que empeora progresivamente
  - Dolor de cabeza asociado a fiebre alta
  - Rigidez de nuca (dificultad para flexionar el cuello)
  - Cambios en la personalidad o comportamiento
  - Pérdida de conciencia o desmayos
  - Convulsiones
  - Debilidad o parálisis de un lado del cuerpo
  - Dificultad para hablar o entender
  - Pérdida de visión súbita
  - Dolor de cabeza después de un golpe en la cabeza
  - Dolor de cabeza que inicia después de los 50 años
  - Dolor que despierta del sueño
  - Ninguno de los anteriores
- ✅ Obligatoria

---

### 📝 SECCIÓN 11: INFORMACIÓN ADICIONAL

**Crear nueva sección:** "SECCIÓN 11: INFORMACIÓN ADICIONAL"

**Pregunta 78:**
- Tipo: **Párrafo**
- Pregunta: "¿Hay algo más que considere importante mencionar sobre sus dolores de cabeza?"

**Pregunta 79:**
- Tipo: **Párrafo**
- Pregunta: "¿Qué es lo que más le preocupa de sus dolores de cabeza?"

**Pregunta 80:**
- Tipo: **Párrafo**
- Pregunta: "¿Qué espera lograr con este cuestionario y eventual tratamiento?"

---

## PASO 4: PERSONALIZACIÓN DEL FORMULARIO

### Tema y Colores:
1. Haz clic en el ícono de **Paleta** (parte superior derecha)
2. Elige un color relacionado con salud:
   - **Azul claro**: Profesional, calma
   - **Verde**: Salud, naturaleza
   - **Blanco**: Limpio, médico

### Agregar Imagen de Encabezado (Opcional):
1. Haz clic en el ícono de **Imagen** junto al título
2. Sube una imagen relacionada (logo de clínica, imagen de cerebro estilizado, etc.)

---

## PASO 5: CONFIGURAR RESPUESTAS

1. Ve a la pestaña **"Respuestas"** (parte superior)
2. Haz clic en el ícono de los **tres puntos** verticales
3. Selecciona **"Seleccionar destino de respuesta"**
4. Elige **"Crear una hoja de cálculo nueva"**
5. Nombra la hoja: "Respuestas - Cuestionario Cefaleas"

---

## PASO 6: COMPARTIR EL FORMULARIO

1. Haz clic en el botón **"Enviar"** (parte superior derecha)
2. Opciones para compartir:
   - **Por correo electrónico**: Envía directamente a pacientes
   - **Link directo**: Copia el enlace corto
   - **Código HTML**: Para incrustar en sitio web

3. Configurar opciones de envío:
   - ✅ **Acortar URL** (más fácil de compartir)
   - ✅ **Recopilar direcciones de correo electrónico**

---

## PASO 7: PROBAR EL FORMULARIO

1. Haz clic en el ícono de **Vista previa** (ojo) en la parte superior
2. Completa el formulario como si fueras un paciente
3. Verifica que:
   - Todas las preguntas sean claras
   - La lógica de salto funcione correctamente
   - Las validaciones de números funcionen
   - Las preguntas obligatorias estén marcadas

---

## PASO 8: VER Y ANALIZAR RESPUESTAS

### Ver respuestas individuales:
1. Ve a la pestaña **"Respuestas"**
2. Navega entre respuestas individuales

### Ver en hoja de cálculo:
1. Haz clic en el ícono de **Hoja de cálculo** (verde) en la pestaña Respuestas
2. Se abrirá Google Sheets con todas las respuestas organizadas

### Crear resumen:
1. En la pestaña **"Respuestas"**, verás gráficos automáticos de las respuestas
2. (Recuerda desactivar esta vista para los encuestados por privacidad)

---

## CONSEJOS ADICIONALES

### ✅ Mejores Prácticas:

1. **Prueba exhaustiva**: Completa el formulario varias veces antes de compartir
2. **Revisa en móvil**: Muchos pacientes responderán desde el celular
3. **Confirma privacidad**: Verifica configuración de privacidad según regulaciones
4. **Copia de seguridad**: Descarga las respuestas regularmente
5. **Actualiza regularmente**: Revisa y mejora el formulario según feedback

### ⚠️ Consideraciones Legales:

- Asegúrate de cumplir con normativas de privacidad de datos de salud (HIPAA, GDPR, etc.)
- Incluye consentimiento informado si es necesario
- Almacena datos de forma segura
- Considera encriptación para datos sensibles

### 🔄 Mantenimiento:

- Revisa las respuestas semanalmente
- Actualiza preguntas si identificas confusiones recurrentes
- Mantén un registro de versiones del formulario

---

## ATAJOS DE TECLADO ÚTILES EN GOOGLE FORMS

- **Ctrl + Enter**: Agregar nueva pregunta
- **Ctrl + Shift + C**: Agregar nueva sección
- **Ctrl + D**: Duplicar pregunta
- **Ctrl + Z**: Deshacer
- **Ctrl + S**: Guardar (automático, pero fuerza guardado)

---

## ALTERNATIVAS PARA DESCARGAR RESPUESTAS

### Formato CSV:
1. Abre la hoja de cálculo de respuestas
2. Archivo → Descargar → Valores separados por comas (.csv)

### Formato Excel:
1. Abre la hoja de cálculo de respuestas
2. Archivo → Descargar → Microsoft Excel (.xlsx)

### Formato PDF:
1. Abre la hoja de cálculo de respuestas
2. Archivo → Descargar → Documento PDF (.pdf)

---

## SOPORTE TÉCNICO

Si encuentras problemas:
- **Centro de ayuda de Google Forms**: https://support.google.com/docs/topic/9055404
- **Foro de la comunidad**: https://support.google.com/docs/community

---

**¡El formulario está listo para usar!**

Recuerda que este es un cuestionario médico profesional diseñado para recopilar información diagnóstica de alta calidad integrando medicina occidental y tradicional china.

---

*Documento creado para facilitar la implementación en Google Forms*
*Versión 1.0 - 2026*
