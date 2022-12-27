

const respuestaOpen = `
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registrar</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&family=Outfit&family=Secular+One&family=Space+Grotesk:wght@500&family=Ubuntu&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link href="./estilos/root.css" rel="stylesheet">
        <style>
            .container{
                width:80%;
                display:block;
                margin: auto;
            }
        </style>
        <script>
            window.onload = ()=>{
                const btn_volver = document.querySelector('#btn_volver')
                btn_volver.addEventListener('click',change)
                function change(){
                    location.assign("./logout");
                }
            }
        </script>
    </head>
    <body>

        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            
                <a class="navbar-brand ms-5"><h1>UASD</h1></a>
                <button class="btn me-2 ms-auto" id="btn_volver">
                    Volver<img src="SVG/return_icon_154912.svg" alt="volver" style="height: 30px; max-width: 30px;">
                </button>
            </nav>
        </header>`
 const respuestaClose = `
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

    </body>
</html>`
function view (data){
    return (respuestaOpen+data+respuestaClose)
}
module.exports = view