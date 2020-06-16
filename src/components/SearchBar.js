import React, {useState} from 'react';
import { Paper, TextField } from "@material-ui/core";

function SearchBar({onSubmit}) {

    const [ searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) =>{
        setSearchTerm(e.target.value)
    }
    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(searchTerm);
        }
    }
    

    return (
        <div>
           <Paper elevation={6} style={{ padding: "25px" }}>
                <TextField
                    fullWidth
                    label="Search..."
                    onChange={handleChange}
                    onKeyPress={onKeyPress}
                />
            </Paper>
        </div>
    );
}

export default SearchBar;