
import { Button } from '@mui/material';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import { DownloadOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';


const Dashboard = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <Button variant="contained" color="primary" sx={{textTransform:"Capitalize"}}>
                <DownloadOutlined />
                Download Reports
            </Button>
            </Box>

            <Row1 />
            <Row2 />
            <Row3 />
                    
                    
                    
        </div>
    );
    }


export default Dashboard;