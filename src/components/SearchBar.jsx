import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (search) {
            navigate(`/search/${search}`)

            setSearch('');
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                mr: { sm: 5 },
                pl: 2,
                boxShadow: 'none',
                borderRadius: 20,
                border: '1px solid #e3e3e3',
            }}
        >
            <input 
                className="search-bar" 
                placeholder="Search..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
             />
             <IconButton type="submit" sx={{
                p: '10px',
                color: '#ff5050',
             }}>
                <Search/>
             </IconButton>
        </Paper>
    );
}

export default SearchBar;
