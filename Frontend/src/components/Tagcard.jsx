import { Chip, Box } from '@mui/material';

export function Tagcard({tag, isSelected = false, onClick}) {
    return (
        <Box
            onClick={onClick}
            sx={{
                cursor: onClick ? 'pointer' : 'default',
                position: 'relative',
                display: 'inline-flex',
                flexDirection: 'column',
                transition: 'all 0.2s ease',
                '&:hover': {
                    transform: 'translateY(-1px)'
                }
            }}
        >
            <Chip
                label={tag}
                variant={isSelected ? "filled" : "outlined"}
                onClick={onClick}
                sx={{
                    backgroundColor: isSelected ? '#eee6ff' : 'white',
                    borderColor: isSelected ? '#703ed1' : '#e0e0e0',
                    color: isSelected ? '#703ed1' : 'text.primary',
                    fontWeight: isSelected ? 600 : 400,
                    px: 3,
                    py: 1,
                    height: 'auto',
                    minHeight: '40px',
                    borderRadius: '20px',
                    border: isSelected ? '2px solid #703ed1' : '1px solid #e0e0e0',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        backgroundColor: isSelected ? '#eee6ff' : '#f5f5f5',
                        borderColor: '#703ed1',
                        color: '#703ed1',
                        transform: 'scale(1.02)'
                    },
                    '& .MuiChip-label': {
                        fontSize: '14px',
                        px: 2
                    }
                }}
            />
        </Box>
    )
}