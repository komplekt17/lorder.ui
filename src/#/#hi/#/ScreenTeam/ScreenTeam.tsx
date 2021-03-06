import React, { useMemo } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Person from '@components/Person';

import Block from '#/#hi/#/@common/Block';
import BlockContent from '#/#hi/#/@common/BlockContent';
import ScreenTitle from '#/#hi/#/@common/ScreenTitle';
import SubTitle from '#/#hi/#/@common/SubTitle';

import { useStyles } from './styles';

import { IMember } from '@types';

interface ScreenTeamI {
  isPublicLorderLoaded: boolean;
  isPublicLorderLoading: boolean;
  name: string;
  team: IMember[];
}

const ScreenTeam: React.FC<ScreenTeamI> = ({ isPublicLorderLoaded, isPublicLorderLoading, name, team }) => {
  const classes = useStyles();

  const preparedTeam = useMemo(() => {
    if (team) {
      return team.filter(m => !!m.member.displayName);
    }
    return [];
  }, [team]);

  return (
    <Block name={name} className={classes.team}>
      <ScreenTitle black>Команда проекта Lorder</ScreenTitle>
      <SubTitle>
        <Typography noWrap>В безумном мире хаоса мы помогаем тебе</Typography>
        <Typography noWrap>навести порядок!</Typography>
      </SubTitle>
      <BlockContent className={classes.members}>
        {isPublicLorderLoading ? (
          <div className={classes.loader}>
            <CircularProgress size={100} color="secondary" />
          </div>
        ) : isPublicLorderLoaded ? (
          <Grid className={classes.personsBlock} container justify="space-evenly" spacing={10}>
            {preparedTeam.map(({ member: { id, avatar, displayName } }) => (
              <Grid item key={id}>
                <Person avatar={avatar ? avatar.url : undefined} name={displayName} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <div className={classes.loader}>- - - - - - - - - - - - - - - - - -</div>
        )}
      </BlockContent>
    </Block>
  );
};

export default ScreenTeam;
