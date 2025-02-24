import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import PropTypes from "prop-types";

const LineComp = ({height="75vh", isDashbaord}) => {
    const data = [
        {
          "id": "japan",
          "color": "hsl(358, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 158
            },
            {
              "x": "helicopter",
              "y": 36
            },
            {
              "x": "boat",
              "y": 289
            },
            {
              "x": "train",
              "y": 32
            },
            {
              "x": "subway",
              "y": 177
            },
            {
              "x": "bus",
              "y": 246
            },
            {
              "x": "car",
              "y": 6
            },
            {
              "x": "moto",
              "y": 152
            },
            {
              "x": "bicycle",
              "y": 67
            },
            {
              "x": "horse",
              "y": 198
            },
            {
              "x": "skateboard",
              "y": 5
            },
            {
              "x": "others",
              "y": 58
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(96, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 124
            },
            {
              "x": "helicopter",
              "y": 92
            },
            {
              "x": "boat",
              "y": 76
            },
            {
              "x": "train",
              "y": 245
            },
            {
              "x": "subway",
              "y": 148
            },
            {
              "x": "bus",
              "y": 78
            },
            {
              "x": "car",
              "y": 80
            },
            {
              "x": "moto",
              "y": 285
            },
            {
              "x": "bicycle",
              "y": 209
            },
            {
              "x": "horse",
              "y": 203
            },
            {
              "x": "skateboard",
              "y": 255
            },
            {
              "x": "others",
              "y": 132
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(118, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 264
            },
            {
              "x": "helicopter",
              "y": 277
            },
            {
              "x": "boat",
              "y": 22
            },
            {
              "x": "train",
              "y": 279
            },
            {
              "x": "subway",
              "y": 266
            },
            {
              "x": "bus",
              "y": 291
            },
            {
              "x": "car",
              "y": 297
            },
            {
              "x": "moto",
              "y": 265
            },
            {
              "x": "bicycle",
              "y": 138
            },
            {
              "x": "horse",
              "y": 99
            },
            {
              "x": "skateboard",
              "y": 176
            },
            {
              "x": "others",
              "y": 94
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(306, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 91
            },
            {
              "x": "helicopter",
              "y": 132
            },
            {
              "x": "boat",
              "y": 39
            },
            {
              "x": "train",
              "y": 201
            },
            {
              "x": "subway",
              "y": 143
            },
            {
              "x": "bus",
              "y": 212
            },
            {
              "x": "car",
              "y": 292
            },
            {
              "x": "moto",
              "y": 174
            },
            {
              "x": "bicycle",
              "y": 235
            },
            {
              "x": "horse",
              "y": 121
            },
            {
              "x": "skateboard",
              "y": 88
            },
            {
              "x": "others",
              "y": 76
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(69, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 174
            },
            {
              "x": "helicopter",
              "y": 250
            },
            {
              "x": "boat",
              "y": 73
            },
            {
              "x": "train",
              "y": 294
            },
            {
              "x": "subway",
              "y": 210
            },
            {
              "x": "bus",
              "y": 66
            },
            {
              "x": "car",
              "y": 154
            },
            {
              "x": "moto",
              "y": 209
            },
            {
              "x": "bicycle",
              "y": 203
            },
            {
              "x": "horse",
              "y": 288
            },
            {
              "x": "skateboard",
              "y": 275
            },
            {
              "x": "others",
              "y": 56
            }
          ]
        }
      ];
      const theme = useTheme();



  return (
    <Box sx={{ height: height }}>
      <ResponsiveLine
      curve="catmullRom"
      theme={{
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "axis": {
            "domain": {
                "line": {
                    "stroke": theme.palette.divider,
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "ticks": {
                "line": {
                    "stroke": theme.palette.divider,
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "grid": {
            "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 0
            }
        },
        "legends": {
            "title": {
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "ticks": {
                "line": {},
                "text": {
                    "fontSize": 10,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "annotations": {
            "text": {
                "fontSize": 13,
                "fill": theme.palette.text.primary,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            }
        },
        "tooltip": {
            "wrapper": {},
            "container": {
                "background": "#ffffff",
                "color": theme.palette.text.primary,
                "fontSize": 12
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
        }
    }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashbaord? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend:isDashbaord? null :  "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

LineComp.propTypes = {
  height: PropTypes.number,
  isDashbaord: PropTypes.bool,
};

export default LineComp;
