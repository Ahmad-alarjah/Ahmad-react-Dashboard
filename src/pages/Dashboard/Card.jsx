import { Box, useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { ResponsivePie } from "@nivo/pie";

const Card = ({ icon, title, subTitle, increase, data, scheme }) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        marginLeft:"0px !important",
        flexGrow: 1,
        minWidth: "333px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="column" spacing={2}>
        {icon}
        <Typography variant="body2">{title}</Typography>
        <Typography variant="body2">{subTitle}</Typography>
      </Stack>
      <Stack alignItems={"center"} direction="column" spacing={2}>
        <Box  height={"80px"} width={"80px"}>
          <ResponsivePie
                  enableArcLabels={false}
                  colors={{ scheme: scheme }}

            theme={{
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
              axis: {
                domain: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                },
                
                ticks: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
              },
              grid: {
                line: {
                  stroke: "#dddddd",
                  strokeWidth: 1,
                },
              },
              
              annotations: {
                text: {
                  fontSize: 13,
                  fill: theme.palette.text.primary,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                link: {
                  stroke: "#000000",
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: "#000000",
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: "#000000",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                wrapper: {},
                container: {
                  background: "#ffffff",
                  color: theme.palette.text.primary,
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
            }}
            data={data}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            enableArcLinkLabels={false}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
           
            />
        </Box>
        <Typography variant="body2">{increase}</Typography>
      </Stack>
    </Paper>
  );
};
Card.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  increase: PropTypes.string.isRequired,
  scheme: PropTypes.string.isRequired,
};

export default Card;
