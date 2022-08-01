import './styles.css';
import { ReactComponent as Seta } from 'assets/images/Seta.svg';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
        <button className="btn btn-primary">
          <h6>Inicie agora a sua busca</h6>
        </button>
      <div className="btn-icon-container">
        <Seta />
      </div>
    </div>
  );
};

export default ButtonIcon;
