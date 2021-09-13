// instrunção jQuery  (jQuery é uma biblioteca de funções JavaScript que interage com o HTML)
// instrução para que se inicie o script apenas quando o documento estiver todo carregado
$(document).ready(function() {

    // progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: "#64DAF9",
        stroke: 8,
        duration: 1400,
        from: { color: '#AAA'},
        to: {color: '#65DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }

    });

    circleA.animate(1.0);

});