const categorias = [
  {categoria: 'Todas Categorias', color: 'red'    , indice: 0}, 
  {categoria: 'Conselhos',        color: 'gray'   , indice: 1},
  {categoria: 'Amor',             color: 'red'    , indice: 2},
  {categoria: 'Família',          color: 'green'  , indice: 3},
  {categoria: 'Dinheiro',         color: 'white'  , indice: 4},
  {categoria: 'Saúde',            color: 'blue'   , indice: 5},
  {categoria: 'Amizade',          color: 'purple' , indice: 6},
  {categoria: 'Espiritualizade',  color: 'pink'   , indice: 7},
  {categoria: 'Trabalho',         color: 'white'  , indice: 8},
  {categoria: 'Diversão',         color: 'orange' , indice: 9},
  {categoria: 'Sexualidade',      color: 'red'    , indice: 10},
  {categoria: 'Outro',            color: 'brown'  , indice: 11}
]

const buscarCategoria = (categoria) => {
  for(var i = 0; i < categorias.length; i++) {
    if (categorias[i].categoria == categoria) {
      return categorias[i].indice;
    }
  }
}

export { categorias, buscarCategoria } 
