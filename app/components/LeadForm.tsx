"use client";
// components/LeadForm.tsx
import { useState } from "react";
import axios from "axios";
import StepOneForm from "./FormSteps/StepOneForm";
import StepTwoForm from "./FormSteps/StepTwoForm";
import StepThreeForm from "./FormSteps/StepThreeForm";
import StepFourForm from "./FormSteps/StepFourForm";

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
	// Create a state variable to track ZIP code validity
	const [isZipCodeValid, setIsZipCodeValid] = useState<boolean | null>(null);
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

	//  for securityFeatureOptions

	const handleChange = (name: string, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[name]:
				name === "securityFeatures"
					? prevData[name].includes(value)
						? prevData[name].filter((feature) => feature !== value)
						: [...prevData[name], value]
					: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Implement form submission logic here
		console.log(formData);
	};

	// For getting the city and state
	const fetchCityAndState = async (zipCode: string) => {
		try {
			const response = await axios.get(
				`https://api.zippopotam.us/us/${zipCode}`
			);
			const data = response.data;

			// Extract city and state data from the response
			const city = data.places[0]["place name"];
			const state = data.places[0]["state"];

			return { city, state };
		} catch (error) {
			// Handle errors (e.g., invalid zip code)
			console.error("Invalid Zip Code:", error);
			return null;
		}
	};

	const handleZipCodeChange = async (value: string) => {
		// Call the API function to fetch city and state
		const locationData = await fetchCityAndState(value);

		if (locationData) {
			setFormData((prevData) => ({
				...prevData,
				zipCode: value,
				city: locationData.city,
				state: locationData.state,
			}));
			setIsZipCodeValid(true); // Set ZIP code as valid
		} else {
			// Handle the case of an invalid or unrecognized ZIP code
			setIsZipCodeValid(false);
		}
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
			<form onSubmit={handleSubmit}>
				{/* Step 1 Property type */}
				{step === 1 && (
					<StepOneForm formData={formData} handleChange={handleChange} />
				)}
				{/* Step 2 Zip code */}
				{step === 2 && (
					<StepTwoForm
						formData={formData}
						handleChange={handleChange}
						handleZipCodeChange={handleZipCodeChange}
						isZipCodeValid={isZipCodeValid}
					/>
				)}
				{/* Step 3 Installation Preference */}
				{step === 3 && <StepThreeForm handleChange={handleChange} />}
				{/* Step 4 Security Features */}
				{step === 4 && (
					<StepFourForm formData={formData} handleChange={handleChange} />
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
