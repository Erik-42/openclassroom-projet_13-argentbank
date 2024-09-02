import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../slice/userSlice";
import styled from "./editName.module.scss";
import PropTypes from "prop-types"; // Import de PropTypes

// Définition des PropTypes pour le composant
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

	const handleSave = () => {
		// mise a jour de l'utilisateur dans le store
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
			});

		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className={styled.modalOverlay}>
			<div className={styled.modal}>
				<h2>Edit Name</h2>
				<form>
					<div className={styled.inputGroup}>
						<label htmlFor="firstname">First Name</label>
						<input
							id="firstname"
							type="text"
							value={newFirstname}
							onChange={(e) => setNewFirstname(e.target.value)}
						/>
					</div>
					<div className={styled.inputGroup}>
						<label htmlFor="lastname">Last Name</label>
						<input
							id="lastname"
							type="text"
							value={newLastname}
							onChange={(e) => setNewLastname(e.target.value)}
						/>
					</div>
					<div className={styled.buttonGroup}>
						<button
							type="button"
							onClick={handleSave}
							className={styled.saveButton}
						>
							Save
						</button>
						<button
							type="button"
							onClick={onClose}
							className={styled.cancelButton}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
