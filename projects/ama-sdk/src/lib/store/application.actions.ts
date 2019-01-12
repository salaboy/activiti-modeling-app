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

import { EntityDialogForm } from '../helpers/common';
import { Action } from '@ngrx/store';

export const CREATE_APPLICATION_ATTEMPT = 'CREATE_APPLICATION_ATTEMPT';
export class CreateApplicationAttemptAction implements Action {
    readonly type = CREATE_APPLICATION_ATTEMPT;
    constructor(public payload: Partial<EntityDialogForm>) {}
}

export interface ModelIdentifier {
    type: string;
    id: string;
}

export const MODEL_OPENED = 'MODEL_OPENED';
export class ModelOpenedAction implements Action {
    readonly type = MODEL_OPENED;
    constructor(public model: ModelIdentifier) {}
}

export const MODEL_CLOSED = 'MODEL_CLOSED';
export class ModelClosedAction implements Action {
    readonly type = MODEL_CLOSED;
    constructor(public model: ModelIdentifier) {}
}
