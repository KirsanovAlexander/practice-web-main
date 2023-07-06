import React from "react";
import { Preorders } from "../data";
import { Configurations } from "../data";
import { Environments } from "../data";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';

class SelectList extends React.Component {
	render() 
    {
		return (
            <div>
                 <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                            <select>
                            <option value="">Конфигурация</option>
                             {Configurations.map((result)=>(<option text= {result.id}>{result.code} </option>))}
                            </select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                            <select>
                            <option value="">Среда</option>
                            {Environments.map((result)=>(<option text= {result.id}>{result.title} </option>))}
                            </select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                            <select>
                            <option value="">Статусы</option>
                            {Preorders.Preorderer.map((result)=>(<option text= {result.id}>{result.status} </option>))}
                            </select>
                    </FormControl>
                </Box>
                {/* <select>
                    {Configurations.map((result)=>(<option text= {result.id}>{result.code} </option>))}
                </select>
                <select>
                    {Environments.map((result)=>(<option text= {result.id}>{result.title} </option>))}
                </select>
                <select>
                    {Preorders.Preorderer.map((result)=>(<option text= {result.id}>{result.status} </option>))}
                </select> */}
            </div>
        )
	}
}

export default SelectList