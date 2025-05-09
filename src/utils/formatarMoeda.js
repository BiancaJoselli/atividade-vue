export function formatarMoeda(valor) {
    if (typeof valor !== 'number') {
        throw new Error('O valor deve ser um número');
    }

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formatter.format(valor);
}