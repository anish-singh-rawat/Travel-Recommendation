document.getElementById("decision-tree-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Retrieve user inputs
  const preference = document.getElementById("preference").value;
  const activity = document.getElementById("activity").value;
  const budget = document.getElementById("budget").value;

  if (!preference || !activity || !budget) {
    alert("Please fill out all fields.");
    return;
  }

  // Generate recommendation and background image
  const { recommendation, bgImage } = generateRecommendation(preference, activity, budget);

  // Build the URL path
  const basePath = "Recommendations";
  const targetPath = `${basePath}/${preference}/${activity}/${budget}/index.html`;
  const fullPath = `${targetPath}?recommendation=${encodeURIComponent(recommendation)}&bgImage=${encodeURIComponent(bgImage)}`;

  window.location.href = fullPath;
});

function generateRecommendation(preference, activity, budget) {
  const recommendations = {
    Beach: {
      Adventure: {
        Low: {
          text: "We recommend exploring the vibrant beaches of Goa, India, where you can enjoy thrilling water sports on a budget.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        },
        Medium: {
          text: "How about Bali, Indonesia? Beautiful beaches, cultural experiences, and exciting adventures await you.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        },
        High: {
          text: "Consider the Maldives! Luxurious resorts, private beaches, and unforgettable diving experiences.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        }
      },
      Relaxation: {
        Low: {
          text: "Visit the serene beaches of Thailand for a relaxing and budget-friendly getaway.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        },
        Medium: {
          text: "Explore Santorini, Greece, where you can unwind with breathtaking views and delicious cuisine.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        },
        High: {
          text: "Indulge in Bora Bora! A paradise with premium relaxation and unparalleled luxury.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        }
      }
    },
    Mountains: {
      Adventure: {
        Low: {
          text: "Head to Nepal for breathtaking treks and adventures without breaking the bank.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        },
        Medium: {
          text: "Explore the Rockies in Colorado, USA, with countless trails and activities for adventure lovers.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        },
        High: {
          text: "Visit the Swiss Alps for a mix of luxury and exhilarating mountain adventures.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        }
      },
      Relaxation: {
        Low: {
          text: "Discover the serene beauty of Himachal Pradesh, India, for a peaceful mountain escape.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        },
        Medium: {
          text: "Consider the Blue Ridge Mountains in the USA for a mix of relaxation and scenic beauty.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        },
        High: {
          text: "Enjoy the luxury of Aspen, Colorado, with world-class resorts and mountain serenity.",
          bgImage: "/media/anish/New Volume/QuadB Project/test/asset/BeachLowCost.jpg",
        }
      }
    }
  };

  const result = recommendations[preference]?.[activity]?.[budget];
  if (!result) {
    throw new Error("Invalid selection. Please check your inputs.");
  }

  return { recommendation: result.text, bgImage: result.bgImage };
}
