import { Stack } from '@mui/material'
import { categories } from '../utils/constants';

const SideBar = ({activeCategory, setActiveCategory}) => {

    return (
        <Stack direction='row' sx={{
            overflowY: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection:  {md: 'column' },
        }}>
            {categories.map((category, i) => (
                <button 
                    key={`${category.name}-${i}`} 
                    type="button" 
                    className='category-btn' 
                    style={{ color: '#fff', background: category.name === activeCategory && '#ff5050' }}
                    onClick={() => setActiveCategory(category.name)}
                >
                    <span style={{ marginRight: '12px', color: category.name === activeCategory ? '#fff' : '#ff5050' }}>{category.icon}</span>
                    <span style={{ opacity: category.name === activeCategory ? '1' : '.9' }}>{category.name}</span>
                </button>
            ))}
        </Stack>
    );
}

export default SideBar;
