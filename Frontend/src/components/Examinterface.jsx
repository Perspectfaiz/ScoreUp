import { useNavigate } from 'react-router-dom';
import styles from './Examinterface.module.css'
import { List } from './List.jsx';
import { Tagcard } from './Tagcard.jsx';
import { GiMaterialsScience } from "react-icons/gi";
import { TbWorldSearch } from "react-icons/tb";
import { useState, useEffect } from 'react';
import { Instruction } from './Instruction.jsx';
import { Navbar } from './Navbar.jsx';
import axios from 'axios';
import {
  Box,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  Divider,
  IconButton
} from '@mui/material';
import {
  Science,
  AccessTime,
  Visibility,
  Person
} from '@mui/icons-material';

export function Examinterface() {
    const navigate = useNavigate();
    const [showInstruct,setShowInstuct]=useState(false);
    const [selectedTest, setSelectedTest] = useState(null);
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedTag, setSelectedTag] = useState("All");

    // Fetch tests from backend using axios directly
    useEffect(() => {
        const fetchTests = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tests/all`);
                if (response.data.success) {
                    setTests(response.data.tests);
                } else {
                    setError('Failed to fetch tests');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTests();
    }, []);

    function hide(){
        setShowInstuct(false);
        setSelectedTest(null);
    }

    const handleTestClick = (test) => {
        setSelectedTest(test);
        setShowInstuct(true);
    };

    const handleStartTest = () => {
        if (selectedTest) {
            hide();
            navigate('/testpage', { state: { testId: selectedTest._id } });
        }
    };

    // Filter tests based on selected tag
    const filteredTests = selectedTag === "All" 
        ? tests 
        : tests.filter(test => test.details.tag === selectedTag);

    // Format time from seconds to MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Get unique tags from tests
    const availableTags = ["All", ...new Set(tests.map(test => test.details.tag).filter(Boolean))];
    
    return (
        <>
            <Navbar></Navbar>
            {showInstruct && selectedTest && (
                <Instruction 
                    hide={hide} 
                    testData={selectedTest}
                    onStartTest={handleStartTest}
                />
            )} 
            
            <Box sx={{ 
                height: '100vh', 
                width: '100vw',
                maxWidth: '100vw',
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'hidden',
                boxSizing: 'border-box'
            }}>
                {/* Header */}
                <AppBar 
                    position="static" 
                    elevation={1}
                    sx={{ 
                        background:'rgb(243, 243, 243)',
                        color: 'grey',
                        width: '100%',
                        maxWidth: '100%',
                        boxSizing: 'border-box'
                    }}
                >
                    <Toolbar sx={{ minHeight: '7vh !important', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h7" sx={{ fontWeight: 300 }}>
                                <strong>ScoreUp</strong> TEST LIBRARY
                            </Typography>
                        </Box>
                        
                        {/* Material UI Branding */}
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1,
                            backgroundColor: 'rgba(132, 132, 132, 0.12)',
                            px: 2,
                            py: 0.5,
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <Box sx={{ 
                                width: 20, 
                                height: 20, 
                                backgroundColor: '#00bcd4',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                                M
                            </Box>
                            <Typography variant="caption" sx={{ 
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontWeight: 500,
                                fontSize: '11px'
                            }}>
                                Powered by Material-UI
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Main Content */}
                <Box sx={{ 
                    flex: 1, 
                    display: 'flex',
                    width: '100%',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    boxSizing: 'border-box'
                }}>
                    {/* Main Panel */}
                    <Box sx={{ 
                        flex: 1, 
                        display: 'flex', 
                        flexDirection: 'column',
                        width: '100%',
                        maxWidth: '100%',
                        overflow: 'hidden',
                        boxSizing: 'border-box'
                    }}>
                        {/* Tags Section */}
                        <Paper 
                            elevation={0}
                            sx={{ 
                                p: 2, 
                                backgroundColor: 'white',
                                borderBottom: '1px solid #e0e0e0',
                                borderRadius: 0,
                                width: '100%',
                                maxWidth: '100%',
                                boxSizing: 'border-box'
                            }}
                        >
                            <Box sx={{ 
                                display: 'flex', 
                                gap: 2, 
                                overflowX: 'auto',
                                py: 1,
                                '&::-webkit-scrollbar': {
                                    height: '6px'
                                },
                                '&::-webkit-scrollbar-track': {
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '3px'
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#c1c1c1',
                                    borderRadius: '3px',
                                    '&:hover': {
                                        backgroundColor: '#a8a8a8'
                                    }
                                }
                            }}>
                                {availableTags.map((item, index) => (
                                    <Tagcard 
                                        tag={item} 
                                        key={index}
                                        isSelected={selectedTag === item}
                                        onClick={() => setSelectedTag(item)}
                                    />
                                ))}
                            </Box>
                        </Paper>

                        {/* Tests List */}
                        <Box sx={{ 
                            flex: 1, 
                            overflow: 'hidden',
                            width: '100%',
                            maxWidth: '100%',
                            boxSizing: 'border-box'
                        }}>
                            {loading ? (
                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        flexDirection: 'column',
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        height: '100%',
                                        gap: 2
                                    }}
                                >
                                    <CircularProgress size={60} />
                                    <Typography variant="h6" color="text.secondary">
                                        Loading tests...
                                    </Typography>
                                </Box>
                            ) : error ? (
                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        height: '100%',
                                        p: 3
                                    }}
                                >
                                    <Alert severity="error" sx={{ maxWidth: 600 }}>
                                        <Typography variant="h6">Error loading tests</Typography>
                                        <Typography variant="body2">{error}</Typography>
                                    </Alert>
                                </Box>
                            ) : filteredTests.length === 0 ? (
                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        height: '100%',
                                        p: 3
                                    }}
                                >
                                    <Alert severity="info" sx={{ maxWidth: 600 }}>
                                        <Typography variant="h6">No tests found</Typography>
                                        <Typography variant="body2">
                                            {selectedTag === "All" 
                                                ? "No tests are available at the moment." 
                                                : `No tests found for the "${selectedTag}" category.`}
                                        </Typography>
                                    </Alert>
                                </Box>
                            ) : (
                                <TableContainer sx={{ 
                                    height: '100%',
                                    width: '100%',
                                    maxWidth: '100%',
                                    boxSizing: 'border-box'
                                }}>
                                    <Table stickyHeader>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
                                                    Status
                                                </TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
                                                    Topic
                                                </TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
                                                    Duration
                                                </TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
                                                    Visits
                                                </TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
                                                    Teacher
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filteredTests.map((item, index) => {
                                                const testInfo = {
                                                    ...item.details,
                                                    time: formatTime(item.details.time),
                                                    title: item.details.title || 'Untitled Test',
                                                    teachername: item.details.teacherName || 'Unknown Teacher',
                                                    attempted: item.details.attempted || 0
                                                };
                                                return (
                                                    <TableRow 
                                                        key={index} 
                                                        onClick={() => handleTestClick(item)}
                                                        sx={{ 
                                                            cursor: 'pointer',
                                                            '&:hover': {
                                                                backgroundColor: '#f5f5f5'
                                                            }
                                                        }}
                                                    >
                                                        <TableCell>
                                                            <Chip 
                                                                label="Available" 
                                                                color="success" 
                                                                size="small"
                                                                variant="outlined"
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                                {testInfo.title}
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                                <AccessTime sx={{ fontSize: 16, color: 'text.secondary' }} />
                                                                <Typography variant="body2">
                                                                    {testInfo.time}
                                                                </Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                                <Visibility sx={{ fontSize: 16, color: 'text.secondary' }} />
                                                                <Typography variant="body2">
                                                                    {testInfo.attempted}
                                                                </Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                                <Person sx={{ fontSize: 16, color: 'text.secondary' }} />
                                                                <Typography variant="body2">
                                                                    {testInfo.teachername}
                                                                </Typography>
                                                            </Box>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}