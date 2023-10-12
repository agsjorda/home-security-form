import React from "react";

interface StepFiveProps {
	formData: {
		systemType: string;
	};
	handleChange: (name: string, value: string) => void;
}

const StepFiveForm = ({ formData, handleChange }: StepFiveProps) => {
	const SystemTypes = [
		{ name: "burglar/intrusion", title: "Burglar / intrusion" },
		{ name: "fire detection", title: "Fire detection" },
		{
			name: "burglarAndFireDetection",
			title: "Both Burglar And Fire Detection",
		},
	];

	return (
		<>
			<h2 className="text-gray-500">
				Step 1: What type of property is this system for?
			</h2>
			{SystemTypes.map((system) => (
				<div className="mb-4" key={system.name}>
					<input
						type="radio"
						id={system.name}
						name="systemType"
						value={system.name}
						checked={formData.systemType === `${system.name}`}
						onChange={(e) => handleChange("systemType", e.target.value)}
						className="radio radio-primary radio-sm m-2 align-middle"
					/>
					<label
						htmlFor={system.name}
						className="ml-4 justify-center align-middle"
					>
						{system.title}
					</label>
				</div>
			))}
		</>
	);
};

export default StepFiveForm;
