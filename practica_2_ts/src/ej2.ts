function padLeft(value: string, padding: number | string): string {
     // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
    // si padding es una cadena, return padding + value
    if(typeof padding == 'string'){
        return padding + value;
    } 
    else{
        return `${Array(padding+1).join(' ')}${value}`
    }

    }
    
console.log('[Ejercicio 4.2]', `
     ${padLeft('hola', 0)}
     ${padLeft('Franco', 'Astegiano')}
     ${padLeft('Miracle', 2023)}
     ${padLeft('', '')}
     ${padLeft('End', 99)}`);