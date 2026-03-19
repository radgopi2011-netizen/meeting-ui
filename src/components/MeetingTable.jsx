import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { deleteMeeting } from "../features/meetings/meetingSlice";
import { useDispatch } from "react-redux";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";

// ✅ Status color
const getStatusColor = (status) => {
  if (status === "Completed") return "success";
  if (status === "Running") return "warning";
  return "info";
};

// ✅ Ellipsis style (important)
const cellEllipsis = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "120px",
};

const MeetingTable = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        overflowX: "hidden", // ✅ remove horizontal scroll
      }}
    >
      <Table
        size="small"
        sx={{
          tableLayout: "auto", // ✅ important fix
          width: "100%",
        }}
      >
        {/* ================= HEADER ================= */}
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell>Purpose</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Notification</TableCell>
            <TableCell align="center">Minutes</TableCell>
          </TableRow>
        </TableHead>

        {/* ================= BODY ================= */}
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} align="center">
                No Meetings Available
              </TableCell>
            </TableRow>
          ) : (
            data.map((m) => (
              <TableRow key={m.id} hover>
                {/* Name */}
                <TableCell sx={{ position: "relative", py: 0.5 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      position: "relative",
                      "&:hover .actions": {
                        opacity: 1,
                      },
                    }}
                  >
                    {/* Name Text */}
                    <Tooltip title={m.name}>
                      <span style={{ ...cellEllipsis }}>
                        {m.name}
                      </span>
                    </Tooltip>

                    {/* Hover Actions */}
                    <Box
                      className="actions"
                      sx={{
                        display: "flex",
                        gap: "4px",
                        position: "absolute",
                        right: 0,
                        background: "#fff",
                        opacity: 0,
                        transition: "0.3s",
                      }}
                    >
                      <IconButton size="small">
                        <VisibilityIcon fontSize="small" />
                      </IconButton>

                      <IconButton size="small" color="primary">
                        <EditIcon fontSize="small" />
                      </IconButton>

                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => dispatch(deleteMeeting(m.id))}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </TableCell>

                {/* Status */}
                <TableCell align="center" sx={{ py: 0.5 }}>
                  <Chip
                    label={m.status}
                    color={getStatusColor(m.status)}
                    size="small"
                  />
                </TableCell>

                {/* Purpose */}
                <TableCell sx={{ ...cellEllipsis, py: 0.5 }}>
                  <Tooltip title={m.purpose}>
                    <span>{m.purpose}</span>
                  </Tooltip>
                </TableCell>

                {/* Date */}
                <TableCell sx={{ py: 0.5 }}>{m.date}</TableCell>

                {/* Time */}
                <TableCell sx={{ py: 0.5 }}>{m.time}</TableCell>

                {/* Type (hide on mobile) */}
                <TableCell
                  sx={{
                    py: 0.5,
                    display: { xs: "none", md: "table-cell" },
                  }}
                >
                  {m.type}
                </TableCell>

                {/* Notification */}
                <TableCell sx={{ py: 0.5 }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: "gray" }} />
                    <span style={cellEllipsis}>{m.notification}</span>
                  </Box>
                </TableCell>

                {/* Minutes */}
                <TableCell align="center" sx={{ py: 0.5 }}>
                  <AccountCircleIcon sx={{ color: "gray" }} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MeetingTable;