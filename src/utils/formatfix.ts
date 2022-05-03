export function priceFormater (price:string) {
    return new Intl.NumberFormat('pt-BR',
    {style:'currency',
    currency:'BRL'

     }).format(Number(price))
}