import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelProfile = ({ channelDetail }) => {
    return (
        <Box 
            sx={{
                boxShadow: 'none',
                borderRadius:'20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px' },
                height: '326px',
                margin: 'auto',
            }}
        >
            <Link to={`/channel/${channelDetail?.id}`}>
                <CardContent 
                    sx={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        textAlign: 'center', 
                        color: '#fff'
                    }}
                >
                    <CardMedia 
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                    />
                    <Typography>
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{  fontSize: 14, color: '#f5f5f5', ml: '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
}

export default ChannelProfile;
