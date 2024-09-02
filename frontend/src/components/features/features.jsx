import styled from "./features.module.scss";
import chatIcon from "../../assets/img/icones/icon-chat.png";
import moneyIcon from "../../assets/img/icones/icon-money.png";
import securityIcon from "../../assets/img/icones/icon-security.png";

export default function Features() {
	const featuresData = [
		{
			icon: chatIcon,
			title: "You are our #1 priority",
			text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
		},
		{
			icon: moneyIcon,
			title: "More savings means higher rates",
			text: "The more you save with us, the higher your interest rate will be!",
		},
		{
			icon: securityIcon,
			title: "Security you can trust",
			text: "We use top of the line encryption to make sure your data and money is always safe.",
		},
	];

	return (
		<div className={styled.features}>
			{featuresData.map((feature, index) => (
				<div key={index} className={styled.features__container}>
					<img
						src={feature.icon}
						alt={feature.title}
						className={styled.features__icon}
					/>
					<h3 className={styled.features__title}>{feature.title}</h3>
					<p className={styled.features__text}>{feature.text}</p>
				</div>
			))}
		</div>
	);
}
