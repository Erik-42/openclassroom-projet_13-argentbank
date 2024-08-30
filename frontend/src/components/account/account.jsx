import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './account.module.scss';

/**
 * Component displaying an account's balance preview.
 * @component
 * @example
 * const title = 'Account title';
 * const amount = '2,082.78';
 * const desc = 'Lorem ipsum dolor sit amet...';
 * return (
 *  <AccountBalance title={title} amount={amount} desc={desc} />
 * )
 */
function AccountBalance({ title, serial, amount, desc, id }) {
  return (
    <section className={style.account}>
      <div className={style.accountContentWrapper}>
        <h3 className={style.accountTitle}>{title} ({serial})</h3>
        <p className={style.accountAmount}>&#36;{amount}</p>
        <p className={style.accountAmountDescription}>{desc}</p>
      </div>
      <div className={`${style.accountContentWrapper} ${style.cta}`}>
        <Link to={`/account/${id}`} className={style.transactionButton}>View transactions</Link>
      </div>
    </section>
  );
}

AccountBalance.propTypes = {
  title: PropTypes.string.isRequired,
  serial: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default AccountBalance;
