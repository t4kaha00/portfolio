import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } from "../config";
import "../styles/films.css";

const YT_API = "https://www.googleapis.com/youtube/v3";

const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  READY: "ready",
  ERROR: "error",
};

function parseDuration(iso) {
  // ISO-8601 duration e.g. "PT10M15S" -> "10:15"
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "00:00";
  const [, h, m, s] = match;
  const parts = [m || "0", s || "0"].map((n) => n.padStart(2, "0"));
  if (h) parts.unshift(h);
  return parts.join(":");
}

function VideosGrid() {
  const [videos, setVideos] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    let cancelled = false;

    const fetchVideos = async () => {
      setStatus(STATUS.LOADING);

      try {
        // 1. Fetch the channel's uploads playlist
        const channelRes = await fetch(
          `${YT_API}/channels?part=contentDetails&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`,
        );
        const channelData = await channelRes.json();
        const uploadsId =
          channelData.items &&
          channelData.items[0] &&
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        if (!uploadsId) throw new Error("Channel not found");

        // 2. Fetch the most recent videos from that playlist
        const playlistRes = await fetch(
          `${YT_API}/playlistItems?part=snippet&maxResults=12&playlistId=${uploadsId}&key=${YOUTUBE_API_KEY}`,
        );
        const listData = await playlistRes.json();
        const items = listData.items || [];

        // 3. Fetch durations for those video ids
        const videoIds = items
          .map((item) => item.snippet.resourceId.videoId)
          .join(",");
        const detailsRes = await fetch(
          `${YT_API}/videos?part=contentDetails&id=${videoIds}&key=${YOUTUBE_API_KEY}`,
        );
        const detailsData = await detailsRes.json();
        const durationById = {};
        (detailsData.items || []).forEach(
          (v) =>
            (durationById[v.id] = parseDuration(v.contentDetails.duration)),
        );

        if (cancelled) return;

        setVideos(
          items.map((item) => {
            const snippet = item.snippet;
            const videoId = snippet.resourceId.videoId;
            return {
              id: videoId,
              title: snippet.title,
              thumb: snippet.thumbnails.medium.url,
              duration: durationById[videoId] || "00:00",
            };
          }),
        );
        setStatus(STATUS.READY);
      } catch (err) {
        if (!cancelled) setStatus(STATUS.ERROR);
      }
    };

    fetchVideos();
    return () => {
      cancelled = true;
    };
  }, []);

  if (status === STATUS.LOADING) {
    return <p className="films-status">Loading videos…</p>;
  }

  if (status === STATUS.ERROR) {
    return (
      <p className="films-status">
        Could not load videos. Check that your YouTube API key and channel are
        configured in <code>src/config.js</code>.
      </p>
    );
  }

  return (
    <div className="films-grid">
      {videos.map(({ id, title, thumb, duration }) => (
        <a
          key={id}
          className="film-card"
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="film-thumb">
            <img src={thumb} alt={title} loading="lazy" />
            <span className="film-duration">{duration}</span>
          </div>
          <div className="film-title">{title}</div>
        </a>
      ))}
    </div>
  );
}

function Films() {
  return (
    <div className="films">
      <h1 className="films-title">Videos</h1>
      <VideosGrid />
    </div>
  );
}

export default Films;
