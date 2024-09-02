import styled from "./error404.module.scss";
import error404 from "../../assets/img/error404.png";

export default function Error404() {
	return (
		<div className={styled.error}>
			<p className={styled.error__message}>
				Oops! La page que vous cherchez n&apos;existe pas.
			</p>
			<p className={styled.error__suggestion}>
				Il semble que vous soyez perdu. Retournez à la{" "}
				<a href="/">page d&apos;accueil</a>.
			</p>
			<h1 className={styled.error__title}>
				<img
					className={styled.error__title__image}
					src={error404}
					alt={error404}
				></img>
			</h1>
		</div>
	);
}
