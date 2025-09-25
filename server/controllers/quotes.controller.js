async function getQuote(request, response) {
  try {
    await fetch("https://api.dailyquotes.dev/api/quotes/dev", {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return response.status(200).json({
      status: 200,
      message: "Quote has been successfully retrieved.",
      data: data,
      error: null,
      success: true,
    });
  } catch (error) {
    return response.json({
      status: 500,
      message: "An unexpected error occured while retrieving quote.",
      data: null,
      error: error.message,
      success: false,
    });
  }
}
