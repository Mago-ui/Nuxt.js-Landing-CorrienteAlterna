
<template lang="html">
  <div class='body'>
    <b-navbar toggleable="lg" type="dark" position="fixed"  id= 'navbar' class= "navbar fixed-top">
      <div>
        <b-navbar-brand  id= 'icon' class="font-weight-bold" href="#"></b-navbar-brand>
      </div>
      <div id = 'text_icon'>
      <p></p>
        <p></p>
        <p class="font-weight-bold" ></p>
      </div>
      <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-img id="img_logo" src="./logoBusinnes/logoCorriente.png" fluid alt="Responsive image"></b-img>
        <b-img id="img_logoOculto" src="./logoBusinnes/logoCorriente.png" fluid alt="Responsive image"></b-img>
        <b-img id="img_logoOculto" src="./logoBusinnes/logoblanco.png" fluid alt="Responsive image"></b-img>
      </b-nav-form>
      </b-navbar-nav>
    </b-navbar>

    <div class="content">
      <div>
 <!--  <img class="banner" src="./banner.png" alt="" style="width: 100%;object-fit: cover;">-->


    <div class="container">
      <div class="slider">
        <div class="slide">
          <img class="banner" src="./imageBanner/diseñoGrafico/Diseño_Grá_186.png" alt="" style="width: 100%;object-fit: cover;">
        </div>

        <div class="slide">
          <img class="banner" src="./imageBanner/diseñoGrafico/Diseño_Grá_188.png" alt="" style="width: 100%;object-fit: cover;">

        </div>
        <div class="slide">
          <img class="banner" src="./imageBanner/diseñoGrafico/Diseño_Grá_189.png" alt="" style="width: 100%;object-fit: cover;">

        </div>
        <div class="slide">
          <img class="banner" src="./imageBanner/diseñoGrafico/Diseño_Grá_190.png" alt="" style="width: 100%;object-fit: cover;">

        </div>
        <div class="slide">
          <img class="banner" src="./imageBanner/diseñoGrafico/Diseño_Grá_191.png" alt="" style="width: 100%;object-fit: cover;">
        </div>
        <div class="slide">
          <img class="banner" src="./imageBanner/interiores/Diseño_Int_182.png" alt="" style="width: 100%;object-fit: cover;">
        </div>

        <div class="slide">
          <img class="banner" src="./imageBanner/interiores/Diseño_Int_183.png" alt="" style="width: 100%;object-fit: cover;">
        </div>
        <div class="slide">
          <img class="banner" src="./imageBanner/interiores/Diseño_Int_184.png" alt="" style="width: 100%;object-fit: cover;">
        </div>
        <div class="slide">
          <img class="banner" src="./imageBanner/interiores/Diseño_Int_185.png" alt="" style="width: 100%;object-fit: cover;">
        </div>
        <div class="slide">
          <img class="banner" src="./imageBanner/interiores/Diseño_Int_187.png" alt="" style="width: 100%;object-fit: cover;">
        </div>


      </div>
    </div>



          <div class="contentSpace">
              <div style="position: absolute;right: 0;">
              <p>NUEVAS<br>
                CARRERAS</p>
                <span class="contentSpace-Year">2020-1</span>
          </div>
      </div>
      <div class="landingButton"
       @click="showModal=true;body()"
       >
        <img src="./icon_informes.svg" alt="" >
      </div>
    </div>

<div class="landingRegister"  v-if="showModal == true" >
<form>
    <div class="equis"
    @click="showModal=false;bodyOut()"
    >X</div>
    <div class="landingRegister-date">
      <p>REGÍSTRATE AQUÍ</p>
      <input type="text" id="name" placeholder="NOMBRES">
      <input type="text" id="apellido" placeholder="APELLIDOS">
      <input type="text" id="dni" placeholder="DNI">
      <select name="" id="selected">
       <option >Seleccione su género</option>
       <option >Masculino</option>
       <option >Femenino</option>
      </select>
      <input type="text" id="telefono" placeholder="TELÉFONO">
      <input type="text" id="email" placeholder="E-MAIL">
      <select name="" id="selected_cursos">
       <option >Seleccione la carrera</option>
       <option >Diseño Gráfico</option>
       <option >Diseño de Interiores</option>
      </select>

    <label class="checkbox">
      <input type="checkbox">
      <span class="check"></span>
      <span>Autorizo el uso adecuado de mis datos personales.</span>
    </label>
      <div @click="enviarFormulario()" class="send">ENVIAR</div>
    </div>
