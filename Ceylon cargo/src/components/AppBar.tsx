import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Container,
  Fade,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const pages = [
  { name: "Home", path: "/" },
  { name: "Tracking", path: "/tracking" },
  { name: "Booking", path: "/booking" },
  { name: "Payment", path: "/payment" },
  { name: "Services", path: "/services" },
  { name: "About us", path: "/about" },
];

const COLORS = {
  primaryBlue: "#1a539b",
  textDark: "#1e293b",
  white: "#ffffff",
  gold: "#f59e0b",
};

const FONT_FAMILY = "'Montserrat', sans-serif";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const location = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          // ✅ SAME BASE COLOR AS HERO
          background: "#F7FAFF",
          zIndex: 1100,
          overflow: "hidden", // important for the decoration
        }}
      >
        {/* ✅ SAME HERO DECORATION OVERLAY */}
        <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(11,95,255,0.10) 0, transparent 35%), radial-gradient(circle at 80% 40%, rgba(0,184,255,0.10) 0, transparent 40%), radial-gradient(circle at 40% 90%, rgba(40,199,111,0.10) 0, transparent 40%)",
          pointerEvents: "none",
        }}
       />


        <Container
          maxWidth="xl"
          disableGutters
          sx={{
            position: "relative", // so content stays above overlay
            background: "transparent", // ✅ don’t override AppBar bg
          }}
        >
          <Toolbar
            sx={{
              position: "relative",
              height: { xs: 90, md: 110 },
              display: "flex",
              justifyContent: "space-between",
              px: { xs: 2, sm: 4, md: 10, lg: 16, xl: 20 },
              background: "transparent", // ✅ keep same bg
            }}
          >
            {/* LEFT */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { md: 6, lg: 8 },
              }}
            >
              <Link to="/" style={{ display: "flex" }}>
                <Box
                  component="img"
                  src="https://i.ibb.co/q3X6KnQw/Gemini-Generated-Image-gqlcmkgqlcmkgql.jpg"
                  alt="Ceylon Cargo"
                  sx={{ height: { xs: 55, md: 75 } }}
                />
              </Link>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    sx={{
                      fontFamily: FONT_FAMILY,
                      textTransform: "none",
                      fontSize: "0.9rem",
                      fontWeight: location.pathname === page.path ? 800 : 600,
                      color:
                        location.pathname === page.path
                          ? COLORS.primaryBlue
                          : COLORS.textDark,
                      px: 2,
                      "&:hover": {
                        bgcolor: "transparent",
                        color: COLORS.primaryBlue,
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* RIGHT */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Tooltip title="Secure Client Access" arrow>
                <Box
                  component={Link}
                  to="/login"
                  sx={{
                    textDecoration: "none",
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover .login-icon-box": {
                      bgcolor: COLORS.primaryBlue,
                      color: COLORS.white,
                      transform: "rotate(-10deg) scale(1.1)",
                    },
                    "&:hover .login-text": {
                      color: COLORS.primaryBlue,
                      letterSpacing: "1.5px",
                    },
                  }}
                >
                  <Box
                    className="login-icon-box"
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(26, 83, 155, 0.1)",
                      color: COLORS.primaryBlue,
                      transition:
                        "0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      mr: 1.5,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    }}
                  >
                    <LoginIcon sx={{ fontSize: 22 }} />
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      className="login-text"
                      component="span"
                      sx={{
                        fontFamily: FONT_FAMILY,
                        fontSize: "0.85rem",
                        fontWeight: 800,
                        color: COLORS.textDark,
                        transition: "0.3s",
                        lineHeight: 1.2,
                      }}
                    >
                      SIGN IN
                    </Box>

                    <Box
                      component="span"
                      sx={{
                        fontFamily: FONT_FAMILY,
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: COLORS.gold,
                        letterSpacing: "0.5px",
                      }}
                    >
                      PORTAL ACCESS
                    </Box>
                  </Box>
                </Box>
              </Tooltip>

              {/* Track Button */}
              <Button
                variant="outlined"
                endIcon={
                  <ArrowForwardIosIcon sx={{ fontSize: "10px !important" }} />
                }
                sx={{
                  display: { xs: "none", lg: "inline-flex" },
                  fontFamily: FONT_FAMILY,
                  borderColor: COLORS.primaryBlue,
                  borderWidth: "2px",
                  color: COLORS.primaryBlue,
                  borderRadius: "12px",
                  px: 3,
                  py: 1.2,
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  "&:hover": {
                    borderWidth: "2px",
                    bgcolor: COLORS.primaryBlue,
                    color: COLORS.white,
                    boxShadow: "0 10px 20px rgba(26, 83, 155, 0.15)",
                  },
                  transition: "0.3s",
                }}
                component={Link}
                to="/tracking"
              >
                Track Now
              </Button>

              {/* Mobile Menu Icon */}
              <IconButton
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: COLORS.primaryBlue,
                }}
                onClick={handleOpenNavMenu}
              >
                <MenuIcon sx={{ fontSize: 35 }} />
              </IconButton>
            </Box>

            {/* Mobile Dropdown */}
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              TransitionComponent={Fade}
              PaperProps={{
                sx: {
                  width: 300,
                  borderRadius: "20px",
                  mt: 1,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  <Box sx={{ fontFamily: FONT_FAMILY, fontWeight: 700 }}>
                    {page.name}
                  </Box>
                </MenuItem>
              ))}

              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/login"
              >
                <Box sx={{ fontFamily: FONT_FAMILY, fontWeight: 800 }}>
                  Sign In
                </Box>
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacer */}
      <Box sx={{ height: { xs: 90, md: 110 } }} />
    </>
  );
}