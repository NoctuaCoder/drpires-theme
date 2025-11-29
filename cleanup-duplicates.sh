#!/bin/bash
# cleanup-duplicates.sh
# Script to remove duplicate and unnecessary CSS files

echo "🧹 Cleaning up duplicate CSS files..."

# List of files to remove
FILES_TO_REMOVE=(
    "mobile-final.css"
    "mobile-perfect.css"
    "mobile-clean.css"
    "mobile-definitivo.css"
    "mobile-desktop-style.css"
    "mobile-fix.css"
    "mobile-crossbrowser.css"
    "debug.css"
    "style.css"
    "test-mobile.html"
)

# Remove each file
for file in "${FILES_TO_REMOVE[@]}"; do
    if [ -f "$file" ]; then
        echo "  ❌ Removing: $file"
        rm "$file"
    else
        echo "  ⚠️  Not found: $file (already removed or doesn't exist)"
    fi
done

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📦 Production files:"
echo "  ✓ index.html"
echo "  ✓ demo-style.css"
echo "  ✓ script.js"
echo "  ✓ assets/"
echo "  ✓ favicon.png"
echo ""
echo "💡 Next steps:"
echo "  1. Minify CSS: npx cssnano demo-style.css demo-style.min.css"
echo "  2. Minify JS: npx terser script.js -o script.min.js -c -m"
echo "  3. Update HTML to reference minified files"
echo "  4. Test locally: python -m http.server 8000"
echo ""
