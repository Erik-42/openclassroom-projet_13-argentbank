import bannerImage from "../../assets/img/banner/bank-tree.jpeg";
import styled from "./heroBanner.module.scss";

export default function HeroBanner() {
	return (
		<div className={styled.hero}>
			<img
				src={bannerImage}
				className={styled.hero__banner__image}
				alt="couverture"
			/>

			<section className={styled.hero__content}>
				<p className={styled.hero__content__subtitle}>No fees.</p>
				<p className={styled.hero__content__subtitle}>No minimum deposit.</p>
				<p className={styled.hero__content__subtitle}>High interest rates.</p>
				<p className={styled.hero__content__text}>
					Open a savings account with Argent Bank today!
				</p>
			</section>
		</div>
	);
}
