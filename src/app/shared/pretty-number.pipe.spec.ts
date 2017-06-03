import { PrettyNumberPipe } from './pretty-number.pipe';

describe('PrettyNumberPipe', () => {

  let pipe: PrettyNumberPipe = new PrettyNumberPipe();

  describe('prefixing', () => {
    it('should suffix with \'k\'', () => expect(pipe.transform(1000, 1)).toBe('1k'));
    it('should suffix with \'M\'', () => expect(pipe.transform(1000000, 1)).toBe('1M'));
    it('should suffix with \'G\'', () => expect(pipe.transform(1000000000, 1)).toBe('1G'));
    it('should suffix with \'T\'', () => expect(pipe.transform(1000000000000, 1)).toBe('1T'));
    it('should suffix with \'P\'', () => expect(pipe.transform(1000000000000000, 1)).toBe('1P'));
    it('should suffix with \'E\'', () => expect(pipe.transform(1000000000000000000, 1)).toBe('1E'));
    it('should suffix with \'Z\'', () => expect(pipe.transform(1000000000000000000000, 1)).toBe('1Z'));
    it('should suffix with \'Y\'', () => expect(pipe.transform((1000000000000000000000000), 1)).toBe('1Y'));
    it('should override suffix with \'ABC\'', () => expect(pipe.transform((1000000000000000000000000), 1, 'ABC')).toBe('1ABC'));
    it('should not override suffix when blank string is provided \'\'', () => expect(pipe.transform((1000000000000000000000000), 1, '')).toBe('1Y'));
  });

  describe('truncating', () => {
    it('should fix to 1 as default', () => expect(pipe.transform(0.313)).toBe('0.3'));
    it('should fix to 0 floating points', () => expect(pipe.transform(1423782.5234, 0)).toBe('1M'));
    it('should fix to 1 floating points', () => expect(pipe.transform(1423782.5234, 1)).toBe('1.4M'));
    it('should fix to 2 floating points', () => expect(pipe.transform(1423782.5234, 2)).toBe('1.42M'));
    it('should remove zeros then fix to provided amount', () => expect(pipe.transform(10000.2342, 2)).toBe('10k'));
  });

  describe('rounding', () => {
    it('should round up to single digit when fix amount is 0', () => expect(pipe.transform(0.55, 0)).toBe('1'));
    it('should round half-up', () => expect(pipe.transform(0.55)).toBe('0.6'));
    it('should round down', () => expect(pipe.transform(0.54)).toBe('0.5'));
    it('should round up', () => expect(pipe.transform(0.56)).toBe('0.6'));
  });

});
