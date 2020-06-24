import { createSelector } from 'reselect';

const selectedDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectedDirectory],
  directory => directory.sections
)