import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) =>
  createStyles({
    buttonBlock: {
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut,
      }),
    },
    expandButton: {
      marginLeft: theme.spacing(1),
    },
    grow: {
      flexGrow: 1,
    },
    menu: {
      backgroundColor: theme.palette.primary.dark,
    },
    timerIco: {
      color: theme.palette.secondary.main,
    },
  });