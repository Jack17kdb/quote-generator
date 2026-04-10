import QuoteBox from './components/QuoteBox'

type Quote = {
	quote: string;
	author: string;
	work: string;
	categories: string[];
};

export default async function Home() {
	const res = await fetch("http://localhost:3000/api/quote", { cache: "no-store" });

	const data: Quote = await res.json();

  return (
	<main className='flex flex-col min-h-screen items-center justify-center'>
		<div className='text-3xl font-bold'>Quote Generator</div>
		<QuoteBox initialQuote={data} />
	</main>
  );
}
