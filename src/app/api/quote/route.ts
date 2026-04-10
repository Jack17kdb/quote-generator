export async function GET() {
	try{
		const res = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
			headers: {
				"X-Api-Key": process.env.API_NINJAS_KEY!,
			},
			cache: "no-store",
		});

		const data: Quote[] = await res.json();
		const quote = data[0];

		return Response.json(quote);
	} catch(error){
		return Response.json(
			{ error: "Failed to fetch quote" },
			{ status: 500 }
		);
	}
}
