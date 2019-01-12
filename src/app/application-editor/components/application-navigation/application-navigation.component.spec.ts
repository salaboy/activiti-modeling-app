 /*!
 * @license
 * Copyright 2018 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationNavigationComponent } from './application-navigation.component';
import { MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService, TranslationMock } from '@alfresco/adf-core';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { selectMenuOpened } from '../../../store/selectors/app.selectors';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { OpenEntityDialogAction, OPEN_ENTITY_DIALOG } from '../../../store/actions/dialog';
import { AmaState, MODEL_CREATORS } from 'ama-sdk';

describe('ApplicationNavigationComponent', () => {
    let fixture: ComponentFixture<ApplicationNavigationComponent>;
    let store: Store<AmaState>;
    let element: DebugElement;

    describe('For tests when extended is false', () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [
                    TranslateModule.forRoot(),
                    NoopAnimationsModule,
                    MatIconModule,
                    MatMenuModule,
                    MatToolbarModule
                ],
                providers: [
                    { provide: TranslationService, useClass: TranslationMock },
                    {
                        provide: MODEL_CREATORS, multi: true, useValue: {
                            icon: 'device_hub',
                            name: 'Processes',
                            order: 1,
                            dialog: {}
                        }
                    },
                    {
                        provide: Store,
                        useValue: {
                            select: jest.fn(selectMenuOpened).mockReturnValue(of()), dispatch: jest.fn()
                        }
                    }
            ],
                schemas: [NO_ERRORS_SCHEMA],
                declarations: [ApplicationNavigationComponent]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ApplicationNavigationComponent);
            element = fixture.debugElement;
            fixture.detectChanges();
            store = TestBed.get(Store);
        });

        it('click on menu button should open a entity dialog', () => {
            spyOn(store, 'dispatch');
            const button = element.query(By.css('button'));
            button.triggerEventHandler('click', {});

            const action: OpenEntityDialogAction =  store.dispatch.calls.argsFor(0)[0];

            expect(store.dispatch).toHaveBeenCalled();
            expect(action.type).toBe(OPEN_ENTITY_DIALOG);
        });

        it('if expanded is false, should load the  collapsedApplicationTree template', () => {
            const icons = element.query(By.css('ama-application-tree-icons'));
            const appTree = element.query(By.css('ama-application-tree'));
            expect(icons === null).toBeFalsy();
            expect(appTree === null).toBeTruthy();
        });
    });

    describe('For tests when expanded is true', () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TranslateModule.forRoot(), NoopAnimationsModule, MatIconModule, MatMenuModule, MatToolbarModule],
                providers: [
                    { provide: TranslationService, useClass: TranslationMock },
                    {
                        provide: MODEL_CREATORS,
                        multi: true,
                        useValue: {
                            icon: 'device_hub',
                            name: 'Processes',
                            order: 1,
                            dialog: {}
                        }
                    },
                    {
                        provide: Store,
                        useValue: { select: jest.fn(selectMenuOpened).mockReturnValue(of(true)), dispatch: jest.fn()}
                    }
            ],
                schemas: [NO_ERRORS_SCHEMA],
                declarations: [ApplicationNavigationComponent]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ApplicationNavigationComponent);
            element = fixture.debugElement;
            fixture.detectChanges();
            store = TestBed.get(Store);

        });

        it('if expanded is false, should load the  collapsedApplicationTree template', () => {
            const icons = element.query(By.css('ama-application-tree-icons'));
            const appTree = element.query(By.css('ama-application-tree'));
            expect(icons === null).toBeTruthy();
            expect(appTree === null).toBeFalsy();
        });
    });
});
