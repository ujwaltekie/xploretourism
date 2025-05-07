let dest = document.querySelector(".destofai");
let days = document.querySelector(".destofdays");
let plaleft = document.querySelector(".pl-dt-left");
let must = document.querySelector("#mustvisit");
let cardpl = document.querySelector(".pl-card");
let itineary = document.querySelector(".itinery");
let plans = document.querySelector(".plan");
let loader = document.querySelector(".loading");
let text = document.querySelector("#img-text");

async function generateTravelPlan() {
  loader.style.display = "block";
  if (dest.value == "" || days.value == "") {
    alert("Please Enter Destination & Number of Days");
    return;
  }

  // send a request\
  try {
    const prompt = `Act as a travel expert and provide information about ${dest.value} for a ${days.value}-day trip. Respond in JSON format:
    The JSON should be an object with the following structure:
    {
        "description": "Brief description of the destination",
        "mustVisit": ["Place 1", "Place 2", "Place 3", "Place 4", "Place 5"],
        "culture": "Local culture and customs",
        "currency": "Currency and commonly spoken languages",
        "tips": "Important travel tips (including famous local food, best time to visit, etc.)",
        "itinerary": [
            {
                "day": "DAY 01",
                "title": "Title for Day 1",
                "activities": "Detailed description of day 1 activities"
            },
            // ... one object for each day based on the 'days' parameter
        ]
    }
    Make sure the itinerary array has exactly ${days.value} days of activities.
            DO NOT include any other text in your response. DO NOT PROVIDE IN MARKDOWN FORMAT.`;

    const response = await fetch(`${url}?key=${apikey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    const travelinfo = data.candidates[0].content.parts[0].text;
    loader.style.display = "none";

    displayresults(travelinfo);
    //generateimg(dest.value);
    getDestinationImage(dest.value);
    plans.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}

function displayresults(travelInfo) {
  const sections = travelInfo.split("\n\n");
  const cleanedInfo = sections[0].replace(/```json/g, "").replace(/```/g, "");
  console.log(cleanedInfo);
  const parsedInfo = JSON.parse(cleanedInfo);
  console.log(parsedInfo);

  plaleft.innerHTML = `
  <h1> <i class="fa-solid fa-location-dot"></i> ${dest.value}</h1>
  <div class="days">
      <p><i class="fa-solid fa-calendar"></i> ${days.value} days</p>
  </div>
      <p>${parsedInfo.description}</p>
  `;

  const mustvisitli = parsedInfo.mustVisit
    .map((item) => {
      return `<li><i class="fa-solid fa-circle-check"></i> ${item}</li>`;
    })
    .join("");

  must.innerHTML = mustvisitli;

  cardpl.innerHTML = `   <div class="pl-dt-card">
  <h1>Culture</h1>
  <p> ${parsedInfo.culture}
  </p>
</div>
<div class="pl-dt-card">
  <h1>Currency & Language</h1>
   <p> ${parsedInfo.currency}
  </p>
</div>
<div class="pl-dt-card">
  <h1>Travel Tips</h1>
  <p> ${parsedInfo.tips}
  </p>
</div>`;

  const dayplans = parsedInfo.itinerary
    .map((item) => {
      return `<div class="travel-card-pl">
    <div class="pl-tr-left"><h1>${item.day}</h1></div>
  <div class="pl-tr-right">
    <h2>${item.title}</h2>
    <p>${item.activities}</p>
  </div>
  
</div>`;
    })
    .join("");

  itineary.innerHTML = dayplans;

  text.textContent = dest.value;
}
