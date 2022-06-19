import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./style.js";

const Heading = ({ onPlaceChanged, onLoad }) => {
  const classStyling = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classStyling.toolbar}>
        <Typography variant="h5" className={classStyling.title}>
          Restaurant Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classStyling.title}>
            <em>Explore Your Hunger</em>
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classStyling.search}>
              <div className={classStyling.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classStyling={{
                  root: classStyling.inputRoot,
                  input: classStyling.inputInput,
                }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Heading;
