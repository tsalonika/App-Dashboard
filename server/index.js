const express = require("express");
const cors = require("cors");
const app = express();
const port = 3030;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const accountRoutes = require("./routes/accountRoutes");
const postEngagementRoutes = require("./routes/postEngagementRoutes");
const popularHashtagRoutes = require("./routes/popularHashtagRoutes");
const popularMentionRoutes = require("./routes/popularMentionRoutes");
const mediaPostRoutes = require("./routes/mediaPostRoutes");
const popularKeywordRoutes = require("./routes/popularKeywordRoutes");
const popularEmailRoutes = require("./routes/popularEmailRoutes");
const popularPhoneNumberRoutes = require("./routes/popularPhoneNumberRoutes");
const accountSentimentRoutes = require("./routes/accountSentimentRoutes");

app.use("/api/account", accountRoutes);
app.use("/api/postEngagement", postEngagementRoutes);
app.use("/api/popularHashtag", popularHashtagRoutes);
app.use("/api/popularMention", popularMentionRoutes);
app.use("/api/mediaPost", mediaPostRoutes);
app.use("/api/popularKeyword", popularKeywordRoutes);
app.use("/api/popularEmail", popularEmailRoutes);
app.use("/api/popularPhoneNumber", popularPhoneNumberRoutes);
app.use("/api/accountSentiment", accountSentimentRoutes);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
