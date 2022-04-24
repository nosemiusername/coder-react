const currencyFormat = (num) => {
    return new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(num);
}

export { currencyFormat, };