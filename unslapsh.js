let destination = document.querySelector(".destination");
async function getDestinationImage(destination) {
  const accessKey = "DkZXj2Ca4-F_LTm90kXE1aE1MED1K5FGTP2s2FA0A1c"; // Replace with your actual key
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    destination
  )}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const imageUrl = data.results[0].urls.regular;
      console.log(`Image URL for ${destination}:`, imageUrl);
      destination.style.backgroundImage = `url(${imageUrl})`;
    } else {
      console.log("No image found for destination:", destination);
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}
