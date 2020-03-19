import { CanActivate } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { AuthGuard } from './auth.guard';

describe('Auth Guard', () => {
  let guard: AuthGuard;
  let store: MockStore;

  const initialState = {
    user: {
      loggedIn: false
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [

      ],
      providers: [
        AuthGuard,
        provideMockStore({ initialState })
      ]
    });

    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthGuard);
  });

  it('should return false if the user state is not logged in', () => {
    const expected = cold('(a|)', { a: false });

    expect(guard.canActivate()).toBeObservable(expected);

  });

  it('should return true if the user state is logged in', () => {
    store.setState({
      user: {
        loggedIn: true
      }
    });

    const expected = cold('(a|)', { a: true });

    expect(guard.canActivate()).toBeObservable(expected);
  });

});