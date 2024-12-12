import React, { useState } from "react";
import {
  BarChart,
  CustomButton,
  DateRange,
  DoughnutChart,
  Dropdown,
  InputCustom,
  Loading,
  PhotoCircle,
  SlideOption,
} from "./components";
import FollowingsIcon from "./assets/images/followings-icon.png";
import FollowersIcon from "./assets/images/followers-icon.png";
import PostsIcon from "./assets/images/posts-icon.png";
import {
  getAccountSentiment,
  getMediaPost,
  getPopularEmail,
  getPopularHashtag,
  getPopularKeyword,
  getPopularMention,
  getPopularPhoneNumber,
  getPostEngagement,
  getUserInfo,
} from "./services/api";
import { formatNumber } from "./utils/utils";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedMedia, setSelectedMedia] = useState("");
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [dataProfile, setDataProfile] = useState({});
  const [isVerified, setIsVerified] = useState(0);
  const [rangeDate, setRangeDate] = useState();
  const [postEngagementData, setPostEngagementData] = useState([]);
  const [popularHashtagData, setPopularHashtagData] = useState([]);
  const [popularMentionData, setPopularMentionData] = useState([]);
  const [mediaPostData, setMediaPostData] = useState([]);
  const [popularKeywordData, setPopularKeywordData] = useState([]);
  const [popularEmailData, setPopularEmailData] = useState([]);
  const [popularPhoneNumberData, setPopularPhoneNumberData] = useState([]);
  const [sentimentAccount, setSentimentAccount] = useState({});

  const handleSelectType = (selected) => {
    setSelectedType(selected);

    if (selected === "akun") {
      setIsVerified(1);
    }
  };

  const handleSelectMedia = (selected) => {
    setSelectedMedia(selected);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleDateRangeChange = (selectedDates) => {
    const formattedDates = selectedDates.map((date) =>
      date ? new Date(date).toISOString().split("T")[0] : null
    );
    setRangeDate(formattedDates);
    console.log("Formatted Date Range:", formattedDates);
  };

  const handleSearchUserClick = async () => {
    if (!username || !selectedMedia || !rangeDate) {
      setError(true);
      return;
    }

    setDataProfile({});
    setPostEngagementData([]);
    setPopularHashtagData([]);
    setPopularMentionData([]);
    setMediaPostData([]);
    setPopularKeywordData([]);
    setPopularEmailData([]);
    setPopularPhoneNumberData([]);
    setSentimentAccount({});
    setError(false);
    setLoading(true);
    try {
      const result = await getUserInfo(username, selectedMedia, isVerified);
      const dataEngagement = await getPostEngagement(
        result.id,
        rangeDate[0],
        rangeDate[1]
      );
      const popularHashtag = await getPopularHashtag(result.id);
      const popularMention = await getPopularMention(result.id);
      const mediaPost = await getMediaPost(result.id);
      const popularKeyword = await getPopularKeyword(result.id);
      const popularEmail = await getPopularEmail(result.id);
      const popularPhoneNumber = await getPopularPhoneNumber(result.id);
      const accountSentiment = await getAccountSentiment(result.id);

      setDataProfile(result);
      setPostEngagementData(dataEngagement);
      setPopularHashtagData(popularHashtag);
      setPopularMentionData(popularMention);
      setMediaPostData(mediaPost);
      setPopularKeywordData(popularKeyword);
      setPopularEmailData(popularEmail);
      setPopularPhoneNumberData(popularPhoneNumber);
      setSentimentAccount(accountSentiment);
    } catch (error) {
      console.error("Error fetching user info:", error);
    } finally {
      setLoading(false);
    }
  };

  const objectOpt = [
    { value: "akun", label: "Akun Sosial Media" },
    { value: "hashtag", label: "Hashtag / Mention" },
    { value: "fake", label: "Akun Fake (Avatar)" },
  ];

  const resourceOpt = [
    { value: "facebook", label: "Facebook" },
    { value: "instagram", label: "Instagram" },
    { value: "x", label: "X" },
    { value: "tiktok", label: "TikTok" },
    { value: "youtube", label: "YouTube" },
  ];
  return (
    <div className="px-10 py-2">
      <h1 className="text-2xl font-bold">
        Pusat Riset Siber dan Analisis Informasi (PRISAI)
      </h1>

      <div className="bg-[#F7F7F7CC] p-5 flex items-center mt-4 h-72 gap-6">
        <div className="flex-1">
          <h2 className="text-3xl text-[#4D4D4D] font-semibold">
            Solusi Tepat Menganalisa Pengaruh{" "}
            <span className="text-[#237D31]">
              Akun, Hashtag & Fake Account (Avatar) Media Sosial
            </span>
          </h2>
          <p className="text-sm text-[#717171]">
            Where to grow your business as a photographer: site or social media?
          </p>
          <a
            href="/"
            className="inline-block bg-[#237D31] text-white py-2 px-4 text-sm mt-5"
          >
            Sign Up
          </a>
        </div>
        <div className="flex-1">
          <h2>Image</h2>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-row gap-5 items-center justify-between">
          <div className="w-full">
            <p className="mb-2">Pilih Tipe</p>
            <Dropdown
              options={objectOpt}
              onSelect={handleSelectType}
              errorCheck={error}
            />
          </div>
          {selectedType === "akun" ? (
            <div className="w-full">
              <p className="mb-2">Pilih Sosial Media</p>
              <Dropdown
                options={resourceOpt}
                onSelect={handleSelectMedia}
                errorCheck={error}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-5">
          <p className="mb-2">Masukkan Username</p>
          <InputCustom
            errorCheck={error}
            placeholder="Masukkan Username @"
            handleChangeInput={(e) => handleChangeUsername(e)}
          />
        </div>
        <div className="mt-5">
          <p className="mb-2">Rentang Waktu</p>
          <DateRange onDateChange={handleDateRangeChange} errorCheck={error} />
        </div>
        <div className="mt-5">
          <CustomButton
            isDisabled={loading}
            handleOnClick={handleSearchUserClick}
          >
            {loading ? <Loading /> : "Cari"}
          </CustomButton>
        </div>
      </div>

      <div
        className={`mt-5 bg-[#F7F7F7CC] py-20 px-7 flex gap-6 ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <PhotoCircle srcImg={dataProfile?.profile_photo} />
          <div className="mt-2 text-center">
            <p>{dataProfile?.account_name || "-"}</p>
            <p>{dataProfile?.account_username || ""}</p>
            <p>{dataProfile?.account_biography || ""}</p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <h4 className="text-[#237D31] text-3xl font-bold mb-5">
            Generate your report
          </h4>
          <div className="flex gap-5 ">
            <CustomButton>Ms. Power Point</CustomButton>
            <CustomButton>Cetak Pdf</CustomButton>
          </div>
          <div className="mt-14 flex gap-16">
            <div className="flex gap-4 items-center">
              <img src={FollowingsIcon} className="w-14" alt="Following" />
              <p className="text-xl font-bold">
                {formatNumber(dataProfile?.total_following) || "-"} <br />
                <span className="text-sm font-normal">Following</span>
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={FollowersIcon} className="w-14" alt="Followers" />
              <p className="text-xl font-bold">
                {formatNumber(dataProfile?.total_follower) || "-"} <br />
                <span className="text-sm font-normal">Followers</span>
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={PostsIcon} className="w-14" alt="Total Posts" />
              <p className="text-xl font-bold">
                {formatNumber(dataProfile?.total_post) || "-"} <br />
                <span className="text-sm font-normal">Total Posts</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="font-bold text-xl mb-5">
          Daily Posts and Engangements Performance{" "}
        </h1>
        {Array.isArray(postEngagementData) && postEngagementData.length > 0 ? (
          <BarChart data={postEngagementData} />
        ) : (
          <p>No Data to display</p>
        )}
      </div>

      <div className="mt-8 flex gap-5">
        <div className="flex-1">
          <h1 className="font-bold text-xl mb-5">Most Popular Hashtag</h1>
          {Array.isArray(popularHashtagData) &&
          popularHashtagData.length > 0 ? (
            <SlideOption options={popularHashtagData} labelKey="hashtag" />
          ) : (
            <p>No Popular Hashtag to display</p>
          )}
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-xl mb-5">Most Popular Mention</h1>
          {Array.isArray(popularMentionData) &&
          popularMentionData.length > 0 ? (
            <SlideOption options={popularMentionData} labelKey="mention" />
          ) : (
            <p>No Popular Hashtag to display</p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h1 className="font-bold text-xl mb-5">
          Postingan dengan likes tertinggi oleh profil yang dicari
        </h1>
        {mediaPostData.length > 0
          ? mediaPostData.map((item, index) => {
              return (
                <div key={index} className="flex gap-10 items-center">
                  <input
                    readOnly
                    value={item.url}
                    className="p-2 bg-white border rounded-md border-black w-full mb-5"
                  />{" "}
                  <p className="mb-5 flex items-center gap-2 font-bold text-xl">
                    {formatNumber(item.likes)} <span>Likes</span>
                  </p>
                </div>
              );
            })
          : "No data to display"}
      </div>

      <div className="mt-5 flex gap-2">
        <div className="flex-1">
          <h1 className="font-bold text-xl mb-5">Most Keyword</h1>
          {Array.isArray(popularKeywordData) &&
          popularKeywordData.length > 0 ? (
            <SlideOption options={popularKeywordData} labelKey="keyword" />
          ) : (
            <p>No Popular Keyword to display</p>
          )}
        </div>

        <div className="flex-1">
          <h1 className="font-bold text-xl mb-5">Most Popular Email</h1>
          {Array.isArray(popularEmailData) && popularEmailData.length > 0 ? (
            <SlideOption options={popularEmailData} labelKey="email" />
          ) : (
            <p>No Popular Email to display</p>
          )}
        </div>

        <div className="flex-1">
          <h1 className="font-bold text-xl mb-5">Most Popular Phone Number</h1>
          {Array.isArray(popularPhoneNumberData) &&
          popularPhoneNumberData.length > 0 ? (
            <SlideOption
              options={popularPhoneNumberData}
              labelKey="phonenumber"
            />
          ) : (
            <p>No Popular Phone Number to display</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        <div className="text-center">
          <h1 className="font-bold text-xl mb-5">Sentiment</h1>
          <p className="text-xl">Sentiment mengenai profil yang dicari</p>
        </div>
        {Object.keys(sentimentAccount).length !== 0 ? (
          <div className="bg-white mt-14">
            <DoughnutChart data={sentimentAccount} />
          </div>
        ) : (
          <div className="text-center">No data to display</div>
        )}
      </div>
    </div>
  );
};

export default App;
