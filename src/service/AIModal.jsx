const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple wit a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "I cannot directly access real-time information, including hotel prices, availability, images, and real-time ratings.  Therefore, I cannot provide URLs or geo-coordinates.  My response will give you a framework and suggestions. You will need to use online travel agencies (like Expedia, Booking.com, Kayak) and Google Maps to find the specifics and current pricing.\n\n\n```json\n{\n  \"tripName\": \"Las Vegas Budget Getaway for Couples (3 Days)\",\n  \"budget\": \"Cheap\",\n  \"travelers\": 2,\n  \"duration\": 3,\n  \"hotels\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\", \n      \"hotelAddress\": \"Replace with actual address\",\n      \"priceRange\": \"$50-$100 (per night, approximate)\",\n      \"hotelImageUrl\": \"Replace with image URL\",\n      \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 }, \n      \"rating\": \"Replace with rating from review site\",\n      \"description\": \"A classic Vegas experience with a circus theme, often offering lower rates than other casinos.  Expect a more lively, less luxurious atmosphere.\"\n    },\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"Replace with actual address\",\n      \"priceRange\": \"$60-$120 (per night, approximate)\",\n      \"hotelImageUrl\": \"Replace with image URL\",\n      \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 },\n      \"rating\": \"Replace with rating from review site\",\n      \"description\": \"Medieval-themed hotel and casino, generally affordable, located on the south end of the Strip.\"\n    },\n    {\n      \"hotelName\":  \"Budget-friendly hotel near the Strip (search online)\",\n      \"hotelAddress\": \"Replace with actual address\",\n      \"priceRange\": \"$40-$80 (per night, approximate)\",\n      \"hotelImageUrl\": \"Replace with image URL\",\n      \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 },\n      \"rating\": \"Replace with rating from review site\",\n      \"description\": \"Consider hotels slightly off the Strip for better value.  Look for deals on sites like Expedia or Booking.com.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Free & Cheap Activities\",\n      \"plan\": [\n        {\n          \"placeName\": \"The Bellagio Fountains\",\n          \"placeDetails\": \"Free water show with music and lights.\",\n          \"placeImageUrl\": \"Replace with image URL\",\n          \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 },\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"Replace with rating\",\n          \"time\": \"Evening (check showtimes)\"\n        },\n        {\n          \"placeName\": \"Fremont Street Experience (Downtown)\",\n          \"placeDetails\": \"Free light show and street performers.\",\n          \"placeImageUrl\": \"Replace with image URL\",\n          \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 },\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"Replace with rating\",\n          \"time\": \"Evening\"\n        },\n        {\n          \"placeName\": \"Walk the Strip\",\n          \"placeDetails\": \"Explore the casinos and architecture. Many are free to enter.\",\n          \"placeImageUrl\": \"Replace with image URL\",\n          \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 },\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"Replace with rating\",\n          \"time\": \"Afternoon/Evening\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Exploring and Budget Eats\",\n      \"plan\": [\n        {\n          \"placeName\": \"In-N-Out Burger\",\n          \"placeDetails\": \"Cheap and tasty West Coast burger chain.\",\n          \"placeImageUrl\": \"Replace with image URL\",\n          \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 },\n          \"ticketPricing\": \"$10-$15 (per person, approximate)\",\n          \"rating\": \"Replace with rating\",\n          \"time\": \"Lunch\"\n        },\n        {\n          \"placeName\": \"Seven Magic Mountains\",\n          \"placeDetails\": \"Colorful art installation outside of Vegas (requires transportation – Uber/Lyft)\",\n          \"placeImageUrl\": \"Replace with image URL\",\n          \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 },\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"Replace with rating\",\n          \"time\": \"Afternoon\"\n        },\n        {\n          \"placeName\": \"Buffet (choose a cheap option)\",\n          \"placeDetails\": \"Many casinos offer affordable buffets.  Check prices beforehand.\",\n          \"placeImageUrl\": \"Replace with image URL\",\n          \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 },\n          \"ticketPricing\": \"$20-$30 (per person, approximate)\",\n          \"rating\": \"Replace with rating\",\n          \"time\": \"Dinner\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Pool Day and Departure\",\n      \"plan\": [\n        {\n          \"placeName\": \"Hotel Pool (if your hotel has one)\",\n          \"placeDetails\": \"Relax and enjoy the sun.\",\n          \"placeImageUrl\": \"Replace with image URL\",\n          \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 },\n          \"ticketPricing\": \"Free (if included in hotel stay)\",\n          \"rating\": \"Replace with rating\",\n          \"time\": \"Afternoon\"\n        },\n        {\n          \"placeName\": \"Last-minute souvenir shopping\",\n          \"placeDetails\": \"Look for deals on souvenirs.\",\n          \"placeImageUrl\": \"Replace with image URL\",\n          \"geoCoordinates\": { \"latitude\": 0.0, \"longitude\": 0.0 },\n          \"ticketPricing\": \"Varies\",\n          \"rating\": \"Replace with rating\",\n          \"time\": \"Late Morning/Afternoon\"\n        }\n      ]\n    }\n  }\n}\n```\n\nRemember to fill in the missing information using online resources before your trip.  Enjoy your budget-friendly Las Vegas adventure!\n"},
        ],
      },
    ],
  });


