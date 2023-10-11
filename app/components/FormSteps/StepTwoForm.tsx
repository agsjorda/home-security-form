// StepTwoForm.tsx
import React from "react";

interface StepTwoProps {
	formData: {
		zipCode: string;
		city: string;
		state: string;
	};
	isZipCodeValid: boolean | null;
	handleChange: (name: string, value: string) => void;
	handleZipCodeChange: (value: string) => void;
}

const StepTwoForm = ({
	formData,
	handleChange,
	handleZipCodeChange,
	isZipCodeValid,
}: StepTwoProps) => {
	return (
		<>
			<h2 className="text-gray-500">Step 2: What is your zip code?</h2>
			{/* Zip code input */}
			<div className="mb-4">
				<label htmlFor="zipCode">Zip Code:</label>
				<input
					type="text"
					id="zipCode"
					name="zipCode"
					value={formData.zipCode}
					onChange={(e) => {
						handleChange("zipCode", e.target.value);
						handleZipCodeChange(e.target.value);
					}}
					className="input input-bordered input-primary input-sm w-full max-w-xs ml-2 mt-2"
				/>
			</div>
			{/* Display auto-populated city and state */}
			{isZipCodeValid === true ? (
				// Check if ZIP code is valid
				<p className="mb-4">
					City: {formData.city}, State: {formData.state}
				</p>
			) : isZipCodeValid === false ? (
				<p style={{ color: "red" }} className="mb-4">
					Invalid ZIP Code
				</p>
			) : null}
		</>
	);
};

export default StepTwoForm;
