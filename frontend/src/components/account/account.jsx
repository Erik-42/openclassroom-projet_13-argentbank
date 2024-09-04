import styled from "./account.module.scss";

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

export default function Account() {
	return (
		<section className={styled.account}>
			<article className={styled.account__wrapper}>
				<h3 className={styled.account__wrapper__title}>
					Argent Bank Checking (x8349)
				</h3>
				<div className={styled.account__wrapper__container}>
					<p className={styled.account__wrapper__container__amount}>
						$2,082.79
					</p>
					<div className={styled.account__wrapper__container__cta}>
						<button
							className={
								styled.account__wrapper__container__cta__transactionButton
							}
						>
							View transactions
						</button>
					</div>
				</div>
				<p className={styled.account__wrapper__description}>
					Available Balance
				</p>
			</article>

			<article className={styled.account__wrapper}>
				<h3 className={styled.account__wrapper__title}>
					Argent Bank Savings (x6712)
				</h3>
				<div className={styled.account__wrapper__container}>
					<p className={styled.account__wrapper__container__amount}>
						$10,928.42
					</p>
					<div className={styled.account__wrapper__container__cta}>
						<button
							className={
								styled.account__wrapper__container__cta__transactionButton
							}
						>
							View transactions
						</button>
					</div>
				</div>
				<p className={styled.account__wrapper__description}>
					Available Balance
				</p>
			</article>

			<article className={styled.account__wrapper}>
				<h3 className={styled.account__wrapper__title}>
					Argent Bank Credit Card (x8349)
				</h3>
				<div className={styled.account__wrapper__container}>
					<p className={styled.account__wrapper__container__amount}>$184.30</p>
					<div className={styled.account__wrapper__container__cta}>
						<button
							className={
								styled.account__wrapper__container__cta__transactionButton
							}
						>
							View transactions
						</button>
					</div>
				</div>
				<p className={styled.account__wrapper__description}>Current Balance</p>
			</article>
		</section>
	);
}
