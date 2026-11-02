// Labels use the same official unit IDs as search and the selectable floor plan.
const unitLabelRenderer=render;
function insidePolygon(p,points){let inside=false;for(let i=0,j=points.length-1;i<points.length;j=i++){const a=points[i],b=points[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])inside=!inside}return inside}
function drawUnitLabels(){
 const root=svg.querySelector(':scope > g'),plan=root?.querySelector('.mall-plan');if(!plan||zoom<1.3)return;
 const ns='http://www.w3.org/2000/svg',labels=document.createElementNS(ns,'g');labels.setAttribute('class','unit-labels');labels.setAttribute('aria-hidden','true');root.append(labels);
 const bus=STATION.buildings.find(b=>b.kind==='bus').points;
 const candidates=[...plan.querySelectorAll('[data-shop]')].filter(el=>mallNames[el.dataset.shop]&&!mallNames[el.dataset.shop].startsWith('Wkrótce')).map(el=>{const b=el.getBBox();return {el,id:el.dataset.shop,b,area:b.width*b.height}}).sort((a,b)=>(b.id===mallSelected)-(a.id===mallSelected)||b.area-a.area);
 const occupied=[];const font=10/zoom;
 for(const {el,id,b,area}of candidates){
  let x=b.x+b.width/2,y=b.y+b.height/2;
  // Concave units need an interior anchor rather than their bounding-box centre.
  if(el.isPointInFill){const point=new DOMPoint(x,y);if(!el.isPointInFill(point)){let best=null;for(let iy=1;iy<10;iy++)for(let ix=1;ix<10;ix++){const q=new DOMPoint(b.x+b.width*ix/10,b.y+b.height*iy/10);if(el.isPointInFill(q)){const d=(q.x-x)**2+(q.y-y)**2;if(!best||d<best.d)best={x:q.x,y:q.y,d}}}if(!best)continue;x=best.x;y=best.y}}
  const p=[.4532*x-.08654*y+174.32,.0992*x+.4282*y+213.85];if(level<2&&insidePolygon(p,bus))continue;
  const selected=id===mallSelected,name=mallNames[id],width=name.length*font*.56+font,height=font*1.5;
  if(!selected&&(Math.sqrt(area)*.44*zoom<18||b.width*.45*zoom<Math.min(name.length*5,65)))continue;
  const rect=[p[0]-width/2,p[1]-height/2,p[0]+width/2,p[1]+height/2];
  if(!selected&&occupied.some(r=>rect[0]<r[2]&&rect[2]>r[0]&&rect[1]<r[3]&&rect[3]>r[1]))continue;
  occupied.push(rect);const text=document.createElementNS(ns,'text');text.setAttribute('x',p[0]);text.setAttribute('y',p[1]);text.setAttribute('font-size',font);text.setAttribute('class',selected?'unit-label selected-label':'unit-label');text.dataset.unitLabel=id;text.textContent=name;labels.append(text);
 }
}
render=function(){unitLabelRenderer();drawUnitLabels()};
render();
