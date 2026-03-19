import  { lazy, Suspense, useEffect, useState } from "react";
import {
  Box,
  Button,  
  Skeleton
} from "@mui/material";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { useSelector } from "react-redux";
import "../styles/style.css"; // ✅ CSS IMPORT

// ✅ Lazy
const Section = lazy(() => import("../components/section"));
const MeetingTable = lazy(() => import("../components/MeetingTable"));

// ✅ Skeleton
const TableSkeleton = () => (
  <Box sx={{ mb: 4 }}>
    <Skeleton variant="text" width={200} height={40} sx={{ mb: 2 }} />
    <Skeleton variant="rectangular" height={40} sx={{ mb: 1 }} />
    {[...Array(4)].map((_, i) => (
      <Skeleton key={i} variant="rectangular" height={35} sx={{ mb: 1 }} />
    ))}
  </Box>
);

// ✅ Splash
const SplashScreen = () => (
  <div className="splash-container">
    <img src="/green.png" alt="Loading" className="splash-image" />
  </div>
);

const Dashboard = () => {
  const meetings = useSelector((state) => state.meetings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const grouped = {
    past: meetings.filter((m) => m.section === "past"),
    today: meetings.filter((m) => m.section === "today"),
    week: meetings.filter((m) => m.section === "week"),
  };

  if (loading) return <SplashScreen />;

  return (
    <Box sx={{ width: "100%", px: 3, py: 3 }}>

      {/* ✅ Watermark */}
      <div className="watermark-bg"></div>

      <div className="dashboard-content">

        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          {/* LEFT */}
          <Box display="flex" alignItems="center" gap={2}>
            <FiberManualRecordIcon sx={{ color: "green", fontSize: 12 }} />
            <b>MEETING</b>
            <CalendarTodayIcon />
            <GridViewIcon />
            <ViewListIcon />
            <Box>Group by: <b>Date</b></Box>
          </Box>

          {/* CENTER */}
          <Box display="flex" alignItems="center" gap={1}>
            <ArrowBackIosNewIcon fontSize="small" />
            <span>01-Jan-2024 to 21-Jan-2024</span>
            <ArrowForwardIosIcon fontSize="small" />
          </Box>

          {/* RIGHT */}
          <Box display="flex" alignItems="center" gap={2}>
           
            <div className="search-box">
              <SearchIcon fontSize="small" />
              <input className="search-input" placeholder="Search" />
            </div>

            <NotificationsNoneIcon />
            <FilterListIcon />
            <FileDownloadIcon />
          </Box>
        </Box>

        {/* BUTTON */}
        <Button variant="contained" color="success" sx={{ mb: 3 }}>
          + Add Meeting
        </Button>

        {/* SECTIONS */}
        <Suspense fallback={<TableSkeleton />}>
          <Section title="Past Dates">
            <MeetingTable data={grouped.past} />
          </Section>
        </Suspense>

        <Suspense fallback={<TableSkeleton />}>
          <Section title="Today">
            <MeetingTable data={grouped.today} />
          </Section>
        </Suspense>

        <Suspense fallback={<TableSkeleton />}>
          <Section title="This Week">
            <MeetingTable data={grouped.week} />
          </Section>
        </Suspense>

      </div>
    </Box>
  );
};

export default Dashboard;