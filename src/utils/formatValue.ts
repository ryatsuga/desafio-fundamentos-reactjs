function formatValue (value: number, type?: 'income' | 'outcome'): string {

const valueCurrency = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

if (type==='outcome') {
  return '- ' + valueCurrency;
}
if (type==='income') {
  return valueCurrency;
}

return valueCurrency;

}

export default formatValue;
