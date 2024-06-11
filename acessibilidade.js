var linksContraste = document.querySelectorAll('nav a[data-contraste]');

linksContraste.forEach(linksContraste => linksContraste.addEventListener('click', function() {
    var dataContraste = this.dataset.contraste; 
    contraste(dataContraste); 
  }
));

function contraste(dataContraste) {
  var setId;

  if (dataContraste == 1) {
    setId = 'contrasteBranco';
  } else if (dataContraste == 2) {
    setId = 'contrastePreto';
  } else if (dataContraste == 3) {
    setId = 'contrasteAzul';
  } else {
    setId = ''
  }
  document.querySelector("body").setAttribute("id", setId);
  document.cookie = "contraste=" + setId + "";
}
var cookieContrasteBranco = document.cookie.indexOf('contrasteBranco');
var cookieContrastePreto = document.cookie.indexOf('contrastePreto');
var cookieContrasteAzul = document.cookie.indexOf('contrasteAzul');

var cookieTrue = '';
if (cookieContrasteBranco != -1) {
  cookieTrue = 1;
} else if (cookieContrastePreto != -1) {
  cookieTrue = 2;
} else if (cookieContrasteAzul != -1) {
  cookieTrue = 3;
} else {
  cookieTrue = '';
}

contraste(cookieTrue);

window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}


