import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchAPI } from '../utils/fetchAPI';



const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchAPI(`channels?part=snippet&id=${id}`)
            .then(data => setChannelDetail(data?.items[0]))

        fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then(data => setVideos(data?.items))
    }, [id]);

    return (
        <Box minHeight={'95vh'}>
            <Box>
                <div style={{
                    background: 'linear-gradient(90deg, rgba(121,9,9,1) 0%, rgba(215,0,98,1) 50%, rgba(121,9,9,1) 100%)',
                    zIndex: 10,
                    height: '300px'
                }}>
                </div>
                    <ChannelCard channelDetail={channelDetail} marginTop='-100px' />
            </Box>
            <Box display='flex' p='2'>
                <Box sx={{ mr: { sm: '100px' } }}></Box>
                <Videos videos={videos} />
            </Box>
        </Box>
    );
}

export default ChannelDetail;
