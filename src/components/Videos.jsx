import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelProfile } from './';


const Videos = ({videos, direction}) => {
    if (!videos?.length) return <p style={{ color: '#fff'}} >Loading...</p> 
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {videos.map((video, i) => (
                <Box key={i} >
                    { video.id.videoId && <VideoCard video={video} /> }
                    { video.id.ChannelId && <ChannelProfile channelDetail={video} /> }
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;