</form>
</div>

      <div class= "landingLogo">
            <div class= "card desktopCard">
                  <div class="landingLogo-Card">
                    <h2><b>ADN</b></h2>
                  <div class="barraLanding" style="margin-left: auto;"></div>
                  </div>
                  <div class="landingLogo-Text">
                      <p>
                          Reconocidos por ser una plataforma de formación de
                          destacados profesionales en el mercado del arte y diseño,
                           lanzamos dos nuevas carreras: Diseño de Interiores y
                           Diseño Gráfico, devolviendo lo artístico a disciplinas
                           que en los últimos años se han percibido como técnicas y operativas.
                      </p>
                  </div>
            </div>


            <div class= "card mobileCard">
                  <div class="landingLogo-Text">
                      <p>
                       <span class="ADN"> AD<span class="lineLetter">N</span> </span> Corriente Alterna aparece en la escena artística con una propuesta disruptiva enfocada

                        en el arte contemporáneo, desarrollando el

                        lenguaje personal, el pensamiento crítico, las habilidades de investigación interdisciplinaria y de gestión, así como en las

                        tendencias pedagógicas más actualizadas
                        globalmente.
                      </p>
                  </div>
            </div>
      </div>


    <div class="landingPorcentage">
      <div class="item">
        <p>86%</p>
        <span>De los egresados trabajan actualmente en su profesión.</span>
        <div class="barraLanding"></div>
        </div>
      <div class="item">
        <p>90%</p>
        <span>Empiezan a producir obras en el primer año de haberse graduado</span>
        <div class="barraLanding"></div>
      </div>
      <div class="item">
        <p>70%</p>
        <span>De los egresados han expuesto sus obras a nivel internacional.</span>
        <div class="barraLanding"></div>
        </div>
    </div>



<div class="carrousel mobilecarousel">
			<input type="radio" name="slides" id="radio-1" checked>
			<input type="radio" name="slides" id="radio-2">
			<input type="radio" name="slides" id="radio-3">
			<ul class="slides">
				 <li class="slide">
            <div>
              <span class="porcentage">
                <p>86%</p>
                 <label>De los egresados trabajan actualmente en su profesión.</label>
                  <label class="barraLanding"></label>
              </span>
            </div>
           </li>
            <li class="slide">
              <div>
              <span class="porcentage">
                <p>90%</p>
                 <label>Empiezan a producir obras en el primer año de haberse graduado.</label>
                  <label class="barraLanding"></label>
              </span>
              </div>
           </li>
          <li class="slide">
             <div>
              <span class="porcentage">
                <p>50%</p>
                 <label>De los egresados han expuesto sus obras a nivel internacional.</label>
                  <label class="barraLanding"></label>
              </span>
             </div>
          </li>
			</ul>
			<div class="slidesNavigation">
				<label for="radio-1" id="dotForRadio-1"></label>
				<label for="radio-2" id="dotForRadio-2"></label>
				<label for="radio-3" id="dotForRadio-3"></label>
			</div>
</div>


