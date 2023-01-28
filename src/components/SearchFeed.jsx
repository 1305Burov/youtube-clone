import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Videos} from './';
import { fetchAPI } from '../utils/fetchAPI';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);

    const { searchTerm } = useParams();

    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items));
    }, [searchTerm])

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '89vh', flex: 2 }}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: '#fff'}}>
                Search results for: <span style={{ color: '#ff5050' }}>{searchTerm}</span>videos
            </Typography>

            <Videos videos={videos} />
        </Box>
    );
}

export default SearchFeed;
