import { Box, useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';

const BarComp = () => {
    const data = [
        { year: 2019, Spain: 900, France: 1400, Germany: 1700 },
        { year: 2020, Spain: 1000, France: 1500, Germany: 1800 },
        { year: 2021, Spain: 1100, France: 1600, Germany: 1900 },
        { year: 2022, Spain: 1200, France: 1700, Germany: 2000 },
        { year: 2023, Spain: 1260, France: 1740, Germany: 2050 },
        { year: 2024, Spain: 1300, France: 1800, Germany: 2100 }
    ];

    const theme = useTheme();

    return (
        <Box sx={{ height: "75vh" }}>
            <ResponsiveBar
                data={data}
                theme={{
                    text: {
                        fontSize: 12,
                        fill: theme.palette.text.primary
                    },
                    axis: {
                        domain: {
                            line: {
                                stroke: theme.palette.divider,
                                strokeWidth: 0
                            }
                        },
                        legend: {
                            text: {
                                fontSize: 12,
                                fill: theme.palette.text.primary
                            }
                        },
                        ticks: {
                            line: {
                                stroke: theme.palette.divider,
                                strokeWidth: 1
                            },
                            text: {
                                fontSize: 11,
                                fill: theme.palette.text.primary
                            }
                        }
                    },
                    tooltip: {
                        container: {
                            background: theme.palette.background.default,
                            color: theme.palette.text.primary,
                            fontSize: 12,
                        },
                    }
                }}
                keys={["Spain", "France", "Germany"]}
                indexBy="year"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 1.6]]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Year',
                    legendPosition: 'middle',
                    legendOffset: 40
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Minimum Wage (€)',
                    legendPosition: 'middle',
                    legendOffset: -55
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [['darker', 1.6]]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 120,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: { itemOpacity: 1 }
                            }
                        ]
                    }
                ]}
                tooltip={({ id, value, indexValue }) => (
                    <div
                        style={{
                            background: "#ffffff",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <strong>{id}</strong> <br />
                        Year: {indexValue} <br />
                        Minimum Wage: <strong>€{value}</strong>
                    </div>
                )}
                role="application"
                ariaLabel="Minimum wage comparison for Spain, France, and Germany"
                barAriaLabel={e => `${e.id}: €${e.formattedValue} in year: ${e.indexValue}`}
                enableLabel={true} // Ensure labels are visible for the tooltips to work
                enableTooltip={true} // Ensure tooltip is enabled on hover
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                
            />
        </Box>
    );
};

export default BarComp;
