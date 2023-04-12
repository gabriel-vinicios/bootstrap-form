document.getElementById('themes').addEventListener('change', function () {
    var theme = this.value;
    var primaryColor;
    var secondaryColor;

    switch (theme) {
        case 'cerulean':
            primaryColor = '#007BA7';
            secondaryColor = '#8FD4E8';
            break;
        case 'cosmo':
            primaryColor = '#2780E3';
            secondaryColor = '#E7E7E7';
            break;
        case 'cyborg':
            primaryColor = '#2A9FD6';
            secondaryColor = '#2A2A2A';
            break;
        case 'darkly':
            primaryColor = '#375A7F';
            secondaryColor = '#222222';
            break;
        case 'flatly':
            primaryColor = '#18BC9C';
            secondaryColor = '#EEEEEE';
            break;
        case 'journal':
            primaryColor = '#EB6864';
            secondaryColor = '#EFEFEF';
            break;
        case 'litera':
            primaryColor = '#4582EC';
            secondaryColor = '#F2F2F2';
            break;
        case 'lumen':
            primaryColor = '#428bca';
            secondaryColor = '#f0f0f0';
            break;
        case 'lux':
            primaryColor = '#1a1a1a';
            secondaryColor = '#FFFFFF';
            break;
        case 'materia':
            primaryColor = '#2196F3';
            secondaryColor = '#EEEEEE';
            break;
        case 'minty':
            primaryColor = '#78C2AD';
            secondaryColor = '#FFFFFF';
            break;
        case 'pulse':
            primaryColor = '#9B59B6';
            secondaryColor = '#EEEEEE';
            break;
        case 'sandstone':
            primaryColor = '#CBA052';
            secondaryColor = '#FFFFFF';
            break;
        case 'simplex':
            primaryColor = '#D9230F';
            secondaryColor = '#FFFFFF';
            break;
        case 'sketchy':
            primaryColor = '#F7BDAE';
            secondaryColor = '#2A2A2A';
            break;
        case 'slate':
            primaryColor = '#4A515B';
            secondaryColor = '#FFFFFF';
            break;
        case 'solar':
            primaryColor = '#FFA500';
            secondaryColor = '#FFFFFF';
            break;
        case 'spacelab':
            primaryColor = '#3399FF';
            secondaryColor = '#FFFFFF';
            break;
        case 'superhero':
            primaryColor = '#DF691A';
            secondaryColor = '#FFFFFF';
            break;
        case 'united':
            primaryColor = '#E95420';
            secondaryColor = '#FFFFFF';
            break;
        case 'yeti':
            primaryColor = '#008cba';
            secondaryColor = '#FFFFFF';
            break;
        default:
            primaryColor = '#007BFF';
            secondaryColor = '#6C757D';
    }
    document.body.style.backgroundColor = primaryColor;
    document.body.style.color = secondaryColor;
    // Mudando a cor de fundo dos elementos com a classe "bg-primary"
    var primaryElements = document.getElementsByClassName('bg-primary');
    for (var i = 0; i < primaryElements.length; i++) {
        primaryElements[i].style.backgroundColor = primaryColor;
    }

    // Mudando a cor de fundo dos elementos com a classe "bg-secondary"
    var secondaryElements = document.getElementsByClassName('bg-secondary');
    for (var i = 0; i < secondaryElements.length; i++) {
        secondaryElements[i].style.backgroundColor = secondaryColor;
    }

    // Mudando a cor do botão com a classe "btn-primary"
    var primaryButtons = document.getElementsByClassName('btn-primary');
    for (var i = 0; i < primaryButtons.length; i++) {
        primaryButtons[i].style.backgroundColor = primaryColor;
        primaryButtons[i].style.borderColor = primaryColor;
    }

    // Mudando a cor do botão com a classe "btn-secondary"
    var secondaryButtons = document.getElementsByClassName('btn-secondary');
    for (var i = 0; i < secondaryButtons.length; i++) {
        secondaryButtons[i].style.backgroundColor = secondaryColor;
        secondaryButtons[i].style.borderColor = secondaryColor;
        secondaryButtons[i].style.color = primaryColor;
    }
});  