const words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'ANIMAL',
    'PAPAYA',
    'MANZANA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'TELEFONO',
    'CELULAR'

];

export function getRandomWord() {
    const randomIndex = Math.floor( Math.random() * words.length ) ;
    return words[randomIndex];
}