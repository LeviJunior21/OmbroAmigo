const categorias = {
  1:  {categoria: 'Conselhos',       color: 'gray'   },
  2:  {categoria: 'Amor',            color: 'red'    },
  3:  {categoria: 'Família',         color: 'green'  },
  4:  {categoria: 'Dinheiro',        color: 'white'  },
  5:  {categoria: 'Saúde',           color: 'blue'   },
  6:  {categoria: 'Amizade',         color: 'purple' },
  7:  {categoria: 'Espiritualizade', color: 'pink'   },
  8:  {categoria: 'Trabalho',        color: 'white'  },
  9:  {categoria: 'Diversão',        color: 'orange' },
  10: {categoria: 'Sexualidade',     color: 'red'    },
  11: {categoria: 'Outro',           color: 'brown'  }
}

function categoriasSelecionadas(categoria) {
  switch (categoria) {
    case 1:
      return categorias[1];
    case 2:
      return categorias[2];
    case 3:
      return categorias[3];
    case 4:
      return categorias[4];
    case 5:
      return categorias[5];
    case 6:
      return categorias[6];
    case 7:
      return categorias[7];
    case 8:
      return categorias[8];
    case 9:
      return categorias[9];
    case 10:
      return categorias[10];
    case 11:
      return categorias[11];
    default:
      return categorias[1];
  }
}

export { categoriasSelecionadas, categorias } 
