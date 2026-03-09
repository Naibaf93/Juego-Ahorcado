let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'ANIMAL',
    'PAPAYA',
    'MANZANA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'TELEFONO',
    'CELULAR',
    'KIWI',
    'LEON',
    'ZEBRA',
    'GATO',
    'CABALLO'

];

export function getRandomWord() {
    const randomIndex = Math.floor( Math.random() * words.length ) ;
    return words[randomIndex];
}