import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';

import ReactPlayer from 'react-player';

import { fetchAPI } from './../utils/fetchAPI';
import { Videos } from './';
import { CheckCircle } from '@mui/icons-material';


const VideoDetail = () => {
    const [video, setVideo] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchAPI(`videos?part=snippet,statistics&id=${id}`)
            .then(data => setVideo(data.items[0]));

        fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then(data => setRelatedVideos(data.items))
    }, [id]);

    if (!video?.snippet) return 'Loading...'; 

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = video;

    return (
        <Box minHeight='95vh'>
            <Stack 
                direction={{
                    xs: 'column',
                    md: 'row'
                }}
            >
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>       
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color='#fff' variant='h5' fontWeight='bold' p={2} >
                            {title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' py={1} px={2} sx={{
                                color: '#fff'
                            }}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={ 'subtitle1' } color='#fff'>
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: '12px', color:'#f3f3f3', ml: '5px'}} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px' alignItems="center">
                                <Typography variant='body1' sx={{ opacity: .8}}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant='body1' sx={{ opacity: .8}}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
                    <Videos videos={relatedVideos} direction='column' />
                </Box>
            </Stack>
        </Box>
    );
}

export default VideoDetail;
