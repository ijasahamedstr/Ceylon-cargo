import { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Paper,
  useTheme,
  useMediaQuery 
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InventoryIcon from '@mui/icons-material/Inventory';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// --- BRAND COLOR CONFIGURATION ---
const BrandColors = {
  primary: "#0052FF",
  secondary: "#00D1FF",
  success: "#10B981",
  neutral: "#94A3B8",
  bgLight: "#F8FAFC"
};

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0px rgba(0, 82, 255, 0.2); }
  70% { box-shadow: 0 0 0 12px rgba(0, 82, 255, 0); }
  100% { box-shadow: 0 0 0 0px rgba(0, 82, 255, 0); }
`;

// --- Styled Components ---
const StepNode = styled(motion.div)<{ active?: boolean; completed?: boolean }>(({ active, completed }) => ({
  width: 58,
  height: 58,
  borderRadius: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 3,
  cursor: 'pointer',
  background: completed 
    ? BrandColors.success 
    : active 
      ? `linear-gradient(135deg, ${BrandColors.primary} 0%, ${BrandColors.secondary} 100%)` 
      : '#FFFFFF',
  border: '1px solid',
  borderColor: active || completed ? 'transparent' : '#E2E8F0',
  color: completed || active ? '#fff' : BrandColors.neutral,
  animation: active ? `${pulseGlow} 2s infinite` : 'none',
  boxShadow: active 
    ? `0 10px 20px -5px rgba(0, 82, 255, 0.4)` 
    : '0 4px 6px rgba(0, 0, 0, 0.04)',
  transition: 'all 0.3s ease',
}));

const workflowSteps = [
  { id: 1, title: "Booking", icon: CalendarMonthIcon, desc: "Order Confirmed", details: "System successfully verified credentials and payment." },
  { id: 2, title: "Collection", icon: InventoryIcon, desc: "Safe Pickup", details: "Courier arrived at origin warehouse for security scanning." },
  { id: 3, title: "Transit", icon: FlightTakeoffIcon, desc: "Global Movement", details: "Package is on a long-haul flight with GPS tracking active." },
  { id: 4, title: "Warehouse", icon: WarehouseIcon, desc: "Regional Hub", details: "Sorting in progress at destination facility for final route." },
  { id: 5, title: "Delivery", icon: LocalShippingIcon, desc: "Out for Delivery", details: "Last-mile agent is nearing your location for drop-off." },
];

export default function SystemWorkFlow() {
  const [activeStep, setActiveStep] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const montserratStyle = { fontFamily: "'Montserrat', sans-serif" };

  useEffect(() => {
    let current = 1;
    const interval = setInterval(() => {
      if (current < 5) {
        current++;
        setActiveStep(current);
      } else {
        clearInterval(interval);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const progressValue = ((activeStep - 1) / (workflowSteps.length - 1)) * 100;

  return (
    <Box sx={{ 
      width: "100%", 
      background: `linear-gradient(180deg, ${BrandColors.bgLight} 0%, #EDF2F7 100%)`, 
      pt: 4, // Reduced padding top
      pb: 8,
      ...montserratStyle
    }}>
      <Container maxWidth="md">
        
        {/* BRANDED HEADER */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="overline" 
            sx={{ ...montserratStyle, color: BrandColors.primary, fontWeight: 800, letterSpacing: 3, fontSize: '0.7rem' }}
          >
            Workflow Intelligence
          </Typography>
          <Typography variant="h4" sx={{ 
            ...montserratStyle, fontWeight: 900, mt: 1, letterSpacing: -1, fontSize: '2rem',
            background: `linear-gradient(135deg, #1A202C 0%, ${BrandColors.primary} 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            System Work Flow
          </Typography>
        </Box>

        {/* ADAPTIVE PROGRESS PIPELINE */}
        <Box sx={{ 
          position: 'relative', 
          mb: 8, 
          px: 2,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          minHeight: isMobile ? '500px' : 'auto'
        }}>
          
          {/* Progress Bar Background */}
          <Box sx={{
            position: 'absolute',
            bgcolor: '#E2E8F0',
            borderRadius: '10px',
            zIndex: 1,
            ...(isMobile ? {
              left: '46px', // Centered under StepNode
              top: '30px',
              bottom: '30px',
              width: '5px',
            } : {
              top: '29px',
              left: '60px',
              right: '60px',
              height: '5px',
            })
          }}>
            {/* Progress Bar Fill */}
            <motion.div 
              initial={isMobile ? { height: 0 } : { width: 0 }}
              animate={isMobile ? { height: `${progressValue}%` } : { width: `${progressValue}%` }}
              transition={{ duration: 1.5, ease: "circOut" }}
              style={{
                background: `linear-gradient(${isMobile ? '180deg' : '90deg'}, ${BrandColors.primary}, ${BrandColors.secondary}, ${BrandColors.success})`,
                borderRadius: '10px',
                width: '100%',
                height: '100%'
              }}
            />
          </Box>

          {workflowSteps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === activeStep;
            const isCompleted = step.id < activeStep;

            return (
              <Box key={step.id} sx={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'row' : 'column', 
                alignItems: 'center', 
                zIndex: 3,
                gap: isMobile ? 3 : 0,
                mb: isMobile ? 4 : 0
              }}>
                <StepNode 
                  active={isActive} 
                  completed={isCompleted}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setActiveStep(step.id)}
                >
                  <AnimatePresence mode="wait">
                    {isCompleted ? (
                      <motion.div key="c" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 26 }} />
                      </motion.div>
                    ) : (
                      <motion.div key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Icon sx={{ fontSize: 24 }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </StepNode>

                <Typography sx={{ 
                  ...montserratStyle, 
                  mt: isMobile ? 0 : 2.5, 
                  fontWeight: 700, 
                  color: isActive || isCompleted ? "#1A202C" : BrandColors.neutral,
                  fontSize: '0.65rem',
                  textTransform: 'uppercase', 
                  letterSpacing: 1,
                  textAlign: isMobile ? 'left' : 'center'
                }}>
                  {step.title}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* DETAIL CARD */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              style={{ width: '100%', maxWidth: '600px' }}
            >
              <Paper elevation={0} sx={{ 
                p: 4, 
                bgcolor: '#FFFFFF', 
                borderRadius: '28px',
                border: `1px solid #E2E8F0`,
                textAlign: 'center',
                boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Box sx={{ 
                  position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                  background: `linear-gradient(90deg, ${BrandColors.primary}, ${BrandColors.secondary})`
                }} />

                <Typography variant="h6" sx={{ 
                  ...montserratStyle, fontWeight: 800, color: BrandColors.primary, mb: 1, fontSize: '1rem' 
                }}>
                  {workflowSteps[activeStep - 1].desc}
                </Typography>
                <Typography variant="body2" sx={{ 
                  ...montserratStyle, color: '#4A5568', lineHeight: 1.7, fontWeight: 500, fontSize: '0.85rem' 
                }}>
                  {workflowSteps[activeStep - 1].details}
                </Typography>
              </Paper>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}