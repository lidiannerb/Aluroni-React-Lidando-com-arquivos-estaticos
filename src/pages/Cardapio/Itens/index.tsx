import cardapio from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens (props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro, ordenador } = props;  //destruct do props

  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i"); //o "i" permite que a busca seja com maiuscula ou minuscula (insensitive)
    return regex.test(title);
  }

  function testaFiltro(id: number){
    if(filtro != null) return filtro === id;
    return true;
  }

  function ordenar (novaLista: typeof cardapio) {
    switch(ordenador){
      case "porcao":
        return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
      case "qtd_pessoas":
        return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
      case "preco":
        return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
      default:
        return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(item => testaBusca(item.title) &&
    testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[busca, filtro, ordenador])

  return (  //no styles.itens, itens é a classe que ta no arquivo styles.scss de Itens
    <div className={styles.itens}> 
      {lista.map(item => (
        <Item key={item.id} {...item} /> //o react precisa da key pra vincular o DOM com o virtual DOM
      ))}
    </div>
  );
};