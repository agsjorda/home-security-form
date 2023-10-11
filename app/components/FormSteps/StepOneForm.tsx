// Step1Form.tsx
import React from "react";

interface StepOneProps {
	formData: {
		propertyType: string;
	};
	handleChange: (name: string, value: string) => void;
}

const StepOneForm: React.FC<StepOneProps> = ({ formData, handleChange }) => {
	return (
		<>
			<h2 className="text-gray-500">
				Step 1: What type of property is this system for?
			</h2>
			<div>
				<input
					type="radio"
					id="owned"
					name="propertyType"
					value="Owned"
					checked={formData.propertyType === "Owned"}
					onChange={(e) => handleChange("propertyType", e.target.value)}
					className="radio radio-primary radio-sm m-2 align-middle"
				/>
				<label htmlFor="owned" className="ml-4 justify-center align-middle">
					Owned
				</label>
			</div>
			<div className="mb-4">
				<input
					type="radio"
					id="rented"
					name="propertyType"
					value="Rented"
					checked={formData.propertyType === "Rented"}
					onChange={(e) => handleChange("propertyType", e.target.value)}
					className="radio radio-primary radio-sm m-2 align-middle"
				/>
				<label htmlFor="rented" className="ml-4 justify-center align-middle">
					Rented
				</label>
			</div>
		</>
	);
};

export default StepOneForm;
