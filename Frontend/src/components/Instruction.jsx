import styles from './Instruction.module.css'
import { RxCross2 } from "react-icons/rx";
import { Qnbtn } from './Qnbtn';
import {
  Box,
  Typography,
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid
} from '@mui/material';
import {
  Close,
  Assignment,
  AccessTime,
  Quiz,
  CheckCircle,
  Cancel,
  Flag,
  RadioButtonUnchecked,
  PlayArrow,
  Info,
  Warning,
  School
} from '@mui/icons-material';

export function Instruction({hide, testData, onStartTest}) {
    // Format time from seconds to HH:MM:SS
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Calculate total questions
    const totalQuestions = testData?.section?.reduce((total, section) => total + section.list.length, 0) || 0;

    return (
        <Dialog
            open={true}
            onClose={hide}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: '15px',
                    backgroundColor: 'white',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
                    minHeight: '80vh'
                }
            }}
        >
            <DialogContent sx={{ p: 0, position: 'relative' }}>
                {/* Close Button */}
                <IconButton
                    onClick={hide}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        zIndex: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.9)'
                        }
                    }}
                >
                    <Close />
                </IconButton>

                {/* Header */}
                <Box sx={{ p: 3, pb: 2 }}>
                    <Typography variant="h4" sx={{ 
                        fontWeight: 'bold', 
                        color: '#703ed1',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <Assignment sx={{ fontSize: 32 }} />
                        Test Instructions
                    </Typography>
                    <Divider sx={{ mt: 2, borderColor: '#d1c4e9' }} />
                </Box>
                {/* Content */}
                <Box sx={{ px: 3, pb: 2, maxHeight: '60vh', overflow: 'auto' }}>
                    {/* Test Info Card */}
                    <Card sx={{ mb: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <School sx={{ color: '#703ed1' }} />
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            {testData?.details?.title || 'Untitled Test'}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <AccessTime sx={{ color: '#703ed1' }} />
                                        <Typography variant="body1">
                                            <strong>Duration:</strong> {formatTime(testData?.details?.time || 0)}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Quiz sx={{ color: '#703ed1' }} />
                                        <Typography variant="body1">
                                            <strong>Total Questions:</strong> {totalQuestions} questions in {testData?.section?.length || 0} sections
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    {/* Instructions Sections */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* Test Structure */}
                        <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<Info />}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    Test Structure
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemText 
                                            primary={`The test comprises ${totalQuestions} questions, divided into ${testData?.section?.length || 0} sections.`}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText 
                                            primary="Each section may include a variety of question types:"
                                            secondary={
                                                <Box sx={{ mt: 1 }}>
                                                    <Chip label="Multiple Choice (Single)" size="small" sx={{ mr: 1, mb: 1 }} />
                                                    <Chip label="Multiple Choice (Multiple)" size="small" sx={{ mr: 1, mb: 1 }} />
                                                    <Chip label="Numerical Value" size="small" sx={{ mr: 1, mb: 1 }} />
                                                    <Chip label="Assertion & Reason" size="small" sx={{ mr: 1, mb: 1 }} />
                                                    <Chip label="Match the Following" size="small" sx={{ mr: 1, mb: 1 }} />
                                                </Box>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>

                        {/* Marking Scheme */}
                        <Accordion>
                            <AccordionSummary expandIcon={<Info />}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    Marking Scheme
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                        <ListItemText 
                                            primary="MCQs (Single Correct)"
                                            secondary="+4 marks for correct, -1 for incorrect, 0 for unanswered"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                        <ListItemText 
                                            primary="MCQs (Multiple Correct)"
                                            secondary="+4 for all correct, partial marks possible, negative for incorrect"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                        <ListItemText 
                                            primary="Numerical Value Questions"
                                            secondary="+4 marks for correct, 0 for incorrect/unanswered"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><Info color="primary" /></ListItemIcon>
                                        <ListItemText 
                                            primary="Assertion & Reason / Match the Following"
                                            secondary="Follow specific instructions provided with each question set"
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>

                        {/* Navigation */}
                        <Accordion>
                            <AccordionSummary expandIcon={<Info />}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    Navigation & Question Palette
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemText 
                                            primary="Use navigation buttons to move between questions"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText 
                                            primary="Question Palette shows all question numbers with status indicators:"
                                        />
                                    </ListItem>
                                </List>
                                <Box sx={{ ml: 2, mt: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <Qnbtn num={1} qdata={{state: 0}} />
                                        <Typography variant="body2">Not Visited</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <Qnbtn num={1} qdata={{state: 1}} />
                                        <Typography variant="body2">Not Answered</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <Qnbtn num={1} qdata={{state: 2}} />
                                        <Typography variant="body2">Answered</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <Qnbtn num={1} qdata={{state: 3}} />
                                        <Typography variant="body2">Current Question</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <Qnbtn num={1} qdata={{state: 4}} />
                                        <Typography variant="body2">Marked for Review (Not Answered)</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <Qnbtn num={1} qdata={{state: 5}} />
                                        <Typography variant="body2">Marked for Review (Answered)</Typography>
                                    </Box>
                                </Box>
                            </AccordionDetails>
                        </Accordion>


                        {/* Important Notes */}
                        <Accordion>
                            <AccordionSummary expandIcon={<Warning />}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    Important Notes
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon><Warning color="warning" /></ListItemIcon>
                                        <ListItemText 
                                            primary="Ensure stable internet connection"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><Warning color="warning" /></ListItemIcon>
                                        <ListItemText 
                                            primary="Close unnecessary applications and browser tabs"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><Warning color="warning" /></ListItemIcon>
                                        <ListItemText 
                                            primary="Read each question carefully before answering"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><Cancel color="error" /></ListItemIcon>
                                        <ListItemText 
                                            primary="No calculators or external resources allowed"
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    {/* Good Luck Message */}
                    <Box sx={{ 
                        textAlign: 'center', 
                        mt: 3, 
                        p: 2, 
                        backgroundColor: 'rgba(112, 62, 209, 0.1)',
                        borderRadius: '8px',
                        border: '1px solid rgba(112, 62, 209, 0.2)'
                    }}>
                        <Typography variant="h6" sx={{ 
                            fontWeight: 'bold', 
                            color: '#703ed1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1
                        }}>
                            <School />
                            Best of luck!
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>

            {/* Start Test Button */}
            <DialogActions sx={{ p: 3, pt: 0 }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={onStartTest}
                    startIcon={<PlayArrow />}
                    sx={{
                        backgroundColor: '#703ed1',
                        '&:hover': {
                            backgroundColor: '#5d20d3'
                        },
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 'bold'
                    }}
                >
                    Start Test
                </Button>
            </DialogActions>
        </Dialog>
    )
}