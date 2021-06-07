

var value = document.querySelectorAll(".card-unity");
var clickUnity = document.querySelectorAll(".click-unity");

clickUnity[0].addEventListener('click', inCard1);
value[0].addEventListener('mouseleave', outCard1);

clickUnity[1].addEventListener('click', inCard2);
value[1].addEventListener('mouseleave', outCard2);


function inCard1() {
    outCard2();
    value[0].innerHTML = `
    <div class="image-background-color-four-in"></div>
                        <div class="text-format-four-in">
                            <h4>
                                Matriz
                            </h4>
                           <p>
                            Rua Deputado Jose Augusto Ferreira - nº 89 Centro Caratinga - MG
                            CEP: 35300-016
                            <br>
                            <a class="map" target="_blank" href="https://goo.gl/maps/GsibNPf35Nr9XFyr7" >Ver mapa</a>
                           </p>
                           <p><b>Segunda a Sexta das 6:30 às 18:00<br>
                                 Sábados das 7:00 às 12:00.</b></p>
                            <p><span class="fas fa-at p-2 "></span><span
                                class=" ">contato@labnsauxiliadora.com.br</span><br>
                                <span class="fas fa-phone-square p-2 pl-1 "></span><span
                                    class="  ">(33) 3322-2710</span><br>
                                <!--<span class="fab fa-whatsapp p-2 pl-1  "></span><span
                                    class=" ">(27) 99999-9999</span><br>-->
                            </p>
                        </div>`;

}

function outCard1() {
    value[0].innerHTML =
        `<div class="image-background-color-four"></div>
        <div class="text-format-four">
            <h4>
                Matriz
            </h4>
            <div class="btn-section-four">
                <button type="button" class="btn btn-light click-unity ">VER DETALHES</button>
            </div>
        </div>`;
    var clickUnity = document.querySelectorAll(".click-unity");
    clickUnity[0].addEventListener('click', inCard1);

}

function inCard2() {
    outCard1();
    value[1].innerHTML = `
    <div class="image-background-color-four-in"></div>
                        <div class="text-format-four-in">
                            <h4>
                                Posto de Coleta
                            </h4>
                           <p>
                            Avenida Olegário Maciel - nº 324 Centro Caratinga - MG
                            CEP: 35300-398
                            <br>
                            <a class="map" target="_blank" href="https://goo.gl/maps/98E12eSofB9Vngdh6" >Ver mapa</a>
                           </p>
                           <p><b>Segunda a Sexta das 6:30 às 18:00<br>
                                 Sábados das 7:00 às 12:00.</b></p>
                            <p><span class="fas fa-at p-2 "></span><span
                                class=" ">contato@labdemo.com.br</span><br>
                                <span class="fas fa-phone-square p-2 pl-1 "></span><span
                                    class="  ">(33) 3322-2400</span><br>
                                <!--<span class="fab fa-whatsapp p-2 pl-1  "></span><span
                                    class=" ">(27) 99999-9999</span><br>-->
                            </p>
                        </div>`;

}

function outCard2() {

    value[1].innerHTML =
        `<div class="image-background-color-four"></div>
        <div class="text-format-four">
            <h4>
                Posto de Coleta
            </h4>
            <div class="btn-section-four">
                <button type="button" class="btn btn-light click-unity ">VER DETALHES</button>
            </div>
        </div>`;
    var clickUnity = document.querySelectorAll(".click-unity");
    clickUnity[1].addEventListener('click', inCard2);

}

function inCard3() {
    outCard1();
    outCard2();
    outCard4();
    value[2].innerHTML = `
    <div class="image-background-color-four-in"></div>
                        <div class="text-format-four-in">
                            <h4>
                                Nome da Unidade
                            </h4>
                           <p>
                            Rua Labdemo - Nº 100 centro Vitória - ES
                            CEP: 22222-000
                            <br>
                            <a class="map" target="_blank" href="https://g.page/slinesistemasonline?share" >Ver mapa</a>
                           </p>
                           <p><b>Segunda a Sexta das 6:30 às 18:00<br>
                                 Sábados das 7:00 às 12:00.</b></p>
                            <p><span class="fas fa-at p-2 "></span><span
                                class=" ">contato@labdemo.com.br</span><br>
                                <span class="fas fa-phone-square p-2 pl-1 "></span><span
                                    class="  ">(27) 3333-3333 / 3333-3333</span><br>
                                <span class="fab fa-whatsapp p-2 pl-1  "></span><span
                                    class=" ">(27) 99999-9999</span><br>
                            </p>
                        </div>`;

}

function outCard3() {
    value[2].innerHTML =
        `<div class="image-background-color-four"></div>
        <div class="text-format-four">
            <h4>
                Nome da Unidade
            </h4>
            <div class="btn-section-four">
                <button type="button" class="btn btn-light click-unity ">VER DETALHES</button>
            </div>
        </div>`;
    var clickUnity = document.querySelectorAll(".click-unity");
    clickUnity[2].addEventListener('click', inCard3);

}

function inCard4() {
    outCard1();
    outCard2();
    outCard3();
    value[3].innerHTML = `
    <div class="image-background-color-four-in"></div>
                        <div class="text-format-four-in">
                            <h4>
                                Nome da Unidade
                            </h4>
                           <p>
                            Rua Labdemo - Nº 100 centro Vitória - ES
                            CEP: 22222-000
                            <br>
                            <a class="map" target="_blank" href="https://g.page/slinesistemasonline?share" >Ver mapa</a>
                           </p>
                           <p><b>Segunda a Sexta das 6:30 às 18:00<br>
                                 Sábados das 7:00 às 12:00.</b></p>
                            <p><span class="fas fa-at p-2 "></span><span
                                class=" ">contato@labdemo.com.br</span><br>
                                <span class="fas fa-phone-square p-2 pl-1 "></span><span
                                    class="  ">(27) 3333-3333 / 3333-3333</span><br>
                                <span class="fab fa-whatsapp p-2 pl-1  "></span><span
                                    class=" ">(27) 99999-9999</span><br>
                            </p>
                        </div>`;

}

function outCard4() {
    value[3].innerHTML =
        `<div class="image-background-color-four"></div>
        <div class="text-format-four">
            <h4>
                Nome da Unidade
            </h4>
            <div class="btn-section-four">
                <button type="button" class="btn btn-light click-unity ">VER DETALHES</button>
            </div>
        </div>`;
    var clickUnity = document.querySelectorAll(".click-unity");
    clickUnity[3].addEventListener('click', inCard4);

}