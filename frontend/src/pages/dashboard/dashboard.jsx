import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../slice/userSlice";
import styled from "./dashboard.module.scss";
import Account from "../../components/account/account";
import EditName from "../../components/editName/editName";

export function Dashboard() {
	const token = useSelector((state) => state.token.token);
	const dispatch = useDispatch();
	const firstname = useSelector((state) => state.user.firstname);
	const lastname = useSelector((state) => state.user.lastname);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		fetch("http://localhost:3001/api/v1/user/profile", {
			headers: {
				"content-type": "application/json",
				Authorization: "Bearer " + token,
			},
			method: "POST",
			body: JSON.stringify({}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data.body);
				dispatch(
					setUser({
						firstname: data.body.firstName,
						lastname: data.body.lastName,
					})
				);
			});
	}, [dispatch, token]);

	return (
		<div className={styled.dashboard}>
			<div className={styled.dashboard__header}>
				<h1 className={styled.dashboard__header__name}>
					Welcome back
					<br />
					{firstname} {lastname} !
				</h1>
				<button
					className={styled.dashboard__header__editButton}
					onClick={openModal}
				>
					Edit Name
				</button>
			</div>

			<h2 className="sr-only">Accounts</h2>
			<Account />
			<EditName isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
}