</div>
<div>
    <div class="carousel">
        <ul class="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li class="slide-container">
                <div class="slide-image">
                  <div class="slide-imagePosition"> </div>
                  <div class="sliderImg">
                    <div></div>
                      <img src="./logoSlider.png">
                      <div class="carouselText">
                        <p>Metodología</p>
                        <p>Nuestra metodología brinda
                            a los estudiantes una ventaja
                            competitiva, tanto académica
                            como profesional, a la vez que
                            fomenta la interacción ética
                            con la sociedad como una sola
                            unidad. Docentes y futuros

                            profesionales comparten
                            conceptos e ideas a partir de la
                            crítica y el debate; formando así

                            un profesional capaz de crear,

                            proponer y gestionar
                            proyectos con un enfoque de valor a

                            la comunidad.</p>
                      </div>
                  </div>
                </div>
                <div class="carousel-controls">
                  <!--  <label for="img-3" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>-->
                    <label for="img-2" class="next-slide">
                      <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />
            <li class="slide-container">
                <div class="slide-image">
                  <div class="slide-imagePosition"> </div>
                  <div class="sliderImg">
                    <div></div>
                      <img src="./red-internacional.png">
                      <div class="carouselText">
                        <p><b>Red</b> internacional</p>
                        <p>Nuestros estudiantes se encuentran conectados a una red internacional que los visibiliza y empodera,
                           insertándose en la industria como profesionales altamente competitivos desde los primeros ciclos.
                           Promovemos relaciones y vínculos profesionales en Latinoamérica y Europa, con una plana docente internacional,
                           convenios e intercambios estudiantiles, exposiciones y conferencias con destacados especialistas invitados.</p>
                      </div>
                  </div>
              </div>
              <div class="carousel-controls">
                 <!--   <label for="img-1" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>-->
                    <label for="img-3" class="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-3" />
            <li class="slide-container">
                         <div class="slide-image">
                   <div class="slide-imagePosition"> </div>

                  <div class="sliderImg">
                    <div></div>
                      <img src="./modernidad-y-tradicion.png">
                      <div class="carouselText">
                        <p>Modernidad y Tradición</p>
                        <p>Nuestro campus se encuentra ubicado en Miraflores,
                           distrito con alto atractivo artístico y cultural.
                           Fue reconocido como proyecto innovador por la revista inglesa Architectural Review, 2008.
                           El diseño original pertenece al arquitecto Emilio Harth-Terré y la ampliación fue realizada
                           por los arquitectos Barclay & Crousse, obteniendo el premio “Calidad Arquitectónica 2007” del
                          Colegio de Arquitectos del Perú.</p>
                      </div>
                  </div>
                </div>
                <div class="carousel-controls">
                  <!--  <label for="img-2" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>-->
                    <label for="img-1" class="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <div class="carousel-dots desktop">
                <label for="img-1" class="carousel-dot" id="img-dot-1">01</label>
                <label for="img-2" class="carousel-dot" id="img-dot-2">02</label>
                <label for="img-3" class="carousel-dot" id="img-dot-3">03</label>
            </div>
              <div class="carousel-dots mobile">
                <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
                <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
            </div>
        </ul>
    </div>
</div>


      <div class="landingCarreras">
        <h3>Nuestras Carreras</h3>
        <div class="landingCarreras-img">
          <div class="landingCarreras-imgHover">
              <img class="desktop" src="./diseno.png" alt="">
               <img class="mobile" src="./disenoMobile.png" alt="">
              <p>DISEÑO <br> GRÁFICO</p>
              <label> Nuestros estudiantes aprenden
                      a comunicar ideas visualmente,
                      investigan con las herramientas digitales y conceptuales
                      actuales, proponen y gestionan
                      proyectos gráficos de identidad.

                      La carrera permite a cada
                      diseñador integrar en una sola
                      propuesta el lenguaje visual con
                      la imaginación, la teoría y la
                      tecnología. Además, desarrollan habilidades en diseño
                      impreso y de publicaciones,
                      diseño web y de interfaz, gráficos en movimiento, cine,
                      branding e identidad de marca
                      y diseño tipográfico, así como
                      conocimientos sobre la evolución y las tendencias del
                      diseño.
                    </label>
              <span
              @click="showModalOne=true;body()"
              >ver Malla +</span>
          </div>
          <div class="landingCarreras-imgHoverTwo">
              <img class="desktop" src="./disenointerno.png" alt="">
              <img class="mobile" src="./interiorMobile.png" alt="">
              <p>DISEÑO DE<br> INTERIORES</p>
                  <label> Nuestros estudiantes crean y
                          aprenden a gestionar con un
                          enfoque práctico proyectos,
                          combinando la cultura visual
                          y estética del interiorismo con
                          la tecnología y la funcionalidad del espacio, bajo un enfoque crítico.
                          Guiados por profesionales
                          destacados en la industria nacional e internacional, estudian
                          técnicas de dibujo, modelado
                          digital, iluminación, materiales,
                          métodos, arte y cultura del
                          diseño de interiores, entre
                          otros, con énfasis en la sostenibilidad, el bienestar y seguridad del ususario.
                  </label>
              <span
               @click="showModalTwo=true;body()"
              >ver Malla +</span>
          </div>
        </div>
      </div>


      <div class="landingModal" v-show="showModalOne==true">
           <div class="equis"
            @click="showModalOne=false;bodyOut()"
            >X</div>
        <div class="landingModal-description">
          <div class="landingModal-descriptionText">
            <p>DISEÑO GRÁFICO</p>
            <span>Ofrecemos cinco <b> líneas formativas </b> donde el arte converge con el diseño.</span>
          </div>
          <div class="landingModal-descriptionPoint">
            <div><label style="background: #B379A4;"></label><p>Gestión de Proyectos, Innovación y Emprendimiento</p> </div>
            <div><label style="background: #7AA1CC;"></label><p>Arte, Identidad y Cultura</p></div>
            <div><label style="background: #9CCD9C;"></label><p>Branding, Ilustración, Tipografia, Diagramación y Fotografía</p> </div>
            <div><label style="background: #F2BF2E;"></label><p>Transformacón Digital en el Diseño</p> </div>
            <div><label style="background: #7D6BA2;"></label><p>Empleabilidad y Laboratorio de Proyectos</p></div>
          </div>
        </div>
        <div class="landingModal-cicles">
            <div v-for="item in count" class="landingModal-ciclesSection">
              <p class="number" v-html="item.number"></p>
              <span v-html="item.name"></span>
            </div>
            <div v-for="item in cicles" class="landingModal-ciclesCourse">
              <p v-html="item.name"></p>
            </div>
        </div>


