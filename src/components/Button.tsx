import React from "react";

type ButtonProps = {
	label: string;
	isSelected?: boolean;
	onFilterSelect: (label: string) => void;
};

const Button: React.FC<ButtonProps> = ({
	label,
	onFilterSelect,
	isSelected
}) => {
	const handleClick = () => {
		onFilterSelect(label);
	};

	return (
		<div
			className={` ${
				isSelected
					? "border border-[#000000] text-[#000000] rounded-xl py-[9px] px-[23px]"
					: "text-[#505050] text-2xl font-semibold"
			} cursor-pointer`}
			onClick={handleClick}
		>
			{label}
		</div>
	);
};

export default Button;
