import Image from "next/image";
import Verified from "./Verified.svg";
import nftCard from "./nftCard.svg";

type NFTCardProps = {
	name: string;
	date: string;
	isVerified: boolean;
};
const NFTCard = ({ date, isVerified, name }: NFTCardProps) => {
	return (
		<div className='w-[320px] h-[300px] rounded-[10px] bg-[#C071D5]  px-2.5'>
			<Image src={nftCard} alt='nftCard' className=' w-full pt-2.5' />
			<div className='flex flex-col justify-evenly '>
				<div className='flex justify-between items-center'>
					<p className='text-xl font-semibold text-white'>{name}</p>
					{isVerified ? (
						<Image src={Verified} alt='nftCard' />
					) : (
						<></>
					)}
				</div>
				<p className='text-base font-semibold text-white'>{date}</p>
			</div>
		</div>
	);
};

export default NFTCard;