<!--
        <div class="landingTaggle" v-for="item in count">
            <div class="landingTaggle-cicle" >
                <p v-html="item.number"></p>
                <span v-html="item.name"></span>
            </div>
            <div class="landingTaggle-section" >
                <div class="landingTaggle-sectionItem" style="background:#B379A4;" v-for="item in cicles"><p v-html="item.name"> </p> </div>
            </div>
        </div>
        -->


    <div class="landingTaggle"
            v-for="(item,key) in ciclesMobile"
            :key="key"
            @click="openButtonIndex(key) "
    >
            <div class="landingTaggle-cicle" >
                <p v-html="item.number"></p>
                <span v-html="item.name"></span>
            </div>
            <div class="landingTaggle-section"
            :class="{'lola': key === number }"
             >
                <div class="landingTaggle-sectionItem" v-for="sub in circles">
                  <p v-html="sub.name"></p>
                  <!-- <div >{{item}}</div> -->
                </div>
            </div>
        </div>



      </div>
      <div class="landingModal" v-show="showModalTwo==true"
      >
           <div class="equis"
            @click="showModalTwo=false;bodyOut()"
            >X</div>
        <div class="landingModal-description">
          <div class="landingModal-descriptionText">
            <p>DISEÑO DE INTERIORES</p>
            <span>Ofrecemos cinco <b> líneas formativas </b> donde el arte converge con el diseño.</span>
          </div>
          <div class="landingModal-descriptionPoint">
            <div><label style="background: #B379A4;"></label><p>Gestión de Proyectos, Innovación y Emprendimiento</p> </div>
            <div><label style="background: #7AA1CC;"></label><p>Arte, Identidad y Cultura</p></div>
            <div><label style="background: #9CCD9C;"></label><p>Práctica y Estudio de Diseño de Interiores</p> </div>
            <div><label style="background: #F2BF2E;"></label><p>Transformacón Digital en el Diseño</p> </div>
            <div><label style="background: #7D6BA2;"></label><p>Empleabilidad y Laboratorio de Proyectos</p></div>
          </div>
        </div>
        <div class="landingModal-cicles">
            <div v-for="item in count" class="landingModal-ciclesSection">
              <p class="number" v-html="item.number"></p>
              <span v-html="item.name"></span>
            </div>
            <div v-for="item in ciclesInterior" class="landingModal-ciclesCourse">
              <p v-html="item.name"></p>
            </div>
        </div>

   <div class="landingTaggle"
            v-for="(item,key) in ciclesMobile"
            :key="key"
            @click="openButtonIndexDiseno(key) "
    >
            <div class="landingTaggle-cicle" >
                <p v-html="item.number"></p>
                <span v-html="item.name"></span>
            </div>
            <div class="landingTaggle-section"
            :class="{'lola': key === numberDiseno }"
             >
                <div class="landingTaggle-sectionItem" v-for="sub in ciclo">
                  <p v-html="sub.name"></p>
                </div>
            </div>
        </div>
      </div>





      <div class="landingConvenios">
        <h3>Convenios</h3>
        <div class="landingConvenios-img">
          <div>
            <img src="./imageLogos/Mesadetrabajo–1.png" alt="" style="width: 275px;">
          </div>
          <div>
              <img src="./imageLogos/Mesadetrabajo–2.png" alt="" style="width: 275px;">
          </div>
          <div>
              <img src="./imageLogos/Mesadetrabajo–3.png" alt="" style="width: 275px;">
          </div>
                    <div>
              <img src="./imageLogos/Mesadetrabajo–4.png" alt="" style="width: 250px;">
          </div>
                    <div>
              <img src="./imageLogos/Mesadetrabajo–5.png" alt="" style="width: 275px;">
          </div>
        </div>
      </div>

    <div id="slider">
      <input checked="" type="radio" name="slider" id="slide1">
      <input type="radio" name="slider" id="slide2">
      <input type="radio" name="slider" id="slide3">
      <input type="radio" name="slider" id="slide4">
      <input type="radio" name="slider" id="slide5">

      <div id="slides">
        <div id="overflow">
          <div class="inner">
            <div class="slide slide_1">
              <div class="slide-content">
              <img src="./imageLogos/Mesadetrabajo–1.png" alt="" style="width: 230px;">
              </div>
            </div>
            <div class="slide slide_2">
              <div class="slide-content">
                <img src="./imageLogos/Mesadetrabajo–2.png" alt="" style="width: 230px;">
              </div>
            </div>
            <div class="slide slide_3">
              <div class="slide-content">
                <img src="./imageLogos/Mesadetrabajo–3.png" alt="" style="width: 230px;">
              </div>
            </div>
            <div class="slide slide_4">
              <div class="slide-content">
                <img src="./imageLogos/Mesadetrabajo–4.png" alt="" style="width: 230px;">
              </div>
            </div>
            <div class="slide slide_5">
              <div class="slide-content">
                <img src="./imageLogos/Mesadetrabajo–5.png" alt="" style="width: 230px;">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="controls">
        <label for="slide1"></label>
        <label for="slide2"></label>
      </div>

      <div id="bullets">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
        <label for="slide5"></label>
      </div>
  </div>
      <div class="footer" style="display: flex;align-items: center; justify-content: space-around;">
        <div class="footerSpace">
          <div class="lol" style="display: flex;">
            <div class="logo_footer">
              <b-img id="img_logo_footer" style="margin-right: 40px;" class="img-FluidLoad" src="./logoBusinnes/logoblanco.png" fluid alt="Responsive image"></b-img>
            </div>
            <div class="direccion_footer">
              <div class="direccion_text">
                <p>(01) 242 8482</p>
                <p>Av. De La Aviación 500, Miraflores</p>
                <p>informes@corrientealterna.edu.pe</p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="" style="display: flex;align-items: baseline;justify-content: space-around;width: 175px;">
              <b-link href="https://www.facebook.com/CorrienteAlterna.Peru/"><b-img id="img_fb_footer" style="margin-right: 9px;" src="./facebook-f-brands.svg" fluid alt="Responsive image"></b-img></b-link>
              <b-link href="https://www.instagram.com/corrientealterna_peru/"><b-img id="img_fb_footer" class="imgFooter" style="width: 48px;" src="./instagram.svg" fluid alt="Responsive image"></b-img></b-link>
              <b-link href="https://www.youtube.com/user/CAEAPYV"><b-img id="img_fb_footer" class="imgFooter" style="width: 52px;" src="./youtube.svg" fluid alt="Responsive image"></b-img></b-link>
              <b-link href="https://www.linkedin.com/company/corrientealterna"><b-img id="img_fb_footer" class="imgFooter" style="width: 34px;" src="./linkedin.svg" fluid alt="Responsive image"></b-img></b-link>
            </div>
          </div>
          </div>
        </div>
    </div>
