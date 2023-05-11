import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import shadows from "@mui/material/styles/shadows";

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                color: '#00CC22',
                margin: '0 12px',
                '& .MuiSlider-thumb': {
                    border: '2px solid #00CC22',
                    width: '18px',
                    height: '18px',
                    background: '#fff',
                    '&:before': {
                        display: 'block',
                        width: '6px',
                        height: '6px',
                        border: 'none',
                        boxShadow: 'none',
                        backgroundColor: '#00CC22',

                    },
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: 1
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
