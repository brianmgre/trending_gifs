export const styles = theme => ({
  root: {
    width: "100%"
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,

    position: "fixed",
    padding: "10px 0"
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "auto"
  },

  logo: {
    color: "white",
    fontWeight: "bold"
  },

  searchSort: {
    marginTop: "100px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  sort: {
    color: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      cursor: "pointer"
    }
  }
});
