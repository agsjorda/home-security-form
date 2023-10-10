"use client";
// components/LeadForm.tsx
import { useState } from "react";

interface FormData {
	propertyType: string;
	zipCode: string;
	installationPreference: string;
	securityFeatures: string[]; // Specify the type as string[]
	systemType: string;
	entrances: string;
	address: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	city: string;
	state: string;
}

const LeadForm = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({
		propertyType: "",
		zipCode: "",
		installationPreference: "",
		securityFeatures: [], // Initialize as an empty array
		systemType: "",
		entrances: "",
		address: "",
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		city: "",
		state: "",
	});

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	const handleChange = (name: string, value: string) => {
		if (name === "securityFeatures") {
			// If the name is "securityFeatures," toggle the selected feature in the array
			setFormData((prevData) => {
				const updatedSecurityFeatures = prevData.securityFeatures.includes(
					value
				)
					? prevData.securityFeatures.filter((feature) => feature !== value)
					: [...prevData.securityFeatures, value];

				return {
					...prevData,
					securityFeatures: updatedSecurityFeatures,
				};
			});
		} else {
			// For other form fields, update as usual
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Implement form submission logic here
		console.log(formData);
	};

	const handleZipCodeChange = (value: string) => {
		// Use an API like Zippopotam to fetch city and state based on the zip code
		// You can implement this part here and set the city and state in formData
		// For simplicity, we'll just set a placeholder value here
		setFormData((prevData) => ({
			...prevData,
			zipCode: value,
			city: "Sample City",
			state: "Sample State",
		}));
	};

	return (
		<div className="p-4">
			<h1 className="text-3xl font-bold mb-4">
				Help Protect Your Home with a New Security System
			</h1>
			<p className="mb-4">
				Quick and easy. Get matched with the best Home Security company in your
				area.
			</p>
			{/* Render the form based on the step */}
			<form onSubmit={handleSubmit}>
				{step === 1 && (
					<>
						<h2 className="text-gray-500">
							Step 1: What type of property is this system for?
						</h2>
						{/* Radio button group for property type */}
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
							<label
								htmlFor="owned"
								className="ml-4 justify-center align-middle"
							>
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
							<label
								htmlFor="rented"
								className="ml-4 justify-center align-middle"
							>
								Rented
							</label>
						</div>
					</>
				)}
				{step === 2 && (
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
						<p className="mb-4">
							City: {formData.city}, State: {formData.state}
						</p>
					</>
				)}
				{step === 3 && (
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
							onChange={(e) =>
								handleChange("installationPreference", e.target.value)
							}
							className="select select-primary w-full mb-4 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-300 focus:ring-opacity-50"
						>
							<option value="No Preference">No preference</option>
							<option value="Professional Installation">
								Professional installation
							</option>
							<option value="Self Installation">Self installation</option>
						</select>
					</>
				)}
				{step === 4 && (
					<>
						<label className="block text-gray-500 mb-2">
							3. What home security features would you like?
						</label>
						<div>
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									name="securityFeatures"
									value="Cameras"
									checked={formData.securityFeatures.includes("Cameras")}
									onChange={(e) =>
										handleChange("securityFeatures", e.target.value)
									}
									className="form-checkbox text-primary focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-300 focus:ring-opacity-50"
								/>
								<span className="ml-2">Cameras</span>
							</label>
						</div>
						<div>
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									name="securityFeatures"
									value="Motion Sensors"
									checked={formData.securityFeatures.includes("Motion Sensors")}
									onChange={(e) =>
										handleChange("securityFeatures", e.target.value)
									}
									className="form-checkbox text-primary focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-300 focus:ring-opacity-50"
								/>
								<span className="ml-2">Motion Sensors</span>
							</label>
						</div>
						<div>
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									name="securityFeatures"
									value="Glass Break Sensors"
									checked={formData.securityFeatures.includes(
										"Glass Break Sensors"
									)}
									onChange={(e) =>
										handleChange("securityFeatures", e.target.value)
									}
									className="form-checkbox text-primary focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-300 focus:ring-opacity-50"
								/>
								<span className="ml-2">Glass Break Sensors</span>
							</label>
						</div>
						<div>
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									name="securityFeatures"
									value="Doorbell Cameras"
									checked={formData.securityFeatures.includes(
										"Doorbell Cameras"
									)}
									onChange={(e) =>
										handleChange("securityFeatures", e.target.value)
									}
									className="form-checkbox text-primary focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-300 focus:ring-opacity-50"
								/>
								<span className="ml-2">Doorbell Cameras</span>
							</label>
						</div>
					</>
				)}

				{/* Continue rendering other steps similarly */}
				{step === 5 && (
					<>
						<h2 className="mb-4">Step 8: Your Details</h2>
						{/* Render question 8 inputs here */}
					</>
				)}

				{/* Navigation buttons */}
				<>
					{step > 1 && (
						<button className="btn btn-sm btn-neutral mr-4" onClick={prevStep}>
							Back
						</button>
					)}
					{step < 5 && (
						<button className="btn btn-sm btn-primary" onClick={nextStep}>
							Next
						</button>
					)}
					{step === 5 && (
						<button className="btn btn-sm btn-accent" type="submit">
							Submit
						</button>
					)}
				</>
			</form>
		</div>
	);
};

export default LeadForm;
