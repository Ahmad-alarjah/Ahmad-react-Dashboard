import { Box } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./World_countries";
import { useTheme } from "@mui/material/styles";

const GeoComp = () => {
  const theme = useTheme();
  const data = [
    {
      id: "AFG",
      value: 827642,
    },
    {
      id: "AGO",
      value: 767223,
    },
    {
      id: "ALB",
      value: 858605,
    },
    {
      id: "ARE",
      value: 886200,
    },
    {
      id: "ARG",
      value: 5223,
    },
    {
      id: "ARM",
      value: 753952,
    },
    {
      id: "ATA",
      value: 942789,
    },
    {
      id: "ATF",
      value: 508184,
    },
    {
      id: "AUT",
      value: 270236,
    },
    {
      id: "AZE",
      value: 371068,
    },
    {
      id: "BDI",
      value: 172025,
    },
    {
      id: "BEL",
      value: 12664,
    },
    {
      id: "BEN",
      value: 831943,
    },
    {
      id: "BFA",
      value: 384804,
    },
    {
      id: "BGD",
      value: 625339,
    },
    {
      id: "BGR",
      value: 45656,
    },
    {
      id: "BHS",
      value: 498356,
    },
    {
      id: "BIH",
      value: 463041,
    },
    {
      id: "BLR",
      value: 635202,
    },
    {
      id: "BLZ",
      value: 354814,
    },
    {
      id: "BOL",
      value: 430336,
    },
    {
      id: "BRN",
      value: 69911,
    },
    {
      id: "BTN",
      value: 116808,
    },
    {
      id: "BWA",
      value: 634419,
    },
    {
      id: "CAF",
      value: 94231,
    },
    {
      id: "CAN",
      value: 345192,
    },
    {
      id: "CHE",
      value: 209706,
    },
    {
      id: "CHL",
      value: 324590,
    },
    {
      id: "CHN",
      value: 869070,
    },
    {
      id: "CIV",
      value: 86198,
    },
    {
      id: "CMR",
      value: 341293,
    },
    {
      id: "COG",
      value: 10750,
    },
    {
      id: "COL",
      value: 432009,
    },
    {
      id: "CRI",
      value: 644602,
    },
    {
      id: "CUB",
      value: 790814,
    },
    {
      id: "-99",
      value: 326647,
    },
    {
      id: "CYP",
      value: 897072,
    },
    {
      id: "CZE",
      value: 319162,
    },
    {
      id: "DEU",
      value: 628290,
    },
    {
      id: "DJI",
      value: 482699,
    },
    {
      id: "DNK",
      value: 696918,
    },
    {
      id: "DOM",
      value: 876566,
    },
    {
      id: "DZA",
      value: 715854,
    },
    {
      id: "ECU",
      value: 645285,
    },
    {
      id: "EGY",
      value: 885874,
    },
    {
      id: "ERI",
      value: 328615,
    },
    {
      id: "ESP",
      value: 811081,
    },
    {
      id: "EST",
      value: 70166,
    },
    {
      id: "ETH",
      value: 418467,
    },
    {
      id: "FIN",
      value: 711436,
    },
    {
      id: "FJI",
      value: 529386,
    },
    {
      id: "FLK",
      value: 610156,
    },
    {
      id: "FRA",
      value: 852507,
    },
    {
      id: "GAB",
      value: 345088,
    },
    {
      id: "GBR",
      value: 839230,
    },
    {
      id: "GEO",
      value: 176355,
    },
    {
      id: "GHA",
      value: 617352,
    },
    {
      id: "GIN",
      value: 162120,
    },
    {
      id: "GMB",
      value: 252535,
    },
    {
      id: "GNB",
      value: 673933,
    },
    {
      id: "GNQ",
      value: 446697,
    },
    {
      id: "GRC",
      value: 577178,
    },
    {
      id: "GTM",
      value: 522131,
    },
    {
      id: "GUY",
      value: 537390,
    },
    {
      id: "HND",
      value: 600543,
    },
    {
      id: "HRV",
      value: 108924,
    },
    {
      id: "HTI",
      value: 363433,
    },
    {
      id: "HUN",
      value: 627270,
    },
    {
      id: "IDN",
      value: 628875,
    },
    {
      id: "IND",
      value: 370155,
    },
    {
      id: "IRL",
      value: 209309,
    },
    {
      id: "IRN",
      value: 812207,
    },
    {
      id: "IRQ",
      value: 48212,
    },
    {
      id: "ISL",
      value: 671284,
    },
    {
      id: "ISR",
      value: 782626,
    },
    {
      id: "ITA",
      value: 618054,
    },
    {
      id: "JAM",
      value: 826047,
    },
    {
      id: "JOR",
      value: 442492,
    },
    {
      id: "JPN",
      value: 163988,
    },
    {
      id: "KAZ",
      value: 840570,
    },
    {
      id: "KEN",
      value: 273872,
    },
    {
      id: "KGZ",
      value: 409544,
    },
    {
      id: "KHM",
      value: 500672,
    },
    {
      id: "OSA",
      value: 894990,
    },
    {
      id: "KWT",
      value: 224111,
    },
    {
      id: "LAO",
      value: 813128,
    },
    {
      id: "LBN",
      value: 855135,
    },
    {
      id: "LBR",
      value: 437220,
    },
    {
      id: "LBY",
      value: 858129,
    },
    {
      id: "LKA",
      value: 727559,
    },
    {
      id: "LSO",
      value: 861776,
    },
    {
      id: "LTU",
      value: 793298,
    },
    {
      id: "LUX",
      value: 64942,
    },
    {
      id: "LVA",
      value: 133502,
    },
    {
      id: "MAR",
      value: 914362,
    },
    {
      id: "MDA",
      value: 133023,
    },
    {
      id: "MDG",
      value: 531148,
    },
    {
      id: "MEX",
      value: 772830,
    },
    {
      id: "MKD",
      value: 935650,
    },
    {
      id: "MLI",
      value: 835345,
    },
    {
      id: "MMR",
      value: 807290,
    },
    {
      id: "MNE",
      value: 46236,
    },
    {
      id: "MNG",
      value: 429945,
    },
    {
      id: "MOZ",
      value: 88721,
    },
    {
      id: "MRT",
      value: 604459,
    },
    {
      id: "MWI",
      value: 269305,
    },
    {
      id: "MYS",
      value: 475094,
    },
    {
      id: "NAM",
      value: 262112,
    },
    {
      id: "NCL",
      value: 629045,
    },
    {
      id: "NER",
      value: 712998,
    },
    {
      id: "NGA",
      value: 498771,
    },
    {
      id: "NIC",
      value: 118730,
    },
    {
      id: "NLD",
      value: 643452,
    },
    {
      id: "NOR",
      value: 108131,
    },
    {
      id: "NPL",
      value: 742510,
    },
    {
      id: "NZL",
      value: 76218,
    },
    {
      id: "OMN",
      value: 429668,
    },
    {
      id: "PAK",
      value: 255143,
    },
    {
      id: "PAN",
      value: 595812,
    },
    {
      id: "PER",
      value: 59166,
    },
    {
      id: "PHL",
      value: 677423,
    },
    {
      id: "PNG",
      value: 480001,
    },
    {
      id: "POL",
      value: 712514,
    },
    {
      id: "PRI",
      value: 136343,
    },
    {
      id: "PRT",
      value: 112690,
    },
    {
      id: "PRY",
      value: 537169,
    },
    {
      id: "QAT",
      value: 98831,
    },
    {
      id: "ROU",
      value: 711536,
    },
    {
      id: "RUS",
      value: 511781,
    },
    {
      id: "RWA",
      value: 305091,
    },
    {
      id: "ESH",
      value: 611066,
    },
    {
      id: "SAU",
      value: 125940,
    },
    {
      id: "SDN",
      value: 444357,
    },
    {
      id: "SDS",
      value: 983951,
    },
    {
      id: "SEN",
      value: 220356,
    },
    {
      id: "SLB",
      value: 181930,
    },
    {
      id: "SLE",
      value: 757025,
    },
    {
      id: "SLV",
      value: 671267,
    },
    {
      id: "ABV",
      value: 82091,
    },
    {
      id: "SOM",
      value: 524348,
    },
    {
      id: "SRB",
      value: 545974,
    },
    {
      id: "SUR",
      value: 227398,
    },
    {
      id: "SVK",
      value: 529055,
    },
    {
      id: "SVN",
      value: 146270,
    },
    {
      id: "SWZ",
      value: 370136,
    },
    {
      id: "SYR",
      value: 924694,
    },
    {
      id: "TCD",
      value: 530125,
    },
    {
      id: "TGO",
      value: 196298,
    },
    {
      id: "THA",
      value: 402982,
    },
    {
      id: "TJK",
      value: 709726,
    },
    {
      id: "TKM",
      value: 917593,
    },
    {
      id: "TLS",
      value: 434862,
    },
    {
      id: "TTO",
      value: 710698,
    },
    {
      id: "TUN",
      value: 593019,
    },
    {
      id: "TUR",
      value: 819371,
    },
    {
      id: "TWN",
      value: 821706,
    },
    {
      id: "TZA",
      value: 9613,
    },
    {
      id: "UGA",
      value: 909406,
    },
    {
      id: "UKR",
      value: 79823,
    },
    {
      id: "URY",
      value: 676074,
    },
    {
      id: "USA",
      value: 178070,
    },
    {
      id: "UZB",
      value: 702276,
    },
    {
      id: "VEN",
      value: 658566,
    },
    {
      id: "VNM",
      value: 152429,
    },
    {
      id: "VUT",
      value: 329861,
    },
    {
      id: "PSE",
      value: 225180,
    },
    {
      id: "YEM",
      value: 392156,
    },
    {
      id: "ZAF",
      value: 101147,
    },
    {
      id: "ZMB",
      value: 165527,
    },
    {
      id: "ZWE",
      value: 989398,
    },
    {
      id: "KOR",
      value: 531783,
    },
  ];
  return (
    <Box
      sx={{
        borderRadius: "5px",
        height: "75vh",
        border: `1px solid ${theme.palette.text.primary} `,
      }}
    >
      <ResponsiveChoropleth
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
                stroke: theme.palette.divider,
                strokeWidth: 0,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 0,
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
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
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
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="spectral"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        projectionScale={232}
        enableGraticule={false}
        graticuleLineColor="red"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: "gradient",
            type: "linearGradient",
            colors: [
              {
                offset: 0,
                color: "#000",
              },
              {
                offset: 100,
                color: "inherit",
              },
            ],
          },
        ]}
        fill={[
          {
            match: {
              id: "CAN",
            },
            id: "dots",
          },
          {
            match: {
              id: "CHN",
            },
            id: "lines",
          },
          {
            match: {
              id: "ATA",
            },
            id: "gradient",
          },
        ]}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.text.primary,
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

export default GeoComp;
