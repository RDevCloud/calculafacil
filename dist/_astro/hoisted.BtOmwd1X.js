import"./hoisted.BKoqXAcy.js";import"./AdSlot.astro_astro_type_script_index_0_lang.CodyBOlY.js";const s=document.getElementById("tool-form");s&&s.addEventListener("submit",r=>{r.preventDefault();const t=(document.getElementById("texto").value||"").trim(),o=t?t.split(/\s+/).filter(e=>e.length>0).length:0,l=t.length,g=t.replace(/\s/g,"").length,c=t?t.split(/[.!?]+/).filter(e=>e.trim().length>0).length:0,a=t?t.split(/\n+/).filter(e=>e.trim().length>0).length:0,n=document.getElementById("result");n&&(n.innerHTML=`
        <strong>Words: ${o}</strong> &nbsp;|&nbsp;
        <strong>Characters: ${l}</strong> &nbsp;|&nbsp;
        <strong>No spaces: ${g}</strong><br>
        <small>Sentences: ${c} &nbsp;|&nbsp; Paragraphs: ${a}</small>
      `)});
