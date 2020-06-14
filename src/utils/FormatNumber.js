export default function Fetch(number){
    var price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
    return price
}
