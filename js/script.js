window.onload = function() {
    var card_nums =[1,2,3,4,5,6,7,8,9,'King','Queen','Jack','Ace'];
    var icon_type = [1,2,3,4];
    window.variables = {
        number: card_nums[Math.floor(Math.random() * card_nums.length)],
        icon: card_nums[Math.floor(Math.random() *icon_type.length)]
    };
    render(window.variables);
}

function render(variables = {}) {

    let cover = ['♠',' ♥','&#9752;','&#9830;'];
    let icon = cover[Math.floor(Math.random() * 3)]
    if ((icon == '&#9752;')||(icon == '♠')){
        var color = 'black';
    }else{color='red';}

    let num = variables.number;
   
  if (variables.card_nums == 1) {
    cover = "<div class='cover'></div>";
  }
    //conviene hacer la logica del icono afuera, la variable el sting del icono
    document.querySelector("#id_updater").innerHTML = 
    `<section class="card card--heart" value="${icon}" style="color: ${color};">
        <div class="card__inner card__inner--centered">
            <div class="card__column">
                <div class="card__symbol">${num}</div>
                <div class="card__symbol">${num}</div>
            </div>
        </div>
    </section>
        `;



}

