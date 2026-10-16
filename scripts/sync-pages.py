"""Generate the GitHub Pages root entry from the canonical dist homepage."""
from pathlib import Path

root = Path(__file__).resolve().parents[1]
html = (root / 'dist/index.html').read_text()
html = html.replace('href="style.css', 'href="dist/style.css')
html = html.replace('src="app.js', 'src="dist/app.js')
html = html.replace('src="assets/', 'src="dist/assets/')
(root / 'index.html').write_text(html)
(root / '.nojekyll').touch()
