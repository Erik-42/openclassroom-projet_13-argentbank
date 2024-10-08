import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../slice/userSlice";
import styled from "./editName.module.scss";
import PropTypes from "prop-types";
import Loader from "../loader/loader";

EditName.propTypes = {
	// `isOpen` est un booléen qui détermine si la modal est ouverte ou fermée
	isOpen: PropTypes.bool.isRequired,

	// `onClose` est une fonction qui est appelée pour fermer la modal
	onClose: PropTypes.func.isRequired,
};

export default function EditName({ isOpen, onClose }) {
	const dispatch = useDispatch();
	const firstname = useSelector((state) => state.user.firstname);
	const lastname = useSelector((state) => state.user.lastname);
	const token = useSelector((state) => state.token.token);

	const [newFirstname, setNewFirstname] = useState(firstname);
	const [newLastname, setNewLastname] = useState(lastname);
	const [loading, setLoading] = useState(false);

	const handleSave = () => {
		setLoading(true);

		// Mise à jour de l'utilisateur dans le store
		dispatch(setUser({ firstname: newFirstname, lastname: newLastname }));

		// Envoyer éventuellement la mise à jour au serveur
		fetch("http://localhost:3001/api/v1/user/profile", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify({ firstName: newFirstname, lastName: newLastname }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("User updated:", data);
			})
			.catch((error) => {
				console.error("Error updating user:", error);
			})
			.finally(() => {
				setLoading(false);
				onClose();
			});
	};

	if (!isOpen) return null;

	return (
		<>
			{loading && <Loader />}{" "}
			<div className={styled.modal}>
				<div className={styled.modal__container}>
					<h2 className={styled.modal__container__title}>Edit Name</h2>
					<form>
						<div className={styled.modal__container__input}>
							<label htmlFor="firstname">First Name</label>
							<input
								id="firstname"
								type="text"
								value={newFirstname}
								onChange={(e) => setNewFirstname(e.target.value)}
							/>
						</div>
						<div className={styled.modal__container__input}>
							<label htmlFor="lastname">Last Name</label>
							<input
								id="lastname"
								type="text"
								value={newLastname}
								onChange={(e) => setNewLastname(e.target.value)}
							/>
						</div>
						<div className={styled.modal__container__button}>
							<button
								type="button"
								onClick={handleSave}
								className={styled.modal__container__button__saveButton}
							>
								Save
							</button>
							<button
								type="button"
								onClick={onClose}
								className={styled.modal__container__button__cancelButton}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
