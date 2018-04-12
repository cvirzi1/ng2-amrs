import { TestBed, inject } from '@angular/core/testing';
import { OfflineStorageService } from './offline-storage.service';
import { Patient } from '../patient-dashboard/services/patients';
import { PATIENTS } from '../patient-dashboard/services/patient.mock';

describe('OfflineStorageService', () => {

  let service = new OfflineStorageService();
  let patient = {
    fullName: 'Lawrence Clowers Kay',
    gender: 'F',
    dob: 1212345123,
    age: 34,
    ampathMrsUId: 163238471 - 3,
    amrsMrn: 456789,
    cCC: 23445,
    kenyaNationalId: 16150 - 2013
  };

  beforeEach(() => {
    // service.clear();
    TestBed.configureTestingModule({
      providers: [ { provide: OfflineStorageService, useClass: OfflineStorageService } ]
    });
  });

  it('Should instantiate a PouchDB database',
    inject([OfflineStorageService], () => {
    expect(service).not.toBeNull();
    })
  );

  /*it('Should be able to add a patient to the PouchDB database',
    inject([OfflineStorageService], () => {
      expect(service.addDoc(patient)).not.toThrowError();
    })
  );

  it('Should CORRECTLY add a patient to the PouchDB database',
    inject([OfflineStorageService], () =>{
      service.addDoc(patient);
      let target = service.getDoc(patient).id;
      expect();
    })
  );

  it('Should be able to get an item from the PouchDB database',
    inject([OfflineStorageService], () => {
      service.addDoc(patient);
      expect(service.getDoc(patient.fullName).toBe(patient));
    })
  );

  it('Should be able to "delete" an item from the PouchDB database',
    inject([OfflineStorageService], () => {
      expect(service.deleteDoc(patient).not.toThrowError());
    })
  );

  afterAll(() => {
    OfflineStorageService.delete(service);
  });*/
});
