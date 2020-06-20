import { fakeAsync, tick } from '@angular/core/testing';
import { timer, interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

describe('tickWithTimerAndInterval', () => {
  it('with timer', fakeAsync(() => {
    const callback = jasmine.createSpy('callback');

    timer(0, 0).pipe(skip(1), take(1)).subscribe(callback);

    expect(callback).not.toHaveBeenCalled();

    tick(undefined, { processNewMacroTasksSynchronously: false });

    expect(callback).not.toHaveBeenCalled();

    tick(undefined, { processNewMacroTasksSynchronously: false });

    expect(callback).toHaveBeenCalledTimes(1);
  }));

  it('with inverval', fakeAsync(() => {
    const callback = jasmine.createSpy('callback');

    interval(0).pipe(skip(1), take(1)).subscribe(callback);

    expect(callback).not.toHaveBeenCalled();

    tick(undefined, { processNewMacroTasksSynchronously: false });

    expect(callback).not.toHaveBeenCalled();

    tick(undefined, { processNewMacroTasksSynchronously: false });

    expect(callback).toHaveBeenCalledTimes(1);
  }));
});
