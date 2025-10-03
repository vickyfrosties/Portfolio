export default async function handler(request, response) {
  const apiKey = process.env.API_KEY;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    const apiResponse = await fetch(
      "https://api.dailyquotes.dev/api/quotes/motivational",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (apiResponse.length === 0) {
      return response.status(204).json({
        status: 204,
        message: "No quote are existing.",
        data: [],
        error: "No Content.",
        success: true,
      });
    }

    const quoteData = await apiResponse.json();

    return response.status(200).json({
      status: 200,
      message: "Quote has been successfully retrieved.",
      data: quoteData,
      error: null,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      status: 500,
      message: "An unexpected error occured while retrieving quote.",
      data: null,
      error: error.message,
      success: false,
    });
  }
}
