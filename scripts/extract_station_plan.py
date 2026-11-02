# Requires PyMuPDF; used only to regenerate the source SVGs.
from pathlib import Path
import pymupdf as f
ROOT=Path(__file__).resolve().parents[1]
p=f.open(ROOT/'dist/station/pkp-plan.pdf')[0]
out=ROOT/'dist/station'
colors={'base':'#253d32','blue':'#3b6055','orange':'#a28c45','cyan':'#527968','grey':'#425c49','stairs':'#789078','red':'#8c734a','green':'#426849'}
def category(c):
 r,g,b=c
 if g>.6 and r<.6:return 'green'
 if r>.8 and g>.55:return 'orange'
 if r>.7 and g<.55:return 'red'
 if b>.8:return 'cyan'
 if r<.1 and b>.3:return 'blue'
 if g>.25 and r<.15:return 'green'
 if r>.7:return 'stairs'
 if r>.4:return 'grey'
 return 'base'
def path(d):
 s=[];last=None
 for item in d['items']:
  op=item[0]
  if op=='re':
   r=item[1];s.append(f'M{r.x0} {r.y0}H{r.x1}V{r.y1}H{r.x0}Z')
  elif op=='l':
   a,b=item[1:];s.append(('' if last==a else f'M{a.x} {a.y}')+f'L{b.x} {b.y}');last=b
  elif op=='c':
   a,b,c,z=item[1:];s.append(('' if last==a else f'M{a.x} {a.y}')+f'C{b.x} {b.y} {c.x} {c.y} {z.x} {z.y}');last=z
  elif op=='qu':
   q=item[1];s.append(f'M{q.ul.x} {q.ul.y}L{q.ur.x} {q.ur.y}L{q.lr.x} {q.lr.y}L{q.ll.x} {q.ll.y}Z')
 return ' '.join(s)+('Z' if d.get('closePath') else '')
# Source coordinates retained inside a translated viewBox for registration.
for level,box in [(1,(210,170,710,500)),(2,(260,545,680,875))]:
 crop=f.Rect(box);parts=[]
 for d in p.get_drawings():
  r=d['rect']
  if not d['fill'] or not crop.contains(r) or r.width*r.height<180:continue
  cat='base' if r.width*r.height>100000 else category(d['fill']);parts.append(f'<path d="{path(d)}" data-bounds="{r.x0:.2f},{r.y0:.2f},{r.width:.2f},{r.height:.2f}" fill="{colors[cat]}" stroke="#879e7b" stroke-width=".8"/>')
 svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{box[0]} {box[1]} {crop.width} {crop.height}">'+''.join(parts)+'</svg>'
 (out/f'level-{level}.svg').write_text(svg)
 print(level,len(parts))
