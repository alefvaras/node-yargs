const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    demandOption: true,
    //    default: '5',
    describe: 'base de la tabla',
    type: 'string'
  }).
  option('l', {
    alias: 'listar',
    demandOption: false,
    default: false,
    describe: 'lista la tabla',
    type: 'boolean'
  }).
  option('h', {
    alias: 'hasta',
    demandOption: false,
    default: false,
    describe: 'hasta que tabla',
    type: 'integer'
  })
  //verficiar tipo
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'no puede ser letras';
    }
    return true
  })
  .argv;
module.exports =argv;
