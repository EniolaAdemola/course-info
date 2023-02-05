import React, { createContext, useContext, useState } from "react";

const StepInfoContext = createContext();

const ContextProvider = ({ children }) => {
	const [activeStyle, setActiveStyle] = useState(1);

    const [userDetails, setUserDetails] = useState({
        userName: "",
        courseOfStudy: "",
        level: ""
    })

    const handleChange = (event) => {
		const { name, value } = event.target;

		setUserDetails((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	return (
		<StepInfoContext.Provider
			value={{ userDetails, activeStyle, setActiveStyle, setUserDetails, handleChange }}
		>
			{children}
		</StepInfoContext.Provider>
	);
};

export default ContextProvider;

// return the Register context
export const useStepInfoContext = () => {
	return useContext(StepInfoContext);
};