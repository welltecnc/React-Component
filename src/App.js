import logo from './';
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Carros from './componentes/Carros'
import Parceiros from './componentes/Parceiros'


export default function App() {

  let tituloCab="Loja de Veiculos"
  let parag="Seja bem vindo a loja"
  let carros =['BMW','PORSHI','AUDI','MERCEDES']
  let parce="Nossos Parceiros"
  let total = 2 + 5
  let link = "http://www.google.com.br"
 


  return (
    <>
      <Cabecalho tituloCab={tituloCab}parag={parag}/>
      <Carros carros={carros}/>
      <Parceiros parce ={parce} total={total} link={link}/>
    
    </>
  );
}


