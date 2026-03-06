import { Box, Typography, Button, Container, Stack, Chip, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#0B5FFF",
  color: "#fff",
  padding: "14px 28px",
  borderRadius: "12px",
  textTransform: "none",
  fontWeight: 700,
  fontSize: "1rem",
  fontFamily: "'Montserrat', sans-serif",
  boxShadow: "0px 10px 26px rgba(11, 95, 255, 0.25)",
  transition: "all 0.3s ease",
  width: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Full width for better mobile UX
  },
  "&:hover": { 
    backgroundColor: "#094FD6",
    transform: "translateY(-2px)",
    boxShadow: "0px 12px 30px rgba(11, 95, 255, 0.35)",
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#0B5FFF",
  padding: "14px 28px",
  borderRadius: "12px",
  textTransform: "none",
  fontWeight: 700,
  fontSize: "1rem",
  fontFamily: "'Montserrat', sans-serif",
  border: "2px solid rgba(11, 95, 255, 0.35)",
  transition: "all 0.3s ease",
  width: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  "&:hover": {
    borderColor: "rgba(11, 95, 255, 0.7)",
    backgroundColor: "rgba(11, 95, 255, 0.06)",
  },
}));

export default function HeroSlider() {
  return (
    <Box
      sx={{
        width: "100%",
        // Desktop: Full height and centered. Mobile: Auto height with padding.
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Montserrat', sans-serif",
        background: "#F7FAFF",
        pt: { xs: 5, md: 0 }, // Significant space for mobile header
        pb: { xs: 10, md: 0 },
      }}
    >
      {/* Dynamic Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(11,95,255,0.08) 0, transparent 30%), radial-gradient(circle at 85% 85%, rgba(40,199,111,0.08) 0, transparent 30%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={{ xs: 8, md: 4 }} alignItems="center">
          
          {/* LEFT CONTENT BLOCK */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={{ xs: 4, md: 4 }}>
              
              {/* Badge Area */}
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
                <Chip
                  icon={<VerifiedOutlinedIcon sx={{ fontSize: "1.2rem !important" }} />}
                  label="Trusted Logistics Partner"
                  sx={{
                    fontWeight: 700,
                    bgcolor: "rgba(11,95,255,0.08)",
                    color: "#0B5FFF",
                    fontFamily: "'Montserrat', sans-serif",
                    p: 0.5
                  }}
                />
                <Chip
                  icon={<LocalShippingOutlinedIcon sx={{ fontSize: "1.2rem !important" }} />}
                  label="Islandwide Delivery"
                  sx={{
                    fontWeight: 700,
                    bgcolor: "rgba(40,199,111,0.08)",
                    color: "#1F8A4C",
                    fontFamily: "'Montserrat', sans-serif",
                    p: 0.5
                  }}
                />
              </Stack>

              {/* HEADING - Professional spacing */}
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  color: "#0F172A",
                  lineHeight: { xs: 1.25, md: 1.1 },
                  fontSize: { xs: "1.25rem", sm: "2rem", md: "2.5rem" },
                  letterSpacing: "-0.03em",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Air & Sea Cargo <br />
                Deliveries Across{" "}
                <Box component="span" sx={{ color: "#0B5FFF" }}>
                  Sri Lanka
                </Box>
              </Typography>

              {/* BODY TEXT */}
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  maxWidth: 580, 
                  lineHeight: 1.8,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Experience seamless logistics with real-time tracking and 
                unmatched security. From door-to-door delivery to global 
                freight solutions, we move your business forward.
              </Typography>

              {/* FEATURE STATS */}
              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={{ xs: 4, sm: 6 }}
                sx={{ py: 1 }}
              >
                {[
                  { label: "24/7 Support", sub: "Always available", code: "24/7", color: "#0B5FFF", bg: "rgba(11,95,255,0.12)" },
                  { label: "Real-time Tracking", sub: "Global monitoring", code: "RT", color: "#1F8A4C", bg: "rgba(40,199,111,0.12)" }
                ].map((stat, index) => (
                  <Stack key={index} direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "14px",
                        background: stat.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        color: stat.color,
                        fontSize: "0.9rem"
                      }}
                    >
                      {stat.code}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#0F172A", fontFamily: "'Montserrat', sans-serif" }}>
                        {stat.label}
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem", color: "#64748B", fontFamily: "'Montserrat', sans-serif" }}>
                        {stat.sub}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              {/* ACTION BUTTONS - Spaced perfectly for mobile */}
              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={2.5} 
                sx={{ pt: 2 }}
              >
                <PrimaryButton variant="contained" disableElevation>
                  Request a Quote
                </PrimaryButton>
                <SecondaryButton variant="outlined">
                  Track Shipment
                </SecondaryButton>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT IMAGE BLOCK */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://i.ibb.co/Vpjt3Lqs/Gemini-Generated-Image-fwfx43fwfx43fwfx-bg-removed-png.webp"
              alt="Logistics Solutions"
              sx={{
                width: "100%",
                maxWidth: { xs: 320, sm: 480, md: 600 },
                height: "auto",
                filter: "drop-shadow(0px 30px 60px rgba(0,0,0,0.12))",
                animation: "float 5s ease-in-out infinite",
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-25px)" },
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}