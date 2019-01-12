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

import { Action } from '@ngrx/store';
import { Application } from 'ama-sdk';
import { EntityDialogForm } from 'ama-sdk';


export interface EditApplicationPayload {
    id: string;
    form: Partial<EntityDialogForm>;
}

export const CREATE_APPLICATION_SUCCESS = 'CREATE_APPLICATION_SUCCESS';
export class CreateApplicationSuccessAction implements Action {
    readonly type = CREATE_APPLICATION_SUCCESS;
    constructor(public payload: Partial<Application>) {}
}

export const UPLOAD_APPLICATION_ATTEMPT = 'UPLOAD_APPLICATION_ATTEMPT';
export class UploadApplicationAttemptAction implements Action {
    readonly type = UPLOAD_APPLICATION_ATTEMPT;
    constructor(public file: File) {}
}

export const UPDATE_APPLICATION_ATTEMPT = 'UPDATE_APPLICATION_ATTEMPT';
export class UpdateApplicationAttemptAction implements Action {
    readonly type = UPDATE_APPLICATION_ATTEMPT;
    constructor(public payload: EditApplicationPayload) {}
}

export const UPLOAD_APPLICATION_SUCCESS = 'UPLOAD_APPLICATION_SUCCESS';
export class UploadApplicationSuccessAction implements Action {
    readonly type = UPLOAD_APPLICATION_SUCCESS;
    constructor(public payload: Partial<Application>) {}
}

export const UPDATE_APPLICATION_SUCCESS = 'UPDATE_APPLICATION_SUCCESS';
export class UpdateApplicationSuccessAction implements Action {
    readonly type = UPDATE_APPLICATION_SUCCESS;
    constructor(public payload: Partial<Application>) {}
}

export const DELETE_APPLICATION_ATTEMPT = 'DELETE_APPLICATION_ATTEMPT';
export class DeleteApplicationAttemptAction implements Action {
    readonly type = DELETE_APPLICATION_ATTEMPT;
    constructor(public payload: string) {}
}

export const DELETE_APPLICATION_SUCCESS = 'DELETE_APPLICATION_SUCCESS';
export class DeleteApplicationSuccessAction implements Action {
    readonly type = DELETE_APPLICATION_SUCCESS;
    constructor(public payload: string) {}
}

export const GET_APPLICATIONS_ATTEMPT = 'GET_APPLICATIONS_ATTEMPT';
export class GetApplicationsAttemptAction implements Action {
    readonly type = GET_APPLICATIONS_ATTEMPT;
    constructor() {}
}

export const GET_APPLICATIONS_SUCCESS = 'GET_APPLICATIONS_SUCCESS';
export class GetApplicationsSuccessAction implements Action {
    readonly type = GET_APPLICATIONS_SUCCESS;
    constructor(public payload: Partial<Application>[]) {}
}

export const SHOW_APPLICATIONS = 'SHOW_APPLICATIONS';
export class ShowApplicationsAction implements Action {
    readonly type = SHOW_APPLICATIONS;
    constructor() {}
}
