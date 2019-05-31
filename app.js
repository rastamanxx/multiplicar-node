const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.green(`El archivo es ${archivo}`)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

//console.log(multiplicar);

//let base = '6';

// console.log(process.argv)
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv.base)
//console.log('Limite: ', argv.limite)
//console.log(argv2)

/*crearArchivo(base)
    .then(archivo => console.log(`El archivo es ${archivo}`))
    .catch(e => console.log(e));*/