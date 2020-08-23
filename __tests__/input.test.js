'use strict';

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
  return {
    a: 'This is a note',
  };
});

const Input = require('../lib/input.js');
// const { describe } = require('yargs');

describe('parse add', () => {

  it('should parse -a with payload', () => {
    let input = new Input();
    let command = input.parse({ a: 'good payload' });
    expect(command.action).toBe('add');
    expect(command.payload).toBe('good payload');
  });

  it('should parse --add with payload', () => {
    let input = new Input();
    let command = input.parse({ a: 'good payload' });
    expect(command.action).toBe('add');
    expect(command.payload).toBe('good payload');
  });

  it('should have undefined action and payload for unknown switch', () => {
    let input = new Input();
    let command = input.parse({unknown: 'some payload'}); 
    expect(command.action).not.toBeDefined();
    expect(command.payload).not.toBeDefined();
  });

});

describe('parse category', () => {
  it('should parse -a with payload and category', () =>{
    const input = new Input();
    const command = input.parse({ a: 'good payload', category: 'good category'});
    expect(command.action).toBe('add');
    expect(command.payload).toBe('good payload');
    expect(command.category).toBe('good category');
  });

  it('should parse -a with payload and -c', () =>{
    const input = new Input();
    const command = input.parse({ a: 'good payload', c: 'good category'});
    expect(command.action).toBe('add');
    expect(command.payload).toBe('good payload');
    expect(command.category).toBe('good category');
  });

  it('should parse list and category', () =>{
    const input = new Input();
    const command = input.parse({ list: true, category: 'good category'});
    expect(command.action).toBe('list');
    expect(command.category).toBe('good category');
  });

  it('should parse add with bad payload', () =>{
    const input = new Input();
    const command = input.parse({ list:true, payload: true});
    expect(command.action).toBe('list');
    expect(command.payload).not.toBeDefined();
  });
});

describe('parse list', () => {
  it('should parse --list', () => {
    const input = new Input();
    const command = input.parse({ list: true });
    expect(command.action).toBe('list');
  });
  it('should parse -l', () => {
    const input = new Input();
    const command = input.parse({ l: true });
    expect(command.action).toBe('list');
  });
});

describe('parse delete', () => {
  it('should parse --delete', () => {
    const input = new Input();
    const command = input.parse({ delete: 'some-id' });
    expect(command.action).toBe('delete');
    expect(command.payload).toBe('some-id');
  });
  it('should parse -d', () => {
    const input = new Input();
    const command = input.parse({ d: 'some-id' });
    expect(command.action).toBe('delete');
    expect(command.payload).toBe('some-id');
  });
});