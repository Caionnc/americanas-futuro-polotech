/* 6# - ExercÃ­cio
Aqui no Brasil a temperatura Ã© medida em Celsius. PorÃ©m, vocÃª foi contratado para uma empresa americana para trabalhar com programaÃ§Ã£o 
JavaScript e agora deverÃ¡ utilizar Fahrenheit no seu novo lar. 
Crie uma calculadora que faÃ§a essa conversÃ£o e escreva no terminal a seguinte mensagem.

  RETORNO:
  "A temperatura de **VARIAVEL_EM_CELSIUS**Â°C Ã© igual a Fahrenheit: **VARIAVEL_QUE_FAZ_A_CONTA**Â°F"
  
  OBS:
  1) FÃ³rmula para o cÃ¡lculo ||  Â°F = Â°C x 9 Ã· 5 + 32
  2) Para ver se seu algoritmo estÃ¡ correto, utilize o site https://www.metric-conversions.org/pt-br/temperatura/celsius-em-fahrenheit.htm
*/

const temperatura = Number(35);

function conversorDeTemperatura(temperaturaC) {
  let temperaturaF = Number(0);
  return (temperaturaF = (temperaturaC * 9/5) + 32);
}

console.log(conversorDeTemperatura(temperatura));
