import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../../styles";
import { AnimeItem, AnimeName, AnimeDescription } from "./styles";
import Layout from "../../../components/Layout";
import { Progress } from "semantic-ui-react";
import StarRatingComponent from "react-star-rating-component";
import { useSpring, animated } from "react-spring";

const API_URL = "https://graphql.anilist.co";

// Animated Number Component
function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

// Function to fetch all anime data with pagination
const fetchAllAnimeData = async () => {
  let allAnime = [];
  let currentPage = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    const query = `{
      Page(page: ${currentPage}, perPage: 50) {
        pageInfo { currentPage hasNextPage }
        mediaList(userId: 478182, status: COMPLETED) {
          progress
          score
          media {
            id
            title { english native }
            coverImage { large }
            meanScore
            episodes
            description(asHtml: false)
          }
        }
      }
    }`;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query }),
      });
      
      const data = await response.json();
      if (data.data.Page) {
        allAnime = [...allAnime, ...data.data.Page.mediaList];
        hasNextPage = data.data.Page.pageInfo.hasNextPage;
        currentPage++;
      } else {
        hasNextPage = false;
      }
    } catch (error) {
      console.error("Error fetching anime data:", error);
      hasNextPage = false;
    }
  }

  return allAnime;
};

const AnimeComplete = ({ user }) => {
  const [data, setData] = useState({ mediaList: [], stats: {} });

  useEffect(() => {
    fetchAllAnimeData().then((mediaList) => {
      setData({ mediaList, stats: {} });
    });
  }, []);

  return (
    <Layout user={user}>
      <div className="row" style={{ paddingBottom: "20px" }}>
        <SectionTitle display="inline">
          Total Anime Watched: <Number n={data.mediaList.length} />
        </SectionTitle>
      </div>
      <div className="anime-table-container">
        <table className="anime-table">
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th className="rating-column">Rating</th>
              <th>Progress</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.mediaList.map((d) => (
              <tr key={d.media.id}>
                <td>
                  <img src={d.media.coverImage.large} alt="Cover" className="cover-image" />
                </td>
                <td>
                  <AnimeName>{d.media.title.english || d.media.title.native}</AnimeName>
                </td>
                <td className="rating-column">
                  <StarRatingComponent
                    name={`rating-${d.media.id}`}
                    value={Math.round((d.score / 10) * 5)}
                    starCount={5}
                    starColor="#ffb400"
                    emptyStarColor="#FFFFFF"
                    editing={false}
                  />
                </td>
                <td>
                  <Progress
                    percent={(d.progress / d.media.episodes) * 100}
                    size="small"
                    color="green"
                    active
                  >
                    {d.progress}/{d.media.episodes}
                  </Progress>
                </td>
                <td>
                  <AnimeDescription>{d.media.description}</AnimeDescription>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <style jsx>{`
        .anime-table-container {
          overflow-x: auto;
        }
        .anime-table {
          width: 100%;
          border-collapse: collapse;
          background-color: #1a1a1a;
          color: white;
        }
        .anime-table th, .anime-table td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #333;
        }
        .cover-image {
          width: 80px;
          border-radius: 5px;
        }
        .rating-column {
          width: 150px;
        }
        @media (max-width: 768px) {
          .anime-table th, .anime-table td {
            padding: 8px;
          }
          .cover-image {
            width: 60px;
          }
          .rating-column {
            width: auto;
          }
        }
      `}</style>
    </Layout>
  );
};

export default AnimeComplete;