</template>
<script src="https://smtpjs.com/v3/smtp.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>

<script>
import Logo from '~/components/Logo.vue'
import Swal from 'sweetalert2'

export default {
  formulario:false,

  data() {
      return {
        selected: null,
        showModal:false,
        showCourses:false,
        showDiseno:false,
        number: null,
        numberDiseno:null,
        count:[
          { number:'01',name:'Ciclo'},
          { number:'02',name:'Ciclo'},
          { number:'03',name:'Ciclo'},
          { number:'04',name:'Ciclo'},
          { number:'05',name:'Ciclo'},
          { number:'06',name:'Ciclo'},
        ],
        cicles:[
          { name:"Procesos Creativos"},
          { name:"Innovation & Design Thinking"},
          { name:"Gestión de Proyectos"},
          { name:"Gestión Cultural y otras Plataformas"},
          { name:"Emprendimiento, Innovación y Sostenibilidad"},
          { name:"Presentación Profesional para la Empleabilidad"},
          { name:"Arte,Identidad y Cultura"},
          { name:"Arte y Diseño Gráfico"},
          { name:"Diseño Gráfico en el Perú: Evolución y Perspectivas"},
          { name:"Análisis y Crítica de la Imagen"},
          { name:"Social Computing y Evolución del diseño"},
          { name:"Ética y Legislación para el Diseño"},
          { name:"Introducción al Diseño y el Branding"},
          { name:"Tipografía Análoga"},
          { name:"Tipografía Digital"},
          { name:"Arquitectura de la información"},
          { name:"Diseño de Interfaces Web"},
          { name:"Diseño de Interfacer Móviles (Apps)"},
          { name:"Diseño Anatómico"},
          { name:"Dibujo Técnico"},
          { name:"Ilustración Análoga"},
          { name:"Ilustración Digital"},
          { name:"Diseño y Marketing Digital"},
          { name:"Desarrollo Front End"},
          { name:"Fundamentos Visuales: Composicion y Color Bidimensional"},
          { name:"Fundamentos Visuales: Composicion y Color Tridimensional"},
          { name:"Diseño,Marketing y Publicidad"},
          { name:"Tipología y Diagramación"},
          { name:"Fotografía Digital"},
          { name:"Experimientations & Desingn"},
          { name:"Ilustración y Vectorización"},
          { name:"Photoshop y Retoque Digital"},
          { name:"InDesing y Diseño Editorial"},
          { name:"After Effects y Motion Graphics"},
          { name:"Diseño y Modelado en 3D"},
          { name:"Dirección de Arte para Fotografía y Video"},
          { name:"Investigación Interdisiplinaria"},
          { name:"Master Project: Contrucción de Identidad a partir de las Artes"},
          { name:"Master Project: Diseño de Logo y Layout de Revista"},
          { name:"Master Project: Diseño Corporativo: logo y Stationary"},
          { name:"Master Project: Diseño de Packing"},
          { name:"Master Project: Manual de Marca"}
        ],
        ciclesInterior:[
          { name:"Procesos Creativos"},
          { name:"Innovation & Design Thinking"},
          { name:"Gestión de Proyectos"},
          { name:"Gestión Cultural y otras Plataformas"},
          { name:"Emprendimiento, Innovación y Sostenibilidad"},
          { name:"Presentación Profesional para la Empleabilidad"},
          { name:"Arte,Identidad y Cultura"},
          { name:"Historia del Mueble"},
          { name:"Diseño Interiores en el Perú: Evolución y Perspectivas"},
          { name:"Análisis y Crítica de la Arquitectura"},
          { name:"Tipologías Comerciales y Diseño a gran escala"},
          { name:"Trends Watching"},
          { name:"Introducción al Diseño de Interiores"},
          { name:"Dinámicas de espacio"},
          { name:"Instalaciones y Especialidades"},
          { name:"Branding e Identidad Comercial"},
          { name:"Usuario y Funcionalidad del Espacio Comercial"},
          { name:"Visual Merchandising"},
          { name:"Dibujo 1"},
          { name:"Dibujo 2"},
          { name:"Dibujo de Mobiliario 1"},
          { name:"Dibujo de Mobiliario 2"},
          { name:"Innovation Desing"},
          { name:"Comunicación Visual y Señalética"},
          { name:"Teoría del Color"},
          { name:"Antropometría y Ergonomía"},
          { name:"Materiales y Acabados 1"},
          { name:"Materiales y Acabados 2"},
          { name:"Iluminación"},
          { name:"Experiencias Modernas de Compra"},
          { name:"Herramientas Digitales para el Diseño"},
          { name:"Autocad 1"},
          { name:"Autocad 2"},
          { name:"Diseño y Modelado 3D"},
          { name:"Diseño, Modelado 3D & Augmented Reality"},
          { name:"Planeamiento y Supervisión de proyectos"},
          { name:"Investigación Interdisiplinaria"},
          { name:"Master Project: Loft"},
          { name:"Master Project: Oficinas & Coworking"},
          { name:"Master Project: Hospitality"},
          { name:"Master Project: Exhibiciones"},
          { name:"Master Project: Retail o Residencial"}
        ],

circles: [],
ciclo: [],

        ciclesMobile:[
          {
                number:'01',
                name:'ciclo',
                cursos:[
                  {name:"Procesos Creativos"},
                  {name:"Arte,Identidad y Cultura"},
                  {name:"Introducción al Diseño y el Branding"},
                  {name:"Diseño Anatómico"},
                  {name:"Fundamentos Visuales: Composicion y Color Bidimensional"},
                  {name:"Ilustración y Vectorización"},
                  {name:"Investigación Interdisiplinaria"}
                ],
                  cursosdiseno:[
                  {name:"Procesos Creativos"},
                  {name:"Arte,Identidad y Cultura"},
                  {name:"Introducción al Diseño de Interiores"},
                  {name:"Dibujo 1"},
                  {name:"Teoría del Color"},
                  {name:"Herramientas Digitales para el Diseño"},
                  {name:"Investigación Interdisiplinaria"}

                ],
          },
          {
                number:'02',
                name:'ciclo',
                cursos:[
                  {name:"Innovation & Design Thinking"},
                  {name:"Arte y Diseño Gráfico"},
                  {name:"Tipología Análoga"},
                  {name:"Dibujo Técnico"},
                  {name:"Fundamentos Visuales: Composicion y Color Tridimensional"},
                  {name:"Photoshop y Retoque Digital"},
                  {name:"Master Proyect: Contrucción de Identidad a partir de las Artes"}
                ],
                cursosdiseno:[
                  {name:"Innovation & Design Thinking"},
                  {name:"Historia del Mueble"},
                  {name:"Dinámicas de espacio"},
                  {name:"Dibujo 2"},
                  {name:"Antropometría y Ergonomía"},
                  {name:"Autocad 1"},
                  {name:"Master Proyect: Loft"}

                ],
          },

          {
                number:'03',
                name:'ciclo',
                cursos:[
                  {name:"Gestión de Proyectos"},
                  {name:"Diseño Gráfico en el Perú: Evolución y Perspectivas"},
                  {name:"Tipologia Digital"},
                  {name:"Ilustración Análoga"},
                  {name:"Diseño,Marketing y Publicidad"},
                  {name:"InDesing y Diseño Editorial"},
                  {name:"Master Proyect: Diseño de Logo y Layout de Revista"}
                ],
                cursosdiseno:[
                  {name:"Gestión de Proyectos"},
                  {name:"Diseño Interiores en el Perú: Evolución y Perspectivas"},
                  {name:"Instalaciones y Especialidades"},
                  {name:"Dibujo de Mobiliario 1"},
                  {name:"Materiales y Acabados 1"},
                  {name:"Autocad 2"},
                  {name:"Master Proyect: Oficinas & Coworking"}

                ],
          },
            {
                number:'04 ',
                name:'ciclo',
                cursos:[
                  {name:"Gestión Cultural y otras Plataformas"},
                  {name:"Análisis y Crítica de la Imagen"},
                  {name:"Arquitectura de la información"},
                  {name:"Ilustración Digital"},
                  {name:"Tipología y Diagramación"},
                  {name:"After Effects y Motion Graphics"},
                  {name:"Master Proyect: Diseño Corporativo: logo y Stationary"}
                ],
                cursosdiseno:[
                  {name:"Gestión Cultural y otras Plataformas"},
                  {name:"Análisis y Crítica de la Arquitectura"},
                  {name:"Branding e Identidad Comercial"},
                  {name:"Dibujo de Mobiliario 2"},
                  {name:"Materiales y Acabados 2"},
                  {name:"Diseño y Modelado 3D"},
                  {name:"Master Proyect: Hospitality"}

                ],
          },
            {
                number:'05',
                name:'ciclo',
                cursos:[
                  {name:"Emprendimiento, Innovación y Sostenibilidad"},
                  {name:"Social Computing y Evolución del diseño"},
                  {name:"Diseño de Interfaces Web"},
                  {name:"Diseño y Marketing Digital"},
                  {name:"Fotografía Digital"},
                  {name:"Diseño y Modelado en 3D"},
                  {name:"Master Proyect: Diseño de Packing"}
                ],
                cursosdiseno:[
                  {name:"Emprendimiento, Innovación y Sostenibilidad"},
                  {name:"Tipologías Comerciales y Diseño a gran escala"},
                  {name:"Usuario y Funcionalidad del Espacio Comercial"},
                  {name:"Innovation Desing"},
                  {name:"Iluminación"},
                  {name:"Diseño, Modelado 3D & Augmented Reality"},
                  {name:"Master Proyect: Exhibiciones"}

                ],
          },
            {
                number:'06',
                name:'ciclo',
                cursos:[
                  {name:"Presentación Profesional para la Empleabilidad"},
                  {name:"Ética y Legislación para el Diseño"},
                  {name:"Diseño de Interfacer Móviles (Apps)"},
                  {name:"Desarrollo Front End"},
                  {name:"Experimientations & Desingn"},
                  {name:"Dirección de Arte para Fotografía y Video"},
                  {name:"Master Proyect: Manual de Marca"}
                ],
                cursosdiseno:[
                  {name:"Presentación Profesional para la Empleabilidad"},
                  {name:"Trends Watching"},
                  {name:"Visual Merchandising"},
                  {name:"Comunicación Visual y Señalética"},
                  {name:"Experiencias Modernas de Compra"},
                  {name:"Planeamiento y Supervisión de proyectos"},
                  {name:"Master Proyect: Retail o Residencial"}

                ],
          }
        ],


        showModalOne:false,
        showModalTwo:false,
        options: [
          { value: null, text: 'Seleccione Genero' },
          { value: 'Masculino', text: 'Masculino' },
          { value: 'Femenino', text: 'Femenino' },
        ],
        selected_cursos: null,
        options_cursos: [
          { value: null, text: 'Selecione Curso' },
          { value: 'Artey & Negocio', text: 'Arte & Negocio' },
        ]
      }
    },
  components: {

  },
  mounted() {
    this.changeColor()

  },
  methods:{

      body(){
        document.querySelector('body').style.overflow="hidden"

      },
      bodyOut(){
        document.querySelector('body').style.overflow="auto"

      },
        setActive(active) {
          this.showModal = active;
        },

        setActive(active) {
            this.showCourses = active;
          },

    openButtonIndex(index) {
      this.showCourses=true
      // console.log('this.number', this.number)
      this.number = index
      this.circles = this.ciclesMobile[index].cursos
        //  console.log('this.ciclesMobile[index].cursos', )

    },

      openButtonIndexDiseno(id) {
      this.showDiseno=true
      this.numberDiseno = id
      this.ciclo = this.ciclesMobile[id].cursosdiseno
    },





    changeColor(){
      window.addEventListener('scroll', function(event) { // To listen for eve∫nt
      event.preventDefault();
        if (window.scrollY <= 160) { // Just an example
          document.getElementById("navbar").style.backgroundColor = "transparent"
          document.getElementById("icon").style.color = "#161615"
          document.getElementById("text_icon").style.color = "#161615"
          document.getElementById("img_logo").style.width = "15vh"
        } else {
          document.getElementById("navbar").style.backgroundColor = "#161615"
          document.getElementById("icon").style.color = "#ffffff"
          document.getElementById("text_icon").style.color = "#ffffff"
          document.getElementById("img_logo").style.width = "15vh"
        }
      });
    },
    enviarFormulario(){
   /* const Email = { send: function (a) { 
        return new Promise(function (n, e) { 
          a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; 
          var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",
           t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e);
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
            a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) },
             ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); 
             t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, 
             createCORSRequest: function (e, n) 
             { var t = new XMLHttpRequest; 
             return "withCredentials" in t ? 
             t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "002c6801-05eb-4727-b711-5d72c1199c02",
        Password : "f7a6a489-d928-4740-b905-7f280664e6d8",
        To : 'informes@corrientealterna.edu.pe',
        From : "landingcorrientealterna@gmail.com",
        Subject : `Landing Nuevas Carreras / ${document.getElementById("selected_cursos").value}`,
        Body : `<html>
        <p>Nombre: ${document.getElementById("name").value}</p>
        <p>Apellido: ${document.getElementById("apellido").value}</p>
        <p>DNI: ${document.getElementById("dni").value}</p>
        <p>Género: ${document.getElementById("selected").value}</p>
        <p>Email: ${document.getElementById("email").value}</p>
        <p>Telefono: ${document.getElementById("telefono").value}</p>
        <p>Curso: ${document.getElementById("selected_cursos").value}</p>
        </html>
        `
      }).then(
        Swal.fire("Listo!", "Se envio tu formulario correctamente!", "success")
      );
      this.showModal=false
      this.name=""
      this.apellido=""
      this.dni=""
      this.genero=""
      this.email=""
      this.telefono=""
      this.curso=""*/

        Swal.fire("Listo!", "Se envio tu formulario correctamente!", "success")

    },

   /* hideModal(item) {
      this.$refs[`modal-xl-${item}`].hide()
    },*/
  }
}
</script>


