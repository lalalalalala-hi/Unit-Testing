import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return A if value is 90', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(90)).toEqual('A');
  });

  it('should return B if value is 80', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(80)).toEqual('B');
  });

  it('should return C if value is 70', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(70)).toEqual('C');
  });

  it('should return D if value is 60', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(60)).toEqual('D');
  });

  it('should return F if value is 50', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(50)).toEqual('F');
  });

  it('should return F if value is 40', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(40)).toEqual('F');
  });

  it('should return F if value is 30', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(30)).toEqual('F');
  });

  it('should return F if value is 20', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(20)).toEqual('F');
  });
});
