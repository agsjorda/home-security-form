import React from "react";

interface Details {
	formData: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
	};
	handleChange: (name: string, value: string) => void;
}

const StepEightForm = ({ formData, handleChange }: Details) => {
	const userDetails = [
		{ name: "firstName" },
		{ name: "lastName" },
		{ name: "email" },
		{ name: "phone" },
	];

	return (
		<>
			<h2 className="mb-4">Step 8: Your Details</h2>
			{userDetails.map((user) => (
				<div className="mb-4" key={user.name}>
					<label htmlFor={user.name}>{user.name}: </label>
					<input
						type="text"
						id={user.name}
						name={user.name}
						placeholder={user.name}
						onChange={(e) => {
							handleChange(`${user.name}`, e.target.value);
						}}
						className="input input-bordered input-primary input-sm w-full max-w-xs ml-2 mt-2"
					/>
				</div>
			))}
		</>
	);
};

export default StepEightForm;
