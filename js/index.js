let page = 1;
function pintar(){
    $(document).ready(function(){
    
        let settings = {
            url:`https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&page=${page}`,
            method: "GET",
            timeout: 0,
        };
    
       $.ajax(settings).done(function(response){               
            response.forEach(element => {
                let fecha = new Date(element.last_updated);
                $("#valores").append(
                    $("<tr/>").append(
                        $("<td/>").append(
                            $("<img/>").attr("src", `${element.image}`)
                        ),
                        $("<td/>").text(element.id),
                        $("<td/>").text(element.symbol),
                        $("<td/>").text(pesos.format(element.current_price)),
                        $("<td/>").text(pesos.format(element.high_24h)),
                        $("<td/>").text(pesos.format(element.low_24h)),
                        $("<td/>").text(fecha.toLocaleString())
                    )        
                );
            });
        });
    });
}
/////Inicio
pintar();

function next(){
    deleteAllinDiv();
    page++;
    pintar();
}
function back(){
    if(page > 1){
        deleteAllinDiv();
        page--;
        pintar();
    }
}

function deleteAllinDiv(){
    while(valores.hasChildNodes()){
      valores.removeChild(valores.lastChild);
    }
}

// Estudiar 
const pesos = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'mxn',
    minimumFractionDigits: 0
});



