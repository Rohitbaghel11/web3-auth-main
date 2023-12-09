"use client";
import FilterPanel from "@/components/FilterPanel";
import NFTCard from "@/components/NFTCard";
import { NFTCardDetails } from "@/components/NFTCardDetails";



export default function Page() {
	return (
		<main className='flex min-h-screen flex-col bg-[#FFEED9] w-full'>
			<NFTCardDetails />
		</main>
	);
}
