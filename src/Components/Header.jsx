import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"


function Header(){
    return(
        <div className="header_width">
            <div className="header_aside">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    АС практика 
                </Typography>
            </div>
            
        </div>
        
        )
}

export default Header