export const patient = [
	{
	  name: "Jessica Taylor",
	  gender: "Female",
	  age: 28,
	  profile_picture: "https://fedskillstest.ct.digital/4.png",
	  date_of_birth: "1996-08-23",
	  phone_number: "(415) 555-1234",
	  emergency_contact: "(415) 555-5678",
	  insurance_type: "Sunrise Health Assurance",
	  diagnosis_history: [
		{
		  month: "March",
		  year: 2024,
		  blood_pressure: { systolic: { value: 160, levels: "Higher than Average" }, diastolic: { value: 78, levels: "Lower than Average" } },
		  heart_rate: { value: 78, levels: "Lower than Average" },
		  respiratory_rate: { value: 20, levels: "Normal" },
		  temperature: { value: 98.6, levels: "Normal" },
		}
	  ],
	  diagnostic_list: [
		{ name: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
	  ],
	  lab_results: ["Blood Tests", "CT Scans"],
	},
	{
	  name: "Michael Johnson",
	  gender: "Male",
	  age: 45,
	  profile_picture: "https://fedskillstest.ct.digital/5.png",
	  date_of_birth: "1979-02-12",
	  phone_number: "(315) 555-6789",
	  emergency_contact: "(315) 555-4321",
	  insurance_type: "PrimeCare Health",
	  diagnosis_history: [
		{
		  month: "April",
		  year: 2023,
		  blood_pressure: { systolic: { value: 140, levels: "Average" }, diastolic: { value: 85, levels: "Average" } },
		  heart_rate: { value: 82, levels: "Normal" },
		  respiratory_rate: { value: 22, levels: "Slightly Elevated" },
		  temperature: { value: 98.9, levels: "Normal" },
		}
	  ],
	  diagnostic_list: [
		{ name: "Diabetes", description: "Type 2 diabetes mellitus", status: "Under Treatment" },
	  ],
	  lab_results: ["Glucose Tests", "Ultrasounds"],
	},
	{
	  name: "Sophia Williams",
	  gender: "Female",
	  age: 33,
	  profile_picture: "https://fedskillstest.ct.digital/6.png",
	  date_of_birth: "1990-07-15",
	  phone_number: "(210) 555-1234",
	  emergency_contact: "(210) 555-5678",
	  insurance_type: "United Wellness Plan",
	  diagnosis_history: [
		{
		  month: "January",
		  year: 2024,
		  blood_pressure: { systolic: { value: 125, levels: "Normal" }, diastolic: { value: 75, levels: "Normal" } },
		  heart_rate: { value: 72, levels: "Normal" },
		  respiratory_rate: { value: 19, levels: "Normal" },
		  temperature: { value: 98.5, levels: "Normal" },
		}
	  ],
	  diagnostic_list: [
		{ name: "Asthma", description: "Chronic respiratory condition", status: "Stable" },
	  ],
	  lab_results: ["Pulmonary Function Tests", "X-rays"],
	},
	{
	  name: "James Brown",
	  gender: "Male",
	  age: 50,
	  profile_picture: "https://fedskillstest.ct.digital/7.png",
	  date_of_birth: "1973-01-29",
	  phone_number: "(720) 555-5678",
	  emergency_contact: "(720) 555-9876",
	  insurance_type: "Healthy Horizons",
	  diagnosis_history: [
		{
		  month: "December",
		  year: 2023,
		  blood_pressure: { systolic: { value: 150, levels: "Elevated" }, diastolic: { value: 90, levels: "Elevated" } },
		  heart_rate: { value: 90, levels: "Elevated" },
		  respiratory_rate: { value: 25, levels: "Elevated" },
		  temperature: { value: 99.2, levels: "Normal" },
		}
	  ],
	  diagnostic_list: [
		{ name: "Obesity", description: "High body mass index", status: "Monitoring" },
	  ],
	  lab_results: ["BMI Tests", "Thyroid Function Tests"],
	},
	{
	  name: "Olivia Davis",
	  gender: "Female",
	  age: 40,
	  profile_picture: "https://fedskillstest.ct.digital/8.png",
	  date_of_birth: "1983-05-20",
	  phone_number: "(512) 555-3456",
	  emergency_contact: "(512) 555-7890",
	  insurance_type: "CareFirst Plan",
	  diagnosis_history: [
		{
		  month: "August",
		  year: 2023,
		  blood_pressure: { systolic: { value: 135, levels: "Normal" }, diastolic: { value: 80, levels: "Normal" } },
		  heart_rate: { value: 76, levels: "Normal" },
		  respiratory_rate: { value: 20, levels: "Normal" },
		  temperature: { value: 98.7, levels: "Normal" },
		}
	  ],
	  diagnostic_list: [
		{ name: "Anemia", description: "Iron deficiency", status: "Under Treatment" },
	  ],
	  lab_results: ["CBC", "Iron Studies"],
	},
	// Add 15 more patients following this structure

	{
		name: "Jessica Taylor",
		gender: "Female",
		age: 28,
		profile_picture: "https://fedskillstest.ct.digital/4.png",
		date_of_birth: "1996-08-23",
		phone_number: "(415) 555-1234",
		emergency_contact: "(415) 555-5678",
		insurance_type: "Sunrise Health Assurance",
		diagnosis_history: [
		  {
			month: "March",
			year: 2024,
			blood_pressure: { systolic: { value: 160, levels: "Higher than Average" }, diastolic: { value: 78, levels: "Lower than Average" } },
			heart_rate: { value: 78, levels: "Lower than Average" },
			respiratory_rate: { value: 20, levels: "Normal" },
			temperature: { value: 98.6, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
		],
		lab_results: ["Blood Tests", "CT Scans"],
	  },
	  {
		name: "Michael Johnson",
		gender: "Male",
		age: 45,
		profile_picture: "https://fedskillstest.ct.digital/5.png",
		date_of_birth: "1979-02-12",
		phone_number: "(315) 555-6789",
		emergency_contact: "(315) 555-4321",
		insurance_type: "PrimeCare Health",
		diagnosis_history: [
		  {
			month: "April",
			year: 2023,
			blood_pressure: { systolic: { value: 140, levels: "Average" }, diastolic: { value: 85, levels: "Average" } },
			heart_rate: { value: 82, levels: "Normal" },
			respiratory_rate: { value: 22, levels: "Slightly Elevated" },
			temperature: { value: 98.9, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Diabetes", description: "Type 2 diabetes mellitus", status: "Under Treatment" },
		],
		lab_results: ["Glucose Tests", "Ultrasounds"],
	  },
	  {
		name: "Sophia Williams",
		gender: "Female",
		age: 33,
		profile_picture: "https://fedskillstest.ct.digital/6.png",
		date_of_birth: "1990-07-15",
		phone_number: "(210) 555-1234",
		emergency_contact: "(210) 555-5678",
		insurance_type: "United Wellness Plan",
		diagnosis_history: [
		  {
			month: "January",
			year: 2024,
			blood_pressure: { systolic: { value: 125, levels: "Normal" }, diastolic: { value: 75, levels: "Normal" } },
			heart_rate: { value: 72, levels: "Normal" },
			respiratory_rate: { value: 19, levels: "Normal" },
			temperature: { value: 98.5, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Asthma", description: "Chronic respiratory condition", status: "Stable" },
		],
		lab_results: ["Pulmonary Function Tests", "X-rays"],
	  },
	  {
		name: "James Brown",
		gender: "Male",
		age: 50,
		profile_picture: "https://fedskillstest.ct.digital/7.png",
		date_of_birth: "1973-01-29",
		phone_number: "(720) 555-5678",
		emergency_contact: "(720) 555-9876",
		insurance_type: "Healthy Horizons",
		diagnosis_history: [
		  {
			month: "December",
			year: 2023,
			blood_pressure: { systolic: { value: 150, levels: "Elevated" }, diastolic: { value: 90, levels: "Elevated" } },
			heart_rate: { value: 90, levels: "Elevated" },
			respiratory_rate: { value: 25, levels: "Elevated" },
			temperature: { value: 99.2, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Obesity", description: "High body mass index", status: "Monitoring" },
		],
		lab_results: ["BMI Tests", "Thyroid Function Tests"],
	  },
	  {
		name: "Olivia Davis",
		gender: "Female",
		age: 40,
		profile_picture: "https://fedskillstest.ct.digital/8.png",
		date_of_birth: "1983-05-20",
		phone_number: "(512) 555-3456",
		emergency_contact: "(512) 555-7890",
		insurance_type: "CareFirst Plan",
		diagnosis_history: [
		  {
			month: "August",
			year: 2023,
			blood_pressure: { systolic: { value: 135, levels: "Normal" }, diastolic: { value: 80, levels: "Normal" } },
			heart_rate: { value: 76, levels: "Normal" },
			respiratory_rate: { value: 20, levels: "Normal" },
			temperature: { value: 98.7, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Anemia", description: "Iron deficiency", status: "Under Treatment" },
		],
		lab_results: ["CBC", "Iron Studies"],
	  },


	  {
		name: "Jessica Taylor",
		gender: "Female",
		age: 28,
		profile_picture: "https://fedskillstest.ct.digital/4.png",
		date_of_birth: "1996-08-23",
		phone_number: "(415) 555-1234",
		emergency_contact: "(415) 555-5678",
		insurance_type: "Sunrise Health Assurance",
		diagnosis_history: [
		  {
			month: "March",
			year: 2024,
			blood_pressure: { systolic: { value: 160, levels: "Higher than Average" }, diastolic: { value: 78, levels: "Lower than Average" } },
			heart_rate: { value: 78, levels: "Lower than Average" },
			respiratory_rate: { value: 20, levels: "Normal" },
			temperature: { value: 98.6, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
		],
		lab_results: ["Blood Tests", "CT Scans"],
	  },
	  {
		name: "Michael Johnson",
		gender: "Male",
		age: 45,
		profile_picture: "https://fedskillstest.ct.digital/5.png",
		date_of_birth: "1979-02-12",
		phone_number: "(315) 555-6789",
		emergency_contact: "(315) 555-4321",
		insurance_type: "PrimeCare Health",
		diagnosis_history: [
		  {
			month: "April",
			year: 2023,
			blood_pressure: { systolic: { value: 140, levels: "Average" }, diastolic: { value: 85, levels: "Average" } },
			heart_rate: { value: 82, levels: "Normal" },
			respiratory_rate: { value: 22, levels: "Slightly Elevated" },
			temperature: { value: 98.9, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Diabetes", description: "Type 2 diabetes mellitus", status: "Under Treatment" },
		],
		lab_results: ["Glucose Tests", "Ultrasounds"],
	  },
	  {
		name: "Sophia Williams",
		gender: "Female",
		age: 33,
		profile_picture: "https://fedskillstest.ct.digital/6.png",
		date_of_birth: "1990-07-15",
		phone_number: "(210) 555-1234",
		emergency_contact: "(210) 555-5678",
		insurance_type: "United Wellness Plan",
		diagnosis_history: [
		  {
			month: "January",
			year: 2024,
			blood_pressure: { systolic: { value: 125, levels: "Normal" }, diastolic: { value: 75, levels: "Normal" } },
			heart_rate: { value: 72, levels: "Normal" },
			respiratory_rate: { value: 19, levels: "Normal" },
			temperature: { value: 98.5, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Asthma", description: "Chronic respiratory condition", status: "Stable" },
		],
		lab_results: ["Pulmonary Function Tests", "X-rays"],
	  },
	  {
		name: "James Brown",
		gender: "Male",
		age: 50,
		profile_picture: "https://fedskillstest.ct.digital/7.png",
		date_of_birth: "1973-01-29",
		phone_number: "(720) 555-5678",
		emergency_contact: "(720) 555-9876",
		insurance_type: "Healthy Horizons",
		diagnosis_history: [
		  {
			month: "December",
			year: 2023,
			blood_pressure: { systolic: { value: 150, levels: "Elevated" }, diastolic: { value: 90, levels: "Elevated" } },
			heart_rate: { value: 90, levels: "Elevated" },
			respiratory_rate: { value: 25, levels: "Elevated" },
			temperature: { value: 99.2, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Obesity", description: "High body mass index", status: "Monitoring" },
		],
		lab_results: ["BMI Tests", "Thyroid Function Tests"],
	  },
	  {
		name: "Olivia Davis",
		gender: "Female",
		age: 40,
		profile_picture: "https://fedskillstest.ct.digital/8.png",
		date_of_birth: "1983-05-20",
		phone_number: "(512) 555-3456",
		emergency_contact: "(512) 555-7890",
		insurance_type: "CareFirst Plan",
		diagnosis_history: [
		  {
			month: "August",
			year: 2023,
			blood_pressure: { systolic: { value: 135, levels: "Normal" }, diastolic: { value: 80, levels: "Normal" } },
			heart_rate: { value: 76, levels: "Normal" },
			respiratory_rate: { value: 20, levels: "Normal" },
			temperature: { value: 98.7, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Anemia", description: "Iron deficiency", status: "Under Treatment" },
		],
		lab_results: ["CBC", "Iron Studies"],
	  },


	  {
		name: "Jessica Taylor",
		gender: "Female",
		age: 28,
		profile_picture: "https://fedskillstest.ct.digital/4.png",
		date_of_birth: "1996-08-23",
		phone_number: "(415) 555-1234",
		emergency_contact: "(415) 555-5678",
		insurance_type: "Sunrise Health Assurance",
		diagnosis_history: [
		  {
			month: "March",
			year: 2024,
			blood_pressure: { systolic: { value: 160, levels: "Higher than Average" }, diastolic: { value: 78, levels: "Lower than Average" } },
			heart_rate: { value: 78, levels: "Lower than Average" },
			respiratory_rate: { value: 20, levels: "Normal" },
			temperature: { value: 98.6, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
		],
		lab_results: ["Blood Tests", "CT Scans"],
	  },
	  {
		name: "Michael Johnson",
		gender: "Male",
		age: 45,
		profile_picture: "https://fedskillstest.ct.digital/5.png",
		date_of_birth: "1979-02-12",
		phone_number: "(315) 555-6789",
		emergency_contact: "(315) 555-4321",
		insurance_type: "PrimeCare Health",
		diagnosis_history: [
		  {
			month: "April",
			year: 2023,
			blood_pressure: { systolic: { value: 140, levels: "Average" }, diastolic: { value: 85, levels: "Average" } },
			heart_rate: { value: 82, levels: "Normal" },
			respiratory_rate: { value: 22, levels: "Slightly Elevated" },
			temperature: { value: 98.9, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Diabetes", description: "Type 2 diabetes mellitus", status: "Under Treatment" },
		],
		lab_results: ["Glucose Tests", "Ultrasounds"],
	  },
	  {
		name: "Sophia Williams",
		gender: "Female",
		age: 33,
		profile_picture: "https://fedskillstest.ct.digital/6.png",
		date_of_birth: "1990-07-15",
		phone_number: "(210) 555-1234",
		emergency_contact: "(210) 555-5678",
		insurance_type: "United Wellness Plan",
		diagnosis_history: [
		  {
			month: "January",
			year: 2024,
			blood_pressure: { systolic: { value: 125, levels: "Normal" }, diastolic: { value: 75, levels: "Normal" } },
			heart_rate: { value: 72, levels: "Normal" },
			respiratory_rate: { value: 19, levels: "Normal" },
			temperature: { value: 98.5, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Asthma", description: "Chronic respiratory condition", status: "Stable" },
		],
		lab_results: ["Pulmonary Function Tests", "X-rays"],
	  },
	  {
		name: "James Brown",
		gender: "Male",
		age: 50,
		profile_picture: "https://fedskillstest.ct.digital/7.png",
		date_of_birth: "1973-01-29",
		phone_number: "(720) 555-5678",
		emergency_contact: "(720) 555-9876",
		insurance_type: "Healthy Horizons",
		diagnosis_history: [
		  {
			month: "December",
			year: 2023,
			blood_pressure: { systolic: { value: 150, levels: "Elevated" }, diastolic: { value: 90, levels: "Elevated" } },
			heart_rate: { value: 90, levels: "Elevated" },
			respiratory_rate: { value: 25, levels: "Elevated" },
			temperature: { value: 99.2, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Obesity", description: "High body mass index", status: "Monitoring" },
		],
		lab_results: ["BMI Tests", "Thyroid Function Tests"],
	  },
	  {
		name: "Olivia Davis",
		gender: "Female",
		age: 40,
		profile_picture: "https://fedskillstest.ct.digital/8.png",
		date_of_birth: "1983-05-20",
		phone_number: "(512) 555-3456",
		emergency_contact: "(512) 555-7890",
		insurance_type: "CareFirst Plan",
		diagnosis_history: [
		  {
			month: "August",
			year: 2023,
			blood_pressure: { systolic: { value: 135, levels: "Normal" }, diastolic: { value: 80, levels: "Normal" } },
			heart_rate: { value: 76, levels: "Normal" },
			respiratory_rate: { value: 20, levels: "Normal" },
			temperature: { value: 98.7, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Anemia", description: "Iron deficiency", status: "Under Treatment" },
		],
		lab_results: ["CBC", "Iron Studies"],
	  },


	  {
		name: "Jessica Taylor",
		gender: "Female",
		age: 28,
		profile_picture: "https://fedskillstest.ct.digital/4.png",
		date_of_birth: "1996-08-23",
		phone_number: "(415) 555-1234",
		emergency_contact: "(415) 555-5678",
		insurance_type: "Sunrise Health Assurance",
		diagnosis_history: [
		  {
			month: "March",
			year: 2024,
			blood_pressure: { systolic: { value: 160, levels: "Higher than Average" }, diastolic: { value: 78, levels: "Lower than Average" } },
			heart_rate: { value: 78, levels: "Lower than Average" },
			respiratory_rate: { value: 20, levels: "Normal" },
			temperature: { value: 98.6, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
		],
		lab_results: ["Blood Tests", "CT Scans"],
	  },
	  {
		name: "Michael Johnson",
		gender: "Male",
		age: 45,
		profile_picture: "https://fedskillstest.ct.digital/5.png",
		date_of_birth: "1979-02-12",
		phone_number: "(315) 555-6789",
		emergency_contact: "(315) 555-4321",
		insurance_type: "PrimeCare Health",
		diagnosis_history: [
		  {
			month: "April",
			year: 2023,
			blood_pressure: { systolic: { value: 140, levels: "Average" }, diastolic: { value: 85, levels: "Average" } },
			heart_rate: { value: 82, levels: "Normal" },
			respiratory_rate: { value: 22, levels: "Slightly Elevated" },
			temperature: { value: 98.9, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Diabetes", description: "Type 2 diabetes mellitus", status: "Under Treatment" },
		],
		lab_results: ["Glucose Tests", "Ultrasounds"],
	  },
	  {
		name: "Sophia Williams",
		gender: "Female",
		age: 33,
		profile_picture: "https://fedskillstest.ct.digital/6.png",
		date_of_birth: "1990-07-15",
		phone_number: "(210) 555-1234",
		emergency_contact: "(210) 555-5678",
		insurance_type: "United Wellness Plan",
		diagnosis_history: [
		  {
			month: "January",
			year: 2024,
			blood_pressure: { systolic: { value: 125, levels: "Normal" }, diastolic: { value: 75, levels: "Normal" } },
			heart_rate: { value: 72, levels: "Normal" },
			respiratory_rate: { value: 19, levels: "Normal" },
			temperature: { value: 98.5, levels: "Normal" },
		  }
		],
		diagnostic_list: [
		  { name: "Asthma", description: "Chronic respiratory condition", status: "Stable" },
		],
		lab_results: ["Pulmonary Function Tests", "X-rays"],
	  },

	  
  ];
  