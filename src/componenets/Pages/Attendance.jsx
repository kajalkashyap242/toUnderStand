import React from 'react';
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Typography, Chip, Breadcrumbs, Link, InputAdornment,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#f0f4f8',
    fontWeight: 'bold',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#f9f9f9',
    },
}));

function createData(date, checkIn, breakTime, checkOut, hours, status) {
    return {
        date: date,
        checkIn: checkIn,
        breakTime: breakTime,
        checkOut: checkOut,
        hours: hours,
        status: status
    };
}

// rows data
const rows = [
    createData('11/02/2023', '09:38 AM', '31 mins', '17:33 PM', '09h:11 mins', 'Present'),
    createData('25/02/2023', '09:35 AM', '37 mins', '17:25 PM', '09h:36 mins', 'Absent'),
    createData('12/02/2023', '09:18 AM', '28 mins', '17:39 PM', '09h:26 mins', 'Present'),
    createData('13/02/2023', '09:18 AM', '35 mins', '17:50 PM', '09h:11 mins', 'Present'),
    createData('14/02/2023', '09:40 AM', '24 mins', '17:25 PM', '09h:14 mins', 'Absent'),
    createData('15/02/2023', '09:42 AM', '28 mins', '17:33 PM', '09h:24 mins', 'Present'),
    createData('16/02/2023', '09:35 AM', '31 mins', '17:39 PM', '09h:26 mins', 'Present'),
    createData('18/02/2023', '09:46 AM', '38 mins', '17:25 PM', '09h:30 mins', 'Absent'),
];

const Attendance = () => {
    return (
        <Box p={3} sx={{ backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant='h6' fontWeight="bold" color="#333">
                    Attendance
                </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link href="/" underline="hover" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                       <HomeOutlinedIcon/>
                        <NavigateNextIcon/>
                        Home
                        <Link href="/" underline="hover" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                       <NavigateNextIcon/>
                        Attendacne
                    </Link>
                    </Link>
                   
                    {/* <Link underline="hover" color="inherit" href="/">
          Home
        </Link> */}
                </Breadcrumbs>
            </Box>
{/* search boxxxxxxxx */}
            <Box
                sx={{
                    backgroundColor: '#e1e9f1',
                    p: 2,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" fontWeight="bold" color="#333">
                    Attendance
                </Typography>
                <Box>
                    <TextField
                        variant="outlined"
                        placeholder="Search..."
                        sx={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)',
                            input: { padding: '12px' },
                            width: '250px',
                            ml: 2,
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>

            {/* Attendance Table */}
            <TableContainer component={Paper} sx={{ mt: 3, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                <Table aria-label="attendance table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell>Check-In</StyledTableCell>
                            <StyledTableCell>Break</StyledTableCell>
                            <StyledTableCell>Check-Out</StyledTableCell>
                            <StyledTableCell>Hours</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.date}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.checkIn}</TableCell>
                                <TableCell>{row.breakTime}</TableCell>
                                <TableCell>{row.checkOut}</TableCell>
                                <TableCell>{row.hours}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.status}
                                        variant="outlined"
                                        color={row.status === 'Present' ? 'success' : 'error'}
                                        sx={{ fontWeight: 'bold', borderRadius: '8px' }}
                                    />
                                </TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Attendance;
