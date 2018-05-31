let years = [];
for(let i = 2007; i>1900; i--){
    years.push(i);
}

export const spanish = {
    are_you   : "Eres tú...?",

    survey_title: 'Encuesta de prueba',

    intro: `<p>¡Gracias por visitar el garaje Soap & Glory! Valoramos tus pensamientos y comentarios. Realice esta encuesta y recibirá un cupón de $ 10.</p>
    <p>Además, en función de sus respuestas, es posible que lo inviten a probar una nueva tecnología en la que puede proporcionar una respuesta utilizando la cámara web / cámara y el micrófono de su dispositivo. Recibirá un incentivo adicional por su participación. Esto es completamente opcional y puede optar por rechazarlo.</p>
    <p>&nbsp;</p>`,
    button_name: "Continuar",
    back: "Espalda",
    record_video: "Grabar video",
    re_record_video: "Volver a grabar el video",
    video_uploaded_success: "Gracias, tu video ha sido agregado a la encuesta.",
    re_record_video_message: "Si desea volver a grabar su video, presione el enlace Volver a grabar a continuación. De lo contrario, presione el botón de terminar encuesta para completar.",
    terms_condition_heading: "Terms & Conditions", 
    terms_condition: `<p>No Purchase necessary.  Offer open to all US residents who are 21 years of age or older.   Offer Valid DATES of specific event, 2018 ("Offer Period"). To enter, complete and submit The Nielsen Company survey (“Survey”) and take a screenshot of the Code presented on the Thank You page to a Twisted Tea Crew Member. The Survey is located at INSERT URL and must be completed no later than 11:59 PM ET DATE.  This offer is limited to one (1) Code per person. Entrants must complete the Survey and present the redemption screen code on site during the program.  The offer cannot be redeemed later.   The Code cannot be sold or bought. Void if sold or exchanged for compensation. Any unused value will be forfeited. Code Terms of Use apply and can be found at the Code redemption site: WEBSITE.   Cannot be combined with other offers.  Additional limitations may apply. Void where prohibited by law.  The Nielsen Company reserves the right to discontinue this offer at any time.</p>`,
    terms_condition_label: "Estoy de acuerdo.",
    labels: {
        q1: "<span>Q1</span> Eres tú...?",
        q2: "<span>Q2</span> ¿En qué año naciste?",
        q3: "<span>Q3</span> Antes de visitar el jabón & amp; Glory Garage en Bonnaroo, ¿alguna vez has oído hablar de Soap & amp; ¿Gloria?",
        q4: "<span>Q4</span> Antes de visitar el jabón & amp; Glory Garage en Bonnaroo, ¿alguna vez ha utilizado alguno de sus productos?",
        q5: "<span>Q5</span> ¿Qué jabón & amp; ¿Has usado los productos Glory? <em> Seleccione todas las opciones que correspondan. </ em>",
        q6: "<span>Q6</span> ¿Qué hiciste en el jabón & amp; ¿Tienda de la gloria? <em> Seleccione todas las opciones que correspondan. </ em>",
        q7: "<span>Q7</span> Basado en la impresión de que el patrocinio de Bonnaroo le brinda información sobre Soap & amp; Glory, ¿en qué medida estás de acuerdo o en desacuerdo con lo siguiente? Me hace pensar en Soap & amp; Glory es ...",
        q8: "<span>Q8</span> En una escala no tan única y diferente [1] a muy única y diferente [5], ¿dónde colocaría la activación de esta marca?",
        q9: "<span>Q9</span> Si estuviera comprando cosméticos en los próximos seis meses, ¿cómo afectaría este patrocinio de Bonnaroo a su probabilidad de considerar Soap & amp; ¿Gloria?",
        q10: "<span>Q10</span> ¿Qué posibilidades hay de recomendar a tus amigos o familiares comprar Soap & amp; Productos Glory?",
        q11: "<span>Q11</span> ¿Cuál de los siguientes cosméticos ha usado en el último mes? <Em> Seleccione todos los que apliquen </ em>",
        q12: `<label><span>Q12</span></label>
        <p>Para la próxima pregunta, nos gustaría analizar con más detalle sus percepciones de Soap & amp; Gloria.</p>
        <p>Encontramos que obtenemos respuestas más ricas al hacer que grabes un video en lugar de escribir tu respuesta.</p>
        <p>Mientras habla y responde nuestra pregunta, nos gustaría que utilice la cámara web / cámara y el micrófono de su dispositivo para capturar su respuesta. Sus respuestas en video se usarán estrictamente para los fines de esta investigación.</p>
        <p>Para grabar una respuesta de video, recibirá un incentivo adicional.</p>
        <p>Para que la grabación sea lo más clara posible, lo buscamos para:</p>
        <ul>
            <li>Proporcione todos los detalles que pueda</li>
            <li>Asegúrate de tener mucha luz para que podamos verte claramente</li>
            <li>Evite lugares con mucho ruido de fondo para que podamos escucharlo claramente</li>
            <li>Muéstranos, si puedes, muéstranos a qué te refieres con sostener un artículo para que lo veamos</li>
            <li>Relax and have fun!</li>
        </ul>
        <label>¿Te gustaría participar?</label>`,
        q13: `<p>¿Qué piensas de Soap & amp; ¿Gloria estando en Bonnaroo? Cuéntanos en detalle sobre lo que hiciste en el jabón y amp; Glory Garage.</p>
        <p>¿Cuál fue tu parte favorita? Si pudiera contarle a Soap & amp; Gloria una cosa sobre tu generación y qué significa la belleza para ti, ¿qué les dirías?</p>`,
    },

    questions: {
        q1: {type: 'seleccionar', values: ['Hombre', 'Mujer', 'No me identifico con ninguno']},
        q2: {type: 'seleccionar', values: years},
        q3: {type: 'seleccionar', values: ['Sí', 'No', 'No estoy seguro / no sé']},
        q4: {type: 'seleccionar', values: ['Sí', 'No', 'No estoy seguro / no sé']},
        q5: {type: 'cambiar', values: ['pregunta uno', 'pregunta dos']},
        q6: {type: 'switch', values: ['Me terminé el maquillaje', 'Usé el fotomatón', 'Tomé muestras de los productos', 'Entré en el sorteo', 'Comprometí con el embajador de la marca', 'Otro', 'Ninguna de las anteriores'] },
        
        q7a: {type: 'radio', título: 'Para alguien como yo', values: ['Muy de acuerdo', 'De acuerdo', 'Ni de acuerdo ni en desacuerdo', 'En desacuerdo leve', 'Muy en desacuerdo']},
        q7b: {type: 'radio', título: 'Auténtico', values: ['Muy de acuerdo', 'De acuerdo', 'Ni de acuerdo ni en desacuerdo', 'No estoy de acuerdo', 'Muy en desacuerdo']},
        q7c: {type: 'radio', título: 'Diversión', values: ['Muy de acuerdo', 'De acuerdo', 'Ni de acuerdo ni en desacuerdo', 'No estoy de acuerdo', 'Muy en desacuerdo']},
        q7d: {type: 'radio', título: 'Genial', values: ['Muy de acuerdo', 'De acuerdo', 'Ni de acuerdo ni en desacuerdo', 'No estoy de acuerdo', 'Muy en desacuerdo']},
        q7e: {type: 'radio', título: 'Es una marca moderna', values: ['Muy de acuerdo', 'De acuerdo', 'Ni de acuerdo ni en desacuerdo', 'En desacuerdo leve', 'Muy en desacuerdo']},
        q7f: {type: 'radio', título: 'Tiene productos innovadores', values: ['Muy de acuerdo', 'De acuerdo', 'Ni de acuerdo ni en desacuerdo', 'En desacuerdo leve', 'Muy en desacuerdo']},
       
        q8: {type: 'seleccionar', values: ['1. No tan único y diferente ',' 2 ',' 3. Algo único y diferente ',' 4 ',' 5. Muy único y diferente ']},
        q9: {type: 'select', values: ['Es más probable que considere Soap & Glory', 'Menos probabilidades de considerar Soap & Glory', 'No haga la diferencia', 'Menos probabilidades de considerar Soap & Glory']},
        q10: {type: 'seleccionar', values: ['Muy probable', 'Algo probable', 'Ni probable ni improbable', 'Algo improbable', 'Muy poco probable']},
        q11: {type: 'cambiar', values: ['Máscara', 'Blush', 'Fundación', 'Lápiz labial', 'Brillo labial', 'Bronceador', 'Gel de baño', 'Otro', 'Ninguno de estos ']},
        q12: {type: 'seleccionar', values: ['Suena bien, continuemos', 'No, gracias']}
    },
    thank: '¡Gracias!',
    thankyou: `Gracias por completar la encuesta de Soap & Glory, aquí está el código de efectivo de Live Nation Festival. Por favor escríbalo para su uso en una fecha posterior.`,
    coupon_error: 'Sorry you have reached your maximum allowed coupons.'
};