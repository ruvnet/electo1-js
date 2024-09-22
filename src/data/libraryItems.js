export const libraryItems = [
  {
    id: 1,
    name: "Default Agent Deployment",
    type: "Agent Deployment",
    data: {
      location: { country: "USA", state: "California" },
      demographic: { ageRange: "25-34", gender: "All" },
      socioeconomic: { incomeRange: "middle", occupation: "Technology" },
      cultural: { ethnicity: "Diverse", language: "English" },
      political: { affiliation: "Independent", keyIssues: ["Economy", "Healthcare"] }
    }
  },
  {
    id: 2,
    name: "Sentiment Analysis Strategy",
    type: "AI Strategy",
    data: {
      model: "BERT",
      dataSource: "Twitter API",
      updateFrequency: "Hourly",
      outputFormat: "JSON"
    }
  },
  {
    id: 3,
    name: "Voter Turnout Prediction",
    type: "Prediction Model",
    data: {
      algorithm: "Random Forest",
      features: ["Age", "Income", "Education", "Previous Voting History"],
      trainingData: "Historical Voter Records",
      accuracy: 0.85
    }
  },
  {
    id: 4,
    name: "News Aggregator",
    type: "Data Source",
    data: {
      type: "RSS",
      sources: ["CNN", "Fox News", "MSNBC", "Reuters"],
      updateInterval: "15 minutes",
      categories: ["Politics", "Economy", "International Relations"]
    }
  },
  {
    id: 5,
    name: "Social Media Trend Analyzer",
    type: "AI Strategy",
    data: {
      platforms: ["Twitter", "Facebook", "Reddit"],
      keywords: ["Election", "Vote", "Candidate"],
      analysisType: "Trend Detection",
      outputFormat: "Dashboard Visualization"
    }
  }
];