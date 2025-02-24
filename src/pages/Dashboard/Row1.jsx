import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import {data1,data2,data3,data4} from "./data"
const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={2} gap={2} flexWrap={"wrap"} justifyContent={{ xs: "center", md: "space-between" }}>
      <Card icon={<EmailIcon sx={{color:theme.palette.secondary.main}}  />} title={"12,361"} subTitle={"Emails sent"} increase={"+14%"} data={data1} scheme={"nivo"} />
      <Card icon={<PointOfSaleIcon sx={{color:theme.palette.secondary.main}} />} title={"21,361"} subTitle={"Sales obtained"} increase={"+21%"} data={data2} scheme={"category10"} />
      <Card icon={<PersonAddIcon sx={{color:theme.palette.secondary.main}} />} title={"32,361"} subTitle={"New Clients"} increase={"+5%"} data={data3} scheme={"accent"} />
      <Card icon={<TrafficIcon sx={{color:theme.palette.secondary.main}} />} titgle={"1,322,361"} subTitle={"Traffic Recieved"} increase={"+43%"} data={data4} scheme={"dark2"} />
    </Stack>
  );
};

export default Row1;
