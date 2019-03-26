export const styles = theme => ({
  root: {
    // width: "100%"
  },

  searchForm: {
    display: "flex",
    alignItems: "center"
  },

  searchIcon: {
    "&:hover": {
      cursor: "pointer"
    }
  },

  resize: {
    color: theme.palette.primary.main,
    fontSize: "1.6rem",
    border: "1px solid theme.palette.primary.main",
    borderRadius: "25px",
    padding: "10px 10px"
  }
});