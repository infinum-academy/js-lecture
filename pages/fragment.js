import { observer } from 'mobx-react';
import CookieModal from '../components/CookieModal';

function Fragment() {
  const [isModalVisible, setIsModalVisible] = React.useState(true);

  function onModalClose() {
    setIsModalVisible(false);
  }

  return (
    <>
      <article>
        <h1>Lorem ipsum</h1>
        <p>
          Raclette church-key chambray, non activated charcoal pork belly cillum cronut. Taiyaki
          subway tile cliche intelligentsia tempor ramps. Vice exercitation non coloring book hella.
          Tumeric farm-to-table aliqua meditation woke kombucha. Helvetica chicharrones kitsch
          tumeric culpa. Ramps occaecat enamel pin laborum.
        </p>
        <p>
          Raclette church-key chambray, non activated charcoal pork belly cillum cronut. Taiyaki
          subway tile cliche intelligentsia tempor ramps. Vice exercitation non coloring book hella.
          Tumeric farm-to-table aliqua meditation woke kombucha. Helvetica chicharrones kitsch
          tumeric culpa. Ramps occaecat enamel pin laborum.
        </p>
      </article>
      {isModalVisible && <CookieModal onModalClose={onModalClose} /> }
    </>
  );
}

export default observer(Fragment);
