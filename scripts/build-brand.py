"""Reproduce exact-text brand assets using the installed OFL Jost face.

This authoring helper is optional; generated assets are versioned for builds.
Requires Pillow and a path to Jost's static 700 TTF face.
"""
import math
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent.parent / "public" / "brand"
font_path = Path(sys.argv[1])
ink, paper, accent = "#121413", "#ecede6", "#ff835b"

svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#121413" rx="12"/><path d="M17 16h12v25c0 9-6 12-14 12v-8c4 0 5-2 5-5V24h-3zM35 16h8v29h10v8H35z" fill="#ecede6"/><circle cx="53" cy="20" r="4" fill="#ff835b"/></svg>'''
(root / "favicon.svg").write_text(svg)

for size, filename in [(32, "favicon-32.png"), (180, "apple-touch-icon.png")]:
    scale = 4
    im = Image.new("RGB", (size * scale, size * scale), ink)
    d = ImageDraw.Draw(im)
    font = ImageFont.truetype(str(font_path), int(size * scale * .53))
    d.text((size * scale * .12, size * scale * .12), "JL", font=font, fill=paper)
    d.ellipse((size * scale * .77, size * scale * .22, size * scale * .87, size * scale * .32), fill=accent)
    im.resize((size, size), Image.Resampling.LANCZOS).save(root / filename)

im = Image.new("RGB", (1200, 630), ink)
d = ImageDraw.Draw(im)
for x in range(690, 1190, 28):
    for y in range(80, 580, 28):
        d.ellipse((x, y, x + 1, y + 1), fill="#3a423c")

def projection(x, y, z):
    xx = x * math.cos(.48) + z * math.sin(.48)
    zz = -x * math.sin(.48) + z * math.cos(.48)
    yy = y * math.cos(-.36) - zz * math.sin(-.36)
    return (940 + xx * 185, 310 + yy * 185)

for i in range(1, 18):
    t = -math.pi / 2 + i * math.pi / 18
    points = [projection(math.cos(t) * math.cos(j * math.pi / 40), math.sin(t), math.cos(t) * math.sin(j * math.pi / 40)) for j in range(81)]
    d.line(points, fill="#4a574e", width=1)
for i in range(24):
    u = i * math.pi / 12
    points = [projection(math.sin(j * math.pi / 60) * math.cos(u), math.cos(j * math.pi / 60), math.sin(j * math.pi / 60) * math.sin(u)) for j in range(61)]
    d.line(points, fill="#4a574e", width=1)
points=[]
for i in range(181):
    u=i*math.pi/90; x,y=243*math.cos(u),85*math.sin(u)
    points.append((940+x*math.cos(-.56)-y*math.sin(-.56),310+x*math.sin(-.56)+y*math.cos(-.56)))
d.line(points, fill=accent, width=2)

def text(pos, value, size, fill=paper):
    d.text(pos, value, font=ImageFont.truetype(str(font_path), size), fill=fill)

d.line((60, 78, 1140, 78), fill="#373e38", width=1)
text((60, 32), "JAYLIU.CO.NZ", 19)
text((60, 148), "Jay Liu", 128)
text((60, 327), "Senior Software Engineer", 34)
text((60, 397), "FinTech / Cloud / Applied AI", 24, accent)
text((60, 504), "Auckland, New Zealand", 21, "#afb6af")
im.save(root / "social-card.png", optimize=True)
print("Generated favicon variants and 1200×630 social card")
