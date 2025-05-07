let destination = document.querySelector(".destination");
async function generateimg(prompt) {
  try {
    const response = await fetch(`${pic}?key=${apikey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Generate a HD image of a famous place located in ${prompt} `,
              },
            ],
          },
        ],
        generationConfig: {
          responseModalities: ["TEXT", "IMAGE"],
        },
      }),
    });
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    // Find the image part in the response
    const imagePart = data.candidates[0].content.parts.find(
      (part) => part.inlineData
    );

    if (!imagePart) {
      throw new Error("No image generated");
    }
    destination.style.backgroundImage = `url(data:image/png;base64,${imagePart.inlineData.data})`;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

window.generateimg = generateimg;
