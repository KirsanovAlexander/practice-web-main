import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import MapIcon from '@mui/icons-material/Map';

class  Lister extends React.Component {
render(){
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} 
      component="nav"
    >
      <ListItemButton>
        <ListItemIcon>
          <FavoriteIcon />  {/* Heart Icon */}
          </ListItemIcon>
        <ListItemText primary="Потребности" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <BookmarkIcon /> {/* Bookmark Icon */}
          </ListItemIcon>
        <ListItemText primary="Конфигурации" />
      </ListItemButton>

      <ListItemButton>    
        <ListItemIcon>   
          <AddAPhotoIcon /> {/* Photo Icon */}
         </ListItemIcon>
        <ListItemText primary="Среды" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <MapIcon /> {/* Map Icon */}
        </ListItemIcon>
        <ListItemText primary="ЦОДы" />
      </ListItemButton>
    </List>
      );
}
  
}
  
export default Lister




