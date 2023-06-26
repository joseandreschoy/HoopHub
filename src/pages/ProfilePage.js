import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Text, styled } from "@nextui-org/react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Sidebar from "../components/Sidebar";
import Tweet from "../components/Tweet";
import { SessionContext } from "../context/SessionContext";

const CustomText = styled(Text, {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontSize: "1rem",
  lineHeight: "1.5",
  color: "#1c1e21",
  textAlign: "center",
});

const CustomTabList = styled(TabList, {
  display: "flex",
  justifyContent: "center",
  gap: "1.25rem",
  marginTop: "1.25rem",
  listStyle: "none",
  padding: "0",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
});

const CustomTab = styled(Tab, {
  cursor: "pointer",
  padding: "0.625rem 1.25rem",
  borderRadius: "0.3125rem",
  backgroundColor: "#E8F4FD",
  color: "#1c1e21",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#C5E4FA",
  },
  "&.react-tabs__tab--selected": {
    backgroundColor: "#3BA9FE",
    color: "#FFF",
    fontWeight: "bold",
  },
  fontFamily: "inherit",
});

const CustomTabPanel = styled(TabPanel, {
  marginTop: "1.25rem",
  display: "flex",
  justifyContent: "center",
});

const ProfilePage = () => {
  const { id } = useParams();
  const [session] = useContext(SessionContext);
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [comments, setComments] = useState([]);

  console.log(session);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    const fetchTweets = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/tweets?userId=${id}`
        );
        setTweets(response.data);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/comments?userId=${id}`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchUserProfile();
    fetchTweets();
    fetchComments();
  }, [id]);

  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "600px", width: "100%" }}>
          {user && (
            <>
              <div style={{ marginTop: "1.25rem", textAlign: "center" }}>
                <CustomText weight="bold">Username:</CustomText>
                <CustomText>{user.username}</CustomText>
              </div>
              <div style={{ marginTop: "1.25rem", textAlign: "center" }}>
                <CustomText weight="bold">Display Name:</CustomText>
                <CustomText>{user.display_name}</CustomText>
              </div>
              <div style={{ marginTop: "1.25rem", textAlign: "center" }}>
                <CustomText weight="bold">Bio:</CustomText>
                <CustomText>{user.bio}</CustomText>
              </div>
            </>
          )}
          <Tabs>
            <CustomTabList>
              <CustomTab>Tweets</CustomTab>
              <CustomTab>Comments</CustomTab>
            </CustomTabList>
            <CustomTabPanel>
              {tweets.map((tweet) => (
                <Tweet
                  key={tweet.id}
                  username={tweet.username}
                  displayName={tweet.display_name}
                  text={tweet.content}
                />
              ))}
            </CustomTabPanel>
            <CustomTabPanel>
              {comments.map((comment) => (
                <Tweet
                  key={comment.id}
                  username={comment.username}
                  displayName={comment.display_name}
                  text={comment.content}
                />
              ))}
            </CustomTabPanel>
          </Tabs>
        </div>
        <div style={{ marginLeft: "2rem" }}>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
