import { colors } from '@/utils';

// Test suite for color codes
describe('ANSI Color Codes', () => {
  it('should have correct ANSI color codes', () => {
    expect(colors.Reset).toEqual('\x1b[0m');
    expect(colors.Bright).toEqual('\x1b[1m');
    expect(colors.Underscore).toEqual('\x1b[4m');
    expect(colors.Black).toEqual('\x1b[30m');
    expect(colors.Red).toEqual('\x1b[31m');
    expect(colors.Green).toEqual('\x1b[32m');
    expect(colors.Gold).toEqual('\x1b[33m');
    expect(colors.Blue).toEqual('\x1b[34m');
    expect(colors.Purple).toEqual('\x1b[35m');
    expect(colors.Cyan).toEqual('\x1b[36m');
    expect(colors.White).toEqual('\x1b[37m');
    expect(colors.Grey).toEqual('\x1b[1m\x1b[30m');
    expect(colors.Pink).toEqual('\x1b[1m\x1b[31m');
    expect(colors.Lime).toEqual('\x1b[1m\x1b[32m');
    expect(colors.Yellow).toEqual('\x1b[1m\x1b[33m');
    expect(colors.LBlue).toEqual('\x1b[1m\x1b[34m');
    expect(colors.Magenta).toEqual('\x1b[1m\x1b[35m');
    expect(colors.Aqua).toEqual('\x1b[1m\x1b[36m');
    expect(colors.BWhite).toEqual('\x1b[1m\x1b[37m');
  });
});
