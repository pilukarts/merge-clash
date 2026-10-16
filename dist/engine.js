(function(root){
const SIZE=7,COLORS=5;
function groups(b){const hit=new Set;for(let r=0;r<SIZE;r++)for(let c=0;c<SIZE;){let k=c+1;while(k<SIZE&&b[r*SIZE+k]===b[r*SIZE+c])k++;if(k-c>=3)for(let x=c;x<k;x++)hit.add(r*SIZE+x);c=k}for(let c=0;c<SIZE;c++)for(let r=0;r<SIZE;){let k=r+1;while(k<SIZE&&b[k*SIZE+c]===b[r*SIZE+c])k++;if(k-r>=3)for(let x=r;x<k;x++)hit.add(x*SIZE+c);r=k}const out=[];while(hit.size){const first=hit.values().next().value,queue=[first],part=[];hit.delete(first);while(queue.length){const i=queue.pop();part.push(i);for(const j of [i-SIZE,i+SIZE,...(i%SIZE?[i-1]:[]),...(i%SIZE<SIZE-1?[i+1]:[])])if(hit.has(j)&&b[j]===b[i]){hit.delete(j);queue.push(j)}}out.push({color:b[first],cells:part})}return out}
function adjacent(a,b){return Math.abs(a-b)===SIZE||(Math.floor(a/SIZE)===Math.floor(b/SIZE)&&Math.abs(a-b)===1)}
function swapped(b,a,c){const copy=b.slice();[copy[a],copy[c]]=[copy[c],copy[a]];return copy}
function moves(b){const out=[];for(let i=0;i<b.length;i++)for(const j of [i+SIZE,...(i%SIZE<SIZE-1?[i+1]:[])])if(j<b.length&&b[i]!==b[j]){const g=groups(swapped(b,i,j));if(g.length)out.push({a:i,b:j,groups:g,value:g.reduce((s,x)=>s+x.cells.length*x.cells.length,0)})}return out}
function board(rng=Math.random){for(let tries=0;tries<1000;tries++){const b=[];for(let i=0;i<SIZE*SIZE;i++){let options=[0,1,2,3,4].filter(v=>!(i%SIZE>=2&&b[i-1]===v&&b[i-2]===v)&&!(i>=SIZE*2&&b[i-SIZE]===v&&b[i-SIZE*2]===v));b.push(options[Math.floor(rng()*options.length)])}if(moves(b).length)return b}throw Error('No playable board')}
function refill(b,g,rng=Math.random){const clear=new Set(g.flatMap(x=>x.cells)),out=b.slice();for(let c=0;c<SIZE;c++){let col=[];for(let r=SIZE-1;r>=0;r--)if(!clear.has(r*SIZE+c))col.push(b[r*SIZE+c]);while(col.length<SIZE)col.push(Math.floor(rng()*COLORS));for(let r=SIZE-1;r>=0;r--)out[r*SIZE+c]=col[SIZE-1-r]}return out}
function tier(n){return n>=6?'SUPERNOVA':n===5?'ÉPICO':n===4?'SÚPER':'NORMAL'}
function damage(n){return n>=6?n*15:n===5?55:n===4?36:21}
const api={SIZE,groups,adjacent,swapped,moves,board,refill,tier,damage};if(typeof module!=='undefined')module.exports=api;root.MC=api;
})(typeof window!=='undefined'?window:globalThis);
