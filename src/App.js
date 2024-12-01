import React, { useState } from "react";
import JumbotronImage from "./assets/images/big-shoes-hero.png";
import FollowersIcon from "./assets/icons/followers.svg";
import TotalPosts from "./assets/icons/total-posts.svg";
import {
  BarChart,
  CustomButton,
  DoughChart,
  HighestLikes,
  ImageRounded,
  Loading,
  SelectOption,
} from "./components";
import { getUserInfo } from "./services/api";
import { ConvertPdf, formatNumber } from "./utils/utils";

const App = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(true);

  const handleChangeInputUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (value.length > 0) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const handleCariUser = async () => {
    setLoading(true);
    try {
      const result = await getUserInfo(username);
      setData(result.response.body.data.user);
    } catch (error) {
      console.error("Error fetching user info:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePdf = (data) => {
    try {
      ConvertPdf(data);
    } catch (error) {
      console.error(`Error while convert to PDF ${error}`);
    }
  };

  return (
    <div className="px-10 py-5">
      <div>
        <h2 className="font-bold text-2xl text-black">
          Pusat Riset Siber dan Analisis Informasi (PRISAI)
        </h2>
        <div className="bg-[#F7F7F7CC] h-[550px] w-full mt-5 flex flex-row items-center justify-between px-9">
          <div className="flex-1">
            <h3 className="text-gray-900 text-5xl font-bold">
              Solusi Tepat Menganalisa Pengaruh{" "}
              <span style={{ color: "#237D31" }}>
                Akun, Hastag & Fake Account (Avatar) Media Sosial
              </span>
            </h3>
            <p className="mt-4" style={{ color: "#717171" }}>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <a
              href="/"
              className="bg-[#237D31] py-3 px-5 inline-block mt-3 text-white text-sm"
            >
              Sign Up
            </a>
          </div>
          <div className="flex-1">
            <img
              src={JumbotronImage}
              style={{ height: "550px", width: "auto !important" }}
              alt="Jumbotron"
            />
          </div>
        </div>
        <div className="mt-5 flex items-center gap-5">
          <input
            placeholder="Masukkan username Instagram"
            className="p-3 border-2 outline-none w-full"
            onChange={handleChangeInputUsername}
          />
          {loading ? (
            <Loading />
          ) : (
            <CustomButton isDisabled={active} onClick={handleCariUser}>
              Cari
            </CustomButton>
          )}
        </div>
        <div className="bg-[#F7F7F7CC] mt-5 py-12 px-6 flex flex-col">
          <div className="flex flex-row gap-5">
            <div className="flex-1 flex justify-center">
              {loading ? (
                <Loading />
              ) : (
                <ImageRounded srcImg={data && data.profile_pic_url_hd} />
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-5 items-center">
                <h4 className="text-[#237D31] text-3xl font-bold">
                  Generate your Report
                </h4>
                <div className="flex flex-row gap-5">
                  <CustomButton>Ms. Power Point</CustomButton>
                  <CustomButton onClick={() => handlePdf(data)}>
                    Cetak PDF
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-8 gap-5">
            <div className="flex-1">
              {loading ? (
                <div className="flex justify-center items-center">
                  <Loading />
                </div>
              ) : (
                <div className="text-center">
                  <p className="font-semibold text-xl">
                    {data && data.username ? data.username : "-"}
                  </p>
                  <a href="/" className="text-sm">
                    {data && data.full_name ? data.full_name : "-"}
                  </a>
                  <p className="text-sm">
                    {data && data.biography ? data.biography : "-"}
                  </p>
                </div>
              )}
            </div>
            <div className="flex-1 flex justify-between items-center">
              <div className="flex gap-5">
                <img src={FollowersIcon} alt="Followers" />
                <div className="flex flex-col">
                  {loading ? (
                    <Loading />
                  ) : (
                    <p className="font-bold text-2xl">
                      {data && data.edge_follow
                        ? formatNumber(data.edge_follow.count)
                        : "-"}
                    </p>
                  )}
                  <span className="text-sm font-semibold">Following</span>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={FollowersIcon} alt="Followers" />
                <div className="flex flex-col">
                  {loading ? (
                    <Loading />
                  ) : (
                    <p className="font-bold text-2xl">
                      {data && data.edge_followed_by.count
                        ? formatNumber(data.edge_followed_by.count)
                        : "-"}
                    </p>
                  )}
                  <span className="text-sm font-semibold">Followers</span>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={TotalPosts} alt="Followers" />
                <div className="flex flex-col">
                  {loading ? (
                    <Loading />
                  ) : (
                    <p className="font-bold text-2xl">
                      {data && data.edge_owner_to_timeline_media.count
                        ? formatNumber(data.edge_owner_to_timeline_media.count)
                        : "-"}
                    </p>
                  )}
                  <span className="text-sm font-semibold">Total Posts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-5">
          <h4 className="font-bold text-xl">
            Daily Posts and Engangements Perfomance
          </h4>
          <BarChart />
        </div>

        <div className="flex justify-between gap-10">
          <div style={{ width: "100%" }}>
            <h4 className="font-bold text-xl">Most Popular Hashtag</h4>
            <SelectOption />
          </div>
          <div style={{ width: "100%" }}>
            <h4 className="font-bold text-xl">Most Popular Hashtag</h4>
            <SelectOption />
          </div>
        </div>

        <div className="mt-10">
          <h4 className="font-bold text-xl">
            Postingan dengan likes tertinggi oleh profil yang dicari
          </h4>
          <p className="mb-5">Post URL</p>
          <HighestLikes />
        </div>

        <div className="flex justify-between gap-10 mt-10">
          <div style={{ width: "100%" }}>
            <h4 className="font-bold text-xl">Most Keyword</h4>
            <SelectOption />
          </div>
          <div style={{ width: "100%" }}>
            <h4 className="font-bold text-xl">Most Popular Email</h4>
            <SelectOption />
          </div>
          <div style={{ width: "100%" }}>
            <h4 className="font-bold text-xl">Most Popular Phone Number</h4>
            <SelectOption />
          </div>
        </div>

        <div className="flex items-center flex-col mt-10">
          <div>
            <h4 className="font-bold text-xl text-center">Sentiment</h4>
            <p>Sentiment mengenai profil yang dicari</p>
          </div>
          <div>
            <DoughChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
