( function () {
    const $ = (query: string): HTMLInputElement | null => 
        document.querySelector(query);
    
        $("#cadastrar")?.addEventListener("click",()=> {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if (!nome|| !placa){
            alert("osa campos são obrigatorios");
            return;
        }
    })
} )();