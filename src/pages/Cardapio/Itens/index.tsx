import cardapio from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";

export default function Itens () {
  return (  //no styles.itens, itens é a classe que ta no arquivo styles.scss de Itens
    <div className={styles.itens}> 
      {cardapio.map(item => (
        <Item key={item.id} /> //o react precisa da key pra vincular o DOM com o virtual DOM
      ))}
    </div>
  );
};