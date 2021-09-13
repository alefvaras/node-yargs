const fs = require('fs');
const colors = require('colors');
const path = require('path');
const crearTabla = async (base = 5, listar = false,hasta=10 ) => {

    try {
        console.log('====================================');
        console.log(`Tabla del ${base}`);
        let salida = '';

        for (let i = 1; i <= hasta; i++) {


            salida += `${colors.green(base)} ${colors.trap('x')} ${i} = ${i * base} \n`;

        }
        console.log(listar);
        if (listar) {
            console.log(salida)
        }

        // fs.writeFile(`tabla-${base}.txt,`,salida,(err)=>{
        //     if (err) throw err;
        //     console.log(`Tabla de ${base} creada`);
        // })

        await fs.writeFileSync(`./salida/tabla-${base}.txt,`, salida);
        //  console.log(`Tabla de ${base} creada`);

        return path.basename(`${path.isAbsolute}./tabla-${base}.txt`);

    } catch (error) {
        throw error;
    }

}

//redundante
// module.exports={
//     crearTabla: crearTabla
// }

module.exports = {
    crearTabla
}