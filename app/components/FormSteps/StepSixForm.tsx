import React from "react";

interface StepSixProps {
	formData: {
		entrances: string;
	};
	handleChange: (name: string, value: string) => void;
}

const StepSixForm = ({ formData, handleChange }: StepSixProps) => {
	const Entrances = [
		{ name: "1" },
		{ name: "2-4" },
		{ name: "5" },
		{ name: "More than 5" },
	];

	return (
		<>
			<h2 className="text-gray-500">
				Step 1: What type of property is this system for?
			</h2>
			{Entrances.map((entrance) => (
				<div className="mb-4" key={entrance.name}>
					<input
						type="radio"
						id={entrance.name}
						name="entrances"
						value={entrance.name}
						checked={formData.entrances === `${entrance.name}`}
						onChange={(e) => handleChange("entrances", e.target.value)}
						className="radio radio-primary radio-sm m-2 align-middle"
					/>
					<label
						htmlFor={entrance.name}
						className="ml-4 justify-center align-middle"
					>
						{entrance.name}
					</label>
				</div>
			))}
		</>
	);
};

export default StepSixForm;
