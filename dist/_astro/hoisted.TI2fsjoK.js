import"./hoisted.BKoqXAcy.js";import"./AdSlot.astro_astro_type_script_index_0_lang.CodyBOlY.js";const s=document.getElementById("tool-form");s&&s.addEventListener("submit",r=>{r.preventDefault();const t=(document.getElementById("texto").value||"").trim(),o=t?t.split(/\s+/).filter(n=>n.length>0).length:0,l=t.length,a=t.replace(/\s/g,"").length,i=t?t.split(/[.!?]+/).filter(n=>n.trim().length>0).length:0,c=t?t.split(/\n+/).filter(n=>n.trim().length>0).length:0,e=document.getElementById("result");e&&(e.innerHTML=`
          <strong>Palabras: ${o}</strong> &nbsp;|&nbsp; 
          <strong>Caracteres: ${l}</strong> &nbsp;|&nbsp; 
          <strong>Sin espacios: ${a}</strong><br>
          <small>Oraciones: ${i} &nbsp;|&nbsp; Párrafos: ${c}</small>
        `)});
