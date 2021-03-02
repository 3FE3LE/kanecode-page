// third party components
import { withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";

const TooltipCustom = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#ffffff",
    padding: 0,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    margin: 0,
    boxShadow: "0 12px 30px #0000001A",
    
  },
}))(Tooltip);

export default TooltipCustom;
