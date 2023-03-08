import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const css = `
    .contactDiv {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .messageInput {
        margin-left: 0px;
        margin-right: 20px;
        height: 100px;
        width: 200px;
    }
`


export default function FormPropsTextFields() {
    return (
        <Box
            className='contactDiv'
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <style type = "text/css">{css}</style>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Name"
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Email"
                />
                <TextField
                    className='messageInput'
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Message"
                />
            
            </div>
        </Box>
    );
  }