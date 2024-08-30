import styled from './footer.module.scss';

/**
 * Component displaying the footer.
 * @component
 * @example
 * return (
 *  <Footer />
 * )
 */

export default function Footer() {
  return (
    <footer className={styled.footer}>
      <p className={styled.footer__text}>Copyright 2024 Argent Bank</p>
    </footer>
  );
}
