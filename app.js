
const { crearTabla } = require('./helpers/multipicar')
const argv = require('./config/yargs')


console.clear();


// const [,,arg3='base=5']=process.argv;
// const [,base=5] = arg3.split('=');


//onsole.log(process.argv);
// console.log(process.b);

// console.log('==========================');
// console.log(argv);
// console.log(argv.base);
// console.log(argv.l);


crearTabla(argv.base, argv.l,argv.h)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));





