export const tempoDecorrido = (tempoSegundos) => {
  if (parseInt(tempoSegundos) < 60) {  
    return                                                "agora há pouco"; 
  } else 
  if (parseInt(tempoSegundos) < 120) {
    return                                                "1 minuto atrás"; 
  } else 
  if (tempoSegundos < 3600) {
    return (parseInt(tempoSegundos)/60).toFixed() +       " minutos atrás"; 
  } else
  if (parseInt(tempoSegundos) < 7200) {
    return parseInt(tempoSegundos/(3600)).toFixed() +     " hora atrás"; 
  } else
  if (parseInt(tempoSegundos) < 86400) {
    return parseInt(tempoSegundos/(3600)).toFixed() +     " horas atrás"; 
  } else
  if (parseInt(tempoSegundos) < 172800) {
    return parseInt(tempoSegundos/(86400)).toFixed() +    " dia atrás"; 
  } else 
  if (parseInt(tempoSegundos) < 604800) {
    return parseInt(tempoSegundos/(86400)).toFixed() +    " dias atrás"; 
  } else
  if (parseInt(tempoSegundos) < 1209600) {
    return parseInt(tempoSegundos/(604800)).toFixed() +   " semana atrás"; 
  }
  else {
    return parseInt(tempoSegundos/(60480099)).toFixed() + " semanas atrás"; 
  }
}
