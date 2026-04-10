"use client";

import { useState } from "react";

type Quote = {
	quote: string;
	author: string;
	work: string;
	categories: string[];
};

export default function QuoteBox({ initialQuote, }: { initialQuote: Quote; }){
	const [ quote, setQuote ] = useState<Quote>(initialQuote);
	const [loading, setLoading] = useState(false);

	const getNewQuote = async() => {
		try{
			setLoading(true);
			const res = await fetch("http://localhost:3000/api/quote", { cache: "no-store" });
			const data: Quote = await res.json();
			setQuote(data);
		} finally{
			setLoading(false);
		}
	};

	return (
		<div className='mt-4 text-center max-w-xl'>
			{loading ? (
				<div className="flex justify-center items-center py-6">
					<div className='w-6 h-6 border-4 border-gray-300 border-t-black rounded-full animate-spin'></div>
				</div>
			) : (
				<div>
					<p className='text-xl italic'>{quote.quote}</p>
					<h2 className='mt-4 font-bold'>- {quote.author}</h2>
				</div>
			)}

			<button
				onClick={getNewQuote}
				disabled={loading}
				className='mt-6 px-4 py-2 bg-black text-white rounded cursor-pointer active:scale-92 transition-all duration-300'
			>
				{ loading ? "Loading..." : "New Quote" }
			</button>
		</div>
	)
}
