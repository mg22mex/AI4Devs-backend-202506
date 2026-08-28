#!/bin/bash
# Verification script for EcoArq application structure

echo "🏡 EcoArq - Natural Construction App Verification"
echo "=================================================="
echo ""

# Check if we're in the correct directory
if [ ! -d "frontend" ]; then
    echo "❌ Error: frontend directory not found"
    exit 1
fi

echo "✓ Frontend directory exists"

# Check main files
echo ""
echo "Checking main application files..."

files=(
    "frontend/public/index.html"
    "frontend/src/App.js"
    "frontend/src/App.css"
    "frontend/src/index.js"
    "frontend/src/index.css"
    "frontend/package.json"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file"
    else
        echo "  ❌ $file - MISSING"
    fi
done

# Check components
echo ""
echo "Checking component files..."

components=(
    "frontend/src/components/Home.js"
    "frontend/src/components/MaterialCalculator.js"
    "frontend/src/components/TechniquesGuide.js"
    "frontend/src/components/ProjectPlanner.js"
    "frontend/src/components/DesignInspiration.js"
)

for component in "${components[@]}"; do
    if [ -f "$component" ]; then
        echo "  ✓ $component"
    else
        echo "  ❌ $component - MISSING"
    fi
done

# Check documentation
echo ""
echo "Checking documentation..."

docs=(
    "README.md"
    "ECOARQ_README.md"
    "USER_GUIDE.md"
)

for doc in "${docs[@]}"; do
    if [ -f "$doc" ]; then
        echo "  ✓ $doc"
    else
        echo "  ❌ $doc - MISSING"
    fi
done

# Count lines of code
echo ""
echo "Code Statistics:"
echo "----------------"

if command -v wc &> /dev/null; then
    js_files=$(find frontend/src -name "*.js" -type f)
    total_lines=$(cat $js_files 2>/dev/null | wc -l)
    echo "  Total lines of JavaScript: $total_lines"
    
    components_lines=$(cat frontend/src/components/*.js 2>/dev/null | wc -l)
    echo "  Lines in components: $components_lines"
fi

# Check for old files that should be removed
echo ""
echo "Checking for old files..."

old_files=(
    "frontend/src/App.tsx"
    "frontend/src/index.tsx"
    "frontend/src/components/AddCandidateForm.js"
    "frontend/src/components/FileUploader.js"
    "frontend/src/components/RecruiterDashboard.js"
    "frontend/src/services/candidateService.js"
)

found_old=0
for old_file in "${old_files[@]}"; do
    if [ -f "$old_file" ]; then
        echo "  ⚠️  $old_file - Should be removed"
        found_old=1
    fi
done

if [ $found_old -eq 0 ]; then
    echo "  ✓ No old files found - Clean structure!"
fi

# Summary
echo ""
echo "=================================================="
echo "Verification Complete!"
echo ""
echo "📦 Application: EcoArq - Natural Construction Platform"
echo "🌍 Language: Spanish"
echo "⚛️  Framework: React 18"
echo "🎨 Components: 6 main components"
echo "🏗️  Construction Techniques: 25"
echo "🌡️  Passive Climate Systems: 6"
echo "⭕  Special Designs: Circular, Walipini, Cellar, Temazcal, Dry Toilet"
echo "🔥  Heating & Cooking: Ovens, Chimneys, Radiant Floors"
echo "💧  Water & Permaculture: Rainwater, Greywater, Ponds, Design"
echo "🖼️  3D Visualization: Export & Render Guides"
echo ""
echo "Construction Techniques:"
echo "  Tierra: Adobe, Cob, Superadobe, Tapia, Tierra-Paja"
echo "  Fibras: Bahareque, Pacas de Paja, Bambú"
echo "  Pétreos: Piedra, Mampostería, Madera"
echo "  Reciclaje: Botellas de Vidrio, Llantas/Neumáticos"
echo "  Especiales: Circular/Domo, Walipini, Bodega/Cellar, Temazcal, Baño Seco"
echo "  Calefacción: Hornos de Barro, Chimeneas Térmicas, Pisos Climatizados"
echo "  Agua/Permacultura: Cosecha de Agua, Aguas Grises, Estanques, Permacultura"
echo ""
echo "Passive Climate Systems:"
echo "  • Thermal Mass"
echo "  • Cross Ventilation"
echo "  • Solar Capture"
echo "  • Stack Effect (Chimney)"
echo "  • Earth Tubes (Canadian Well)"
echo "  • Strategic Vegetation"
echo ""
echo "To run the application:"
echo "  cd frontend"
echo "  npm install"
echo "  npm start"
echo ""
