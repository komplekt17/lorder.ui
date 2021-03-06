import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  flipCard: {
    '&:hover $flipCardInner': {
      transform: 'rotateY(180deg)',
    },
    backgroundColor: 'transparent',
    height: 380,
    margin: '0 auto',
    perspective: 1000,
    width: 290,
  },
  flipCardBack: {
    backfaceVisibility: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0 5px 30px rgba(232, 234, 237, 0.5)',
    color: 'white',
    height: '100%',
    position: 'absolute',
    transform: 'rotateY(180deg)',
    width: '100%',
  },
  flipCardBackDescription: {
    color: '#232323',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 300,
    marginBottom: -4,
    marginLeft: 35,
    marginTop: 3,
    maxHeight: 135,
    maxWidth: 230,
    minHeight: 135,
    overflow: 'hidden',
    textAlign: 'left',
  },
  flipCardFront: {
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    background: '#fff',
    backgroundColor: '#fff',
    color: 'black',
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  flipCardInner: {
    height: '100%',
    position: 'relative',
    textAlign: 'center',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.2s linear',
    width: '100%',
  },
  imageWrap: {
    border: '1px solid #ffb200',
    borderRadius: '50%',
    height: 170,
    marginBottom: 8,
    marginTop: 20,
    padding: 7,
    textAlign: 'center',
    width: 170,
  },
  linkWrapper: {
    '&:hover': {
      backgroundColor: '#fff',
    },
    color: '#4353ff',
    display: 'inline-block',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 300,
    textDecoration: 'none',
  },
  name: {
    color: '#29292b',
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 400,
    marginTop: 40,
    maxHeight: 55,
    overflow: 'hidden',
  },
  quotesWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 15,
    paddingTop: 20,
  },
  role: {
    color: '#c5c5c5',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 400,
    marginTop: 0,
  },
  userAvatar: {
    borderRadius: '50%',
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  },
}));
