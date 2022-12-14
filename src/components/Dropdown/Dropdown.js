import * as React from 'react';
import './Dropdown.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { flexbox } from '@mui/system';






const Dropdown = (props) => {
 // const [bloodgroup, setBlood] = React.useState('');

  const handleChange = (event) => {
    props.setBlood(event.target.value);
  };


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120}} size="small">
        <InputLabel id="demo-select-small" style={{fontSize : 12 , fontWeight : 500}}>Blood Group</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={props.bloodgroup}
          onChange={handleChange}
          autoWidth
          label="Blood Group"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'A+'}>A+</MenuItem>
          <MenuItem value={'A-'}>A-</MenuItem>
          <MenuItem value={'B+'}>B+</MenuItem>
          <MenuItem value={'B-'}>B-</MenuItem>
          <MenuItem value={'O+'}>O+</MenuItem>
          <MenuItem value={'O-'}>O-</MenuItem>
          <MenuItem value={'AB+'}>AB+</MenuItem>
          <MenuItem value={'AB-'}>AB-</MenuItem>

        </Select>
      </FormControl>

      


    </div>
  );
}

export default Dropdown