import React from "react";

interface StepTwoProps {
	handleChange: (name: string, value: string) => void;
}

const StepThreeForm = ({ handleChange }: StepTwoProps) => {
	return (
		<>
			<label
				htmlFor="installationPreference"
				className="block text-gray-500 mb-2"
			>
				3. What is your installation preference?
			</label>
			<select
				name="installationPreference"
				id="installationPreference"
				onChange={(e) => handleChange("installationPreference", e.target.value)}
				className="select select-primary w-full mb-4 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-300 focus:ring-opacity-50"
			>
				<option value="No Preference">No preference</option>
				<option value="Professional Installation">
					Professional installation
				</option>
				<option value="Self Installation">Self installation</option>
			</select>
		</>
	);
};

export default StepThreeForm;
