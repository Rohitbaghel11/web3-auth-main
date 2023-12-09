import Navbar from "@/components/Navbar";

export default function DashboardLayout({
	children // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='flex min-h-screen flex-col items-center justify-between bg-[#FFEED9]'>
			{/* Include shared UI here e.g. a header or sidebar */}
			<Navbar />
			{children}
		</section>
	);
}
