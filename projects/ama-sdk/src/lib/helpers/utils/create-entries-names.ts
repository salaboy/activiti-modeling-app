 /*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
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

export const PROCESS_FILE_FORMAT = '.bpmn20.xml';
export const CONNECTOR_FILE_FORMAT = '.json';
export const FORM_FILE_FORMAT = '.json';
export const UI_FILE_FORMAT = '.json';
export const DATA_FILE_FORMAT = '.json';
export const DECISION_TABLE_FILE_FORMAT = '.dmn';
export const MODEL_NAME_CHARACTERS = 'a-zA-Z0-9_';
export const CONNECTOR_NAME_REGEX = /^[a-z0-9]{0,26}$/;

export const sanitizeString = (text: string) => {
    const pastedText = text,
        negativeRegex = new RegExp(`[^${MODEL_NAME_CHARACTERS}]`, 'g'),
        sanitizedValue = pastedText.replace(negativeRegex, '').replace(/\s/g, '');
    return sanitizedValue;
};

export const createProcessName = (name) => {
    return sanitizeString(name.replace(PROCESS_FILE_FORMAT, ''));
};

export const createDecisionTableName = (name) => {
    return sanitizeString(name.replace(DECISION_TABLE_FILE_FORMAT, ''));
};


export const changeFileName = (file: File, newName: string): File => {
    const blob = file.slice(0, file.size, file.type);
    return new File([blob], newName, { type: file.type });
};

export const formatUuid = (contentType: string, uuid: string): string => {
    return `${ contentType.toLowerCase()}-${uuid}`;
};
