document.getElementById("decision-tree-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Retrieve user inputs
    const preference = document.getElementById("preference").value;
    const activity = document.getElementById("activity").value;
    const budget = document.getElementById("budget").value;
  
    // Recommendation logic
    const recommendation = generateRecommendation(preference, activity, budget);
  
    // Display recommendation
    const recommendationDiv = document.getElementById("recommendation");
    recommendationDiv.textContent = recommendation;
    recommendationDiv.classList.remove("hidden");
  });
  
  // Function to generate recommendations
  function generateRecommendation(preference, activity, budget) {
    const recommendations = {
      Beach: {
        Adventure: {
          Low: "We recommend exploring the vibrant beaches of Goa, India, where you can enjoy thrilling water sports on a budget.",
          Medium: "How about Bali, Indonesia? Beautiful beaches, cultural experiences, and exciting adventures await you.",
          High: "Consider the Maldives! Luxurious resorts, private beaches, and unforgettable diving experiences."
        },
        Relaxation: {
          Low: "Visit the serene beaches of Thailand for a relaxing and budget-friendly getaway.",
          Medium: "Explore Santorini, Greece, where you can unwind with breathtaking views and delicious cuisine.",
          High: "Indulge in Bora Bora! A paradise with premium relaxation and unparalleled luxury."
        }
      },
      Mountains: {
        Adventure: {
          Low: "Head to Nepal for breathtaking treks and adventures without breaking the bank.",
          Medium: "Explore the Rockies in Colorado, USA, with countless trails and activities for adventure lovers.",
          High: "Visit the Swiss Alps for a mix of luxury and exhilarating mountain adventures."
        },
        Relaxation: {
          Low: "Discover the serene beauty of Himachal Pradesh, India, for a peaceful mountain escape.",
          Medium: "Consider the Blue Ridge Mountains in the USA for a mix of relaxation and scenic beauty.",
          High: "Enjoy the luxury of Aspen, Colorado, with world-class resorts and mountain serenity."
        }
      }
    };
  
    return recommendations[preference][activity][budget];
  }
  