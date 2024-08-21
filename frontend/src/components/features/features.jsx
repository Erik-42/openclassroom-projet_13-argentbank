import styled from './features.module.scss';
// import icon from '../assets/img/icones/icon-chat.png';

export default function Features(icon, title, text) {
  return (
    <div className={styled.feature}>
      <img src={icon} alt={icon} className={styled.feature__icon} />
      <h3 className={styled.feature__title}>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
