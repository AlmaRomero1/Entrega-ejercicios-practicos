function getNameDias(mes){
    if(Number.isNaN(mes )) return false;

    if(mes < 1 || mes > 12) return false;

    mes--;


    const data = [
        {
            nombre: 'Enero',
            días: 31
        },
        {
            nombre: 'Febrero',
            días: 28
        },
        {
            nombre: 'Marzo',
            días: 31
        },
        {
            nombre: 'Abril',
            días: 30
        },
        {
            nombre: 'Mayo',
            días: 31
        },
        {
            nombre: 'Junio',
            días: 30
        },
        {
            nombre: 'Julio',
            días: 31
        },
        {
            nombre: 'Agosto',
            días: 31
        },
        {
            nombre: 'Septiembre',
            días: 30
        },
        {
            nombre: 'Octubre',
            días: 31
        },
        {
            nombre: 'Noviembre',
            días: 30
        },
        {
            nombre: 'Diciembre',
            días: 31
        },
    ];
    return data[mes];
}


const numMes = parseInt(prompt('Ingrese el mes del año en múmeros', ''))

const resultado = getNameDias(numMes);

if(resultado){
    alert(`El mes ${resultado.nombre} tiene ${resultado.días} días`)
} else{
    alert('Mes inválido')
}