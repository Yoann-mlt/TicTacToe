// Code: checkWinner.test.tsx
import * as React from 'react';
import renderer from 'react-test-renderer';
import { checkWinner } from '../CheckWinner';



it('check horizontal winner', () => {
  const grid = [
    ['X', 'X', 'X'],
    ['', '', ''],
    ['', '', ''],
  ];
  expect(checkWinner(grid, 3)).toBe(true);
});

it('check vertical winner', () => {
  const grid = [
    ['X', 'X', 'X'],
    ['', '', ''],
    ['', '', ''],
  ];

  expect(checkWinner(grid, 3)).toBe(true);
});

it('check diagonal winner', () => {
  const grid = [
    ['X', 'X', 'X'],
    ['', '', ''],
    ['', '', ''],
  ];
  expect(checkWinner(grid, 3)).toBe(true);
});

it('check no winner', () => {
  const grid = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'O'],
  ];
  expect(checkWinner(grid, 3)).toBe(false);
});

it('check Horizontal winner 6x6x', () => {
  const gridAmateur = [
    ['X', 'X', 'X', 'X', 'X', 'X'],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
  ];
  expect(checkWinner(gridAmateur, 4)).toBe(true);
});

it('check Vertical winner 6x6', () => {
  const gridAmateur = [
    ['X', '', '', '', '', ''],
    ['X', '', '', '', '', ''],
    ['X', '', '', '', '', ''],
    ['X', '', '', '', '', ''],
    ['X', '', '', '', '', ''],
    ['X', '', '', '', '', ''],
  ];
  expect(checkWinner(gridAmateur, 4)).toBe(true);
});

it('check Diagonal winner 6x6', () => {
  const gridAmateur = [
    ['X', '', '', '', '', ''],
    ['', 'X', '', '', '', ''],
    ['', '', 'X', '', '', ''],
    ['', '', '', 'X', '', ''],
    ['', '', '', '', 'X', ''],
    ['', '', '', '', '', 'X'],
  ];
  expect(checkWinner(gridAmateur, 4)).toBe(true);
});

it('check winner 9x9', () => {
  const gridPro = [
    ['X', '', '', '', '', '', '', '', ''],
    ['', 'X', '', '', '', '', '', '', ''],
    ['', '', 'X', '', '', '', '', '', ''],
    ['', '', '', 'X', '', '', '', '', ''],
    ['', '', '', '', 'X', '', '', '', ''],
    ['', '', '', '', '', 'X', '', '', ''],
    ['', '', '', '', '', '', 'X', '', ''],
    ['', '', '', '', '', '', '', 'X', ''],
    ['', '', '', '', '', '', '', '', 'X'],
  ];
  expect(checkWinner(gridPro, 5)).toBe(true);
});

it('check winner 11x11', () => {
  const gridExpert = [
    ['X', '', '', '', '', '', '', '', '', '', ''],
    ['', 'X', '', '', '', '', '', '', '', '', ''],
    ['', '', 'X', '', '', '', '', '', '', '', ''],
    ['', '', '', 'X', '', '', '', '', '', '', ''],
    ['', '', '', '', 'X', '', '', '', '', '', ''],
    ['', '', '', '', '', 'X', '', '', '', '', ''],
    ['', '', '', '', '', '', 'X', '', '', '', ''],
    ['', '', '', '', '', '', '', 'X', '', '', ''],
    ['', '', '', '', '', '', '', '', 'X', '', ''],
    ['', '', '', '', '', '', '', '', '', 'X', ''],
    ['', '', '', '', '', '', '', '', '', '', 'X'],
  ];
  expect(checkWinner(gridExpert, 6)).toBe(true);
});