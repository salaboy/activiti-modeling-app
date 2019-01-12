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

import { handlers } from './property.handlers';
import { BpmnProperty } from 'ama-sdk';
import { getDiagramElementMock, getModelingMock } from '../bpmn-js.mock';
import BpmnModdle from 'bpmn-moddle';

describe('documentationHandler', () => {
    const property = BpmnProperty.documentation;

    let handler, mockElement, modeling;

    beforeEach(() => {
        const moddle = new BpmnModdle();
        handler = handlers[property];
        mockElement = getDiagramElementMock({
            [property]: [moddle.create('bpmn:Documentation', { text: 'documentation-lorem-ipsum' })]
        });

        modeling = getModelingMock();
    });

    it('should be defined', () => {
        expect(handler).not.toBe(undefined, `Bpmn property: ${property}, should have a handler defined.`);
    });

    describe('get', () => {
        it('should return the documentation from the element', () => {
            const get = handler.get;

            const id = get(mockElement);

            expect(id).toBe('documentation-lorem-ipsum');
        });
    });

    describe('set', () => {
        it('should set the new documentation value', () => {
            const set = handler.set,
                get = handler.get,
                modifiedValue = 'modified-documentation-lorem-ipsum';

            set(modeling, mockElement, modifiedValue);
            const id = get(mockElement);

            expect(id).toBe('modified-documentation-lorem-ipsum');
        });
    });
});
