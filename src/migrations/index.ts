import * as migration_20240821_103820_initial from './20240821_103820_initial';

export const migrations = [
  {
    up: migration_20240821_103820_initial.up,
    down: migration_20240821_103820_initial.down,
    name: '20240821_103820_initial'
  },
];
