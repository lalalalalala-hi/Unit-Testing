import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(10);
      const secondUser = users.find((user: any) => user.id === 2);
      expect(secondUser.name).toBe('Ervin Howell');
    });
    const mockReq = testingController.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );
    expect(mockReq.request.method).toBe('GET');
  });

  it('should fetch a user by id', () => {
    service.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe('Leanne Graham');
    });
    const mockReq = testingController.expectOne(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush({
      id: 1,
      name: 'Leanne Graham',
    });
  });

  it('should update a user', () => {
    service
      .updateUser(1, {
        username: 'Graham',
        email: 'Graham@april.biz',
      })
      .subscribe((user: any) => {
        expect(user).toBeTruthy();
        expect(user.name).toBe('Leanne Graham');
      });
    const mockReq = testingController.expectOne(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    expect(mockReq.request.method).toBe('PUT');
    let modifiedUser = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Graham',
    };
    expect(mockReq.request.body.username).toEqual(modifiedUser.username);
    mockReq.flush(modifiedUser);
  });

  it('should delete a user', () => {
    service.deleteUser(1).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe('Leanne Graham');
    });
    const mockReq = testingController.expectOne(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    expect(mockReq.request.method).toBe('DELETE');
    mockReq.flush({
      id: 1,
      name: 'Leanne Graham',
    });
  });

  it('should create a user', () => {
    service
      .createUser({
        name: 'Jackson',
        email: 'Jackson@123.com',
      })
      .subscribe((user: any) => {
        expect(user).toBeTruthy();
        expect(user.name).toBe('Jackson');
      });
    const mockReq = testingController.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );
    expect(mockReq.request.method).toBe('POST');
    mockReq.flush({
      id: 11,
      name: 'Jackson',
    });
  });

  afterEach(() => {
    testingController.verify();
  });
});
