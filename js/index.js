$(document).ready(function(){
    let settings = {
        url:`https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn`,
        method: "GET",
        timeout: 0,
    };

    $.ajax(settings).done(function(response){
        //console.log(response.id);
        
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

// Estudiar 
const pesos = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'mxn',
    minimumFractionDigits: 0
})

