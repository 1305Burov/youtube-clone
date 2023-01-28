
import { useEffect, useState } from 'react';
import { Box, Hidden, Stack, Typography } from '@mui/material';
import { SideBar, Videos} from './';
import { fetchAPI } from '../utils/fetchAPI';


const Feed = () => {
    const [activeCategory, setActiveCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${activeCategory}`)
        .then((data) => setVideos(data.items));
    }, [activeCategory])

    return (
        <Stack sx={{
                flexDirection: { sx: 'column', md: 'row'}
            }}
        >
            <Box
                sx={{
                    height: { sx: 'auto', md: '92vh'},
                    borderRight: '1px solid #3d3d3d',
                    px: { sx: 0, md: 2 } 
                }}
            >
                <SideBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
                    Copyright 2022 Anyname Media
                </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: 'auto', height: '89vh', flex: 2 }}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: '#fff'}}>
                    {activeCategory} <span style={{ color: '#ff5050' }}>videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    );
}

export default Feed;
