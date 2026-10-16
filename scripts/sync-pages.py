"""Generate the GitHub Pages root entry from the canonical dist homepage."""
from pathlib import Path

root = Path(__file__).resolve().parents[1]
for source, target in [('style.css', 'navigation-v5.css'), ('app.js', 'navigation-v5.js')]:
    (root / 'dist' / target).write_text((root / 'dist' / source).read_text())
html = (root / 'dist/index.html').read_text()
html = html.replace('href="navigation-v5.css', 'href="dist/navigation-v5.css')
html = html.replace('src="navigation-v5.js', 'src="dist/navigation-v5.js')
html = html.replace('src="assets/', 'src="dist/assets/')
(root / 'index.html').write_text(html)
(root / '.nojekyll').touch()
