import React from "react";

interface StepFourProps {
	formData: {
		securityFeatures: string[];
	};
	handleChange: (name: string, value: string) => void;
}
const StepFourForm = ({ formData, handleChange }: StepFourProps) => {
	const securityFeatureOptions = [
		"Cameras",
		"Motion Sensors",
		"Glass Break Sensors",
		"Doorbell Cameras",
	];
	return (
		<>
			<label className="block text-gray-500 mb-2">
				What home security features would you like?
			</label>
			{securityFeatureOptions.map((feature) => (
				<div key={feature} className="mb-2">
					<label className="inline-flex items-center">
						<input
							type="checkbox"
							name="securityFeatures"
							value={feature}
							checked={formData.securityFeatures.includes(feature)}
							onChange={(e) => handleChange("securityFeatures", e.target.value)}
							className="form-checkbox text-primary focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-300 focus:ring-opacity-50"
						/>
						<span className="ml-2">{feature}</span>
					</label>
				</div>
			))}
		</>
	);
};

export default StepFourForm;
